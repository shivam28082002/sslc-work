(function () {
  var WA_NUMBER = "97339800519"; // Capital Estate WhatsApp +973 3980 0519
  var lang = "en";

  // ---------- Arabic translations ----------
  var AR = {
    skip: "تخطَّ إلى المحتوى",
    concept: "تصميم مقترح من إعداد SSLC STARTUP لشركة كابيتال إستيت",
    brand: "كابيتال إستيت", brandSub: "عقارات · تأسست 1978",
    nav1: "العقارات", nav2: "خدماتنا", nav3: "من نحن", nav4: "للملّاك", nav5: "بوابة الملّاك", nav6: "تواصل معنا",
    call: "اتصل",
    heroEyebrow: "شركة عائلية · الحورة، المنامة",
    heroTitle: "خبراء العقار في البحرين منذ 1978",
    heroLead: "التأجير والإيجار طويل الأمد والبيع وإدارة العقارات والتثمين — يتولاها فريق عائلي واحد يخدم الملّاك والمستأجرين في أنحاء المملكة منذ 48 عامًا.",
    heroCta1: "تصفّح العقارات", heroCta2: "راسلنا عبر واتساب",
    b1: "عامًا في البحرين", b2: "خدمات عقارية", b3v: "مرخّصة", b3: "وسيط عقاري لدى RERA",
    propEyebrow: "عقارات مميزة", propTitle: "منازل متاحة للإيجار",
    fType: "نوع العقار", optAll: "جميع الأنواع", optVilla: "فيلا", optApt: "شقة",
    fFurn: "التأثيث", optAny: "الكل", optFurn: "مفروش", optUnfurn: "غير مفروش",
    fBeds: "غرف النوم", optAny2: "الكل", fPrice: "أقصى إيجار (د.ب / شهريًا)", optNoLimit: "بدون حد",
    empty: "لا توجد عقارات مطابقة — راسلنا وسنبحث لك في محفظتنا الكاملة.",
    propNote: "عقارات نموذجية لأغراض التصميم المقترح. سيتم ربط الموقع الفعلي بمحفظة كابيتال إستيت الحالية.",
    svcEyebrow: "ماذا نقدّم", svcTitle: "خدمات عقارية متكاملة تحت سقف واحد",
    s1t: "التأجير", s1d: "فلل وشقق ومجمعات سكنية في أنحاء البحرين تناسب ميزانيتك وموقع عملك.",
    s2t: "الإيجار طويل الأمد", s2d: "عقود إيجار للشركات والأفراد بعقود واضحة وتسجيل لدى مؤسسة التنظيم العقاري.",
    s3t: "البيع والشراء", s3d: "بيع وشراء المنازل والمباني والأراضي مع نصائح تسعير صادقة.",
    s4t: "إدارة العقارات", s4d: "تحصيل الإيجارات والصيانة والتفتيش ورعاية المستأجرين ليطمئن المالك.",
    s5t: "التثمين العقاري", s5d: "تثمين بغرض البيع أو الإيجار أو للبنوك والتركات، مبني على بيانات محلية لعقود.",
    stamp: "في خدمة البحرين منذ",
    whyEyebrow: "لماذا كابيتال إستيت", whyTitle: "ثلاثة أجيال من الثقة في سوق العقار البحريني",
    whyLead: "منذ عام 1978 تساعد عائلتنا الأسر البحرينية والمقيمين والشركات على استئجار العقارات وشرائها وإدارتها. كثير من ملّاكنا معنا منذ عقود.",
    w1t: "48 عامًا من الخبرة", w1d: "نعرف كل منطقة، من الحورة والعدلية إلى أمواج والرفاع.",
    w2t: "مرخّصون ومنظّمون", w2d: "وسيط عقاري مسجّل لدى مؤسسة التنظيم العقاري، رقم الترخيص",
    w3t: "شركة عائلية وخدمة شخصية", w3d: "تتحدث مباشرة مع أصحاب القرار — بلا مراكز اتصال.",
    llEyebrow: "للملّاك", llTitle: "دعنا نؤجّر عقارك أو نبيعه أو نديره",
    llLead: "أخبرنا عن الفيلا أو الشقة أو المبنى، وسنتصل بك بتقييم وخطة واضحة — غالبًا في اليوم نفسه.",
    ll1: "تقييم مجاني لقيمة العقار في السوق", ll2: "مستأجرون موثوقون بعد التحقق", ll3: "إدارة كاملة مع كشوف شهرية",
    lName: "الاسم", lPhone: "رقم الهاتف", lType: "نوع العقار", optVilla2: "فيلا", optApt2: "شقة", optBldg: "مبنى", optLand: "أرض",
    lService: "الخدمة المطلوبة", optSvc1: "تأجير / إيجار", optSvc2: "بيع", optSvc3: "إدارة العقار", optSvc4: "تثمين",
    lArea: "المنطقة / الموقع", lAreaPh: "مثال: جدحفص، سار، أمواج", lBtn: "أرسل عبر واتساب",
    lNote: "يفتح واتساب برسالة جاهزة إلى كابيتال إستيت (+973 3980 0519).",
    ptEyebrow: "قريبًا", ptTitle: "بوابة الملّاك — عقارك في جيبك",
    ptLead: "سيتمكن الملّاك من متابعة الإيجارات المحصّلة وتجديد العقود وطلبات الصيانة والكشوف في لوحة آمنة واحدة — بالعربية أو الإنجليزية ومن أي هاتف.",
    pt1: "حالة الإيجار والدفعات لكل وحدة مباشرة", pt2: "طلبات صيانة مع الصور", pt3: "تحميل الكشوف الشهرية بصيغة PDF",
    ptCta: "اطلب الوصول المبكر", dashUrl: "owners.capitalestate.net",
    dashHello: "صباح الخير، أستاذ أحمد", k1: "الإيجار المحصّل · أكتوبر", k2: "نسبة الإشغال", k3: "طلبات مفتوحة",
    d1: "فيلا 12، جدحفص — صيانة المكيفات", d1s: "تم", d2: "شقة 304، جزيرة الريف — تجديد العقد", d2s: "14 يومًا",
    rvEyebrow: "آراء العملاء", rvTitle: "ماذا يقول عملاؤنا",
    rvNote: "آراء نموذجية لأغراض التصميم — تُستبدل بآراء حقيقية لعملاء كابيتال إستيت.",
    r1: "«يديرون فللنا منذ أكثر من خمسة عشر عامًا. الإيجار يصل في موعده وكل إصلاح يُنجز قبل أن نسمع عنه.»", r1a: "مالك (نموذج) · سار",
    r2: "«وجدنا شقة مفروشة في جزيرة الريف خلال أسبوع من وصولنا إلى البحرين. نصيحة صادقة وبدون رسوم خفية.»", r2a: "مستأجر (نموذج) · جزيرة الريف",
    r3: "«كان التثمين دقيقًا وبيع مبنانا بسعر قريب جدًا من المطلوب. شركة عائلية محترفة بحق.»", r3a: "بائع (نموذج) · المنامة",
    ctEyebrow: "تواصل معنا", ctTitle: "زورونا في مكتبنا بالحورة",
    ctAddrK: "العنوان", ctAddr: "مكتب 11، مبنى 718، طريق 2018، مجمع 320، الحورة، المنامة، مملكة البحرين",
    ctPhoneK: "الهاتف", ctWaK: "واتساب", ctMailK: "البريد",
    ctWa: "تحدث عبر واتساب", ctCall: "اتصل بالمكتب",
    mapT: "كابيتال إستيت — الحورة", mapD: "خريطة توضيحية · خريطة Google تفاعلية في الموقع النهائي", mapLink: "افتح في خرائط Google ←",
    ftText: "تأجير · إيجار · بيع · إدارة عقارات · تثمين — الحورة، المنامة، منذ 1978.",
    ftLic: "ترخيص وسيط عقاري", credit: "موقع تجريبي من تصميم"
  };

  // ---------- Listings ----------
  var IMG = function (id) { return "https://images.unsplash.com/photo-" + id + "?w=900&q=80"; };
  var LISTINGS = [
    { id: "CE-201", ptype: "villa", furn: "unfurnished", beds: 4, sqm: 320, price: 350, img: "1600047509807-ba8f99d2cdde",
      en: { t: "Garden Villa", a: "Jidhafs", f: "Unfurnished", alt: "Modern two-storey villa with a lawn garden" },
      ar: { t: "فيلا مع حديقة", a: "جدحفص", f: "غير مفروشة", alt: "فيلا حديثة من طابقين مع حديقة" } },
    { id: "CE-202", ptype: "apartment", furn: "furnished", beds: 3, sqm: 183, price: 750, img: "1586023492125-27b2c045efd7",
      en: { t: "Furnished Apartment", a: "Reef Island", f: "Fully furnished", alt: "Stylish furnished living room with a yellow armchair" },
      ar: { t: "شقة مفروشة", a: "جزيرة الريف", f: "مفروشة بالكامل", alt: "غرفة معيشة مفروشة بأناقة" } },
    { id: "CE-203", ptype: "villa", furn: "furnished", beds: 4, sqm: 350, price: 980, img: "1600596542815-ffad4c1539a9",
      en: { t: "Furnished Villa", a: "Zinj", f: "Fully furnished", alt: "White contemporary villa with a swimming pool" },
      ar: { t: "فيلا مفروشة", a: "الزنج", f: "مفروشة بالكامل", alt: "فيلا بيضاء حديثة مع مسبح" } },
    { id: "CE-204", ptype: "villa", furn: "furnished", beds: 4, sqm: 200, price: 990, img: "1580587771525-78b9dba3b914",
      en: { t: "Waterfront Villa", a: "Amwaj Islands", f: "Furnished", alt: "Modern waterfront villa with a pool and terraces" },
      ar: { t: "فيلا على الواجهة البحرية", a: "جزر أمواج", f: "مفروشة", alt: "فيلا حديثة على الواجهة البحرية مع مسبح" } }
  ];
  var T = {
    en: { rent: "For rent", month: "BHD / month", beds: "beds", sqm: "sqm", enquire: "Enquire on WhatsApp", count: function (n, t) { return n + " of " + t + " properties"; },
      msg: function (l, d) { return "Hello Capital Estate, I'm interested in the " + d.t + " in " + d.a + " (" + l.id + ", " + l.price + " BHD/month, " + l.beds + " bedrooms). Is it available for a viewing?"; } },
    ar: { rent: "للإيجار", month: "د.ب / شهريًا", beds: "غرف", sqm: "م²", enquire: "استفسر عبر واتساب", count: function (n, t) { return n + " من " + t + " عقارات"; },
      msg: function (l, d) { return "مرحبًا كابيتال إستيت، أنا مهتم بعقار " + d.t + " في " + d.a + " (" + l.id + "، " + l.price + " د.ب شهريًا، " + l.beds + " غرف نوم). هل يمكن ترتيب معاينة؟"; } }
  };

  var grid = document.getElementById("grid"), filters = document.getElementById("filters");
  var WA_SVG = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.7-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z"/></svg>';
  function render() {
    var f = filters.elements, t = T[lang];
    var list = LISTINGS.filter(function (l) {
      return (f.ptype.value === "all" || l.ptype === f.ptype.value) &&
        (f.furn.value === "all" || l.furn === f.furn.value) &&
        l.beds >= +f.beds.value && (+f.price.value === 0 || l.price <= +f.price.value);
    });
    grid.innerHTML = list.map(function (l) {
      var d = l[lang];
      return '<article class="card"><div class="card__media"><img src="' + IMG(l.img) + '" alt="' + d.alt + '" loading="lazy"><span class="card__tag">' + t.rent + '</span></div>' +
        '<div class="card__body"><p class="card__price">' + l.price + ' <small>' + t.month + '</small></p><h3>' + d.t + ' — ' + d.a + '</h3><p class="card__loc">' + d.f + '</p>' +
        '<ul class="specs"><li><strong>' + l.beds + '</strong> ' + t.beds + '</li><li><strong>' + l.sqm + '</strong> ' + t.sqm + '</li><li><bdi dir="ltr">' + l.id + '</bdi></li></ul>' +
        '<a class="btn btn--wa" target="_blank" rel="noopener" href="https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(t.msg(l, d)) + '">' + WA_SVG + ' ' + t.enquire + '</a></div></article>';
    }).join("");
    document.getElementById("count").textContent = t.count(list.length, LISTINGS.length);
    document.getElementById("empty").hidden = list.length > 0;
  }
  filters.addEventListener("change", render);

  // ---------- Language switch (whole page direction) ----------
  var nodes = document.querySelectorAll("[data-i18n]"), phs = document.querySelectorAll("[data-i18n-ph]");
  nodes.forEach(function (n) { n.dataset.en = n.innerHTML; });
  phs.forEach(function (n) { n.dataset.enPh = n.placeholder; });
  var langBtn = document.getElementById("langBtn");
  function setLang(l) {
    lang = l;
    var html = document.documentElement;
    html.lang = l; html.dir = l === "ar" ? "rtl" : "ltr";
    nodes.forEach(function (n) { n.innerHTML = l === "ar" ? (AR[n.dataset.i18n] || n.dataset.en) : n.dataset.en; });
    phs.forEach(function (n) { n.placeholder = l === "ar" ? AR[n.dataset.i18nPh] : n.dataset.enPh; });
    langBtn.textContent = l === "ar" ? "English" : "العربية";
    langBtn.lang = l === "ar" ? "en" : "ar";
    langBtn.setAttribute("aria-label", l === "ar" ? "View the site in English" : "عرض الموقع باللغة العربية");
    document.title = l === "ar" ? "كابيتال إستيت — خبراء العقار في البحرين منذ 1978 (تصميم مقترح)" : "Capital Estate Co. — Bahrain Property Experts Since 1978 (concept design)";
    try { localStorage.setItem("ce-lang", l); } catch (e) {}
    render();
  }
  langBtn.addEventListener("click", function () { setLang(lang === "en" ? "ar" : "en"); });
  var start = new URLSearchParams(location.search).get("lang");
  if (!start) { try { start = localStorage.getItem("ce-lang"); } catch (e) {} }
  setLang(start === "ar" ? "ar" : "en");

  // ---------- Landlord form -> WhatsApp ----------
  document.getElementById("llForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target.elements, err = document.getElementById("llError");
    if (!f.name.value.trim()) { err.textContent = lang === "ar" ? "يرجى إدخال اسمك." : "Please enter your name."; return; }
    err.textContent = "";
    var pt = f.ptype.options[f.ptype.selectedIndex].text, sv = f.service.options[f.service.selectedIndex].text;
    var msg = lang === "ar"
      ? "مرحبًا كابيتال إستيت، أرغب في الاستفادة من خدماتكم لعقاري.\n\nالاسم: " + f.name.value.trim() + (f.phone.value.trim() ? "\nالهاتف: " + f.phone.value.trim() : "") + "\nنوع العقار: " + pt + "\nالخدمة: " + sv + (f.area.value.trim() ? "\nالمنطقة: " + f.area.value.trim() : "")
      : "Hello Capital Estate, I'd like help with my property.\n\nName: " + f.name.value.trim() + (f.phone.value.trim() ? "\nMobile: " + f.phone.value.trim() : "") + "\nProperty type: " + pt + "\nService: " + sv + (f.area.value.trim() ? "\nArea: " + f.area.value.trim() : "");
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  // ---------- Mobile menu ----------
  var burger = document.querySelector(".burger"), nav = document.getElementById("nav");
  burger.addEventListener("click", function () { var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
})();
