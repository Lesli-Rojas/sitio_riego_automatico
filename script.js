const $=s=>document.querySelector(s);

/* Menú */
const menu=$('#menu'),nav=$('nav');
function cerrar(){nav.classList.remove('abierto');menu.classList.remove('x');menu.setAttribute('aria-expanded','false')}
menu.onclick=()=>{const a=nav.classList.toggle('abierto');menu.classList.toggle('x',a);menu.setAttribute('aria-expanded',a)};
document.querySelectorAll('nav a').forEach(a=>a.onclick=cerrar);

/* Barra con fondo al bajar */
const barra=$('#barra');
function fija(){barra.classList.toggle('fija',scrollY>40)}
addEventListener('scroll',fija,{passive:true});fija();

/* Imágenes que no cargan: se muestra un espacio con su descripción */
function ph(i){const d=document.createElement('div');d.className='ph';d.textContent=i.dataset.ph;i.replaceWith(d)}
document.querySelectorAll('img[data-ph]').forEach(i=>{if(i.complete&&!i.naturalWidth)ph(i);else i.addEventListener('error',()=>ph(i))});
