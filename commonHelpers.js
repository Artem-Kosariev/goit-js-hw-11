import{i as n,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function p(a){const s=new URLSearchParams({key:"45426984-94cd792edc1ba8c0f2dda7afb",q:`${a.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(a){const s=document.querySelector(".gallery"),r=a.hits.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" download=false>
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" width=360  onclick="return false" data-source="${t.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${t.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${t.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${t.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `).join("");s.innerHTML=r}const c=document.querySelector(".form"),u=document.querySelector('input[name="query"]'),d=document.querySelector(".loader"),g=document.querySelector(".gallery");n.settings({messageColor:"#fafafb",position:"bottomRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let i;c.addEventListener("submit",a=>{if(a.preventDefault(),u.value.trim()===""){n.show({message:"Please enter a search query."});return}g.innerHTML="",d.classList.remove("visually-hidden"),p(u.value.trim()).then(r=>{if(r.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}else m(r);i?i.refresh():i=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(r=>{console.log(r)}).finally(()=>{d.classList.add("visually-hidden"),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
