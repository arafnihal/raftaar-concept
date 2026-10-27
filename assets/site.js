/* Raftaar website concept by LeadSpells. Product data, text and photos come from shopraftaar.com. */
(function(){
const CDN='https://cdn.shopify.com/s/files/1/0828/2639/5866/files/';
const img=(n,w)=>CDN+encodeURIComponent(n).replace(/%2F/g,'/')+'?width='+(w||900);
const cut=n=>'cutouts/'+n.replace(/\.[^.]+$/,'')+'.webp';
const LIVE='https://shopraftaar.com';
const FREE_SHIP=150, GIFT=250;
const SZ=['XS','S','M','L','XL'];
const charts={
  hoodie:{label:'Hoodies',img:'WhatsApp_Image_2026-06-22_at_9.06.54_AM_1.jpg'},
  tee:{label:'Oversized tees',img:'WhatsApp_Image_2026-06-22_at_9.06.54_AM.jpg'},
  boxy:{label:'Boxy tees (girls)',img:'852F8142-48BA-4507-B784-29A198CFDDFF.png'},
  kids:{label:'Kids tees',img:'IMG-8610.png'}
};
const hoodieFeatures=['420 GSM heavyweight cotton fleece','Oversized drop-shoulder fit','Double-layer hood','Soft brushed inside for all-day comfort','Ribbed cuffs and hem'];
const toteDesc='Hand-embroidered by skilled artisans, made for carrying your everyday essentials with a piece of home.';
const toteFeatures=['100% handmade and hand-embroidered','Natural canvas','Roomy enough for everyday essentials'];

/* each colour: cut = [first side shown, other side], photos = lifestyle/model shots */
const P=[
 {id:'majajan-hoodie',n:'MAJAJAN Hoodie',word:'Majajan',g:'ਮਜਾਜਣ',cat:'hoodies',price:89,isNew:true,
  tagline:'A tribute to the modern Punjabi woman: confident, rooted and unapologetically herself.',
  desc:'An oversized back graphic inspired by Punjabi culture and everyday confidence, with embroidery on the front. Heavyweight cotton fleece that stays warm and keeps its shape.',
  features:hoodieFeatures,chart:'hoodie',sizes:SZ,theme:['#5C1724','#FFFFFF','#C9A27E'],tags:['420 GSM fleece','Printed back','Embroidered front'],
  colors:[{name:'Wine',hex:'#5C1724',cut:['60785D3A-ABB3-4616-880C-32ED5FFDD935.jpg','E053763C-691F-4477-8ED9-42EF7E3B37FA.jpg'],photos:['women-hoodie-back-3.png','women-hoodie-front-3.png','714722454_18106585489874117_3016553227224133989_n.jpg']}]},
 {id:'akaal-tee',n:'AKAAL Oversized Tee',word:'Akaal',g:'ਅਕਾਲ',cat:'tees',price:45,
  tagline:'Beyond birth. Beyond death. Beyond fear.',
  desc:'Inspired by the spirit of the Timeless One. A powerful bear graphic and bold back print that stand for strength, resilience and purpose.',
  features:['280 GSM micro terry cotton','Heavyweight, oversized fit','Durable neck rib','Screen printed'],chart:'tee',sizes:SZ,
  out:{Black:['M','L','XL'],'Acid wash':['M','L','XL']},theme:['#000000','#FFFFFF','#2B2B2B'],tags:['280 GSM','Screen printed','M, L, XL sold out'],
  colors:[{name:'Black',hex:'#151515',cut:['akaal-black.jpg','akaal-black_dfb6d146-283a-4412-9ee4-8c0fef5bbaf9.jpg'],photos:['IMG_4607.png','IMG_4736.png','IMG_5302_1.jpg']},
          {name:'Acid wash',hex:'#6E6C68',cut:['akaal-acid-wash_2.jpg','akaal-acid-wash.jpg'],photos:['men-tshirt-front-2_409642cc-57a2-41c8-addb-9acfaf047197.png','men-tshirt-back-2.jpg']}]},
 {id:'mutiyaar-hoodie',n:'MUTIYAAR Hoodie',word:'Mutiyaar',g:'ਮੁਟਿਆਰ',cat:'hoodies',price:80,
  tagline:'A vintage scooter and soft florals: old-school charm on dusty pink.',
  desc:'Mutiyaar means a young woman with her own style, presence and personality. This one brings an old-school romantic feel into everyday streetwear.',
  features:['Cotton fleece','Oversized fit','Vintage scooter back graphic'],chart:'hoodie',sizes:['XS','S','M','L'],theme:['#E9B9C3','#5C1724','#F5D6DC'],tags:['Vintage scooter print','Oversized fit','Dusty pink'],
  colors:[{name:'Dusty pink',hex:'#E9B9C3',cut:['7C5AD3D4-CCB8-4A11-8212-3385E53E0B06.jpg','6119B058-6F0A-4696-B627-3CEAF539CB46.jpg'],photos:['DDC049DF-C8EB-403B-B767-344826637CC5.jpg']}]},
 {id:'mindset-hoodie',n:'MINDSET Hoodie',word:'Mindset',g:'',cat:'hoodies',price:89,
  tagline:'Built for those who stay focused when others quit.',
  desc:'Clean, minimal embroidery on a structured oversized hoodie. It stands for discipline, consistency and self-belief.',
  features:hoodieFeatures,chart:'hoodie',sizes:SZ,theme:['#3A201C','#F3E9DF','#B38970'],tags:['420 GSM fleece','Hawk back print','Wine or black'],
  colors:[{name:'Wine',hex:'#4B2420',cut:['mindset-hoodie-back.png','mindset-hoodie-front.png'],photos:['EC9B523C-ED61-417A-998B-F1025A79F76A.jpg','F0B2DF82-E4F5-4B6A-944B-195E94749D1D.jpg']},
          {name:'Black',hex:'#151515',cut:['mindset-hoodie-black-back.png','mindset-hoodie-black-front.png'],photos:[]}]},
 {id:'punjab-heritage-hoodie',n:'Punjab Heritage Hoodie',word:'Punjab',g:'ਪੰਜਾਬ',cat:'hoodies',price:89,
  tagline:'Carry your roots. Wear your identity.',
  desc:'A heritage-inspired graphic on a structured oversized hoodie, made for those who take pride in where they come from.',
  features:hoodieFeatures,chart:'hoodie',sizes:SZ,theme:['#D8C4A8','#000000','#BFA684'],tags:['Heritage graphic','420 GSM fleece','Black or beige'],
  colors:[{name:'Black',hex:'#151515',cut:['punjab-hoodie-front.png','punjab-hoodie-back.png'],photos:[]},
          {name:'Beige',hex:'#D8C4A8',cut:['ChatGPT_Image_Jun_26_2026_03_20_26_PM.png','ChatGPT_Image_Jun_26_2026_03_22_03_PM.png'],photos:['9A9A7D99-9E30-4850-90E4-C1122533A143.png']}]},
 {id:'gurmukhi-hoodie',n:'Gurmukhi Hoodie',word:'Gurmukhi',g:'ਗੁਰਮੁਖੀ',cat:'hoodies',price:85,
  tagline:'Gurmukhi on white heavyweight fleece, for those proud of where they come from.',
  desc:'A heritage graphic of Punjab in Gurmukhi on a clean white oversized hoodie, with a seamless one-piece hood.',
  features:hoodieFeatures,chart:'hoodie',sizes:['XS','S','M','L'],out:{White:['XS','M']},theme:['#9EC0E6','#FFFFFF','#C3D8F0'],tags:['Gurmukhi map','Seamless hood','XS, M sold out'],
  colors:[{name:'White',hex:'#F1F0EC',cut:['IMG-5955.jpg'],photos:['71D60CCE-6564-43BE-8CAD-BFFAA43F6991.jpg','F7443C83-1616-46B9-9FB2-25CF4B61AC3A.jpg','6FFD7223-1C01-43C3-B70D-28C6994325D2.png','IMG_4419_JPG.jpg']}]},
 {id:'majajan-tee',n:'MAJAJAN Oversized Tee',cat:'tees',price:39,
  tagline:'The clean everyday tee, with a beige RAFTAAR logo.',
  desc:'A minimal oversized black tee with a beige embroidered RAFTAAR logo on the chest and the MAJAJAN print on the back.',
  features:['240 GSM cotton','Oversized fit','High-density beige embroidery','Reinforced stitching'],chart:'tee',sizes:SZ,
  colors:[{name:'Black',hex:'#151515',cut:['IMG_4207_JPG_f01a47ff-0f72-4336-be25-a7d03ed4368c.jpg','IMG_4211_JPG_b8ff35c0-ae96-400e-a56b-2e4c8c34de00.jpg'],photos:['women-tshirt-front_caba2f97-68ec-4031-8147-a0296db23a34.png','women-tshirt-back.png']}]},
 {id:'panjab-tee',n:'PANJAB Tee',cat:'tees',price:44.99,
  tagline:'ਪੰਜਾਬ / PANJAB embroidery on a clean, everyday tee.',
  desc:'Punjabi identity with a minimal look. Made in separate fits for boys and girls, with a contrast white neck rib.',
  features:['Heavyweight cotton','Relaxed fit for boys and girls','Embroidered chest and back'],chart:'boxy',sizes:SZ,
  colors:[{name:'Light blue',hex:'#9EC0E6',cut:['IMG-8641.jpg'],photos:['267A8B00-2F85-4ECB-ACD1-9DC585F39D7E.jpg','4A38708A-67BE-463D-A677-9F24FD9C20D2.jpg','D187F66A-D83B-4E56-853D-840DE5B45D90.jpg']},
          {name:'Baby pink',hex:'#F2B8C6',cut:['BEE5A24A-5414-4F1B-96D0-10C9799CA31E.png'],photos:['IMG-8605.png']}]},
 {id:'panjab-kids-tee',n:'PANJAB Kids Tee',cat:'tees',price:34.99,
  tagline:'A little piece of Panjab, made for the next generation.',
  desc:'ਪੰਜਾਬ / PANJAB on the front, with a Panjab map and the Gurmukhi alphabet embroidered on the back.',
  features:['Soft cotton','Embroidered front and back','Ages 3 to 10'],chart:'kids',sizes:['3–4 y','5–6 y','7–8 y','9–10 y'],
  colors:[{name:'Light blue',hex:'#9EC0E6',cut:['IMG-8642.jpg'],photos:['IMG-8626.jpg','IMG-8603.jpg']}]}
];
const totes=[
 ['ਪੰਜਾਬ','IMG_4285_JPG.jpg','White','Panjab'],
 ['ਪੰਜਾਬ ਦੀ ਰੂਹ','IMG_4289.png','Beige','Panjab di rooh'],
 ['ਬਸੰਤ','IMG_4283_JPG.jpg','White','Basant'],
 ['ਸ਼ੁਕਰਗੁਜ਼ਾਰ','IMG_4290.png','Beige','Shukarguzaar'],
 ['ਮਜਾਜਣ','IMG_4282_JPG.jpg','White','Majajan'],
 ['ਸੋਹਣੀ','IMG_4284_JPG.jpg','White','Sohni'],
 ['ਚੜ੍ਹਦੀਕਲਾ','IMG_4286_JPG.jpg','Beige','Chardikala']
];
totes.forEach((t,i)=>P.push({id:'bag-'+(i+1),n:'Carry Bag, '+t[3],gur:t[0],cat:'bags',price:19.99,
  tagline:'Hand-embroidered '+t[0]+' carry bag.',desc:toteDesc,features:toteFeatures,sizes:['One size'],
  colors:[{name:t[2],hex:t[2]==='White'?'#F1F0EC':'#E3D3BC',cut:[t[1]],photos:['ChatGPT_Image_Jun_22_2026_04_31_36_PM.png']}]}));

const byId=id=>P.find(p=>p.id===id);
const money=v=>'$'+(Math.round(v*100)/100).toFixed(v%1?2:0);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch=matchMedia('(hover: none)').matches;
const arrowL='<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
const arrowR='<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

/* ---------- storage-safe bag ---------- */
let bag=[];
try{bag=JSON.parse(localStorage.getItem('rft_bag')||'[]')||[]}catch(e){bag=[]}
const saveBag=()=>{try{localStorage.setItem('rft_bag',JSON.stringify(bag))}catch(e){} renderCount();};
const bagTotal=()=>bag.reduce((s,l)=>s+(byId(l.id)?.price||0)*l.q,0);
function addToBag(id,color,size){
  const ex=bag.find(l=>l.id===id&&l.c===color&&l.s===size);
  ex?ex.q++:bag.push({id,c:color,s:size,q:1});saveBag();renderBag();openDrawer('bag');
}

/* ---------- shared header / footer ---------- */
const page=document.body.dataset.page;
const nav=[['shop.html','Shop','shop'],['story.html','Story','story'],['help.html','Help','help']];
document.getElementById('top').innerHTML=`
<div class="concept">Website concept for Raftaar, designed by LeadSpells. This is a preview, not the live shop. <a href="${LIVE}" target="_blank" rel="noopener">Visit the live shop</a></div>
<header class="top"><div class="bar">
  <div><button class="menubtn" aria-expanded="false" aria-controls="mainnav">Menu</button>
  <nav id="mainnav" aria-label="Main">${nav.map(n=>`<a href="${n[0]}"${page===n[2]?' aria-current="page"':''}>${n[1]}</a>`).join('')}</nav></div>
  <a class="logo" href="index.html" aria-label="Raftaar home"><img class="b" src="${img('logo.png',200)}" alt="Raftaar"><img class="w" src="${img('logo-white.png',200)}" alt=""></a>
  <button class="bagbtn" data-open="bag">Bag <span class="count"><span>0</span></span></button>
</div></header>`;
const mb=document.querySelector('.menubtn'),mn=document.getElementById('mainnav');
mb.onclick=()=>{const o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
if(document.body.classList.contains('has-hero')){const f=()=>document.body.classList.toggle('scrolled',scrollY>innerHeight*.6);addEventListener('scroll',f,{passive:true});f();}

document.getElementById('foot').innerHTML=`
<footer class="site"><div class="wrap">
 <div class="big cond" aria-hidden="true">Raftaar</div>
 <div class="cols">
  <div><p>Streetwear rooted in Punjabi heritage, built for the next generation.</p></div>
  <div><h4>Shop</h4><ul><li><a href="shop.html?c=hoodies">Hoodies</a></li><li><a href="shop.html?c=tees">Tees</a></li><li><a href="shop.html?c=bags">Carry bags</a></li><li><a href="shop.html">Everything</a></li></ul></div>
  <div><h4>Help</h4><ul><li><a href="help.html#shipping">Shipping</a></li><li><a href="help.html#returns">Returns</a></li><li><a href="help.html#sizing">Size guide</a></li><li><a href="help.html#contact">Contact</a></li></ul></div>
  <div><h4>Follow</h4><ul><li><a href="https://www.instagram.com/raftaar.co/" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://www.facebook.com/share/1B72fejxLT/" target="_blank" rel="noopener">Facebook</a></li><li><a href="mailto:officialraftaar.co@gmail.com">officialraftaar.co@gmail.com</a></li><li><a href="tel:+61469872444">+61 469 872 444</a></li></ul></div>
 </div>
 <div class="base"><span>© 2026 RAFTAAR</span><span>Concept design by LeadSpells</span></div>
</div></footer>
<div class="scrim" data-close></div>
<aside class="drawer" id="bag" aria-label="Your bag" aria-hidden="true">
  <header><b>Your bag</b><button data-close aria-label="Close bag">Close</button></header>
  <div class="inner"></div><div class="foot"></div>
</aside>
<aside class="drawer" id="sizechart" aria-label="Size guide" aria-hidden="true">
  <header><b>Size guide</b><button data-close aria-label="Close size guide">Close</button></header>
  <div class="inner chart"></div>
</aside>`;

/* ---------- drawers + bag ---------- */
const scrim=document.querySelector('.scrim');
function openDrawer(id){document.querySelectorAll('.drawer').forEach(d=>{const on=d.id===id;d.classList.toggle('on',on);d.setAttribute('aria-hidden',!on)});scrim.classList.add('on');}
function closeDrawers(){document.querySelectorAll('.drawer').forEach(d=>{d.classList.remove('on');d.setAttribute('aria-hidden','true')});scrim.classList.remove('on');}
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open]');if(o){e.preventDefault();if(o.dataset.open==='bag')renderBag();openDrawer(o.dataset.open);}
  if(e.target.closest('[data-close]'))closeDrawers();
  const q=e.target.closest('[data-q]');if(q){const l=bag[+q.dataset.q];l.q+= +q.dataset.d;if(l.q<1)bag.splice(+q.dataset.q,1);saveBag();renderBag();}
  const a=e.target.closest('[data-add]');if(a){const p=byId(a.dataset.add);bag.push({id:p.id,c:p.colors[0].name,s:p.sizes[0]==='One size'?'One size':'M',q:1});saveBag();renderBag();}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawers()});
function renderCount(){const c=bag.reduce((s,l)=>s+l.q,0);document.querySelectorAll('.bagbtn .count span').forEach(n=>n.textContent=c)}
function meter(t,goal,done,todo){const pct=Math.min(100,t/goal*100);return `<div class="meter"><p>${t>=goal?done:todo.replace('{x}',money(goal-t))}</p><div class="bar"><i style="width:${pct}%"></i></div></div>`}
function renderBag(){
  const d=document.getElementById('bag');const inner=d.querySelector('.inner'),ft=d.querySelector('.foot');const t=bagTotal();
  let h=meter(t,FREE_SHIP,'You\'ve got free shipping.','You\'re {x} away from free shipping.')+meter(t,GIFT,'A free handcrafted gift is going in your parcel.','Spend {x} more for a free handcrafted gift.');
  if(!bag.length)h+='<p class="empty">Your bag is empty. Start with a hoodie or a hand-embroidered carry bag.</p>';
  bag.forEach((l,i)=>{const p=byId(l.id);if(!p)return;const col=p.colors.find(c=>c.name===l.c)||p.colors[0];
    h+=`<div class="line"><div class="th"><img src="${cut(col.cut[0])}" alt=""></div><div><b>${esc(p.n)}</b><div class="small">${esc(l.c)}${l.s&&l.s!=='One size'?', '+esc(l.s):''}</div><div class="q"><button data-q="${i}" data-d="-1" aria-label="One less">−</button>${l.q}<button data-q="${i}" data-d="1" aria-label="One more">+</button></div></div><b>${money(p.price*l.q)}</b></div>`});
  const adds=['bag-1','bag-4','bag-7','majajan-tee'].filter(id=>!bag.some(l=>l.id===id)).slice(0,3);
  if(bag.length&&t<GIFT)h+=`<div class="addons"><h5>Add a little extra</h5>${adds.map(id=>{const p=byId(id);return `<div class="addon"><div class="th"><img src="${cut(p.colors[0].cut[0])}" alt=""></div><div><b class="${p.gur?'gur':''}">${esc(p.gur||p.n)}</b><div class="small">${money(p.price)}</div></div><button data-add="${id}">Add</button></div>`}).join('')}</div>`;
  inner.innerHTML=h;
  ft.innerHTML=`<div class="total"><span>Subtotal</span><span>${money(t)}</span></div><a class="btn solid block" href="${LIVE}" target="_blank" rel="noopener">Check out on the live shop</a><p class="small" style="margin-top:10px">In this preview, checkout opens Raftaar's current store.</p>`;
}
renderCount();

/* ---------- shared pieces ---------- */
function tile(p){
  const c=p.colors[0];const two=c.cut.length>1;
  const out=p.out&&Object.values(p.out).some(a=>a.length);
  return `<a class="tile" href="product.html?p=${p.id}">
   <div class="ph">${p.isNew?'<span class="tag wine">New</span>':out?'<span class="tag">Some sizes sold out</span>':''}
    <div class="flipper${two?'':' single'}"><img src="${cut(c.cut[0])}" alt="${esc(p.n)}" loading="lazy">${two?`<img class="back" src="${cut(c.cut[1])}" alt="" loading="lazy">`:''}</div></div>
   <div class="row"><span class="nm">${p.gur?`<span class="gur" style="color:var(--wine)">${p.gur}</span><br>`:''}${esc(p.gur?'Hand-embroidered carry bag':p.n)}</span><span class="pr">${money(p.price)}</span></div>
   <div class="sub">${p.colors.length>1?p.colors.map(c=>`<i style="background:${c.hex}" title="${esc(c.name)}"></i>`).join('')+' '+p.colors.length+' colours':two?'Hover to see the back':'&nbsp;'}</div>
  </a>`;
}
const hook='<svg class="hook" viewBox="0 0 100 50" aria-hidden="true"><path d="M50 3c-5 0-8 3.5-8 7" fill="none" stroke="#6f6a63" stroke-width="3" stroke-linecap="round"/><path d="M50 3c5 0 8 3.5 8 7 0 4.5-8 5.5-8 10" fill="none" stroke="#6f6a63" stroke-width="3" stroke-linecap="round"/><path d="M50 20 L5 44 Q1 47 6 48 L94 48 Q99 47 95 44 Z" fill="#1b1a18"/></svg>';

const MODELS=[
 ['women-hoodie-front-3.png','majajan-hoodie','MAJAJAN Hoodie'],
 ['IMG_4607.png','akaal-tee','AKAAL Oversized Tee'],
 ['71D60CCE-6564-43BE-8CAD-BFFAA43F6991.jpg','gurmukhi-hoodie','Gurmukhi Hoodie'],
 ['IMG-8626.jpg','panjab-kids-tee','PANJAB Kids Tee'],
 ['women-hoodie-back-3.png','majajan-hoodie','MAJAJAN Hoodie, back print'],
 ['IMG_4736.png','akaal-tee','AKAAL Oversized Tee, back print'],
 ['714722454_18106585489874117_3016553227224133989_n.jpg','majajan-hoodie','MAJAJAN Hoodie']
];
function buildRunway(root){
  const stage=root.querySelector('.stage'),who=root.querySelector('.who');
  stage.innerHTML=MODELS.map((m,i)=>`<div class="m" data-i="${i}" role="button" tabindex="-1" aria-label="${esc(m[2])}"><img src="${cut(m[0])}" alt="Model wearing the ${esc(m[2])}" loading="lazy"></div>`).join('')+'<div class="floor"></div>';
  const ms=[...stage.querySelectorAll('.m')];let cur=0,timer;
  function place(){const n=ms.length;const mob=innerWidth<760;
    ms.forEach((m,i)=>{let d=i-cur;if(d>n/2)d-=n;if(d<-n/2)d+=n;const a=Math.abs(d);
      const x=d*(mob?34:15),s=a===0?1:a===1?.64:a===2?.5:.42;
      m.style.transform=`translateX(calc(-50% + ${x}vw)) scale(${s})`;
      m.style.opacity=a===0?1:a===1?.55:a===2?.25:0;
      m.style.filter=a===0?'none':`blur(${a*1.2}px) grayscale(.35)`;
      m.style.zIndex=10-a;m.style.pointerEvents=a>2?'none':'auto';});
    const m=MODELS[cur],p=byId(m[1]);who.innerHTML=`<b>${esc(m[2])}</b><span>${esc(p.tagline)}</span><br><a href="product.html?p=${p.id}">Shop this, ${money(p.price)}</a>`;}
  const go=i=>{cur=(i+ms.length)%ms.length;place();restart()};
  ms.forEach((m,i)=>m.addEventListener('click',()=>go(i)));
  root.querySelector('[data-prev]').onclick=()=>go(cur-1);root.querySelector('[data-next]').onclick=()=>go(cur+1);
  function restart(){clearInterval(timer);if(!reduced)timer=setInterval(()=>{cur=(cur+1)%ms.length;place()},4200)}
  let sx=null;stage.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});stage.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));sx=null});
  addEventListener('resize',place);place();restart();
}

/* ---------- HOME ---------- */
if(page==='home'){
  // hero
  const shots=['714722454_18106585489874117_3016553227224133989_n.jpg','IMG_4375.png','IMG_5302_1.jpg'];
  const sh=document.querySelector('.hero .shots'),dots=document.querySelector('.hero .dots');
  sh.innerHTML=shots.map((s,i)=>`<img src="${img(s,1900)}" alt="" ${i?'loading="lazy"':''}>`).join('');
  dots.innerHTML=shots.map(()=>'<i></i>').join('');
  const ims=[...sh.children],ds=[...dots.children];let k=0;
  const show=i=>{ims.forEach((m,j)=>m.classList.toggle('on',j===i));ds.forEach((d,j)=>{d.classList.remove('on');if(j===i){void d.offsetWidth;d.classList.add('on')}})};
  show(0);if(!reduced)setInterval(()=>{k=(k+1)%ims.length;show(k)},5500);
  const h1=document.querySelector('.hero h1');h1.innerHTML=[...'RAFTAAR'].map((c,i)=>`<span style="animation-delay:${.06*i}s">${c}</span>`).join('');

  // the drop
  const D=['majajan-hoodie','akaal-tee','mutiyaar-hoodie','mindset-hoodie','punjab-heritage-hoodie','gurmukhi-hoodie'].map(byId);
  const dr=document.querySelector('.drop');let di=0,dt;
  const word=dr.querySelector('.word'),gw=dr.querySelector('.gword'),stage=dr.querySelector('.stage'),info=dr.querySelector('.info'),bars=dr.querySelector('.bars');
  bars.innerHTML=D.map(()=>'<i></i>').join('');
  function piece(p){const c=p.colors[0];return `<div class="swap"><div class="float"><div class="piece">${`<img src="${cut(c.cut[0])}" alt="${esc(p.n)}">`}${c.cut[1]?`<img class="back" src="${cut(c.cut[1])}" alt="">`:''}</div></div></div>`}
  function paint(i,dir){const p=D[i];const [bg,fg,wd]=p.theme;
    dr.style.setProperty('--c-bg',bg);dr.style.setProperty('--c-fg',fg);dr.style.setProperty('--c-word',wd);
    dr.classList.add('changing');
    const old=stage.querySelector('.swap');if(old){old.classList.add(dir>0?'out':'in');setTimeout(()=>old.remove(),900)}
    stage.insertAdjacentHTML('beforeend',piece(p));const nw=stage.lastElementChild;nw.classList.add(dir>0?'in':'out');requestAnimationFrame(()=>requestAnimationFrame(()=>nw.classList.remove('in','out')));
    word.classList.add('out');setTimeout(()=>{word.innerHTML=[...p.word].map(c=>`<span>${c}</span>`).join('');word.classList.remove('out');word.classList.add('in');requestAnimationFrame(()=>requestAnimationFrame(()=>word.classList.remove('in')));
      word.querySelectorAll('span').forEach((s,j)=>s.style.transitionDelay=(j*.03)+'s');},old?380:0);
    gw.textContent=p.g;
    setTimeout(()=>{dr.querySelectorAll('.tag').forEach((t,j)=>t.textContent=p.tags[j]);dr.classList.remove('changing')},old?650:0);
    info.innerHTML=`<div class="k">New drop</div><h2 class="cond">${esc(p.n.replace(/ (Hoodie|Oversized Tee)$/,''))}</h2><p>${esc(p.tagline)}</p><div class="price">${money(p.price)}</div><div class="acts"><a class="btn solid" href="product.html?p=${p.id}">View the ${p.cat==='tees'?'tee':'hoodie'}</a>${p.colors[0].cut[1]?'<button class="btn" data-turn>Turn around</button>':''}</div>`;
    const tb=info.querySelector('[data-turn]');if(tb)tb.onclick=()=>{const pc=stage.querySelector('.swap:last-child .piece');pc.classList.toggle('flip');restart()};
    [...bars.children].forEach((b,j)=>b.classList.toggle('on',j===i));
  }
  const goDrop=(i,dir)=>{di=(i+D.length)%D.length;paint(di,dir);restart()};
  dr.querySelector('[data-prev]').onclick=()=>goDrop(di-1,-1);dr.querySelector('[data-next]').onclick=()=>goDrop(di+1,1);
  function restart(){clearInterval(dt);if(!reduced)dt=setInterval(()=>{di=(di+1)%D.length;paint(di,1)},7000)}
  dr.addEventListener('mouseenter',()=>clearInterval(dt));dr.addEventListener('mouseleave',restart);
  let sx=null;dr.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});dr.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)goDrop(di+(dx<0?1:-1),dx<0?1:-1);sx=null});
  paint(0,1);restart();

  // rail
  const R=['majajan-hoodie','mindset-hoodie','akaal-tee','punjab-heritage-hoodie','mutiyaar-hoodie','majajan-tee','gurmukhi-hoodie','panjab-tee','panjab-kids-tee'].map(byId);
  const rail=document.querySelector('.rail'),ri=document.querySelector('.rail-info');
  rail.innerHTML=R.map((p,i)=>{const out=p.out&&Object.values(p.out)[0];const lab=p.isNew?'<span class="label wine">NEW</span>':out&&out.length?`<span class="label">${out.join(', ')} SOLD OUT</span>`:'';
    return `<button class="hang" data-i="${i}" aria-label="${esc(p.n)}" style="animation-delay:${i*.08}s">${hook}${lab}<div class="g"><img src="${cut(p.colors[0].cut[0])}" alt="" loading="lazy"></div></button>`}).join('');
  const hs=[...rail.children];let rc=-1;
  function sel(i){if(rc===i)return;rc=i;hs.forEach((h,j)=>h.classList.toggle('on',j===i));const p=R[i];
    ri.innerHTML=`<div class="n cond">${esc(p.n)}</div><p class="m">${esc(p.tagline)}</p><div class="a"><a class="btn solid" href="product.html?p=${p.id}">View, ${money(p.price)}</a><a class="btn ghost" href="shop.html">Shop the collection</a></div>`;}
  hs.forEach((h,i)=>{h.addEventListener('mouseenter',()=>{if(!touch)sel(i)});h.addEventListener('click',()=>{sel(i);if(touch)h.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})})});
  sel(0);
  if('IntersectionObserver' in window&&!reduced){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){hs.forEach((h,i)=>{h.querySelectorAll('.hook,.g').forEach(x=>x.style.animationDelay=(i*.09)+'s');h.classList.add('drop-in')});io.disconnect()}})},{threshold:.3});io.observe(rail)}

  buildRunway(document.querySelector('.runway'));

  const f=document.querySelector('.join form');f.onsubmit=e=>{e.preventDefault();f.querySelector('.note').textContent='This preview doesn\'t collect emails. On the live site, this sends your 10% code.'};
}

/* ---------- SHOP ---------- */
if(page==='shop'){
  const grid=document.querySelector('.grid-p'),chips=[...document.querySelectorAll('.chip')],sort=document.querySelector('.sort'),cnt=document.querySelector('[data-count]');
  let cat=new URLSearchParams(location.search).get('c')||'all';
  function draw(){let list=P.filter(p=>cat==='all'||p.cat===cat);
    if(sort.value==='low')list=[...list].sort((a,b)=>a.price-b.price);if(sort.value==='high')list=[...list].sort((a,b)=>b.price-a.price);
    grid.innerHTML=list.map(tile).join('');cnt.textContent=list.length;
    chips.forEach(c=>c.setAttribute('aria-pressed',c.dataset.c===cat));}
  chips.forEach(c=>c.onclick=()=>{cat=c.dataset.c;history.replaceState(null,'',cat==='all'?'shop.html':'shop.html?c='+cat);draw()});
  sort.onchange=draw;draw();
}

/* ---------- PRODUCT ---------- */
if(page==='product'){
  const p=byId(new URLSearchParams(location.search).get('p'))||byId('majajan-hoodie');
  document.title=p.n+' | Raftaar concept';
  let color=p.colors[0].name,size=null,rot=0;
  const root=document.querySelector('.pdp');
  const catName=p.cat==='bags'?'Carry bags':p.cat==='tees'?'Tees':'Hoodies';
  const accHTML=`<div class="acc">
     <details open><summary>Details</summary><div class="body"><p>${esc(p.desc)}</p></div></details>
     <details><summary>Fabric and fit</summary><div class="body"><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></div></details>
     <details><summary>Shipping and returns</summary><div class="body"><p>Free shipping across Australia on orders over $150. Orders are sent within <mark class="todo">dispatch time to confirm</mark>.</p><p style="margin-top:8px">Changed your mind? <mark class="todo">returns window to confirm</mark>. <a href="help.html#returns">Read the returns policy</a></p></div></details>
     <details><summary>What customers say</summary><div class="body"><p>"Got so many compliments. Love the fabric." <span class="small">A customer, shared on Raftaar's Instagram</span></p></div></details>
    </div>`;
  root.innerHTML=`
   <div class="left">
    <div class="crumb"><a href="shop.html">Shop</a> / <a href="shop.html?c=${p.cat}">${catName}</a></div>
    <h1 class="cond">${esc(p.gur?p.n.replace('Carry Bag, ',''):p.n.replace(/ (Hoodie|Oversized Tee|Tee|Kids Tee)$/,''))}</h1>
    ${p.g||p.gur?`<div class="gname">${p.g||p.gur}</div>`:''}
    <p class="tl">${esc(p.tagline)}</p>
    <div class="price">${money(p.price)}</div>
    ${accHTML}
   </div>
   <div class="centre"><div class="pstage" aria-label="Drag to turn the ${esc(p.n)}"><div class="piece"></div><div class="shadow"></div></div><div class="turn"></div></div>
   <div class="right">
    ${p.colors.length>1?`<div class="opt"><div class="opt-h"><span>Colour: <span data-colname>${esc(color)}</span></span></div><div class="swatches">${p.colors.map(c=>`<button class="sw" style="background:${c.hex}" aria-label="${esc(c.name)}" aria-pressed="${c.name===color}" data-c="${esc(c.name)}"></button>`).join('')}</div></div>`:''}
    ${p.sizes[0]!=='One size'?`<div class="opt"><div class="opt-h"><span>Size</span>${p.chart?'<button class="linkbtn" data-chart>Size guide</button>':''}</div><div class="sizes"></div></div>`:''}
    <div class="opt"><button class="btn solid block addbtn">Choose a size</button>
     <form class="notify"><input type="email" placeholder="Your email" aria-label="Your email"><button class="btn ghost" type="submit">Notify me</button></form>
     <p class="small" data-msg style="margin-top:8px"></p></div>
    <p class="shipnote">Free shipping over <b>$150</b>. Spend <b>$250</b> and a handcrafted gift goes in your parcel.</p>
    <div class="acc2">${accHTML}</div>
   </div>`;
  const piece=root.querySelector('.piece'),turn=root.querySelector('.turn');
  function stageDraw(){const c=p.colors.find(x=>x.name===color);rot=0;piece.style.transform='';
    piece.innerHTML=`<img src="${cut(c.cut[0])}" alt="${esc(p.n)}, ${esc(color)}">${c.cut[1]?`<img class="back" src="${cut(c.cut[1])}" alt="${esc(p.n)}, ${esc(color)}, other side">`:''}`;
    turn.innerHTML=c.cut[1]?'<button data-spin>Turn around</button><span class="small">or drag it</span>':'';
    const b=turn.querySelector('[data-spin]');if(b)b.onclick=()=>{rot+=180;piece.style.transform=`rotateY(${rot}deg)`};
    const strip=document.querySelector('.worn .strip');const ph=c.photos.length?c.photos:p.colors.flatMap(x=>x.photos);
    document.querySelector('.worn').hidden=!ph.length;strip.innerHTML=ph.map(s=>`<figure><img src="${img(s,900)}" alt="${esc(p.n)} worn" loading="lazy"></figure>`).join('');}
  // drag to turn
  const ps=root.querySelector('.pstage');let dx0=null,r0=0;
  ps.addEventListener('pointerdown',e=>{if(!p.colors.find(x=>x.name===color).cut[1])return;dx0=e.clientX;r0=rot;piece.classList.add('drag');ps.setPointerCapture(e.pointerId)});
  ps.addEventListener('pointermove',e=>{if(dx0==null)return;rot=r0+(e.clientX-dx0)*.6;piece.style.transform=`rotateY(${rot}deg)`});
  const end=()=>{if(dx0==null)return;dx0=null;piece.classList.remove('drag');rot=Math.round(rot/180)*180;piece.style.transform=`rotateY(${rot}deg)`};
  ps.addEventListener('pointerup',end);ps.addEventListener('pointercancel',end);
  function isOut(s){return (p.out&&p.out[color]||[]).includes(s)}
  function sizes(){const el=root.querySelector('.sizes');if(!el)return;el.innerHTML=p.sizes.map(s=>`<button class="sz${isOut(s)?' out':''}" aria-pressed="${s===size}" data-s="${esc(s)}" aria-label="${esc(s)}${isOut(s)?', sold out':''}">${esc(s)}</button>`).join('');
    el.querySelectorAll('.sz').forEach(b=>b.onclick=()=>{size=b.dataset.s;sizes();cta()})}
  function cta(){const btn=root.querySelector('.addbtn'),nt=root.querySelector('.notify');
    if(p.sizes[0]==='One size')size='One size';
    if(size&&isOut(size)){btn.textContent='Tell me when '+size+' is back';btn.dataset.mode='notify';nt.classList.add('show')}
    else{btn.textContent=size?'Add to bag, '+money(p.price):'Choose a size';btn.dataset.mode='add';nt.classList.remove('show')}}
  stageDraw();sizes();cta();
  root.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{color=b.dataset.c;root.querySelectorAll('.sw').forEach(x=>x.setAttribute('aria-pressed',x===b));root.querySelector('[data-colname]').textContent=color;stageDraw();sizes();cta()});
  const ch=root.querySelector('[data-chart]');if(ch)ch.onclick=()=>{const c=charts[p.chart];document.querySelector('#sizechart .inner').innerHTML=`<p style="margin-bottom:14px">${esc(c.label)}. Measurements in inches. Our fits are oversized, so take your usual size for a relaxed look.</p><img src="${img(c.img,900)}" alt="${esc(c.label)} size chart">`;openDrawer('sizechart')};
  root.querySelector('.addbtn').onclick=e=>{const m=root.querySelector('[data-msg]');
    if(e.currentTarget.dataset.mode==='notify'){root.querySelector('.notify input').focus();return}
    if(!size){m.textContent='Pick a size first.';return} m.textContent='';addToBag(p.id,color,size)};
  root.querySelector('.notify').onsubmit=e=>{e.preventDefault();root.querySelector('[data-msg]').textContent='Thanks. On the live site, we\'d email you when '+size+' is back.'};
  const more=P.filter(x=>x.id!==p.id&&(p.cat==='bags'?x.cat!=='bags':x.cat!==p.cat)).slice(0,3).concat(P.filter(x=>x.cat==='bags'&&x.id!==p.id).slice(0,1));
  document.querySelector('.more .grid-p').innerHTML=more.map(tile).join('');
}

/* ---------- STORY ---------- */
if(page==='story'){
  buildRunway(document.querySelector('.runway'));
  document.querySelector('.meaning').innerHTML=['majajan-hoodie','akaal-tee','mutiyaar-hoodie','mindset-hoodie'].map(byId).map(p=>{const [bg,fg,wd]=p.theme;
    return `<a href="product.html?p=${p.id}" style="background:${bg};color:${fg}"><div class="w cond" style="color:${wd}">${esc(p.word)}</div><img src="${cut(p.colors[0].cut[0])}" alt="${esc(p.n)}" loading="lazy"><div class="cap"><b>${esc(p.word)} <span class="gur">${p.g}</span></b>${esc(p.tagline)}</div></a>`}).join('');
  document.querySelector('.totes').innerHTML=P.filter(p=>p.cat==='bags').map(p=>`<a href="product.html?p=${p.id}"><img src="${cut(p.colors[0].cut[0])}" alt="${esc(p.n)}" loading="lazy"><span>${p.gur}</span></a>`).join('');
}

/* ---------- HELP ---------- */
if(page==='help'){
  const tabs=[...document.querySelectorAll('.tabs button')],box=document.querySelector('#sizing .chart');
  const show=k=>{tabs.forEach(t=>t.setAttribute('aria-selected',t.dataset.k===k));box.innerHTML=`<img src="${img(charts[k].img,900)}" alt="${esc(charts[k].label)} size chart">`};
  tabs.forEach(t=>t.onclick=()=>show(t.dataset.k));show('hoodie');
}
})();
