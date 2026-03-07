import axios from 'axios';
import Swal from 'sweetalert2';

// ====== DOM ======
const backdropEl = document.querySelector('[data-modal="order"]');
const formEl = backdropEl?.querySelector('.order-form');
const closeBtnEl = backdropEl?.querySelector('.js-order-close');

// якщо кнопок відкриття ще немає
const openBtns = document.querySelectorAll('[data-order-open]');

// ====== STATE ======
let currentAnimalId = null;

// id тварини
export function setOrderAnimalId(id) {
  currentAnimalId = id;
}

// ====== OPEN/CLOSE ======
function openOrderModal() {
  if (!backdropEl) return;

  backdropEl.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', onEscClose);
  backdropEl.addEventListener('click', onBackdropClick);
}

function closeOrderModal() {
  if (!backdropEl) return;

  backdropEl.classList.add('is-hidden');
  document.body.style.overflow = '';

  window.removeEventListener('keydown', onEscClose);
  backdropEl.removeEventListener('click', onBackdropClick);
}

function onEscClose(e) {
  if (e.key === 'Escape') {
    closeOrderModal();
  }
}

function onBackdropClick(e) {
  if (e.target === backdropEl) {
    closeOrderModal();
  }
}

// ====== EVENTS ======
openBtns.forEach(btn => btn.addEventListener('click', openOrderModal));
closeBtnEl?.addEventListener('click', closeOrderModal);
formEl?.addEventListener('submit', handleSubmit);

// ====== VALIDATION ======
function setFieldError(fieldEl, message) {
  const fieldWrap = fieldEl.closest('.form-field');
  const errorTextEl = fieldWrap?.querySelector('.error-text');

  fieldEl.classList.add('error');

  if (errorTextEl) {
    errorTextEl.textContent = message;
    errorTextEl.classList.add('visible');
  }
}

function clearFieldError(fieldEl) {
  const fieldWrap = fieldEl.closest('.form-field');
  const errorTextEl = fieldWrap?.querySelector('.error-text');

  fieldEl.classList.remove('error');

  if (errorTextEl) {
    errorTextEl.textContent = '';
    errorTextEl.classList.remove('visible');
  }
}

function validateRequired(fieldEl, message) {
  if (!fieldEl.value.trim()) {
    setFieldError(fieldEl, message);
    return false;
  }

  clearFieldError(fieldEl);
  return true;
}

// помилка зникає, коли користувач починає вводити
['input', 'change'].forEach(eventName => {
  formEl?.addEventListener(eventName, e => {
    const fieldEl = e.target;

    if (
      fieldEl.matches('input, textarea') &&
      fieldEl.classList.contains('error')
    ) {
      if (fieldEl.value.trim()) {
        clearFieldError(fieldEl);
      }
    }
  });
});

// ====== SUBMIT ======
function validatePhone(fieldEl) {
  const phoneValue = fieldEl.value.replace(/\D/g, '');

  fieldEl.value = phoneValue;

  const phonePattern = /^380\d{9}$/;

  if (!phonePattern.test(phoneValue)) {
    setFieldError(
      fieldEl,
      'Номер телефону має містити 12 цифр і починатися з 380'
    );
    return false;
  }

  clearFieldError(fieldEl);
  return true;
}
function validateName(fieldEl) {
  const nameValue = fieldEl.value.trim();

  const namePattern = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{3,}$/;

  if (!namePattern.test(nameValue)) {
    setFieldError(fieldEl, "Ім'я має містити мінімум 3 літери");
    return false;
  }

  clearFieldError(fieldEl);
  return true;
}
async function handleSubmit(e) {
  e.preventDefault();

  const { name, phone, comment } = e.target.elements;

  // перевірка поля форми
  const isNameFilled = validateRequired(name, "Будь ласка введіть ім'я");
  const isNameValid = isNameFilled ? validateName(name) : false;

  const isPhoneFilled = validateRequired(
    phone,
    'Будь ласка введіть номер телефону'
  );

  const isPhoneValid = isPhoneFilled ? validatePhone(phone) : false;

  if (!isNameValid || !isPhoneValid) {
    return;
  }
  // перевірка id тварини
  if (!currentAnimalId) {
    Swal.fire({
      icon: 'warning',
      title: 'Оберіть тваринку',
      text: 'Спочатку відкрийте картку тварини та натисніть “Взяти друга”.',
    });
    return;
  }

  //  payload
  const payload = {
    name: name.value.trim(),
    phone: phone.value.replace(/\D/g, ''),
    animalId: currentAnimalId,
  };

  const commentValue = comment.value.trim();
  if (commentValue) {
    payload.comment = commentValue;
  }

  // 4. Запит
  try {
    const { data } = await axios.post(
      'https://paw-hut.b.goit.study/api/orders',
      payload
    );

    Swal.fire({
      icon: 'success',
      title: 'Заявку відправлено!',
      text: "Ми зв'яжемося з вами найближчим часом.",
    });

    e.target.reset();
    closeOrderModal();
    currentAnimalId = null;

    console.log('order response:', data);
  } catch (error) {
    const apiMessage = error.response?.data?.message;

    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: apiMessage || 'Не вдалося відправити заявку. Спробуйте ще раз.',
    });

    console.log('status:', error.response?.status);
    console.log('data:', error.response?.data);
    console.log('message:', error.message);
  }
}
