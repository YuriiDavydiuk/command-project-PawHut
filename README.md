# 🐾 Хатинка Лапок

> **Кожне життя має значення. Знайди свого вірного друга.**

Веб-додаток для притулку тварин, який допомагає знайти домашніх улюбленців та полегшує процес усиновлення. Користувачі можуть переглядати анкети тварин, фільтрувати їх за категоріями та залишати заявки на знайомство.

---

## 🌐 Live Demo

🔗 [https://yuriidavydiuk.github.io/command-project-PawHut/](https://yuriidavydiuk.github.io/command-project-PawHut/)

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
| Сповіщення | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF6B6B?style=flat) &nbsp; ![iziToast](https://img.shields.io/badge/iziToast-009688?style=flat) &nbsp; ![basicLightbox](https://img.shields.io/badge/basicLightbox-333333?style=flat) |
| Рейтинг | ![raty-js](https://img.shields.io/badge/raty--js-FFD700?style=flat) &nbsp; ![CSS Star Rating](https://img.shields.io/badge/CSS_Star_Rating-FFD700?style=flat) |
| Акордеон | ![accordion-js](https://img.shields.io/badge/accordion--js-4CAF50?style=flat) |
| Шрифти | IBM Plex Sans · Open Sans (Google Fonts) |

---

## 📦 Бібліотеки

| Бібліотека | Призначення |
|------------|-------------|
| **Swiper.js** | Слайдери в секціях «Чому Хатинка Лапок» та «Щасливі історії» — стрілки, пагінація, свайп |
| **accordion-js** | Акордеон у секції FAQ — розгортання/згортання відповідей |
| **raty-js** | Відображення рейтингу зірочками у відгуках (підтримка дробових значень) |
| **CSS Star Rating** | Альтернативна реалізація зірочкового рейтингу через CSS-класи |
| **SweetAlert2** | Пуш-сповіщення після відправки форми заявки (успіх / помилка) |
| **iziToast** | Toast-сповіщення для обробки помилок запитів до бекенду |
| **basicLightbox** | Лайтбокс для відображення зображень або модальних вікон |

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
│   │   ├── hero/                  # Зображення для секції Hero
│   │   └── icons.svg              # Спрайт SVG-іконок
│   ├── js/
│   │   ├── accordion.js           # Ініціалізація акордеону для секції FAQ
│   │   ├── api.js                 # Всі запити до бекенду (fetchAnimals, fetchCategories, fetchFeedbacks, postOrder)
│   │   ├── burger.js              # Відкриття/закриття бургер-меню
│   │   ├── constans.js            # Константи проєкту
│   │   ├── gallery-slider.js      # Ініціалізація Swiper для секції «Про нас»
│   │   ├── helpers.js             # Допоміжні утиліти
│   │   ├── modal.js               # Відкриття/закриття модальних вікон (тварина + заявка)
│   │   ├── product.js             # Логіка секції тварин (фільтрація, пагінація)
│   │   ├── refs.js                # Посилання на DOM-елементи
│   │   ├── render.js              # Функції рендеру HTML-карток тварин та відгуків
│   │   ├── slider.js              # Ініціалізація Swiper для секції «Щасливі історії»
│   │   └── state.js               # Управління станом застосунку
│   └── partials/
│       ├── adopt-modal.html       # Розмітка модалки заявки
│       ├── faq.html               # Розмітка секції FAQ
│       ├── footer.html            # Розмітка футера
│       ├── gallery.html           # Розмітка секції «Чому Хатинка Лапок»
│       ├── header.html            # Розмітка хедера
│       ├── hero.html              # Розмітка секції Hero
│       ├── mobile-menu.html       # Розмітка бургер-меню
│       ├── pet-modal.html         # Розмітка модалки тварини
│       ├── product.html           # Розмітка секції тварин
│       └── testimonial.html       # Розмітка секції відгуків
├── public/
│   ├── company-logo.svg           # Логотип компанії
│   └── index.html                 # Точка входу
├── main.js                        # Головний JS-файл (імпорти всіх модулів)
├── vite.config.js                 # Конфігурація Vite
├── package.json
├── .prettierrc.json
├── .editorconfig
├── .gitignore
├── README.md                      # Документація (UA)
└── README.en.md                   # Документація (EN)
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
| Amina | Developer | [@Amiinaa08](https://github.com/Amiinaa08) |
| Alina | Developer | [@alrozental](https://github.com/alrozental) |
| — | Developer | [@amlnkk](https://github.com/amlnkk) |
| Bohdan Lysai | Developer | [@BogdanGoIT](https://github.com/BogdanGoIT) |
| Iryna | Developer | [@IrynaShashkevych28](https://github.com/IrynaShashkevych28) |
| Karina Lubenskaya | Developer | [@Karina-Ll](https://github.com/Karina-Ll) |
| Olga Goshko | Developer | [@OlgaGoshko](https://github.com/OlgaGoshko) |
| Valeriia Vovk | Developer | [@vovklera](https://github.com/vovklera) |
| Sofia Nahorna | Scrum Master | [@S60862580](https://github.com/S60862580) |
| Yurii Davydiuk | Team Lead | [@YuriiDavydiuk](https://github.com/YuriiDavydiuk) |

---

## 📄 Ліцензія

MIT © 2026 Хатинка Лапок
