import{i,S as m}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=t=>`<li class="gallery-item">
        <a class = 'large-img' href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="post-stats">
         <div class="stats-unit">
          <p class="stat-header">Likes</p>
          <p class ="stat-amount">${t.likes}</p>
         </div>
          <div class="stats-unit">
          <p class="stat-header">Views</p>
          <p class ="stat-amount">${t.views}</p>
         </div>
            <div class="stats-unit">
          <p class="stat-header">Comments</p>
           <p class ="stat-amount">${t.comments}</p>
         </div>
          <div class="stats-unit">
          <p class="stat-header">Downloads</p>
           <p class ="stat-amount">${t.downloads}</p>
         </div>
        </div>
      </li>`,y=t=>{const s="48449909-94b1753e13b470dade065bce0",a="https://pixabay.com/api/",o=new URLSearchParams({q:t,key:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${a}?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},u=document.querySelector(".js-form"),n=document.querySelector(".js-gallery"),d=document.querySelector(".loader"),c=t=>{d.style.display=t?"block":"none"},h=t=>{t.preventDefault();let s=t.currentTarget.elements.name_query.value.trim();if(s===""){i.error({title:"Warning",message:"Empty field , please insert your query..."});return}c(!0),n.innerHTML="",y(s).then(a=>{if(d.style.display="none",a.hits.length===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",color:"rgb(20, 62, 12);"}),u.reset();return}const o=a.hits.map(e=>p(e)).join("");n.innerHTML=o,new m(".js-gallery a",{captionsData:"alt",captionsDelay:250})}).catch(a=>{console.log(a),i.error({title:"Error",message:"Something went wrong... Please try again later."})}).finally(()=>{c(!1)})};u.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
