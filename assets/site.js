/* Raftaar website concept by LeadSpells. Product data and photos come from shopraftaar.com. */
(function(){
const CDN='https://cdn.shopify.com/s/files/1/0828/2639/5866/files/';
const img=(n,w)=>CDN+encodeURIComponent(n).replace(/%2F/g,'/')+'?width='+(w||900);
const LIVE='https://shopraftaar.com';
const FREE_SHIP=150, GIFT=250;
const HOODIE_SZ=['XS','S','M','L','XL'];

const charts={
  hoodie:{label:'Hoodies',img:'WhatsApp_Image_2026-06-22_at_9.06.54_AM_1.jpg'},
  tee:{label:'Oversized tees',img:'WhatsApp_Image_2026-06-22_at_9.06.54_AM.jpg'},
  boxy:{label:'Boxy tees (girls)',img:'852F8142-48BA-4507-B784-29A198CFDDFF.png'},
  kids:{label:'Kids tees',img:'IMG-8610.png'}
};

const hoodieFeatures=['420 GSM heavyweight cotton fleece','Oversized drop-shoulder fit','Double-layer hood','Soft brushed inside for all-day comfort','Ribbed cuffs and hem'];
const toteDesc='Hand-embroidered by skilled artisans, made for carrying your everyday essentials with a piece of home.';
const toteFeatures=['100% handmade and hand-embroidered','Natural canvas','Roomy enough for everyday essentials'];

const P=[
 {id:'majajan-hoodie',live:'raftaar-majajan-oversized-hoodie-vintage-brown',n:'MAJAJAN Hoodie',cat:'hoodies',price:89,isNew:true,
  tagline:'A tribute to the modern Punjabi woman: confident, rooted and unapologetically herself.',
  desc:'An oversized back graphic inspired by Punjabi culture and everyday confidence, with embroidery on the front. Made from heavyweight cotton fleece that stays warm and keeps its shape.',
  features:hoodieFeatures,chart:'hoodie',sizes:HOODIE_SZ,
  colors:[{name:'Wine',hex:'#5C1724',imgs:['60785D3A-ABB3-4616-880C-32ED5FFDD935.jpg','E053763C-691F-4477-8ED9-42EF7E3B37FA.jpg','women-hoodie-back-3.png','women-hoodie-front-3.png','714722454_18106585489874117_3016553227224133989_n.jpg']}],
  flat:['60785D3A-ABB3-4616-880C-32ED5FFDD935.jpg','E053763C-691F-4477-8ED9-42EF7E3B37FA.jpg']},
 {id:'mindset-hoodie',live:'raftaar-aspire-oversized-hoodie-vintage-burgundy',n:'MINDSET Hoodie',cat:'hoodies',price:89,
  tagline:'Built for those who stay focused when others quit.',
  desc:'Clean, minimal embroidery on a structured oversized hoodie. It stands for discipline, consistency and self-belief.',
  features:hoodieFeatures,chart:'hoodie',sizes:HOODIE_SZ,
  colors:[{name:'Wine',hex:'#4B2420',imgs:['mindset-hoodie-back.png','mindset-hoodie-front.png','EC9B523C-ED61-417A-998B-F1025A79F76A.jpg','F0B2DF82-E4F5-4B6A-944B-195E94749D1D.jpg']},
          {name:'Black',hex:'#151515',imgs:['mindset-hoodie-black-back.png','mindset-hoodie-black-front.png']}],
  flat:['mindset-hoodie-back.png','mindset-hoodie-front.png']},
 {id:'punjab-heritage-hoodie',live:'punjab-heritage-hoodie',n:'Punjab Heritage Hoodie',cat:'hoodies',price:89,
  tagline:'Carry your roots. Wear your identity.',
  desc:'A heritage-inspired graphic on a structured oversized hoodie, made for those who take pride in where they come from.',
  features:hoodieFeatures,chart:'hoodie',sizes:HOODIE_SZ,
  colors:[{name:'Black',hex:'#151515',imgs:['punjab-hoodie-front.png','punjab-hoodie-back.png']},
          {name:'Beige',hex:'#D8C4A8',imgs:['ChatGPT_Image_Jun_26_2026_03_20_26_PM.png','ChatGPT_Image_Jun_26_2026_03_22_03_PM.png','9A9A7D99-9E30-4850-90E4-C1122533A143.png']}],
  flat:['punjab-hoodie-front.png','punjab-hoodie-back.png']},
 {id:'gurmukhi-hoodie',live:'gurmukhi-hoodie',n:'Gurmukhi Hoodie',cat:'hoodies',price:85,
  tagline:'Gurmukhi on white heavyweight fleece, for those proud of where they come from.',
  desc:'A heritage graphic of Punjab in Gurmukhi on a clean white oversized hoodie, with a seamless one-piece hood.',
  features:hoodieFeatures,chart:'hoodie',sizes:['XS','S','M','L'],out:{White:['XS','M']},
  colors:[{name:'White',hex:'#F1F0EC',imgs:['IMG-5955.jpg','71D60CCE-6564-43BE-8CAD-BFFAA43F6991.jpg','F7443C83-1616-46B9-9FB2-25CF4B61AC3A.jpg','6FFD7223-1C01-43C3-B70D-28C6994325D2.png','IMG_4419_JPG.jpg']}],
  flat:['IMG-5955.jpg']},
 {id:'mutiyaar-hoodie',live:'mutiyaar-the-vintage-ride-hoodie',n:'MUTIYAAR Hoodie',cat:'hoodies',price:80,
  tagline:'A vintage scooter and soft florals: old-school charm on dusty pink.',
  desc:'Mutiyaar means a young woman with her own style, presence and personality. This one brings an old-school romantic feel into everyday streetwear.',
  features:['Cotton fleece','Oversized fit','Vintage scooter back graphic'],chart:'hoodie',sizes:['XS','S','M','L'],
  colors:[{name:'Dusty pink',hex:'#E9B9C3',imgs:['7C5AD3D4-CCB8-4A11-8212-3385E53E0B06.jpg','6119B058-6F0A-4696-B627-3CEAF539CB46.jpg','DDC049DF-C8EB-403B-B767-344826637CC5.jpg']}],
  flat:['7C5AD3D4-CCB8-4A11-8212-3385E53E0B06.jpg','6119B058-6F0A-4696-B627-3CEAF539CB46.jpg']},
 {id:'akaal-tee',live:'akaal-oversized-tee',n:'AKAAL Oversized Tee',cat:'tees',price:45,
  tagline:'Beyond birth. Beyond death. Beyond fear.',
  desc:'Inspired by the spirit of the Timeless One. A powerful bear graphic and bold back print that stand for strength, resilience and purpose.',
  features:['280 GSM micro terry cotton','Heavyweight, oversized fit','Durable neck rib','Screen printed'],chart:'tee',sizes:HOODIE_SZ,
  out:{Black:['M','L','XL'],'Acid wash':['M','L','XL']},
  colors:[{name:'Black',hex:'#151515',imgs:['akaal-black.jpg','akaal-black_dfb6d146-283a-4412-9ee4-8c0fef5bbaf9.jpg','IMG_4607.png','IMG_4736.png','IMG_5302_1.jpg']},
          {name:'Acid wash',hex:'#57565280',imgs:['akaal-acid-wash_2.jpg','akaal-acid-wash.jpg','men-tshirt-front-2_409642cc-57a2-41c8-addb-9acfaf047197.png','men-tshirt-back-2.jpg']}],
  flat:['akaal-black.jpg','akaal-black_dfb6d146-283a-4412-9ee4-8c0fef5bbaf9.jpg']},
 {id:'majajan-tee',live:'raftaar-majajan-oversized-graphic-t-shirt-black',n:'MAJAJAN Oversized Tee',cat:'tees',price:39,
  tagline:'The clean everyday tee, with a beige RAFTAAR logo.',
  desc:'A minimal oversized black tee with a beige embroidered RAFTAAR logo on the chest and the MAJAJAN print on the back.',
  features:['240 GSM cotton','Oversized fit','High-density beige embroidery','Reinforced stitching'],chart:'tee',sizes:HOODIE_SZ,
  colors:[{name:'Black',hex:'#151515',imgs:['IMG_4207_JPG_f01a47ff-0f72-4336-be25-a7d03ed4368c.jpg','IMG_4211_JPG_b8ff35c0-ae96-400e-a56b-2e4c8c34de00.jpg','women-tshirt-front_caba2f97-68ec-4031-8147-a0296db23a34.png','women-tshirt-back.png']}],
  flat:['IMG_4207_JPG_f01a47ff-0f72-4336-be25-a7d03ed4368c.jpg','IMG_4211_JPG_b8ff35c0-ae96-400e-a56b-2e4c8c34de00.jpg']},
 {id:'panjab-tee',live:'panjab-tee',n:'PANJAB Tee',cat:'tees',price:44.99,
  tagline:'ਪੰਜਾਬ / PANJAB embroidery on a clean, everyday tee.',
  desc:'Punjabi identity with a minimal look. Made in separate fits for boys and girls, with a contrast white neck rib.',
  features:['Heavyweight cotton','Relaxed fit for boys and girls','Embroidered chest and back'],chart:'boxy',sizes:HOODIE_SZ,
  colors:[{name:'Light blue',hex:'#9EC0E6',imgs:['IMG-8641.jpg','267A8B00-2F85-4ECB-ACD1-9DC585F39D7E.jpg','4A38708A-67BE-463D-A677-9F24FD9C20D2.jpg','D187F66A-D83B-4E56-853D-840DE5B45D90.jpg']},
          {name:'Baby pink',hex:'#F2B8C6',imgs:['BEE5A24A-5414-4F1B-96D0-10C9799CA31E.png','IMG-8605.png']}],
  flat:['IMG-8641.jpg']},
 {id:'panjab-kids-tee',live:'panjab-kids-tee',n:'PANJAB Kids Tee',cat:'tees',price:34.99,
  tagline:'A little piece of Panjab, made for the next generation.',
  desc:'ਪੰਜਾਬ / PANJAB on the front, with a Panjab map and the Gurmukhi alphabet embroidered on the back.',
  features:['Soft cotton','Embroidered front and back','Ages 3 to 10'],chart:'kids',sizes:['3–4 y','5–6 y','7–8 y','9–10 y'],
  colors:[{name:'Light blue',hex:'#9EC0E6',imgs:['IMG-8642.jpg','IMG-8626.jpg','IMG-8603.jpg']}],
  flat:['IMG-8642.jpg']}
];
const totes=[
 ['ਪੰਜਾਬ','raftaar-hand-crafted-carry-bag-ਪੰਜਾਬ','IMG_4285_JPG.jpg','White','Panjab'],
 ['ਪੰਜਾਬ ਦੀ ਰੂਹ','raftaar-hand-crafted-carry-bag-ਮੇਰਾ-ਪੰਜਾਬ','IMG_4289.png','Beige','Panjab di rooh'],
 ['ਬਸੰਤ','raftaar-hand-crafted-carry-bag-ਬਸੰਤ','IMG_4283_JPG.jpg','White','Basant'],
 ['ਸ਼ੁਕਰਗੁਜ਼ਾਰ','raftaar-hand-crafted-carry-bag-ਸ਼ੁਕਰਗੁਜ਼ਾਰ','IMG_4290.png','Beige','Shukarguzaar'],
 ['ਮਜਾਜਣ','raftaar-hand-crafted-carry-bag-ਮਜਾਜਣ','IMG_4282_JPG.jpg','White','Majajan'],
 ['ਸੋਹਣੀ','raftaar-hand-crafted-carry-bag-ਸੋਹਣੀ','IMG_4284_JPG.jpg','White','Sohni'],
 ['ਚੜ੍ਹਦੀਕਲਾ','raftaar-chardikala-hand-embroidered-tote-bag-ਚੜ੍ਹਦੀਕਲਾ','IMG_4286_JPG.jpg','Beige','Chardikala']
];
totes.forEach((t,i)=>P.push({id:'bag-'+(i+1),live:t[1],n:'Carry Bag, '+t[4],gur:t[0],cat:'bags',price:19.99,
  tagline:'Hand-embroidered '+t[0]+' carry bag.',desc:toteDesc,features:toteFeatures,sizes:['One size'],
  colors:[{name:t[3],hex:t[3]==='White'?'#F1F0EC':'#E3D3BC',imgs:[t[2],'ChatGPT_Image_Jun_22_2026_04_31_36_PM.png']}],flat:[t[2]]}));

const byId=id=>P.find(p=>p.id===id);
const money=v=>'$'+(Math.round(v*100)/100).toFixed(v%1?2:0);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch=matchMedia('(hover: none)').matches;

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
<header class="top"><div class="wrap">
  <div><button class="menubtn" aria-expanded="false" aria-controls="mainnav">Menu</button>
  <nav id="mainnav" aria-label="Main">${nav.map(n=>`<a href="${n[0]}"${page===n[2]?' aria-current="page"':''}>${n[1]}</a>`).join('')}</nav></div>
  <a class="logo" href="index.html" aria-label="Raftaar home"><img src="${img('logo.png',200)}" alt="Raftaar"></a>
  <button class="bagbtn" data-open="bag">Bag <span class="count">0</span></button>
</div></header>`;
const mb=document.querySelector('.menubtn'),mn=document.getElementById('mainnav');
mb.onclick=()=>{const o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)};

document.getElementById('foot').innerHTML=`
<footer><div class="wrap">
 <div class="cols">
  <div><img src="${img('logo-white.png',240)}" alt="Raftaar"><p>Streetwear rooted in Punjabi heritage, built for the next generation.</p></div>
  <div><h4>Shop</h4><ul><li><a href="shop.html?c=hoodies">Hoodies</a></li><li><a href="shop.html?c=tees">Tees</a></li><li><a href="shop.html?c=bags">Carry bags</a></li><li><a href="shop.html">Everything</a></li></ul></div>
  <div><h4>Help</h4><ul><li><a href="help.html#shipping">Shipping</a></li><li><a href="help.html#returns">Returns</a></li><li><a href="help.html#sizing">Size guide</a></li><li><a href="help.html#contact">Contact</a></li></ul></div>
  <div><h4>Follow</h4><ul><li><a href="https://www.instagram.com/raftaar.co/" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://www.facebook.com/share/1B72fejxLT/" target="_blank" rel="noopener">Facebook</a></li><li><a href="mailto:officialraftaar.co@gmail.com">officialraftaar.co@gmail.com</a></li><li><a href="tel:+61469872444">+61 469 872 444</a></li></ul></div>
 </div>
 <div class="base"><span>© 2026 RAFTAAR</span><span>Concept design by LeadSpells</span></div>
</div></footer>
<div class="scrim" data-close></div>
<aside class="drawer" id="bag" aria-label="Your bag" aria-hidden="true">
  <header><b>Your bag</b><button data-close aria-label="Close bag">Close</button></header>
  <div class="inner"></div>
  <footer></footer>
</aside>
<aside class="drawer" id="sizechart" aria-label="Size guide" aria-hidden="true">
  <header><b>Size guide</b><button data-close aria-label="Close size guide">Close</button></header>
  <div class="inner chart"></div>
</aside>`;

/* ---------- drawers ---------- */
const scrim=document.querySelector('.scrim');
function openDrawer(id){document.querySelectorAll('.drawer').forEach(d=>{const on=d.id===id;d.classList.toggle('on',on);d.setAttribute('aria-hidden',!on)});scrim.classList.add('on');}
function closeDrawers(){document.querySelectorAll('.drawer').forEach(d=>{d.classList.remove('on');d.setAttribute('aria-hidden','true')});scrim.classList.remove('on');}
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open]');if(o){e.preventDefault();if(o.dataset.open==='bag')renderBag();openDrawer(o.dataset.open);}
  if(e.target.closest('[data-close]'))closeDrawers();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawers()});

function renderCount(){const c=bag.reduce((s,l)=>s+l.q,0);document.querySelectorAll('.bagbtn .count').forEach(n=>n.textContent=c)}
function meter(total,goal,doneTxt,todoTxt){const pct=Math.min(100,total/goal*100);return `<div class="meter"><p>${total>=goal?doneTxt:todoTxt.replace('{x}',money(goal-total))}</p><div class="bar"><i style="width:${pct}%"></i></div></div>`}
function renderBag(){
  const d=document.getElementById('bag');if(!d)return;const inner=d.querySelector('.inner'),ft=d.querySelector('footer');
  const t=bagTotal();
  let h=meter(t,FREE_SHIP,'You\'ve got free shipping.','You\'re {x} away from free shipping.')+meter(t,GIFT,'A free handcrafted gift is going in your parcel.','Spend {x} more for a free handcrafted gift.');
  if(!bag.length)h+='<p class="empty">Your bag is empty. Start with a hoodie or a hand-embroidered carry bag.</p>';
  bag.forEach((l,i)=>{const p=byId(l.id);if(!p)return;const col=p.colors.find(c=>c.name===l.c)||p.colors[0];
    h+=`<div class="line"><img src="${img(col.imgs[0],200)}" alt=""><div><b>${esc(p.n)}</b><div class="small">${esc(l.c)}${l.s&&l.s!=='One size'?', '+esc(l.s):''}</div><div class="q"><button data-q="${i}" data-d="-1" aria-label="One less">−</button>${l.q}<button data-q="${i}" data-d="1" aria-label="One more">+</button></div></div><b>${money(p.price*l.q)}</b></div>`});
  const adds=['bag-1','bag-4','bag-7','majajan-tee'].filter(id=>!bag.some(l=>l.id===id)).slice(0,3);
  if(bag.length&&t<GIFT)h+=`<div class="addons"><h5>Add a little extra</h5>${adds.map(id=>{const p=byId(id);return `<div class="addon"><img src="${img(p.colors[0].imgs[0],160)}" alt=""><div><b>${esc(p.gur||p.n)}</b><div class="small">${money(p.price)}</div></div><button data-add="${id}">Add</button></div>`}).join('')}</div>`;
  inner.innerHTML=h;
  ft.innerHTML=`<div class="total"><span>Subtotal</span><span>${money(t)}</span></div><a class="btn solid block" href="${LIVE}" target="_blank" rel="noopener">Check out on the live shop</a><p class="small" style="margin-top:10px">In this preview, checkout opens Raftaar's current store.</p>`;
}
document.addEventListener('click',e=>{
  const q=e.target.closest('[data-q]');if(q){const l=bag[+q.dataset.q];l.q+= +q.dataset.d;if(l.q<1)bag.splice(+q.dataset.q,1);saveBag();renderBag();}
  const a=e.target.closest('[data-add]');if(a){const p=byId(a.dataset.add);bag.push({id:p.id,c:p.colors[0].name,s:p.sizes[0]==='One size'?'One size':'M',q:1});saveBag();renderBag();}
});
renderCount();

/* ---------- shared bits ---------- */
function card(p){
  const c=p.colors[0];const alt=c.imgs[1];
  const out=p.out&&Object.values(p.out).some(a=>a.length);
  return `<a class="card" href="product.html?p=${p.id}">
   <div class="ph">${p.isNew?'<span class="tag wine">New</span>':out?'<span class="tag">Some sizes sold out</span>':''}
    <img src="${img(c.imgs[0],700)}" alt="${esc(p.n)}" loading="lazy">${alt?`<img class="alt" src="${img(alt,700)}" alt="" loading="lazy">`:''}</div>
   <div class="row"><span class="nm">${p.gur?`<span class="gur">${p.gur}</span><br>`:''}${esc(p.gur?'Hand-embroidered carry bag':p.n)}</span><span class="pr">${money(p.price)}</span></div>
   ${p.colors.length>1?`<div class="dots">${p.colors.map(c=>`<i style="background:${c.hex}" title="${esc(c.name)}"></i>`).join('')}</div>`:''}
  </a>`;
}
const hanger='<svg class="hanger" viewBox="0 0 100 46" aria-hidden="true"><path d="M50 2c-5 0-7 3.5-7 6.5" fill="none" stroke="#7d776e" stroke-width="2.6" stroke-linecap="round"/><path d="M50 2c5 0 7 3.5 7 6.5 0 4-7 5-7 9.5" fill="none" stroke="#7d776e" stroke-width="2.6" stroke-linecap="round"/><path d="M50 18 L6 40 Q2 43 7 44 L93 44 Q98 43 94 40 Z" fill="#1d1c1a"/></svg>';

function buildRail(el,info){
  const ids=['majajan-hoodie','mindset-hoodie','akaal-tee','punjab-heritage-hoodie','mutiyaar-hoodie','majajan-tee','gurmukhi-hoodie','panjab-tee'];
  el.innerHTML=ids.map((id,i)=>{const p=byId(id);return `<button class="r-item" data-i="${i}" aria-label="${esc(p.n)}"><span>${hanger}</span><div class="swing"><div class="garment"><div class="face"><img src="${img(p.flat[0],520)}" alt=""></div>${p.flat[1]?`<div class="face back"><img src="${img(p.flat[1],520)}" alt=""></div>`:''}</div></div></button>`}).join('');
  let cur=-1;const items=[...el.children];
  function sel(i,init){if(cur===i)return;items.forEach(x=>x.classList.remove('active','flipped'));void items[i].offsetWidth;items[i].classList.add('active');el.classList.add('focus');cur=i;
    const p=byId(ids[i]);info.innerHTML=`<div class="name">${esc(p.n)}</div><div class="meta">${esc(p.tagline)}</div><div class="price" style="margin-top:8px">${money(p.price)}</div><div class="actions">${p.flat[1]?'<button class="btn ghost" data-turn>Turn around</button>':''}<a class="btn solid" href="product.html?p=${p.id}">View ${p.cat==='tees'?'tee':'hoodie'}</a></div>`;
    const t=info.querySelector('[data-turn]');if(t)t.onclick=()=>items[i].classList.toggle('flipped');
    if(touch&&!init)items[i].scrollIntoView({behavior:reduced?'auto':'smooth',inline:'center',block:'nearest'});}
  items.forEach((x,i)=>{x.addEventListener('mouseenter',()=>{if(!touch)sel(i)});x.addEventListener('click',()=>sel(i))});
  sel(0,true);
}

const FAM=[
 ['IMG_4607.png','akaal-tee','AKAAL Oversized Tee','Beyond birth. Beyond death. Beyond fear.'],
 ['women-hoodie-front-3.png','majajan-hoodie','MAJAJAN Hoodie','For the modern Punjabi woman, confident and rooted.'],
 ['EC9B523C-ED61-417A-998B-F1025A79F76A.jpg','mindset-hoodie','MINDSET Hoodie','For those who stay focused when others quit.'],
 ['DDC049DF-C8EB-403B-B767-344826637CC5.jpg','mutiyaar-hoodie','MUTIYAAR Hoodie','Old-school charm, worn her way.'],
 ['women-tshirt-front_caba2f97-68ec-4031-8147-a0296db23a34.png','majajan-tee','MAJAJAN Oversized Tee','The clean everyday essential.'],
 ['267A8B00-2F85-4ECB-ACD1-9DC585F39D7E.jpg','panjab-tee','PANJAB Tee','Punjabi identity, worn simply.'],
 ['IMG-8626.jpg','panjab-kids-tee','PANJAB Kids Tee','A little piece of Panjab for the next generation.']
];
function buildFam(el){
  el.innerHTML=FAM.map((f,i)=>`<div class="p${i===1?' on':''}" tabindex="0" role="button" aria-label="${esc(f[2])}"><img src="${img(f[0],900)}" alt="Model wearing the ${esc(f[2])}" loading="lazy"><div class="cap"><b>${esc(f[2])}</b><span>${esc(f[3])}</span><br><a href="product.html?p=${f[1]}">Shop this</a></div></div>`).join('');
  const ps=[...el.children];el.classList.add('focus');
  const on=p=>{ps.forEach(x=>x.classList.toggle('on',x===p))};
  ps.forEach(p=>{p.addEventListener('mouseenter',()=>{if(!touch)on(p)});p.addEventListener('focus',()=>on(p));p.addEventListener('click',()=>on(p))});
}

/* ---------- pages ---------- */
if(page==='home'){
  const w=document.querySelector('.hero-word');
  w.innerHTML=[...'RAFTAAR'].map((ch,i)=>`<span style="animation-delay:${.08*i}s">${ch}</span>`).join('');
  // hero photo crossfade
  const hp=document.querySelector('.hero-photo');const shots=['71D60CCE-6564-43BE-8CAD-BFFAA43F6991.jpg','714722454_18106585489874117_3016553227224133989_n.jpg','IMG_4607.png'];
  hp.innerHTML=shots.map((s,i)=>`<img src="${img(s,900)}" alt="${i===0?'Woman in the white Gurmukhi Hoodie on stone steps':''}" ${i?'loading="lazy"':''}>`).join('');
  if(!reduced){let k=0;const ims=[...hp.children];setInterval(()=>{ims[k].style.opacity=k?0:'';k=(k+1)%ims.length;ims[k].style.opacity=1;if(k===0)ims.slice(1).forEach(x=>x.style.opacity=0)},4200)}
  // feature turn + parallax word
  const ph=document.querySelector('.feature .photo');document.querySelector('.feature .turn').onclick=e=>{ph.classList.toggle('turned');e.currentTarget.textContent=ph.classList.contains('turned')?'Show the front':'Turn around'};
  const bw=document.querySelector('.feature .bgword'),fs=document.querySelector('.feature');
  if(!reduced)addEventListener('scroll',()=>{const r=fs.getBoundingClientRect();const p=(innerHeight-r.top)/(innerHeight+r.height);bw.style.transform=`translate(${(-p*28).toFixed(2)}%,-50%)`},{passive:true});
  buildRail(document.querySelector('.rail'),document.querySelector('.rail-info'));
  buildFam(document.querySelector('.fam'));
  const f=document.querySelector('.join form');f.onsubmit=e=>{e.preventDefault();f.querySelector('.note').textContent='This preview doesn\'t collect emails. On the live site, this sends your 10% code.'};
}

if(page==='shop'){
  const grid=document.querySelector('.grid-p'),chips=[...document.querySelectorAll('.chip')],sort=document.querySelector('.sort'),cnt=document.querySelector('[data-count]');
  let cat=new URLSearchParams(location.search).get('c')||'all';
  function draw(){let list=P.filter(p=>cat==='all'||p.cat===cat);
    if(sort.value==='low')list=[...list].sort((a,b)=>a.price-b.price);if(sort.value==='high')list=[...list].sort((a,b)=>b.price-a.price);
    grid.innerHTML=list.map(card).join('');cnt.textContent=list.length;
    chips.forEach(c=>c.setAttribute('aria-pressed',c.dataset.c===cat));}
  chips.forEach(c=>c.onclick=()=>{cat=c.dataset.c;history.replaceState(null,'',cat==='all'?'shop.html':'shop.html?c='+cat);draw()});
  sort.onchange=draw;draw();
}

if(page==='product'){
  const p=byId(new URLSearchParams(location.search).get('p'))||byId('majajan-hoodie');
  document.title=p.n+' | Raftaar concept';
  let color=p.colors[0].name,size=null;
  const root=document.querySelector('.pdp');
  function gallery(){const c=p.colors.find(x=>x.name===color);document.querySelector('.gallery').innerHTML=c.imgs.map((s,i)=>`<figure><img src="${img(s,i?900:1400)}" alt="${esc(p.n)}, ${esc(color)}, photo ${i+1}" ${i>1?'loading="lazy"':''}></figure>`).join('')}
  function isOut(s){return (p.out&&p.out[color]||[]).includes(s)}
  function sizes(){const el=document.querySelector('.sizes');if(!el)return;el.innerHTML=p.sizes.map(s=>`<button class="sz${isOut(s)?' out':''}" aria-pressed="${s===size}" data-s="${esc(s)}" aria-label="${esc(s)}${isOut(s)?', sold out':''}">${esc(s)}</button>`).join('');
    el.querySelectorAll('.sz').forEach(b=>b.onclick=()=>{size=b.dataset.s;sizes();cta()})}
  function cta(){const btn=document.querySelector('.addbtn'),nt=document.querySelector('.notify');
    if(p.sizes[0]==='One size'){size='One size'}
    if(size&&isOut(size)){btn.textContent='Tell me when '+size+' is back';btn.dataset.mode='notify';nt.classList.add('show')}
    else{btn.textContent=size?'Add to bag, '+money(p.price):'Choose a size';btn.dataset.mode='add';nt.classList.remove('show')}}
  root.innerHTML=`<div class="gallery"></div>
   <div class="buy">
    <div class="crumb"><a href="shop.html">Shop</a> / <a href="shop.html?c=${p.cat}">${p.cat==='bags'?'Carry bags':p.cat==='tees'?'Tees':'Hoodies'}</a></div>
    ${p.gur?`<div class="gur-outline strong" style="font-size:72px;-webkit-text-stroke-width:1.5px;margin-bottom:6px">${p.gur}</div>`:''}
    <h1 class="h1">${esc(p.n)}</h1>
    <p class="tagline">${esc(p.tagline)}</p>
    <div class="price">${money(p.price)}</div>
    ${p.colors.length>1?`<div class="opt"><div class="opt-h"><span>Colour: <span data-colname>${esc(color)}</span></span></div><div class="swatches">${p.colors.map(c=>`<button class="sw" style="background:${c.hex}" aria-label="${esc(c.name)}" aria-pressed="${c.name===color}" data-c="${esc(c.name)}"></button>`).join('')}</div></div>`:''}
    ${p.sizes[0]!=='One size'?`<div class="opt"><div class="opt-h"><span>Size</span>${p.chart?'<button class="linkbtn" data-chart>Size guide</button>':''}</div><div class="sizes"></div></div>`:''}
    <div class="opt"><button class="btn solid block addbtn">Choose a size</button>
     <form class="notify"><input type="email" placeholder="Your email" aria-label="Your email"><button class="btn ghost" type="submit">Notify me</button></form>
     <p class="small" data-msg style="margin-top:8px"></p></div>
    <div class="shipnote">Free shipping on orders over <b>$150</b>. Spend $250 and get a free handcrafted gift.</div>
    <div class="acc">
     <details open><summary>Details</summary><div class="body"><p>${esc(p.desc)}</p></div></details>
     <details><summary>Fabric and fit</summary><div class="body"><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></div></details>
     <details><summary>Shipping and returns</summary><div class="body"><p>Free shipping across Australia on orders over $150. Orders are sent within <mark class="todo">dispatch time to confirm</mark>.</p><p style="margin-top:8px">Changed your mind? <mark class="todo">returns window to confirm</mark>. <a href="help.html#returns">Read the returns policy</a></p></div></details>
     <details><summary>What customers say</summary><div class="body"><p>"Got so many compliments. Love the fabric." <span class="small">A customer, shared on Raftaar's Instagram</span></p></div></details>
    </div>
   </div>`;
  gallery();sizes();cta();
  root.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{color=b.dataset.c;root.querySelectorAll('.sw').forEach(x=>x.setAttribute('aria-pressed',x===b));root.querySelector('[data-colname]').textContent=color;gallery();sizes();cta()});
  const ch=root.querySelector('[data-chart]');if(ch)ch.onclick=()=>{const c=charts[p.chart];document.querySelector('#sizechart .inner').innerHTML=`<p style="margin-bottom:14px">${esc(c.label)}. Measurements in inches. Our fits are oversized, so take your usual size for a relaxed look.</p><img src="${img(c.img,900)}" alt="${esc(c.label)} size chart">`;openDrawer('sizechart')};
  root.querySelector('.addbtn').onclick=e=>{const m=root.querySelector('[data-msg]');
    if(e.currentTarget.dataset.mode==='notify'){root.querySelector('.notify input').focus();return}
    if(!size){m.textContent='Pick a size first.';return} m.textContent='';addToBag(p.id,color,size)};
  root.querySelector('.notify').onsubmit=e=>{e.preventDefault();root.querySelector('[data-msg]').textContent='Thanks. On the live site, we\'d email you when '+size+' is back.'};
  // complete the look
  const more=P.filter(x=>x.id!==p.id&&(p.cat==='bags'?x.cat!=='bags':x.cat!==p.cat)).slice(0,3).concat(P.filter(x=>x.cat==='bags'&&x.id!==p.id).slice(0,1));
  document.querySelector('.more').innerHTML=more.map(card).join('');
}

if(page==='story'){buildFam(document.querySelector('.fam'));
  document.querySelector('.meaning').innerHTML=[['majajan-hoodie','Majajan','The modern Punjabi woman: confident, rooted and herself.','women-hoodie-back-3.png'],['akaal-tee','Akaal','The Timeless One. Fearless, unwavering, beyond limits.','IMG_4736.png'],['mutiyaar-hoodie','Mutiyaar','A young woman with her own style, presence and personality.','DDC049DF-C8EB-403B-B767-344826637CC5.jpg'],['mindset-hoodie','Mindset','Discipline, consistency and self-belief.','F0B2DF82-E4F5-4B6A-944B-195E94749D1D.jpg']]
   .map(m=>`<a href="product.html?p=${m[0]}"><div class="ph"><img src="${img(m[3],700)}" alt="" loading="lazy"></div><b>${m[1]}</b><span>${m[2]}</span></a>`).join('');
  document.querySelector('.totes').innerHTML=P.filter(p=>p.cat==='bags').map(p=>`<a href="product.html?p=${p.id}"><div class="ph"><img src="${img(p.colors[0].imgs[0],400)}" alt="${esc(p.n)}" loading="lazy"></div><span>${p.gur}</span></a>`).join('');
}

if(page==='help'){
  const tabs=[...document.querySelectorAll('.tabs button')],box=document.querySelector('#sizing .chart');
  const show=k=>{tabs.forEach(t=>t.setAttribute('aria-selected',t.dataset.k===k));box.innerHTML=`<img src="${img(charts[k].img,900)}" alt="${esc(charts[k].label)} size chart">`};
  tabs.forEach(t=>t.onclick=()=>show(t.dataset.k));show('hoodie');
}
})();
