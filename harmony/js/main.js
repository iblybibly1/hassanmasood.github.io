// Preview bar — shown when client arrives from client-preview.html
(function() {
  if (!sessionStorage.getItem('hh_preview')) return;
  const bar = document.createElement('div');
  bar.id = 'previewBar';
  bar.innerHTML = `<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap"><span style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#C09B53;font-family:monospace;font-weight:500">Preview mode</span><span style="width:1px;height:14px;background:rgba(192,155,83,.3)"></span><span style="font-size:11px;color:#A89880;font-family:monospace">Harmony Horses — client draft</span></div><div style="display:flex;align-items:center;gap:10px"><a href="index.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#6B5E4E;font-family:monospace;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Home</a><a href="services.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#6B5E4E;font-family:monospace;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Services</a><a href="facilities.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#6B5E4E;font-family:monospace;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Facilities</a><a href="staff.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#6B5E4E;font-family:monospace;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Staff</a><a href="events.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#6B5E4E;font-family:monospace;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Events</a><a href="contact.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#6B5E4E;font-family:monospace;text-decoration:none" onmouseover="this.style.color='#C09B53'" onmouseout="this.style.color='#6B5E4E'">Contact</a><span style="width:1px;height:14px;background:rgba(192,155,83,.3)"></span><a href="../client-preview.html" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#C09B53;font-family:monospace;text-decoration:none;background:rgba(192,155,83,.1);border:1px solid rgba(192,155,83,.25);padding:4px 10px">← Dashboard</a></div>`;
  Object.assign(bar.style,{position:'fixed',top:'0',left:'0',right:'0',zIndex:'9999',background:'rgba(10,10,8,.97)',borderBottom:'1px solid rgba(192,155,83,.18)',padding:'8px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',backdropFilter:'blur(12px)',boxSizing:'border-box'});
  document.body.prepend(bar);
  const navEl = document.querySelector('.nav');
  if (navEl) { navEl.style.top = '37px'; const h = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))||72; document.documentElement.style.setProperty('--nav-h',(h+37)+'px'); }
})();

const nav = document.querySelector('.nav');
if (nav) { const s=()=>nav.classList.toggle('scrolled',scrollY>20); window.addEventListener('scroll',s,{passive:true}); s(); }

const toggle=document.getElementById('navToggle'),drawer=document.getElementById('navDrawer');
if(toggle&&drawer){toggle.addEventListener('click',()=>{const o=toggle.classList.toggle('open');drawer.classList.toggle('open',o);document.body.style.overflow=o?'hidden':'';});drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.classList.remove('open');drawer.classList.remove('open');document.body.style.overflow='';}));}

const page=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a,.nav-drawer a').forEach(a=>{const h=a.getAttribute('href')||'';if(h&&(page===h||(page===''||page==='index.html')&&h.includes('index')))a.classList.add('active');});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
