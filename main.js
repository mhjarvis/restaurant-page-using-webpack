(()=>{"use strict";function e(e,n,t){const i=document.querySelector(e),a=document.createElement(n);a.id=t,i.appendChild(a)}function n(e,n){document.querySelector(e).innerHTML=n}const t=()=>{e("#content","footer","footer"),e("#footer","h6","copyright"),n("#copyright",'&#169; <a href="https://github.com/mhjarvis" id="github-link">mhjarvis</a> | 2022')},i=function(){e("#content","header","header"),e("#header","span","brand"),n("#brand","The Kraken"),e("#header","nav","nav"),e("#nav","p","home"),n("#home","Home"),e("#nav","p","menu"),n("#menu","Menu"),e("#nav","p","contact"),n("#contact","Contact"),e("#header","div","social-media"),e("#social-media","img","facebook"),document.getElementById("facebook").src="../dist/images/facebook.png",e("#social-media","img","instagram"),document.getElementById("instagram").src="../dist/images/instagram.png"};let a=()=>{e("#content","main","main"),e("#main","section","left"),e("#left","h2","slogan"),n("#slogan","Seafood<br>Served Raw"),e("#left","p","sub-title"),n("#sub-title","Horrible tasting food."),e("#main","section","right"),e("#right","img","kraken-img"),document.querySelector("#kraken-img").src="../dist/images/kraken.png"};function m(){document.getElementById("content").innerHTML=""}i(),a(),t(),function o(){document.getElementById("home").addEventListener("click",(function(){m(),i(),a(),t(),o()})),document.getElementById("menu").addEventListener("click",(function(){m(),i(),e("#content","main","main"),e("#main","section","left"),e("#left","h2","menu-title"),n("#menu-title","Menu"),e("#left","div","menu-container"),e("#menu-container","p","menu-item-1"),n("#menu-item-1","Octupus legs in ink gravy $88"),e("#menu-container","p","menu-item-2"),n("#menu-item-2","Squid live and kicking $88"),e("#menu-container","p","menu-item-3"),n("#menu-item-3","Shrimp dipped in ink cocktail sauce $88"),e("#main","section","right"),e("#right","img","kraken-img"),document.querySelector("#kraken-img").src="../dist/images/kraken.png",t(),o()})),document.getElementById("contact").addEventListener("click",(function(){m(),i(),a(),t(),o()}))}()})();