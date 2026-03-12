import{a as g,i as x,S as N,N as H,P as R,R as G,s as V,b as K,c as _,d as I}from"./assets/vendor-DpepIhIB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const o={tailsFilters:document.querySelector(".tails-filters"),tailsProducts:document.querySelector(".tails-products"),tailsBtn:document.querySelector(".tails-btn"),mwContainer:document.getElementById("mw"),loader:document.querySelector(".loader")},m={openModalBtn:document.querySelector("[data-burger-open]"),closeModalBtn:document.querySelector("[data-burger-close]"),modal:document.querySelector("[data-burger]")};z();function z(){m.openModalBtn.addEventListener("click",t),m.closeModalBtn.addEventListener("click",n),document.addEventListener("keydown",a),m.modal.querySelectorAll('a[href*="#"]').forEach(s=>{s.addEventListener("click",n)});function t(){m.modal.classList.add("is-open"),document.body.style.overflow="hidden"}function n(){m.modal.classList.remove("is-open"),document.body.style.overflow=""}function a(s){s.key==="Escape"&&m.modal.classList.contains("is-open")&&n()}}const W="https://paw-hut.b.goit.study/api/",h={categories:"categories",animals:"animals",feedbacks:"feedbacks",orders:"orders"};g.defaults.baseURL=W;const U=async()=>{const{data:e}=await g.get(h.categories);return e},J=async({page:e=1,limit:t=9,categoryId:n=null}={})=>{const a={page:e,limit:t};n&&(a.categoryId=n);const{data:s}=await g.get(h.animals,{params:a});return s},Z=async({page:e=1,limit:t=12}={})=>{const{data:n}=await g.get(h.feedbacks,{params:{page:e,limit:t}});return n.feedbacks??[]},Q=async e=>{const{data:t}=await g.post(h.orders,e);return t},u={section:document.querySelector(".happy-stories"),sliderEl:document.querySelector(".testimonials-slider-wrapper"),loaderEl:document.querySelector(".testimonials-loader"),listEl:document.querySelector(".testimonials-list"),paginationEl:document.querySelector(".testimonials-pagination"),prevBtn:document.querySelector(".prev-btn"),nextBtn:document.querySelector(".next-btn")},X=1,Y=12,ee={modules:[H,R],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,speed:450,watchOverflow:!0,pagination:{el:u.paginationEl,clickable:!0},navigation:{prevEl:u.prevBtn,nextEl:u.nextBtn,disabledClass:"is-disabled"},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32},1440:{slidesPerView:2,slidesPerGroup:2,spaceBetween:64}}};let S=null;te()&&ne();function te(){return Object.values(u).every(Boolean)}async function ne(){O(!0);try{const e=await Z({page:X,limit:Y}),t=re(e);ie(t),oe(),se()}catch{x.error({title:"Помилка",message:"Не вдалося завантажити відгуки.",position:"topRight"})}finally{O(!1)}}function se(){S&&S.destroy(!0,!0),S=new N(u.sliderEl,ee)}function ae({author:e,description:t,rate:n}){return`
    <li class="testimonial-card swiper-slide">
      <div class="testimonial-rating" data-rate="${Number(n)||0}"></div>
      <p class="testimonial-text">${k(t??"")}</p>
      <div class="testimonial-author-wrapper">
        <h3 class="testimonial-author">${k(e??"Анонім")}</h3>
      </div>
    </li>
  `}function ie(e){u.listEl.innerHTML=e.map(ae).join("")}function re(e){if(!Array.isArray(e)||e.length===0)return[];const t=[...e];return t.length%2!==0&&t.push(t[0]),t}function k(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function oe(){u.listEl.querySelectorAll(".testimonial-rating").forEach(t=>{const n=Number(t.dataset.rate)||0;new G(t,{score:n,number:5,half:!0,halfShow:!0,space:!1,readOnly:!0,starOn:_,starOff:K,starHalf:V,path:"",targetKeep:!0,hints:["","","","",""]}).init()})}function O(e){var n;if(!u.loaderEl)return;u.loaderEl.classList.toggle("is-hidden",!e),u.listEl.style.display=e?"none":"";const t=(n=u.section)==null?void 0:n.querySelector(".testimonials-nav-container");t&&(t.style.visibility=e?"hidden":"visible")}const d={swiperEl:document.querySelector(".gallery-swiper"),prevBtn:document.querySelector(".gallery-buttons .swiper-button-prev"),nextBtn:document.querySelector(".gallery-buttons .swiper-button-next"),paginationEl:document.querySelector(".swiper-pagination")};d.swiperEl&&le();function le(){new N(d.swiperEl,{modules:[H,R],slidesPerView:1,spaceBetween:16,speed:500,loop:!1,navigation:{prevEl:d.prevBtn,nextEl:d.nextBtn,disabledClass:"swiper-button-disabled"},pagination:{el:d.paginationEl,clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},on:{init:function(){T(this)},slideChange:function(){T(this)}}})}function T(e){d.prevBtn&&(e.isBeginning?d.prevBtn.classList.add("swiper-button-disabled"):d.prevBtn.classList.remove("swiper-button-disabled")),d.nextBtn&&(e.isEnd?d.nextBtn.classList.add("swiper-button-disabled"):d.nextBtn.classList.remove("swiper-button-disabled"))}const ce=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:
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
    <br><br>Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!`}],D="/command-project-PawHut/assets/icons-CqTJWapI.svg";de();function de(){const e=document.getElementById("faqAccordion");e&&(e.innerHTML=ce.map(t=>`
    <div class="accordion-item">
      <button class="accordion-header">
        <span class="faq-question-text">${t.question}</span>
        <div class="faq-icon-wrapper">
          <svg width="24" height="24">
             <use href="${D}#icon-add"></use>
          </svg>
        </div>
      </button>
      <div class="accordion-content">
        <div class="faq-answer-inner">${t.answer}</div>
      </div>
    </div>
  `).join(""),e.addEventListener("click",t=>{const n=t.target.closest(".accordion-header");if(!n)return;const a=n.parentElement,s=a.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(r=>{r.classList.remove("active")}),s||a.classList.add("active")}))}function ue(){const e=document.querySelector(".category-btn");e&&e.classList.add("category-btn-accent")}function pe(e){document.querySelectorAll(".category-btn-accent").forEach(n=>n.classList.remove("category-btn-accent")),e.classList.add("category-btn-accent")}function me(){o.tailsProducts.innerHTML=""}function fe(e){return e.map(({name:t})=>`<button type="button" class="product-filter-btn">${t}</button>`).join("")}function ge(e){const t=e.map(({_id:n,name:a})=>`
        <li class="category-item" data-id="${n}">
          <button type="button" class="category-btn">${a}</button>
        </li>`).join("");o.tailsFilters.innerHTML=t}function ye(e){const t=e.animals.map(({_id:n,image:a,name:s,categories:r,age:p,gender:y,shortDescription:f,description:v,species:b})=>`
        <li class="product-card" data-id="${n}">
          <div class="card-top-group">
            <img class="product-img" src="${a}" alt="${v}"/>
            <p class="product-species">${b}</p>
            <h3 class="product-name">${s}</h3>
            <p class="product-filter">
              ${fe(r)}
            </p>
          </div>
          <div class="spacer"></div>
          <div class="card-bottom-group">
            <p class="product-age-gender">
              <span class="product-age">${p}</span>
              <span class="product-gender">${y}</span>
            </p>
            <p class="product-description">${f}</p>
            <button
              class="btn-more"
              data-modal-open="details"
              data-id="${n}"
            >
              Дізнатись більше
            </button>
          </div>
        </li>`).join("");o.tailsProducts.insertAdjacentHTML("beforeend",t)}function ve(e){return`
    <div class="backdrop is-open">
      <div class="animal-modal">
        <button class="modal-close-btn" data-modal-close type="button">
          <svg class="modal-close-icon" width="24" height="24">
            <use href="${D}#icon-close"></use>
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
    </div>`}const l={currentCategoryId:null,currentPage:1,totalPages:1,loadedAnimals:[]};function be(){return window.innerWidth>=1440?9:8}function he(){l.currentPage=1,l.totalPages=1,l.loadedAnimals=[]}function we(){return l.loadedAnimals}Le();async function Le(){o.tailsFilters.addEventListener("click",Ee),o.tailsBtn.addEventListener("click",Ce),await qe(),await M()}async function qe(){try{j();const e=await U();ge([{name:"Всі",_id:"all"},...e]),ue()}catch(e){x.error({message:e.message,position:"topCenter"})}finally{F()}}async function M(){try{j();const e=be(),t=await J({page:l.currentPage,limit:e,categoryId:l.currentCategoryId});l.totalPages=Math.ceil(t.totalItems/e),l.loadedAnimals.push(...t.animals),ye(t),Se(t)}catch(e){x.error({message:e.message,position:"topCenter"})}finally{F()}}function Se(e){const t=l.currentPage>=l.totalPages||e.animals.length===0;o.tailsBtn.classList.toggle("is-hidden",t)}function j(){o.loader&&o.loader.classList.remove("is-hidden"),o.tailsBtn&&o.tailsBtn.classList.add("is-hidden")}function F(){o.loader&&o.loader.classList.add("is-hidden")}async function Ee(e){const t=e.target.closest(".category-btn");if(!t)return;const n=t.closest(".category-item"),a=n.dataset.id==="all"?null:n.dataset.id;a!==l.currentCategoryId&&(pe(t),l.currentCategoryId=a,he(),me(),await M())}async function Ce(){l.currentPage+=1,await M()}let P=null;const i=document.querySelector('[data-modal="order"]'),c=i==null?void 0:i.querySelector(".js-order-form"),E=i==null?void 0:i.querySelector(".js-order-close"),C=document.querySelector('[data-loader="order"]');document.addEventListener("click",Ae);i==null||i.addEventListener("click",Pe);E==null||E.addEventListener("click",w);document.addEventListener("keydown",$e);c==null||c.addEventListener("submit",Ie);c==null||c.addEventListener("input",Be);function Ae(e){const t=e.target;if(t.closest('[data-modal-open="details"]')){xe(t.closest('[data-modal-open="details"]'));return}if(t.closest('[data-modal-next="order"]')){$(!0),Me();return}if(t.closest("[data-modal-close]")||t.classList.contains("backdrop")){$();return}}function Pe(e){e.target===i&&w()}function $e(e){e.key==="Escape"&&(o.mwContainer.innerHTML&&$(),i!=null&&i.classList.contains("is-hidden")||w())}function Be(e){const t=e.target;t.matches("input, textarea")&&t.classList.contains("error")&&t.value.trim()&&L(t)}function xe(e){const t=e.dataset.id,n=we().find(a=>a._id===t);n&&(P=t,o.mwContainer.innerHTML=ve(n),document.body.style.overflow="hidden")}function $(e=!1){const t=o.mwContainer.querySelector(".animal-modal"),n=o.mwContainer.querySelector(".backdrop");t==null||t.classList.add("exit-up"),n&&(n.style.opacity="0"),setTimeout(()=>{o.mwContainer.innerHTML="",e||(document.body.style.overflow="")},400)}function Me(){i==null||i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function w(){i==null||i.classList.add("is-hidden"),document.body.style.overflow="",c==null||c.reset(),Te()}async function Ie(e){var v,b;e.preventDefault();const t=e.target,{name:n,phone:a,comment:s}=t.elements,r=ke(n),p=Oe(a);if(!r||!p)return;const y={animalId:P,name:n.value.trim(),phone:a.value.replace(/\D/g,"")};s!=null&&s.value.trim()&&(y.comment=s.value.trim());const f=t.querySelector('[type="submit"]');A(f,!0);try{const q=await Q(y);console.log("Order response:",q),A(f,!1),await I.fire({icon:"success",title:"Заявку відправлено!",text:"Ми зв'яжемося з вами найближчим часом."}),w(),P=null}catch(q){A(f,!1),await I.fire({icon:"error",title:"Помилка",text:((b=(v=q.response)==null?void 0:v.data)==null?void 0:b.message)||"Не вдалося відправити заявку."})}}function ke(e){return e.value.trim()?/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{3,}$/.test(e.value.trim())?(L(e),!0):(B(e,"Ім'я має містити мінімум 3 літери"),!1):(B(e,"Будь ласка, введіть ім'я"),!1)}function Oe(e){const t=e.value.replace(/\D/g,"");return e.value=t,/^380\d{9}$/.test(t)?(L(e),!0):(B(e,"Номер має містити 12 цифр і починатися з 380"),!1)}function B(e,t){const n=e.closest(".form-field"),a=n==null?void 0:n.querySelector(".error-text");e.classList.add("error"),a&&(a.textContent=t)}function L(e){const t=e.closest(".form-field"),n=t==null?void 0:t.querySelector(".error-text");e.classList.remove("error"),n&&(n.textContent="")}function Te(){c==null||c.querySelectorAll(".error").forEach(L)}function A(e,t){e.disabled=t,e.textContent=t?"Відправляємо...":"Надіслати",C==null||C.classList.toggle("is-hidden",!t)}
//# sourceMappingURL=index.js.map
