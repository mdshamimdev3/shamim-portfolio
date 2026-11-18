
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const savedTheme=localStorage.getItem('shamim-theme');if(savedTheme)document.documentElement.dataset.theme=savedTheme;
$('#themeToggle')?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;localStorage.setItem('shamim-theme',next)});
$('#menuToggle')?.addEventListener('click',()=>$('#navLinks')?.classList.toggle('open'));
$$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>reveal.observe(el));
function toast(msg){const el=$('#toast');if(!el)return;el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600)}
const reviewKey='shamim-reviews-v1';
function readReviews(){try{return JSON.parse(localStorage.getItem(reviewKey)||'[]')}catch{return []}}
function writeReviews(items){localStorage.setItem(reviewKey,JSON.stringify(items))}
$('#reviewForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const item={id:Date.now(),name:f.name.value.trim(),role:f.role.value.trim(),rating:Number(f.rating.value),message:f.message.value.trim(),status:'pending',date:new Date().toISOString()};if(!item.name||!item.message)return;const all=readReviews();all.unshift(item);writeReviews(all);f.reset();toast('Review submitted for approval. Thank you!')});
function renderReviews(){const target=$('#reviewList');if(!target)return;const items=readReviews().filter(x=>x.status==='approved');target.innerHTML=items.length?items.map(x=>`<article class="card"><div class="accent">${'★'.repeat(x.rating)}${'☆'.repeat(5-x.rating)}</div><p>“${escapeHTML(x.message)}”</p><b>${escapeHTML(x.name)}</b><div class="mono">${escapeHTML(x.role||'Visitor')}</div></article>`).join(''):'<div class="empty">No published reviews yet. Be the first to leave one.</div>'}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
renderReviews();
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const subject=encodeURIComponent('Portfolio inquiry — '+f.name.value);const body=encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\nProject type: ${f.project.value}\nBudget: ${f.budget.value}\n\n${f.message.value}`);window.location.href=`mailto:mdshamimdev3@gmail.com?subject=${subject}&body=${body}`;toast('Opening your email app…')});
if($('#adminReviews')){const list=$('#adminReviews');function draw(){const items=readReviews();list.innerHTML=items.length?items.map(x=>`<tr><td>${escapeHTML(x.name)}</td><td>${'★'.repeat(x.rating)}</td><td>${escapeHTML(x.message)}</td><td><span class="tag">${x.status}</span></td><td>${x.status==='pending'?`<button class="small-btn" data-approve="${x.id}">Approve</button> `:''}<button class="small-btn danger" data-delete="${x.id}">Delete</button></td></tr>`).join(''):'<tr><td colspan="5" class="empty">No reviews submitted yet.</td></tr>';$('#reviewCount').textContent=items.length;$('#pendingCount').textContent=items.filter(x=>x.status==='pending').length;$('#approvedCount').textContent=items.filter(x=>x.status==='approved').length}
list.addEventListener('click',e=>{const a=e.target.closest('[data-approve]'),d=e.target.closest('[data-delete]');let items=readReviews();if(a)items=items.map(x=>x.id==a.dataset.approve?{...x,status:'approved'}:x);if(d)items=items.filter(x=>x.id!=d.dataset.delete);writeReviews(items);draw();toast(a?'Review approved':'Review deleted')});draw()}
