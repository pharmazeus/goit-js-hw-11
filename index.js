import{a as u,i as n,S as p}from"./assets/vendor-C_7oAj77.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m=t=>`<li class="gallery-item">
        <a class = 'large-img' href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags.slice(0,30)}" loading="lazy" />
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
      </li>`,y=t=>{const r="48449909-94b1753e13b470dade065bce0",a="https://pixabay.com/api/",o=new URLSearchParams({q:t,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`${a}?${o}`)},c=document.querySelector(".js-form"),l=document.querySelector(".js-gallery"),d=document.querySelector(".loader"),g=t=>{d.style.display="block"},h=async t=>{try{t.preventDefault();let r=t.currentTarget.elements.name_query.value.trim();if(r===""){n.error({title:"Warning",position:"topRight",message:"Empty field , please insert your query..."});return}g(!0),l.innerHTML="";const{data:a}=await y(r);if(d.style.display="none",a.hits.length===0){n.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset();return}const o=a.hits.map(e=>m(e)).join("");l.innerHTML=o,new p(".js-gallery a",{captionsData:"alt",captionsDelay:250})}catch(r){console.log(r),n.error({title:"Error",position:"topRight",message:"Something went wrong... Please try again later."})}};c.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
