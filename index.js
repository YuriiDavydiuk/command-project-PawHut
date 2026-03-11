import{a as y,i as C,S as H,N,P as j,R as V,s as z,b as G,c as F,d as B}from"./assets/vendor-D94kS5yE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const r={tailsFilters:document.querySelector(".tails-filters"),tailsProducts:document.querySelector(".tails-products"),tailsBtn:document.querySelector(".tails-btn"),mwContainer:document.getElementById("mw"),loader:document.querySelector(".loader")},f={openModalBtn:document.querySelector("[data-burger-open]"),closeModalBtn:document.querySelector("[data-burger-close]"),modal:document.querySelector("[data-burger]")};K();function K(){f.openModalBtn.addEventListener("click",t),f.closeModalBtn.addEventListener("click",s),document.addEventListener("keydown",i),f.modal.querySelectorAll('a[href*="#"]').forEach(n=>{n.addEventListener("click",s)});function t(){f.modal.classList.add("is-open"),document.body.style.overflow="hidden"}function s(){f.modal.classList.remove("is-open"),document.body.style.overflow=""}function i(n){n.key==="Escape"&&f.modal.classList.contains("is-open")&&s()}}const U="https://paw-hut.b.goit.study/api/",w={categories:"categories",animals:"animals",feedbacks:"feedbacks",orders:"orders"};y.defaults.baseURL=U;const W=async()=>{const{data:e}=await y(w.categories);return e},_=async({page:e=1,limit:t=9,categoryId:s=null}={})=>{const i={page:e,limit:t};s&&(i.categoryId=s);const{data:n}=await y(w.animals,{params:i});return n},J=async e=>{const{data:t}=await y.post(w.orders,e);return t},Z=async({page:e=1,limit:t=12}={})=>{const{data:s}=await y(w.feedbacks,{params:{page:e,limit:t}});return s.feedbacks??[]},l={section:document.querySelector(".happy-stories"),sliderEl:document.querySelector(".testimonials-slider-wrapper"),loaderEl:document.querySelector(".testimonials-loader"),listEl:document.querySelector(".testimonials-list"),paginationEl:document.querySelector(".testimonials-pagination"),prevBtn:document.querySelector(".prev-btn"),nextBtn:document.querySelector(".next-btn")};let S=null;l.section&&l.sliderEl&&l.listEl&&Q();async function Q(){k(!0);try{const e=await Z({page:1,limit:12}),t=te(e);ee(t),se(),X()}catch{C.error({title:"Помилка",message:"Не вдалося завантажити відгуки.",position:"topRight"})}finally{k(!1)}}function X(){S&&S.destroy(!0,!0),S=new H(l.sliderEl,{modules:[N,j],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,speed:450,watchOverflow:!0,pagination:{el:l.paginationEl,clickable:!0},navigation:{prevEl:l.prevBtn,nextEl:l.nextBtn,disabledClass:"is-disabled"},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32},1440:{slidesPerView:2,slidesPerGroup:2,spaceBetween:64}}})}function Y({author:e,description:t,rate:s}){return`
    <li class="testimonial-card swiper-slide">
      <div class="testimonial-rating" data-rate="${Number(s)||0}"></div>
      <p class="testimonial-text">${M(t??"")}</p>
      <div class="testimonial-author-wrapper">
        <h3 class="testimonial-author">${M(e??"Анонім")}</h3>
      </div>
    </li>
  `}function ee(e){l.listEl.innerHTML=e.map(Y).join("")}function te(e){if(!Array.isArray(e)||e.length===0)return[];const t=[...e];return t.length%2!==0&&t.push(t[0]),t}function M(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function se(){l.listEl.querySelectorAll(".testimonial-rating").forEach(t=>{const s=Number(t.dataset.rate)||0;new V(t,{score:s,number:5,half:!0,halfShow:!0,space:!1,readOnly:!0,starOn:F,starOff:G,starHalf:z,path:"",targetKeep:!0,hints:["","","","",""]}).init()})}function k(e){var s;if(!l.loaderEl)return;l.loaderEl.classList.toggle("is-hidden",!e),l.listEl.style.display=e?"none":"";const t=(s=l.section)==null?void 0:s.querySelector(".testimonials-nav-container");t&&(t.style.visibility=e?"hidden":"visible")}const u={swiperEl:document.querySelector(".gallery-swiper"),prevBtn:document.querySelector(".gallery-buttons .swiper-button-prev"),nextBtn:document.querySelector(".gallery-buttons .swiper-button-next"),paginationEl:document.querySelector(".swiper-pagination")};u.swiperEl&&ne();function ne(){new H(u.swiperEl,{modules:[N,j],slidesPerView:1,spaceBetween:16,speed:500,loop:!1,navigation:{prevEl:u.prevBtn,nextEl:u.nextBtn,disabledClass:"swiper-button-disabled"},pagination:{el:u.paginationEl,clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},on:{init:function(){I(this)},slideChange:function(){I(this)}}})}function I(e){u.prevBtn&&(e.isBeginning?u.prevBtn.classList.add("swiper-button-disabled"):u.prevBtn.classList.remove("swiper-button-disabled")),u.nextBtn&&(e.isEnd?u.nextBtn.classList.add("swiper-button-disabled"):u.nextBtn.classList.remove("swiper-button-disabled"))}const ie=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:
    <ol class="faq-list faq-list--ordered">
      <li>Оберіть друга: Придивіться до наших хвостиків у розділі «Знайди друга».</li>
      <li>Залиште заявку: Коли відчуєте, що це «ваша» тваринка, натискайте кнопку «Взяти додому» та заповніть коротку анкету.</li>
      <li>Поговоріть з куратором: Наш волонтер зателефонує вам, щоб познайомитись ближче, розповісти про характер тваринки та відповісти на всі ваші питання.</li>
      <li>Приїжджайте знайомитись: Якщо ви ідеально підходите одне одному, ми домовимось про зустріч у притулку.</li>
      <li>Дорога додому: Після знайомства та підписання договору про відповідальне утримання, ваш новий друг поїде з вами у своє нове, щасливе життя!</li>
    </ol>`},{question:"Як мені найкраще підготувати свій дім та родину до появи хвостика?",answer:`Чудове питання, яке показує вашу турботу! Переїзд — це завжди невеликий стрес для тваринки, але правильна підготовка зробить цей процес легким і радісним. Ось кілька порад:
    <ul class="faq-list faq-list--unordered">
      <li>Безпечний простір: Переконайтесь, що на вікнах є сітки, а дроти та побутова хімія сховані.</li>
      <li>Особисті речі: Підготуйте для хвостика дві мисочки (для їжі та води), лежанку чи будиночок, лоток з наповнювачем для котика або повідець і нашийник для собачки.</li>
      <li>Сімейна розмова: Обговоріть з рідними майбутні обов'язки. Важливо, щоб усі були готові до появи нового мешканця.</li>
      <li>Терпіння та любов: Дайте тваринці час, щоб звикнути. Не квапте її, будьте поруч, розмовляйте лагідним голосом — і ваша любов творитиме дива!</li>
    </ul>`},{question:"Чи можу я бути впевненим, що тваринка здорова? Розкажіть про щеплення.",answer:`Так, звісно. Здоров'я наших підопічних — наш головний пріоритет. Кожна тваринка, яка потрапляє до нас, проходить повний огляд у ветеринара. Ми гарантуємо, що:
    <ul class="faq-list faq-list--unordered">
      <li>Усі хвостики оброблені від бліх та глистів.</li>
      <li>Усі вакциновані комплексною вакциною за віком.</li>
      <li>Дорослі тварини (зазвичай від 6-8 місяців) стерилізовані/кастровані.</li>
    </ul>
    Разом із тваринкою ви обов'язково отримаєте її ветеринарний паспорт з усіма відмітками. Якщо у когось є особливі потреби у догляді чи харчуванні, ми чесно і детально про це розповімо.`},{question:"Я дуже хочу допомогти, але поки не готовий до адопції. Чим я можу підтримати «Хатинку лапок»?",answer:`Дякуємо вам за велике серце та бажання допомогти! Кожна допомога для нас безцінна. Навіть якщо ви не можете взяти тваринку, ви можете стати її янголом-охоронцем. Ось як:
    <ul class="faq-list faq-list--unordered">
      <li>Допомогти фінансово: Ваша пожертва піде на корм, ліки, оплату комунальних послуг та зарплату персоналу.</li>
      <li>Стати волонтером: Нам завжди потрібні люблячі руки для прогулянок з собачками, прибирання та, найголовніше, для спілкування з тваринками.</li>
      <li>Подарувати необхідне: Ми завжди раді кормам, лікам, наповнювачам для лотків, іграшкам, теплим ковдрам.</li>
      <li>Допомогти інформаційно: Найпростіший, але дуже дієвий спосіб — розповідати про нас у соцмережах. Можливо, саме ваш репост допоможе комусь знайти свою долю!</li>
    </ul>`},{question:"Мені сподобалась одна з ваших тваринок на сайті. Чи можу я приїхати, щоб познайомитися з нею особисто?",answer:`Авжеж! Ми віримо, що справжня магія стається лише при особистій зустрічі. Щоб знайомство було комфортним і для вас, і для тваринки, ми просимо вас спочатку заповнити онлайн-заявку на нашому сайті.
    <br><br>Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!`}];ae();function ae(){const e=document.getElementById("faqAccordion");e&&(e.innerHTML=ie.map(t=>`
    <div class="accordion-item">
      <button class="accordion-header">
        <span class="faq-question-text">${t.question}</span>
        <div class="faq-icon-wrapper">
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1V17M1 9H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
      <div class="accordion-content">
        <div class="faq-answer-inner">${t.answer}</div>
      </div>
    </div>
  `).join(""),e.addEventListener("click",t=>{const s=t.target.closest(".accordion-header");if(!s)return;const i=s.parentElement,n=i.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(o=>{o.classList.remove("active")}),n||i.classList.add("active")}))}function re(){const e=document.querySelector(".category-btn");e&&e.classList.add("category-btn-accent")}function oe(e){document.querySelectorAll(".category-btn-accent").forEach(s=>s.classList.remove("category-btn-accent")),e.classList.add("category-btn-accent")}const le="/command-project-PawHut/assets/icons-CqTJWapI.svg";function ce(e){const t=e.map(({_id:s,name:i})=>`
<li class="category-item" data-id="${s}">
    <button type="button" class="category-btn">${i}</button>
</li>`).join("");r.tailsFilters.innerHTML=t}function de(e){const t=e.animals.map(({_id:s,image:i,name:n,categories:o,age:p,gender:v,shortDescription:m,description:b,species:h})=>`
    <li class="product-card" data-id="${s}">
        <div class="card-top-group">
        <img class="product-img" src="${i}" alt=${b}/>
        <p class="product-species">${h}</p>
        <h3 class="product-name">${n}</h3>
        <p class="product-filter">${o.map(({name:g})=>`
          <button type="button" class="product-filter-btn">${g}</button>`).join("")}
        </p>
          </div>
              <div class="spacer"></div>
              <div class="card-bottom-group">
        <p class="product-age-gender"><span class="product-age">${p}</span><span class="product-gender">${v}</span></p>
        <p class="product-description">${m}</p>
        <button
        class="btn-more"
        data-modal-open="details"
        data-id="${s}"
      >
        Дізнатись більше
      </button>
       </div>
    </li>`).join("");r.tailsProducts.insertAdjacentHTML("beforeend",t)}function ue(){r.tailsProducts.innerHTML=""}function pe(e){return`
    <div class="backdrop is-open">
       <div class="animal-modal">
   <button class="modal-close-btn" data-modal-close type="button">
          <svg class="modal-close-icon" width="24" height="24">
            <use href="${le}#icon-close"></use> 
          </svg>
        </button>

      <div class="image-wrapper">
        <img src="${e.image}" alt="${e.name}" class="animal-img" />
      </div>
      <div class="info-wrapper">
        <div class="animal-data">
          <p class="animal-type">${e.species}</p>
          <h2 class="animal-name">${e.name}</h2>
          <div class="animal-meta">
            <p class="meta-item age">${e.age}</p>
            <p class="meta-item gender">${e.gender}</p>
          </div>
        </div>
        <div class="description-section">
          <h3 class="description-title">Опис:</h3>
          <p class="animal-dscr description-text">${e.description}</p>
        </div>
        <div class="description-section">
          <h3 class="description-title">Здоров'я:</h3>
          <p class="health-dscr description-text">${e.healthStatus}</p>
        </div>
        <div class="description-section">
          <h3 class="description-title">Поведiнка:</h3>
          <p class="behavior-dscr description-text">${e.behavior}</p>
        </div>
         <button class="btn-primary btn-to-order" data-modal-next="order" type="button">
            Взяти додому
          </button>
      </div>
    </div>
    </div>`}const c={currentCategoryId:null,currentPage:1,totalPages:1,loadedAnimals:[]};function me(){return window.innerWidth>=1440?9:8}function fe(){c.currentPage=1,c.totalPages=1,c.loadedAnimals=[]}ge();async function ge(){await ye(),await P()}async function ye(){try{D();const e=await W();ce([{name:"Всі",_id:"all"},...e]),re()}catch(e){C.error({message:e.message,position:"topCenter"})}finally{R()}}function D(){r.loader&&r.loader.classList.remove("is-hidden"),r.tailsBtn&&r.tailsBtn.classList.add("is-hidden")}function R(){r.loader&&r.loader.classList.add("is-hidden")}async function P(){try{D();const e=me(),t=await _({page:c.currentPage,limit:e,categoryId:c.currentCategoryId});c.totalPages=Math.ceil(t.totalItems/e),c.loadedAnimals.push(...t.animals),de(t),ve(t)}catch(e){C.error({message:e.message,position:"topCenter"})}finally{R()}}function ve(e){c.currentPage>=c.totalPages||e.animals.length===0?r.tailsBtn.classList.add("is-hidden"):r.tailsBtn.classList.remove("is-hidden")}r.tailsFilters.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");if(!t)return;const s=t.closest(".category-item"),i=s.dataset.id==="all"?null:s.dataset.id;i!==c.currentCategoryId&&(oe(t),c.currentCategoryId=i,fe(),ue(),await P())});r.tailsBtn.addEventListener("click",async()=>{c.currentPage+=1,await P()});function be(){return c.loadedAnimals}let x=null;const a=document.querySelector('[data-modal="order"]'),d=a==null?void 0:a.querySelector(".js-order-form"),E=a==null?void 0:a.querySelector(".js-order-close"),O=document.querySelector('[data-loader="order"]');document.addEventListener("click",e=>{const t=e.target;if(t.closest('[data-modal-open="details"]')){he(t.closest('[data-modal-open="details"]'));return}if(t.closest('[data-modal-next="order"]')){A(!0),we();return}if(t.closest("[data-modal-close]")||t.classList.contains("backdrop")){A();return}});a==null||a.addEventListener("click",e=>{e.target===a&&L()});E==null||E.addEventListener("click",L);document.addEventListener("keydown",e=>{e.key==="Escape"&&(r.mwContainer.innerHTML&&A(),a!=null&&a.classList.contains("is-hidden")||L())});d==null||d.addEventListener("submit",Le);d==null||d.addEventListener("input",e=>{const t=e.target;t.matches("input, textarea")&&t.classList.contains("error")&&t.value.trim()&&q(t)});function he(e){const t=e.dataset.id,s=be().find(i=>i._id===t);s&&(x=t,r.mwContainer.innerHTML=pe(s),document.body.style.overflow="hidden")}function A(e=!1){const t=r.mwContainer.querySelector(".animal-modal"),s=r.mwContainer.querySelector(".backdrop");t==null||t.classList.add("exit-up"),s&&(s.style.opacity="0"),setTimeout(()=>{r.mwContainer.innerHTML="",e||(document.body.style.overflow="")},400)}function we(){a==null||a.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function L(){a==null||a.classList.add("is-hidden"),document.body.style.overflow="",d==null||d.reset(),Ee()}async function Le(e){var b,h;e.preventDefault();const t=e.target,{name:s,phone:i,comment:n}=t.elements,o=qe(s),p=Se(i);if(!o||!p)return;const v={animalId:x,name:s.value.trim(),phone:i.value.replace(/\D/g,"")};n!=null&&n.value.trim()&&(v.comment=n.value.trim());const m=t.querySelector('[type="submit"]');T(m,!0);try{const g=await J(v);console.log("Order response:",g),T(m,!1),await B.fire({icon:"success",title:"Заявку відправлено!",text:"Ми зв'яжемося з вами найближчим часом."}),L(),x=null}catch(g){await B.fire({icon:"error",title:"Помилка",text:((h=(b=g.response)==null?void 0:b.data)==null?void 0:h.message)||"Не вдалося відправити заявку."})}finally{m.disabled=!1,m.textContent="Надіслати"}}function qe(e){return e.value.trim()?/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{3,}$/.test(e.value.trim())?(q(e),!0):($(e,"Ім'я має містити мінімум 3 літери"),!1):($(e,"Будь ласка, введіть ім'я"),!1)}function Se(e){const t=e.value.replace(/\D/g,"");return e.value=t,/^380\d{9}$/.test(t)?(q(e),!0):($(e,"Номер має містити 12 цифр і починатися з 380"),!1)}function $(e,t){const s=e.closest(".form-field"),i=s==null?void 0:s.querySelector(".error-text");e.classList.add("error"),i&&(i.textContent=t)}function q(e){const t=e.closest(".form-field"),s=t==null?void 0:t.querySelector(".error-text");e.classList.remove("error"),s&&(s.textContent="")}function Ee(){d==null||d.querySelectorAll(".error").forEach(q)}function T(e,t){e.disabled=t,e.textContent=t?"Відправляємо...":"Надіслати",t?O.classList.remove("is-hidden"):O.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
