# 🐾 Paw Hut

> **Every life matters. Find your loyal friend.**

A web application for an animal shelter that helps people find pets and simplifies the adoption process. Users can browse animal profiles, filter by category, and submit adoption requests.

---

## 🌐 Live Demo

🔗 [https://yuriidavydiuk.github.io/command-project-PawHut/](#) *(add link after deploy)*

---

## 📸 Preview

![Preview](#) *(add project screenshot)*

---

## ✨ Features

- 🐶 **Animal Catalog** — animal cards with category filtering and pagination
- 🔍 **Detailed Info** — modal window with full animal description
- 📋 **Adoption Form** — submit a request to meet an animal
- 💬 **Happy Stories** — reviews from people who found their pet (slider)
- ❓ **FAQ** — answers to frequently asked questions (accordion)
- 📖 **About Us** — information about the shelter (slider)
- 📱 **Responsive Layout** — support for mobile (from 375px), tablet (768px) and desktop (1440px)
- 🍔 **Burger Menu** — for mobile devices and tablet

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Markup | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) |
| Styling | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| Logic | ![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black) |
| Bundler | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| Sliders | ![Swiper](https://img.shields.io/badge/Swiper.js-6332F6?style=flat&logo=swiper&logoColor=white) |
| Notifications | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF6B6B?style=flat) |
| Fonts | IBM Plex Sans · Open Sans (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/command-project-PawHut.git

# 2. Navigate to the project folder
cd command-project-PawHut

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The project will open at `http://localhost:5173`

### Production Build

```bash
npm run build
```

---

## 📁 Project Structure

```
command-project-PawHut/
├── src/
│   ├── css/
│   │   ├── reset.css              # Browser style reset
│   │   ├── base.css               # Base styles and variables
│   │   ├── container.css          # Container and grid
│   │   ├── animations.css         # CSS animations
│   │   ├── styles.css             # Main CSS file (imports)
│   │   ├── header.css             # Header
│   │   ├── mobile-menu.css        # Burger menu
│   │   ├── hero.css               # Hero section
│   │   ├── product.css            # Animal catalog section
│   │   ├── pet-modal.css          # Animal details modal
│   │   ├── adopt-modal.css        # Adoption form modal
│   │   ├── gallery.css            # About Us section
│   │   ├── faq.css                # FAQ section
│   │   ├── testimonial.css        # Happy Stories section
│   │   └── footer.css             # Footer
│   ├── img/
│   │   ├── gallery/               # Images for About Us slider
│   │   └── hero/                  # Images for Hero section
│   └── partials/
│       ├── header.html            # Header markup
│       ├── mobile-menu.html       # Burger menu markup
│       ├── hero.html              # Hero section markup
│       ├── product.html           # Animal catalog markup
│       ├── pet-modal.html         # Animal details modal markup
│       ├── adopt-modal.html       # Adoption form modal markup
│       ├── gallery.html           # About Us section markup
│       ├── faq.html               # FAQ section markup
│       ├── testimonial.html       # Happy Stories section markup
│       └── footer.html            # Footer markup
├── public/
│   └── index.html                 # Entry point
├── main.js                        # Main JS file
├── vite.config.js                 # Vite configuration
├── package.json
├── .prettierrc.json
├── .editorconfig
├── .gitignore
└── README.md
```

---

## 🔌 API

Backend: [https://paw-hut.b.goit.study/api-docs/](https://paw-hut.b.goit.study/api-docs/)

| Route | Method | Description |
|-------|--------|-------------|
| `/api/categories` | GET | Get all animal categories |
| `/api/animals` | GET | Get animal list |
| `/feedbacks` | GET | Get reviews |
| `/orders` | POST | Submit an adoption request |

---

## 📐 Breakpoints

| Device | Width |
|--------|-------|
| 📱 Mobile | from 375px |
| 📟 Tablet | from 768px |
| 🖥 Desktop | from 1440px |

---

## 👥 Team

| Name | Role | GitHub |
|------|------|--------|
| *name* | Developer | [@username](#) |

---

## 📄 License

MIT © 2026 Paw Hut
