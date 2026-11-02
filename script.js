(()=>{const mark='<svg class="brand-mark" viewBox="0 0 48 48"><path d="M5 43V15L24 4l19 11v28M12 43V20l12-7 12 7v23M20 43V25l4-3 4 3v18M3 46H45" fill="none" stroke="#B99762" stroke-width="2"/></svg>';const nav=[["index.html","الرئيسية","Home"],["about.html","من نحن","About"],["services.html","الخدمات","Services"],["sectors.html","القطاعات","Sectors"],["approach.html","منهجيتنا","Approach"],["insights.html","الرؤى","Insights"]];const cur=location.pathname.split("/").pop()||"index.html";const h=document.querySelector("[data-site-header]");if(h)h.innerHTML=`<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html">${mark}<span><strong>رَصين</strong><small>RASEEN ADVISORY</small></span></a><nav class="nav" id="main-nav">${nav.map(([u,a,e])=>`<a href="${u}" ${cur===u?'aria-current="page"':''} data-ar="${a}" data-en="${e}">${a}</a>`).join("")}<a href="inquiry.html" data-ar="طلب استشارة" data-en="Inquire">طلب استشارة</a></nav><div class="header-actions"><button class="lang-toggle">EN</button><a class="btn btn-primary header-cta" href="inquiry.html" data-ar="طلب استشارة" data-en="Inquire">طلب استشارة</a><button class="menu-toggle" aria-expanded="false">☰</button></div></div></header>`;const f=document.querySelector("[data-site-footer]");if(f)f.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="index.html">${mark}<span><strong style="color:white">رَصين</strong><small>RASEEN ADVISORY</small></span></a><p data-ar="نساعد صُنّاع القرار على فهم الأسواق وتقييم الفرص وبناء خيارات استراتيجية أوضح." data-en="We help decision-makers understand markets, assess opportunities, and build clearer strategic options.">نساعد صُنّاع القرار على فهم الأسواق وتقييم الفرص وبناء خيارات استراتيجية أوضح.</p></div><div><p class="footer-title" data-ar="استكشف رَصين" data-en="EXPLORE RASEEN">استكشف رَصين</p><div class="footer-links"><a href="market-entry.html" data-ar="دراسة ما قبل دخول السوق" data-en="Market entry assessment">دراسة ما قبل دخول السوق</a><a href="services.html" data-ar="خدماتنا الاستشارية" data-en="Advisory services">الخدمات</a><a href="sectors.html" data-ar="القطاعات" data-en="Sectors">القطاعات</a><a href="approach.html" data-ar="منهجية العمل" data-en="Approach">منهجية العمل</a><a href="insights.html" data-ar="الرؤى والتحليلات" data-en="Insights &amp; analysis">الرؤى</a></div></div><div class="footer-contact-column"><p class="footer-title" data-ar="تواصل معنا" data-en="CONTACT US">تواصل معنا</p><div class="footer-links"><a href="inquiry.html" data-ar="طلب استشارة" data-en="Request a consultation">طلب استشارة</a><a href="privacy.html" data-ar="سياسة الخصوصية" data-en="Privacy policy">الخصوصية</a></div><a class="footer-email-card" href="mailto:info@raseenadvisory.com"><span class="footer-email-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3.5 6.5h17v11h-17z"/><path d="m4 7 8 6 8-6"/></svg></span><span class="footer-email-copy"><small data-ar="البريد الإلكتروني" data-en="EMAIL">البريد الإلكتروني</small><strong>info@raseenadvisory.com</strong></span><span class="footer-email-arrow" aria-hidden="true">↗</span></a></div></div><div class="footer-bottom"><span data-ar="© رَصين. جميع الحقوق محفوظة." data-en="© RASEEN ADVISORY. All rights reserved.">© رَصين. جميع الحقوق محفوظة.</span><span data-ar="استشارات استراتيجية واستثمارية" data-en="Strategy & Investment Advisory">استشارات استراتيجية واستثمارية</span></div></div></footer>`;function lang(l){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";document.querySelectorAll("[data-ar][data-en]").forEach(x=>x.innerHTML=x.dataset[l]);document.querySelectorAll("[data-aria-ar][data-aria-en]").forEach(x=>x.setAttribute("aria-label",x.dataset["aria"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll("[data-alt-ar][data-alt-en]").forEach(x=>x.setAttribute("alt",x.dataset["alt"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]").forEach(x=>x.setAttribute("placeholder",x.dataset["placeholder"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll(".lang-toggle").forEach(b=>b.textContent=l==="ar"?"EN":"عربي");try{localStorage.setItem("raseen-language",l)}catch(e){}}let l="ar";try{l=localStorage.getItem("raseen-language")||"ar"}catch(e){}lang(l);document.addEventListener("click",e=>{if(e.target.closest(".lang-toggle"))lang(document.documentElement.lang==="ar"?"en":"ar");const b=e.target.closest(".menu-toggle");if(b){const n=document.querySelector(".nav");n.classList.toggle("is-open");b.setAttribute("aria-expanded",n.classList.contains("is-open"));b.textContent=n.classList.contains("is-open")?"×":"☰"}});if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(x=>io.observe(x))}else document.querySelectorAll(".reveal").forEach(x=>x.classList.add("is-visible"));const form=document.querySelector("[data-inquiry-form]");
if(form){
 const status=form.querySelector(".form-status");
 const submit=form.querySelector('[type="submit"]');
 form.addEventListener("submit",async e=>{
  e.preventDefault();
  if(!form.reportValidity())return;
  const ar=document.documentElement.lang==="ar";
  const original=ar?"إرسال الطلب ↗":"Submit inquiry ↗";
  submit.disabled=true;
  submit.textContent=ar?"جارٍ إرسال الطلب…":"Sending inquiry…";
  status.textContent="";
  try{
   const payload=Object.fromEntries(new FormData(form).entries());
   payload._replyto=payload.email||"";
   const response=await fetch("https://formsubmit.co/ajax/info@raseenadvisory.com",{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify(payload)
   });
   const result=await response.json();
   if(String(result.success)!=="true")throw new Error(result.message||"Submission was not accepted");
   status.textContent=ar?"تم إرسال طلبك بنجاح. شكرًا لتواصلك مع رَصين.":"Your inquiry has been submitted successfully. Thank you for contacting RASEEN ADVISORY.";
   form.reset();
  }catch(error){
   status.textContent=ar?"تعذر إرسال الطلب حاليًا. يرجى المحاولة لاحقًا أو مراسلتنا على info@raseenadvisory.com.":"We could not submit your inquiry right now. Please try again or email info@raseenadvisory.com.";
  }finally{
   submit.disabled=false;
   submit.textContent=document.documentElement.lang==="ar"?"إرسال الطلب ↗":"Submit inquiry ↗";
  }
 });
}
})();

/* RASEEN ADVISORY sector cards: accessible, smooth detail expansion */
(()=>{
 const cards=[...document.querySelectorAll('[data-sector-card]')];
 cards.forEach(card=>{
   const toggle=card.querySelector('.sector-expand-toggle');
   const panel=card.querySelector('.sector-expanded');
   if(!toggle||!panel)return;
   toggle.addEventListener('click',()=>{
     const opening=toggle.getAttribute('aria-expanded')!=='true';
     toggle.setAttribute('aria-expanded',String(opening));
     panel.hidden=!opening;
     toggle.dataset.ar=opening?'إخفاء التفاصيل −':'استكشف محاور القطاع +';
     toggle.dataset.en=opening?'Hide details −':'Explore sector focus +';
     toggle.textContent=document.documentElement.lang==='ar'?toggle.dataset.ar:toggle.dataset.en;
   });
 });
})();

// Keep photo-led cards visually complete if a remote image fails.
document.querySelectorAll('img').forEach((img)=>{img.addEventListener('error',()=>{if(img.dataset.imageFallback)return;img.dataset.imageFallback='1';img.style.background='linear-gradient(135deg,#d9d0bd,#8b9b94)';img.style.objectFit='cover';},{once:true});});
