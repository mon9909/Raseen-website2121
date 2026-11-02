(()=>{const mark='<svg class="brand-mark" viewBox="0 0 48 48"><path d="M5 43V15L24 4l19 11v28M12 43V20l12-7 12 7v23M20 43V25l4-3 4 3v18M3 46H45" fill="none" stroke="#B99762" stroke-width="2"/></svg>';const nav=[["index.html","الرئيسية","Home"],["about.html","من نحن","About"],["services.html","الخدمات","Services"],["sectors.html","القطاعات","Sectors"],["approach.html","منهجيتنا","Approach"],["insights.html","الرؤى","Insights"]];const cur=location.pathname.split("/").pop()||"index.html";const h=document.querySelector("[data-site-header]");if(h)h.innerHTML=`<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html">${mark}<span><strong>رَصين</strong><small>RASEEN ADVISORY</small></span></a><nav class="nav" id="main-nav">${nav.map(([u,a,e])=>`<a href="${u}" ${cur===u?'aria-current="page"':''} data-ar="${a}" data-en="${e}">${a}</a>`).join("")}<a href="inquiry.html" data-ar="طلب استشارة" data-en="Inquire">طلب استشارة</a></nav><div class="header-actions"><button class="lang-toggle">EN</button><a class="btn btn-primary header-cta" href="inquiry.html" data-ar="طلب استشارة" data-en="Inquire">طلب استشارة</a><button class="menu-toggle" aria-expanded="false">☰</button></div></div></header>`;const f=document.querySelector("[data-site-footer]");if(f)f.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="index.html">${mark}<span><strong style="color:white">رَصين</strong><small>RASEEN ADVISORY</small></span></a><p data-ar="نساعد صُنّاع القرار على فهم الأسواق وتقييم الفرص وبناء خيارات استراتيجية أوضح." data-en="We help decision-makers understand markets, assess opportunities, and build clearer strategic options.">نساعد صُنّاع القرار على فهم الأسواق وتقييم الفرص وبناء خيارات استراتيجية أوضح.</p></div><div><p class="footer-title" data-ar="استكشف" data-en="EXPLORE">استكشف</p><div class="footer-links"><a href="market-entry.html" data-ar="دراسة ما قبل دخول السوق" data-en="Market entry assessment">دراسة ما قبل دخول السوق</a><a href="services.html" data-ar="الخدمات" data-en="Services">الخدمات</a><a href="sectors.html" data-ar="القطاعات" data-en="Sectors">القطاعات</a><a href="approach.html" data-ar="منهجية العمل" data-en="Approach">منهجية العمل</a></div></div><div class="footer-contact"><p class="footer-title" data-ar="التواصل والاستفسارات" data-en="CONTACT &amp; ENQUIRIES">التواصل والاستفسارات</p><div class="footer-links"><a href="inquiry.html" data-ar="طلب استشارة" data-en="Request a consultation">طلب استشارة</a><a class="footer-email-card" href="mailto:info@raseenadvisory.com"><span data-ar="البريد الإلكتروني" data-en="EMAIL">البريد الإلكتروني</span><strong>info@raseenadvisory.com</strong><small data-ar="للتواصل والاستفسارات المهنية" data-en="For professional enquiries">للتواصل والاستفسارات المهنية</small></a><a href="privacy.html" data-ar="الخصوصية" data-en="Privacy">الخصوصية</a><a href="insights.html" data-ar="الرؤى" data-en="Insights">الرؤى</a></div></div></div><div class="footer-bottom"><span data-ar="© رَصين. جميع الحقوق محفوظة." data-en="© RASEEN ADVISORY. All rights reserved.">© رَصين. جميع الحقوق محفوظة.</span><span data-ar="استشارات استراتيجية واستثمارية" data-en="Strategy & Investment Advisory">استشارات استراتيجية واستثمارية</span></div></div></footer>`;function lang(l){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";document.querySelectorAll("[data-ar][data-en]").forEach(x=>x.innerHTML=x.dataset[l]);document.querySelectorAll("[data-aria-ar][data-aria-en]").forEach(x=>x.setAttribute("aria-label",x.dataset["aria"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll("[data-alt-ar][data-alt-en]").forEach(x=>x.setAttribute("alt",x.dataset["alt"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]").forEach(x=>x.setAttribute("placeholder",x.dataset["placeholder"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll(".lang-toggle").forEach(b=>b.textContent=l==="ar"?"EN":"عربي");try{localStorage.setItem("raseen-language",l)}catch(e){}}let l="ar";try{l=localStorage.getItem("raseen-language")||"ar"}catch(e){}lang(l);document.addEventListener("click",e=>{if(e.target.closest(".lang-toggle"))lang(document.documentElement.lang==="ar"?"en":"ar");const b=e.target.closest(".menu-toggle");if(b){const n=document.querySelector(".nav");n.classList.toggle("is-open");b.setAttribute("aria-expanded",n.classList.contains("is-open"));b.textContent=n.classList.contains("is-open")?"×":"☰"}});if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(x=>io.observe(x))}else document.querySelectorAll(".reveal").forEach(x=>x.classList.add("is-visible"));})();

// Keep photo-led cards visually complete if a remote image fails.
document.querySelectorAll('img').forEach((img)=>{img.addEventListener('error',()=>{if(img.dataset.imageFallback)return;img.dataset.imageFallback='1';img.style.background='linear-gradient(135deg,#d9d0bd,#8b9b94)';img.style.objectFit='cover';},{once:true});});


// RASEEN sector interactions: accessible expand/collapse and carousel controls.
(()=>{
  const carousel = document.querySelector('#sector-carousel');
  if (!carousel) return;
  const cards = Array.from(carousel.querySelectorAll('[data-sector-card]'));
  const previous = document.querySelector('.sector-carousel-prev');
  const next = document.querySelector('.sector-carousel-next');
  const pause = document.querySelector('.sector-carousel-pause');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let paused = reducedMotion;
  let hovering = false;
  let focused = false;
  let timer = null;

  const currentLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'ar';
  const setExpandLabel = (button, expanded) => {
    const lang = currentLanguage();
    button.textContent = expanded
      ? (lang === 'en' ? 'Hide sector focus −' : 'إخفاء محاور القطاع −')
      : (lang === 'en' ? 'Explore sector focus +' : 'استكشف محاور القطاع +');
  };
  const setPauseLabel = () => {
    if (!pause) return;
    const lang = currentLanguage();
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused
      ? (lang === 'en' ? 'Resume motion' : 'استئناف الحركة')
      : (lang === 'en' ? 'Pause motion' : 'إيقاف الحركة');
  };
  const goTo = (index) => {
    if (!cards.length) return;
    activeIndex = (index + cards.length) % cards.length;
    cards[activeIndex].scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  document.querySelectorAll('.sector-expand-toggle').forEach((button) => {
    const panel = button.nextElementSibling;
    if (!panel || !panel.classList.contains('sector-expanded')) return;
    setExpandLabel(button, button.getAttribute('aria-expanded') === 'true');
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      panel.hidden = !expanded;
      setExpandLabel(button, expanded);
    });
  });

  previous?.addEventListener('click', () => goTo(activeIndex - 1));
  next?.addEventListener('click', () => goTo(activeIndex + 1));
  pause?.addEventListener('click', () => {
    paused = !paused;
    setPauseLabel();
  });
  carousel.addEventListener('pointerenter', () => { hovering = true; });
  carousel.addEventListener('pointerleave', () => { hovering = false; });
  carousel.addEventListener('focusin', () => { focused = true; });
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) focused = false;
  });
  carousel.addEventListener('scroll', () => {
    const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let nearest = 0;
    let distance = Infinity;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const d = Math.abs((rect.left + rect.width / 2) - center);
      if (d < distance) { distance = d; nearest = index; }
    });
    activeIndex = nearest;
  }, { passive: true });
  document.addEventListener('click', (event) => {
    if (event.target.closest('.lang-toggle')) {
      window.setTimeout(() => {
        document.querySelectorAll('.sector-expand-toggle').forEach((button) => {
          setExpandLabel(button, button.getAttribute('aria-expanded') === 'true');
        });
        setPauseLabel();
      }, 0);
    }
  });
  setPauseLabel();
  if (!reducedMotion) {
    timer = window.setInterval(() => {
      if (!paused && !hovering && !focused && document.visibilityState === 'visible') {
        goTo(activeIndex + 1);
      }
    }, 7000);
  }
  window.addEventListener('pagehide', () => { if (timer) window.clearInterval(timer); }, { once: true });
})();
