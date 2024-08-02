import{S as u,i as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=o=>{const s=new URLSearchParams({key:"45240196-18d84f3cf70a1bfd2b8ad66bc",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},c=document.querySelector(".gallery"),h=new u(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250}),p=o=>{const s=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:l,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${r}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${t}</p>
  <p>Views </br> ${a}</p>
  <p>Comments </br> ${l}</p>
  <p>Downloads </br> ${d}</p>
</div>
	</a>
</li>`).join("");c.innerHTML=s,h.refresh()},n=document.querySelector(".loader"),y=document.querySelector(".search-form");y.addEventListener("submit",g);function g(o){o.preventDefault(),c.innerHTML="",n.classList.remove("hidden");const s=o.target.elements.search.value.trim().toLowerCase();s?f(s).then(r=>{r.hits.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),p(r.hits)}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),n.classList.add("hidden")}):n.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
