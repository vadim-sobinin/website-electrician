(()=>{"use strict";document.getElementById("menu-list").addEventListener("click",(e=>{if(e.target.closest("ul>li>a")){e.preventDefault();const t=e.target.closest("a").hash;document.querySelector(t).scrollIntoView({behavior:"smooth"})}})),(()=>{const e=document.querySelectorAll(".show-modal"),t=document.querySelector(".modal-overlay"),l=document.querySelector("#callback"),o=l.querySelector(".modal-close");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),c(!0)}))})),t.addEventListener("click",(e=>{c(!1)})),o.addEventListener("click",(e=>{c(!1)}));const c=e=>{e&&(t.style.opacity=0,l.style.opacity=0,t.style.display="block",l.style.display="block"),function({timing:e,draw:t,duration:l}){let o=performance.now();requestAnimationFrame((function c(a){let n=(a-o)/l;n>1&&(n=1);let i=e(n);t(i),n<1&&requestAnimationFrame(c)}))}({duration:500,timing:e=>e,draw(o){e?(l.style.opacity=o,t.style.opacity=o):(l.style.opacity=1-o,t.style.opacity=1-o),"0"===l.style.opacity&&(l.style.display="none",t.style.display="none")}})}})()})();