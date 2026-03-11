import{a as g,i as $,S as N,N as H,P as R,R as V,s as F,b as _,c as z,d as x}from"./assets/vendor-DpepIhIB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const r={tailsFilters:document.querySelector(".tails-filters"),tailsProducts:document.querySelector(".tails-products"),tailsBtn:document.querySelector(".tails-btn"),mwContainer:document.getElementById("mw"),loader:document.querySelector(".loader")},f={openModalBtn:document.querySelector("[data-burger-open]"),closeModalBtn:document.querySelector("[data-burger-close]"),modal:document.querySelector("[data-burger]")};K();function K(){f.openModalBtn.addEventListener("click",t),f.closeModalBtn.addEventListener("click",s),document.addEventListener("keydown",a),f.modal.querySelectorAll('a[href*="#"]').forEach(n=>{n.addEventListener("click",s)});function t(){f.modal.classList.add("is-open"),document.body.style.overflow="hidden"}function s(){f.modal.classList.remove("is-open"),document.body.style.overflow=""}function a(n){n.key==="Escape"&&f.modal.classList.contains("is-open")&&s()}}const W="https://paw-hut.b.goit.study/api/",h={categories:"categories",animals:"animals",feedbacks:"feedbacks",orders:"orders"};g.defaults.baseURL=W;const U=async()=>{const{data:e}=await g.get(h.categories);return e},J=async({page:e=1,limit:t=9,categoryId:s=null}={})=>{const a={page:e,limit:t};s&&(a.categoryId=s);const{data:n}=await g.get(h.animals,{params:a});return n},Z=async({page:e=1,limit:t=12}={})=>{const{data:s}=await g.get(h.feedbacks,{params:{page:e,limit:t}});return s.feedbacks??[]},Q=async e=>{const{data:t}=await g.post(h.orders,e);return t},u={section:document.querySelector(".happy-stories"),sliderEl:document.querySelector(".testimonials-slider-wrapper"),loaderEl:document.querySelector(".testimonials-loader"),listEl:document.querySelector(".testimonials-list"),paginationEl:document.querySelector(".testimonials-pagination"),prevBtn:document.querySelector(".prev-btn"),nextBtn:document.querySelector(".next-btn")},X=1,Y=12,ee={modules:[H,R],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,speed:450,watchOverflow:!0,pagination:{el:u.paginationEl,clickable:!0},navigation:{prevEl:u.prevBtn,nextEl:u.nextBtn,disabledClass:"is-disabled"},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32},1440:{slidesPerView:2,slidesPerGroup:2,spaceBetween:64}}};let S=null;te()&&se();function te(){return Object.values(u).every(Boolean)}async function se(){I(!0);try{const e=await Z({page:X,limit:Y}),t=re(e);ie(t),oe(),ne()}catch{$.error({title:"Помилка",message:"Не вдалося завантажити відгуки.",position:"topRight"})}finally{I(!1)}}function ne(){S&&S.destroy(!0,!0),S=new N(u.sliderEl,ee)}function ae({author:e,description:t,rate:s}){return`
    <li class="testimonial-card swiper-slide">
      <div class="testimonial-rating" data-rate="${Number(s)||0}"></div>
      <p class="testimonial-text">${M(t??"")}</p>
      <div class="testimonial-author-wrapper">
        <h3 class="testimonial-author">${M(e??"Анонім")}</h3>
      </div>
    </li>
  `}function ie(e){u.listEl.innerHTML=e.map(ae).join("")}function re(e){if(!Array.isArray(e)||e.length===0)return[];const t=[...e];return t.length%2!==0&&t.push(t[0]),t}function M(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function oe(){u.listEl.querySelectorAll(".testimonial-rating").forEach(t=>{const s=Number(t.dataset.rate)||0;new V(t,{score:s,number:5,half:!0,halfShow:!0,space:!1,readOnly:!0,starOn:z,starOff:_,starHalf:F,path:"",targetKeep:!0,hints:["","","","",""]}).init()})}function I(e){var s;if(!u.loaderEl)return;u.loaderEl.classList.toggle("is-hidden",!e),u.listEl.style.display=e?"none":"";const t=(s=u.section)==null?void 0:s.querySelector(".testimonials-nav-container");t&&(t.style.visibility=e?"hidden":"visible")}const d={swiperEl:document.querySelector(".gallery-swiper"),prevBtn:document.querySelector(".gallery-buttons .swiper-button-prev"),nextBtn:document.querySelector(".gallery-buttons .swiper-button-next"),paginationEl:document.querySelector(".swiper-pagination")};d.swiperEl&&le();function le(){new N(d.swiperEl,{modules:[H,R],slidesPerView:1,spaceBetween:16,speed:500,loop:!1,navigation:{prevEl:d.prevBtn,nextEl:d.nextBtn,disabledClass:"swiper-button-disabled"},pagination:{el:d.paginationEl,clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},on:{init:function(){O(this)},slideChange:function(){O(this)}}})}function O(e){d.prevBtn&&(e.isBeginning?d.prevBtn.classList.add("swiper-button-disabled"):d.prevBtn.classList.remove("swiper-button-disabled")),d.nextBtn&&(e.isEnd?d.nextBtn.classList.add("swiper-button-disabled"):d.nextBtn.classList.remove("swiper-button-disabled"))}const ce=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:
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
    <br><br>Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!`}],j="/command-project-PawHut/assets/icons-CqTJWapI.svg";de();function de(){const e=document.getElementById("faqAccordion");e&&(e.innerHTML=ce.map(t=>`
    <div class="accordion-item">
      <button class="accordion-header">
        <span class="faq-question-text">${t.question}</span>
        <div class="faq-icon-wrapper">
          <svg width="24" height="24">
             <use href="${j}#icon-add"></use>
          </svg>
        </div>
      </button>
      <div class="accordion-content">
        <div class="faq-answer-inner">${t.answer}</div>
      </div>
    </div>
  `).join(""),e.addEventListener("click",t=>{const s=t.target.closest(".accordion-header");if(!s)return;const a=s.parentElement,n=a.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(o=>{o.classList.remove("active")}),n||a.classList.add("active")}))}function ue(){const e=document.querySelector(".category-btn");e&&e.classList.add("category-btn-accent")}function pe(e){document.querySelectorAll(".category-btn-accent").forEach(s=>s.classList.remove("category-btn-accent")),e.classList.add("category-btn-accent")}function me(){r.tailsProducts.innerHTML=""}function fe(e){return e.map(({name:t})=>`<button type="button" class="product-filter-btn">${t}</button>`).join("")}function ge(e){const t=e.map(({_id:s,name:a})=>`
        <li class="category-item" data-id="${s}">
          <button type="button" class="category-btn">${a}</button>
        </li>`).join("");r.tailsFilters.innerHTML=t}function ye(e){const t=e.animals.map(({_id:s,image:a,name:n,categories:o,age:p,gender:y,shortDescription:m,description:v,species:b})=>`
        <li class="product-card" data-id="${s}">
          <div class="card-top-group">
            <img class="product-img" src="${a}" alt="${v}"/>
            <p class="product-species">${b}</p>
            <h3 class="product-name">${n}</h3>
            <p class="product-filter">
              ${fe(o)}
            </p>
          </div>
          <div class="spacer"></div>
          <div class="card-bottom-group">
            <p class="product-age-gender">
              <span class="product-age">${p}</span>
              <span class="product-gender">${y}</span>
            </p>
            <p class="product-description">${m}</p>
            <button
              class="btn-more"
              data-modal-open="details"
              data-id="${s}"
            >
              Дізнатись більше
            </button>
          </div>
        </li>`).join("");r.tailsProducts.insertAdjacentHTML("beforeend",t)}function ve(e){return`
    <div class="backdrop is-open">
      <div class="animal-modal">
        <button class="modal-close-btn" data-modal-close type="button">
          <svg class="modal-close-icon" width="24" height="24">
            <use href="${j}#icon-close"></use>
          </svg>
        </button>
        <div class="image-wrapper">
          <img src="${e.image}" alt="${e.name}" class="animal-img"/>
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
            <h3 class="description-title">Поведінка:</h3>
            <p class="behavior-dscr description-text">${e.behavior}</p>
          </div>
          <button class="btn-primary btn-to-order" data-modal-next="order" type="button">
            Взяти додому
          </button>
        </div>
      </div>
    </div>`}const l={currentCategoryId:null,currentPage:1,totalPages:1,loadedAnimals:[]};function be(){return window.innerWidth>=1440?9:8}function he(){l.currentPage=1,l.totalPages=1,l.loadedAnimals=[]}we();async function we(){await Le(),await B()}async function Le(){try{D();const e=await U();ge([{name:"Всі",_id:"all"},...e]),ue()}catch(e){$.error({message:e.message,position:"topCenter"})}finally{G()}}function D(){r.loader&&r.loader.classList.remove("is-hidden"),r.tailsBtn&&r.tailsBtn.classList.add("is-hidden")}function G(){r.loader&&r.loader.classList.add("is-hidden")}async function B(){try{D();const e=be(),t=await J({page:l.currentPage,limit:e,categoryId:l.currentCategoryId});l.totalPages=Math.ceil(t.totalItems/e),l.loadedAnimals.push(...t.animals),ye(t),qe(t)}catch(e){$.error({message:e.message,position:"topCenter"})}finally{G()}}function qe(e){l.currentPage>=l.totalPages||e.animals.length===0?r.tailsBtn.classList.add("is-hidden"):r.tailsBtn.classList.remove("is-hidden")}r.tailsFilters.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");if(!t)return;const s=t.closest(".category-item"),a=s.dataset.id==="all"?null:s.dataset.id;a!==l.currentCategoryId&&(pe(t),l.currentCategoryId=a,he(),me(),await B())});r.tailsBtn.addEventListener("click",async()=>{l.currentPage+=1,await B()});function Se(){return l.loadedAnimals}let A=null;const i=document.querySelector('[data-modal="order"]'),c=i==null?void 0:i.querySelector(".js-order-form"),E=i==null?void 0:i.querySelector(".js-order-close"),T=document.querySelector('[data-loader="order"]');document.addEventListener("click",e=>{const t=e.target;if(t.closest('[data-modal-open="details"]')){Ee(t.closest('[data-modal-open="details"]'));return}if(t.closest('[data-modal-next="order"]')){C(!0),Ae();return}if(t.closest("[data-modal-close]")||t.classList.contains("backdrop")){C();return}});i==null||i.addEventListener("click",e=>{e.target===i&&w()});E==null||E.addEventListener("click",w);document.addEventListener("keydown",e=>{e.key==="Escape"&&(r.mwContainer.innerHTML&&C(),i!=null&&i.classList.contains("is-hidden")||w())});c==null||c.addEventListener("submit",Ce);c==null||c.addEventListener("input",e=>{const t=e.target;t.matches("input, textarea")&&t.classList.contains("error")&&t.value.trim()&&L(t)});function Ee(e){const t=e.dataset.id,s=Se().find(a=>a._id===t);s&&(A=t,r.mwContainer.innerHTML=ve(s),document.body.style.overflow="hidden")}function C(e=!1){const t=r.mwContainer.querySelector(".animal-modal"),s=r.mwContainer.querySelector(".backdrop");t==null||t.classList.add("exit-up"),s&&(s.style.opacity="0"),setTimeout(()=>{r.mwContainer.innerHTML="",e||(document.body.style.overflow="")},400)}function Ae(){i==null||i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function w(){i==null||i.classList.add("is-hidden"),document.body.style.overflow="",c==null||c.reset(),Be()}async function Ce(e){var v,b;e.preventDefault();const t=e.target,{name:s,phone:a,comment:n}=t.elements,o=Pe(s),p=$e(a);if(!o||!p)return;const y={animalId:A,name:s.value.trim(),phone:a.value.replace(/\D/g,"")};n!=null&&n.value.trim()&&(y.comment=n.value.trim());const m=t.querySelector('[type="submit"]');k(m,!0);try{const q=await Q(y);console.log("Order response:",q),k(m,!1),await x.fire({icon:"success",title:"Заявку відправлено!",text:"Ми зв'яжемося з вами найближчим часом."}),w(),A=null}catch(q){await x.fire({icon:"error",title:"Помилка",text:((b=(v=q.response)==null?void 0:v.data)==null?void 0:b.message)||"Не вдалося відправити заявку."})}finally{m.disabled=!1,m.textContent="Надіслати"}}function Pe(e){return e.value.trim()?/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{3,}$/.test(e.value.trim())?(L(e),!0):(P(e,"Ім'я має містити мінімум 3 літери"),!1):(P(e,"Будь ласка, введіть ім'я"),!1)}function $e(e){const t=e.value.replace(/\D/g,"");return e.value=t,/^380\d{9}$/.test(t)?(L(e),!0):(P(e,"Номер має містити 12 цифр і починатися з 380"),!1)}function P(e,t){const s=e.closest(".form-field"),a=s==null?void 0:s.querySelector(".error-text");e.classList.add("error"),a&&(a.textContent=t)}function L(e){const t=e.closest(".form-field"),s=t==null?void 0:t.querySelector(".error-text");e.classList.remove("error"),s&&(s.textContent="")}function Be(){c==null||c.querySelectorAll(".error").forEach(L)}function k(e,t){e.disabled=t,e.textContent=t?"Відправляємо...":"Надіслати",t?T.classList.remove("is-hidden"):T.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
