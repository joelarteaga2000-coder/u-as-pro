(function(){
'use strict';
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
  const w=document.getElementById('waBtn');if(w)w.classList.toggle('show',window.scrollY>200);
},{passive:true});
const burger=document.getElementById('burger'),mob=document.getElementById('mobMenu');let open=false;
if(burger){burger.addEventListener('click',()=>{open=!open;mob.classList.toggle('open',open);const s=burger.querySelectorAll('span');s[0].style.transform=open?'rotate(45deg) translate(4px,4px)':'';s[1].style.transform=open?'rotate(-45deg) translate(4px,-4px)':''});document.querySelectorAll('.mml').forEach(l=>l.addEventListener('click',()=>{open=false;mob.classList.remove('open');burger.querySelectorAll('span').forEach(s=>s.style.transform='')}))}
const obs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i%5*60);obs.unobserve(e.target)}})},{threshold:.07,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Button jump animation
document.querySelectorAll('.btn-pop,.btn-outline-pop,.nl,.pp-card,.pb').forEach(el=>{
  el.addEventListener('mouseenter',()=>{el.style.transition='transform .15s cubic-bezier(.16,1,.3,1),box-shadow .15s'});
});

// Ticker
const ticker=document.querySelector('.hero-ticker');
if(ticker){const items=[...ticker.children];items.forEach(item=>{const clone=item.cloneNode(true);ticker.appendChild(clone)})}

const form=document.getElementById('resForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('.btn-pop-full');const o=b.textContent;b.textContent='¡CITA CONFIRMADA! ✦';b.style.background='#00cc88';setTimeout(()=>{b.textContent=o;b.style.background='';form.reset()},3500)})}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-72,behavior:'smooth'})}})});
})();
