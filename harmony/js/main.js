// Preview bar
(function(){
  if(!sessionStorage.getItem('hh_client'))return;
  const b=document.createElement('div');
  b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:9999;height:32px;background:rgba(255,255,255,.97);border-bottom:1px solid #e0e0e0;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,5vw,40px);box-sizing:border-box;';
  b.innerHTML=`<span style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:#aaa">Preview — Harmony Horses draft</span><div style="display:flex;align-items:center;gap:18px"><a href="index.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#bbb;text-decoration:none" onmouseover="this.style.color='#1a1a1a'" onmouseout="this.style.color='#bbb'">Home</a><a href="services.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#bbb;text-decoration:none" onmouseover="this.style.color='#1a1a1a'" onmouseout="this.style.color='#bbb'">Services</a><a href="facilities.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#bbb;text-decoration:none" onmouseover="this.style.color='#1a1a1a'" onmouseout="this.style.color='#bbb'">Facilities</a><a href="staff.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#bbb;text-decoration:none" onmouseover="this.style.color='#1a1a1a'" onmouseout="this.style.color='#bbb'">Team</a><a href="events.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#bbb;text-decoration:none" onmouseover="this.style.color='#1a1a1a'" onmouseout="this.style.color='#bbb'">Events</a><a href="contact.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#bbb;text-decoration:none" onmouseover="this.style.color='#1a1a1a'" onmouseout="this.style.color='#bbb'">Contact</a><span style="color:#e0e0e0">|</span><a href="../harmony-preview.html" style="font-family:'Lato',sans-serif;font-size:9px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#1a1a1a;text-decoration:none;border-bottom:1px solid #1a1a1a;padding-bottom:1px" onmouseover="this.style.opacity='.45'" onmouseout="this.style.opacity='1'">← Dashboard</a></div>`;
  document.body.prepend(b);
  const nav=document.querySelector('.nav');
  if(nav){const h=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))||64;document.documentElement.style.setProperty('--nav-h',(h+32)+'px');nav.style.top='32px';}
})();

// Nav solid on scroll + white-over-hero
const _nav=document.querySelector('.nav');
if(_nav){
  const hasHero=!!document.querySelector('.hero,.ph-full');
  if(hasHero)_nav.classList.add('over-hero');
  const fn=()=>{const past=scrollY>60;_nav.classList.toggle('solid',past);if(hasHero)_nav.classList.toggle('over-hero',!past);};
  window.addEventListener('scroll',fn,{passive:true});fn();
}

// Mobile nav
const _tog=document.getElementById('navTog'),_drw=document.getElementById('navDrw');
if(_tog&&_drw){
  _tog.addEventListener('click',()=>{const o=_tog.classList.toggle('open');_drw.classList.toggle('open',o);document.body.style.overflow=o?'hidden':'';});
  _drw.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{_tog.classList.remove('open');_drw.classList.remove('open');document.body.style.overflow='';}));
}

// Active link
const _pg=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links-left a,.nav-links-right a,.nav-drawer a').forEach(a=>{const h=a.getAttribute('href')||'';if(h===_pg||((_pg===''||_pg==='index.html')&&h==='index.html'))a.style.opacity='.4';});

// Reveal
const _ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.08,rootMargin:'0px 0px -28px 0px'});
document.querySelectorAll('.rev').forEach(el=>_ro.observe(el));
