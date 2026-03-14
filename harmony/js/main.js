// Preview bar
(function(){
  if(!sessionStorage.getItem('hh_client'))return;
  const b=document.createElement('div');
  b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:9999;height:38px;background:rgba(9,9,7,.97);border-bottom:1px solid rgba(192,155,83,.2);display:flex;align-items:center;justify-content:space-between;padding:0 24px;font-family:Jost,sans-serif;font-size:11px;box-sizing:border-box;backdrop-filter:blur(12px)';
  b.innerHTML=`<div style="display:flex;align-items:center;gap:10px"><span style="font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#C09B53;font-weight:600">Preview mode</span><span style="width:1px;height:14px;background:rgba(192,155,83,.25)"></span><span style="color:#A89880;font-size:10px">Harmony Horses — draft</span></div><div style="display:flex;align-items:center;gap:14px"><a href="index.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Home</a><a href="services.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Services</a><a href="facilities.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Facilities</a><a href="staff.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Staff</a><a href="events.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Events</a><a href="contact.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Contact</a><a href="instagram.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6B5E4E;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Instagram</a><span style="width:1px;height:14px;background:rgba(192,155,83,.25)"></span><a href="../harmony-preview.html" style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#C09B53;text-decoration:none;background:rgba(192,155,83,.1);border:1px solid rgba(192,155,83,.25);padding:3px 9px" onmouseover="this.style.background='rgba(192,155,83,.2)'" onmouseout="this.style.background='rgba(192,155,83,.1)'">← Dashboard</a></div>`;
  document.body.prepend(b);
  const nav=document.querySelector('.nav');
  if(nav){const h=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))||72;document.documentElement.style.setProperty('--nav-h',(h+38)+'px');nav.style.top='38px';}
})();

// Nav scroll
const _nav=document.querySelector('.nav');
if(_nav){const s=()=>_nav.classList.toggle('scrolled',scrollY>20);window.addEventListener('scroll',s,{passive:true});s();}

// Hamburger
const _tog=document.getElementById('navTog'),_drw=document.getElementById('navDrw');
if(_tog&&_drw){_tog.addEventListener('click',()=>{const o=_tog.classList.toggle('open');_drw.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''});_drw.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{_tog.classList.remove('open');_drw.classList.remove('open');document.body.style.overflow=''}));}

// Active link
const _pg=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a,.nav-drawer a').forEach(a=>{const h=a.getAttribute('href')||'';if(h&&(_pg===h||(_pg===''||_pg==='index.html')&&h.includes('index')))a.classList.add('active');});

// Reveal
const _ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.07,rootMargin:'0px 0px -36px 0px'});
document.querySelectorAll('.rev').forEach(el=>_ro.observe(el));
