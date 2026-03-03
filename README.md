# 🐾 Хатинка Лапок

> **Кожне життя має значення. Знайди свого вірного друга.**

Веб-додаток для притулку тварин, який допомагає знайти домашніх улюбленців та полегшує процес усиновлення. Користувачі можуть переглядати анкети тварин, фільтрувати їх за категоріями та залишати заявки на знайомство.

---

## 🌐 Live Demo

🔗 [Переглянути проєкт](#) *(додай посилання після деплою)*

---

## 📸 Preview

![Preview](#) *(додай скріншот проєкту)*

---

## ✨ Функціонал

- 🐶 **Каталог тварин** — картки тварин з фільтрацією за категоріями та завантаженням додаткових порцій
- 🔍 **Детальна інформація** — модальне вікно з повним описом тварини
- 📋 **Форма заявки** — можливість залишити заявку на знайомство з твариною
- 💬 **Щасливі історії** — відгуки людей, які вже знайшли свого друга (слайдер)
- ❓ **FAQ** — відповіді на поширені питання (акордеон)
- 📖 **Про нас** — інформація про притулок (слайдер)
- 📱 **Адаптивна верстка** — підтримка мобільних (від 375px), планшетів (768px) та десктопів (1440px)
- 🍔 **Бургер-меню** — для мобільних пристроїв та планшету

---

## 🛠 Технології

| Категорія | Технологія |
|-----------|-----------|
| Розмітка | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) |
| Стилізація | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| Логіка | ![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black) |
| Збірник | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| Слайдери | ![Swiper](https://img.shields.io/badge/Swiper.js-6332F6?style=flat&logo=swiper&logoColor=white) |
| Сповіщення | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF6B6B?style=flat) |
| Шрифти | IBM Plex Sans · Open Sans (Google Fonts) |

---

## 🚀 Запуск проєкту

### Попередні вимоги

- [Node.js](https://nodejs.org/) v18+
- npm

### Інструкція

```bash
# 1. Клонуй репозиторій
git clone https://github.com/your-username/command-project-PawHut.git

# 2. Перейди до папки проєкту
cd command-project-PawHut

# 3. Встанови залежності
npm install

# 4. Запусти dev-сервер
npm run dev
```

Проєкт відкриється за адресою `http://localhost:5173`

### Збірка для продакшну

```bash
npm run build
```

---

## 📁 Структура проєкту

```
command-project-PawHut/
├── src/
│   ├── css/
│   │   ├── reset.css              # Скидання стилів браузера
│   │   ├── base.css               # Базові стилі та змінні
│   │   ├── container.css          # Контейнер та сітка
│   │   ├── animations.css         # CSS-анімації
│   │   ├── styles.css             # Головний CSS-файл (імпорти)
│   │   ├── header.css             # Хедер
│   │   ├── mobile-menu.css        # Бургер-меню
│   │   ├── hero.css               # Секція Hero
│   │   ├── product.css            # Секція «Наші хвостики»
│   │   ├── pet-modal.css          # Модальне вікно тварини
│   │   ├── adopt-modal.css        # Модальне вікно заявки
│   │   ├── gallery.css            # Секція «Чому Хатинка Лапок»
│   │   ├── faq.css                # Секція FAQ
│   │   ├── testimonial.css        # Секція «Щасливі історії»
│   │   └── footer.css             # Футер
│   ├── img/
│   │   ├── gallery/               # Зображення для слайдера «Про нас»
│   │   └── hero/                  # Зображення для секції Hero
│   └── partials/
│       ├── header.html            # Розмітка хедера
│       ├── mobile-menu.html       # Розмітка бургер-меню
│       ├── hero.html              # Розмітка секції Hero
│       ├── product.html           # Розмітка секції тварин
│       ├── pet-modal.html         # Розмітка модалки тварини
│       ├── adopt-modal.html       # Розмітка модалки заявки
│       ├── gallery.html           # Розмітка секції «Чому Хатинка Лапок»
│       ├── faq.html               # Розмітка секції FAQ
│       ├── testimonial.html       # Розмітка секції відгуків
│       └── footer.html            # Розмітка футера
├── public/
│   └── index.html                 # Точка входу
├── main.js                        # Головний JS-файл
├── vite.config.js                 # Конфігурація Vite
├── package.json
├── .prettierrc.json
├── .editorconfig
├── .gitignore
└── README.md
```

---

## 🔌 API

Бекенд: [https://paw-hut.b.goit.study/api-docs/](https://paw-hut.b.goit.study/api-docs/)

| Маршрут | Метод | Опис |
|---------|-------|------|
| `/api/categories` | GET | Отримати всі категорії тварин |
| `/api/animals` | GET | Отримати список тварин |
| `/feedbacks` | GET | Отримати відгуки |
| `/orders` | POST | Залишити заявку на знайомство |

---

## 📐 Брейкпоінти

| Пристрій | Ширина |
|----------|--------|
| 📱 Mobile | від 375px |
| 📟 Tablet | від 768px |
| 🖥 Desktop | від 1440px |

---

## 👥 Команда

| Ім'я | Роль | GitHub |
|------|------|--------|
| *ім'я* | Developer | [@username](#) |

---

## 📄 Ліцензія

MIT © 2026 Хатинка Лапок
