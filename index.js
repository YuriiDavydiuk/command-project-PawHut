import{i as l}from"./assets/vendor-DVYrn7a6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const d={_id:"667ad1b8e4b01a2b3c4d5e01",name:"Рекс",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFx65EkJT0vcMtlDOCihKok2b8o0iIXQtCKw&s",species:"Собака",age:"3 роки",gender:"Хлопчик",behavior:"Дуже добрий та позитивний. Любить людей та інших тварин.",healthStatus:"Артрит, потребує знеболювальних препаратів. Серце в нормі для його віку.",shortDescription:"Старенький пес з артритом. Шукає тихий дім, щоб дожити віку в любові.",description:"Лорд все життя вірно служив своїм господарям, але вони померли. Він дуже спокійний та мудрий пес. Через артрит йому важко ходити по сходах. Він не потребує довгих прогулянок, лише теплого місця та люблячого серця поруч."},m=e=>new Promise((o,i)=>{setTimeout(()=>{e===d._id?o(d):i(new Error("Тваринку не знайдено"))},1e3)});function u(e){return`
    <div class="backdrop is-open">
       <div class="animal-modal">
    <button class="modal-close-btn" data-modal-close type="button">
          <svg class="modal-close-icon" width="24" height="24">
            <use href="./img/icons.svg#icon-close"></use>
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
          <p class="short-dscr description-text">${e.shortDescription}</p>
        </div>
         <button class="btn-primary btn-to-order" data-modal-next="order" type="button">
            Взяти додому
          </button>
      </div>
    </div>
    </div>`}function p(){return`
    <div class="backdrop is-open">
      <div class="animal-modal enter-bottom">
        <button class="modal-close-btn" data-modal-close>
        <svg class="modal-close-icon" width="24" height="24">
            <use href="./img/icons.svg#icon-close"></use>
          </svg>
          </button>
        <div class="info-wrapper">
          <h2>Залишіть заявку</h2>
          <p>Форма здесь...</p>
        </div>
      </div>
    </div>`}(()=>{const e={openModalBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-mobile]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-open")}e.modal.querySelectorAll('a[href*="#"]').forEach(a=>{a.addEventListener("click",()=>{e.modal.classList.remove("is-open")})})})();const c=document.getElementById("mw");document.addEventListener("click",async e=>{const o=e.target,i=o.closest("[data-modal-open]"),a=o.closest("[data-modal-close]"),s=o.classList.contains("backdrop");if(i){const t=i.dataset.id,n=i.textContent;i.disabled=!0,i.textContent="Завантаження...";try{const r=await m(t);c.innerHTML=u(r),document.body.style.overflow="hidden"}catch{l.error({title:"Помилка",message:"Тваринку не знайдено",position:"topRight"})}finally{i&&(i.disabled=!1,i.textContent=n)}return}if(a||s){const t=document.querySelector(".animal-modal"),n=document.querySelector(".backdrop");t==null||t.classList.add("exit-up"),n==null||n.style.setProperty("opacity","0"),setTimeout(()=>{c.innerHTML="",document.body.style.overflow=""},400)}o.closest("[data-modal-next]")&&(document.querySelector(".animal-modal").classList.add("exit-up"),setTimeout(()=>{c.innerHTML=p()},400))});
//# sourceMappingURL=index.js.map
