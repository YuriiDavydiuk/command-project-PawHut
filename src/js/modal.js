import Swal from 'sweetalert2';

import { submitOrder } from './api';
import { renderDetailsHTML } from './render';
import { refs } from './refs';
import { getLoadedAnimals } from './product';

let currentAnimalId = null;

// ====== REFS для статичної форми ======
const orderBackdrop = document.querySelector('[data-modal="order"]');
const orderForm = orderBackdrop?.querySelector('.js-order-form');
const orderCloseBtn = orderBackdrop?.querySelector('.js-order-close');
const loader = document.querySelector('[data-loader="order"]');

// ====== СЛУХАЧІ ПОДІЙ ======
document.addEventListener('click', handleDocumentClick);
orderBackdrop?.addEventListener('click', handleBackdropClick);
orderCloseBtn?.addEventListener('click', closeOrderModal);
document.addEventListener('keydown', handleKeydown);
orderForm?.addEventListener('submit', handleOrderSubmit);
orderForm?.addEventListener('input', handleFormInput);

// Делегування кліків для динамічного контенту модалки
function handleDocumentClick(event) {
  const target = event.target;

  // Відкриває модалку з деталями тварини
  if (target.closest('[data-modal-open="details"]')) {
    openDetailsModal(target.closest('[data-modal-open="details"]'));
    return;
  }

  // Переходить від деталей до форми замовлення
  if (target.closest('[data-modal-next="order"]')) {
    closeDetailsModal(true);
    openOrderModal();
    return;
  }

  // Закриває модалку деталей по кнопці × або кліку на фон
  if (
    target.closest('[data-modal-close]') ||
    target.classList.contains('backdrop')
  ) {
    closeDetailsModal();
    return;
  }
}

// Закриває форму замовлення при кліку на фон
function handleBackdropClick(e) {
  if (e.target === orderBackdrop) closeOrderModal();
}

// Закриває будь-яку відкриту модалку при натисканні Escape
function handleKeydown(e) {
  if (e.key !== 'Escape') return;
  if (refs.mwContainer.innerHTML) closeDetailsModal();
  if (!orderBackdrop?.classList.contains('is-hidden')) closeOrderModal();
}

// Знімає помилку з поля коли користувач починає вводити коректні дані
function handleFormInput(e) {
  const field = e.target;
  if (field.matches('input, textarea') && field.classList.contains('error')) {
    if (field.value.trim()) clearFieldError(field);
  }
}

// Рендерить модалку з деталями тварини і блокує скрол сторінки
function openDetailsModal(btn) {
  const petId = btn.dataset.id;
  const pet = getLoadedAnimals().find(a => a._id === petId);
  if (!pet) return;

  currentAnimalId = petId;
  refs.mwContainer.innerHTML = renderDetailsHTML(pet);
  document.body.style.overflow = 'hidden';
}

// Анімує закриття модалки і очищає контейнер
function closeDetailsModal(keepOverflow = false) {
  const modal = refs.mwContainer.querySelector('.animal-modal');
  const backdrop = refs.mwContainer.querySelector('.backdrop');

  modal?.classList.add('exit-up');
  if (backdrop) backdrop.style.opacity = '0';

  setTimeout(() => {
    refs.mwContainer.innerHTML = '';
    if (!keepOverflow) document.body.style.overflow = '';
  }, 400);
}

// Показує форму замовлення і блокує скрол сторінки
function openOrderModal() {
  orderBackdrop?.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

// Ховає форму замовлення, скидає поля і знімає блокування скролу
function closeOrderModal() {
  orderBackdrop?.classList.add('is-hidden');
  document.body.style.overflow = '';
  orderForm?.reset();
  clearAllErrors();
}

// Відправляє форму замовлення на сервер з валідацією
async function handleOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const { name, phone, comment } = form.elements;

  const isNameValid = validateName(name);
  const isPhoneValid = validatePhone(phone);
  if (!isNameValid || !isPhoneValid) return;

  const payload = {
    animalId: currentAnimalId,
    name: name.value.trim(),
    phone: phone.value.replace(/\D/g, ''),
  };
  if (comment?.value.trim()) payload.comment = comment.value.trim();

  const submitBtn = form.querySelector('[type="submit"]');
  setSubmitLoading(submitBtn, true);

  try {
    const response = await submitOrder(payload);
    console.log('Order response:', response);
    setSubmitLoading(submitBtn, false);

    await Swal.fire({
      icon: 'success',
      title: 'Заявку відправлено!',
      text: "Ми зв'яжемося з вами найближчим часом.",
    });

    closeOrderModal();
    currentAnimalId = null;
  } catch (error) {
    setSubmitLoading(submitBtn, false);
    await Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: error.response?.data?.message || 'Не вдалося відправити заявку.',
    });
  }
}

// Перевіряє ім'я — чи не порожнє і чи містить мінімум 3 літери
function validateName(fieldEl) {
  if (!fieldEl.value.trim()) {
    setFieldError(fieldEl, "Будь ласка, введіть ім'я");
    return false;
  }
  if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{3,}$/.test(fieldEl.value.trim())) {
    setFieldError(fieldEl, "Ім'я має містити мінімум 3 літери");
    return false;
  }
  clearFieldError(fieldEl);
  return true;
}

// Перевіряє телефон — має починатись з 380 і містити 12 цифр
function validatePhone(fieldEl) {
  const digits = fieldEl.value.replace(/\D/g, '');
  fieldEl.value = digits;

  if (!/^380\d{9}$/.test(digits)) {
    setFieldError(fieldEl, 'Номер має містити 12 цифр і починатися з 380');
    return false;
  }
  clearFieldError(fieldEl);
  return true;
}

// Додає клас помилки і показує текст помилки під полем
function setFieldError(fieldEl, message) {
  const wrap = fieldEl.closest('.form-field');
  const errorEl = wrap?.querySelector('.error-text');
  fieldEl.classList.add('error');
  if (errorEl) errorEl.textContent = message;
}

// Прибирає клас помилки і очищає текст помилки під полем
function clearFieldError(fieldEl) {
  const wrap = fieldEl.closest('.form-field');
  const errorEl = wrap?.querySelector('.error-text');
  fieldEl.classList.remove('error');
  if (errorEl) errorEl.textContent = '';
}

// Очищає всі помилки форми одночасно
function clearAllErrors() {
  orderForm?.querySelectorAll('.error').forEach(clearFieldError);
}

// Вмикає або вимикає стан завантаження кнопки сабміту
function setSubmitLoading(btn, isLoading) {
  btn.disabled = isLoading;
  btn.textContent = isLoading ? 'Відправляємо...' : 'Надіслати';
  loader?.classList.toggle('is-hidden', !isLoading);
}
