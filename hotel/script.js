(function () {
  var WA_NUMBER = "971500000000"; // demo number +971 50 000 0000

  // Mobile menu
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });

  // EN / FR toggle for hero and headings
  var dict = {
    fr: {
      navRooms: "Chambres", navExp: "Expériences", navGallery: "Galerie", navReviews: "Avis", navBook: "Réserver",
      heroEyebrow: "Médina de Marrakech · Depuis 1924",
      heroTitle: "Un patio de lumière caché, à cinq minutes de Jemaa el-Fna",
      heroLead: "Neuf chambres restaurées à la main autour d'un patio d'orangers, une piscine chauffée, un hammam traditionnel et un rooftop face à l'Atlas.",
      heroCta: "Voir les disponibilités", heroCta2: "Découvrir les chambres",
      fact1: "Note des clients", fact2: "Suites & chambres", fact3: "Conciergerie",
      introEyebrow: "La maison", introTitle: "Une demeure de marchand centenaire, restaurée à la main",
      roomsEyebrow: "Séjourner", roomsTitle: "Chambres & suites",
      roomsSub: "Chaque tarif inclut le petit-déjeuner en terrasse, le transfert aéroport et le thé de l'après-midi.",
      expEyebrow: "Au-delà de la chambre", expTitle: "Des expériences choisies par notre concierge",
      galEyebrow: "Galerie", galTitle: "Un aperçu de la maison",
      revEyebrow: "Paroles de clients", revTitle: "Ce que disent nos hôtes",
      bookEyebrow: "Réservations", bookTitle: "Réservez en direct, au meilleur tarif",
      bookBtn: "Envoyer la demande sur WhatsApp"
    }
  };
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (n) { n.dataset.en = n.innerHTML; });
  function setLang(lang) {
    nodes.forEach(function (n) {
      var key = n.dataset.i18n;
      n.innerHTML = lang === "en" ? n.dataset.en : (dict[lang][key] || n.dataset.en);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang);
    });
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // "Select" on a room pre-fills the booking form
  var roomSelect = document.getElementById("b-room");
  document.querySelectorAll("[data-room]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      roomSelect.value = btn.dataset.room;
      document.getElementById("book").scrollIntoView();
      setTimeout(function () { document.getElementById("b-name").focus({ preventScroll: true }); }, 500);
    });
  });

  // Dates: default + min
  var inEl = document.getElementById("b-in"), outEl = document.getElementById("b-out");
  var today = new Date(); var iso = function (d) { return d.toISOString().slice(0, 10); };
  inEl.min = iso(today); outEl.min = iso(today);
  inEl.addEventListener("change", function () {
    var d = new Date(inEl.value); d.setDate(d.getDate() + 1);
    outEl.min = iso(d);
    if (!outEl.value || outEl.value <= inEl.value) outEl.value = iso(d);
  });

  // Booking form -> WhatsApp
  document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target.elements, err = document.getElementById("bookError");
    var name = f.name.value.trim();
    if (!name || !f.checkin.value || !f.checkout.value) { err.textContent = "Please add your name and both dates."; return; }
    if (f.checkout.value <= f.checkin.value) { err.textContent = "Check-out must be after check-in."; return; }
    err.textContent = "";
    var nights = Math.round((new Date(f.checkout.value) - new Date(f.checkin.value)) / 86400000);
    var msg = "Hello Dar Lumière, I would like to book a stay.\n\n" +
      "Name: " + name + "\n" +
      "Check-in: " + f.checkin.value + "\n" +
      "Check-out: " + f.checkout.value + " (" + nights + " night" + (nights > 1 ? "s" : "") + ")\n" +
      "Guests: " + f.guests.value + "\n" +
      "Room: " + f.room.value +
      (f.message.value.trim() ? "\nRequests: " + f.message.value.trim() : "");
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  // Gallery lightbox
  var lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
  document.querySelectorAll(".g").forEach(function (g) {
    g.addEventListener("click", function () {
      lbImg.src = g.dataset.full; lbImg.alt = g.querySelector("img").alt;
      lb.showModal();
    });
  });
  lb.querySelector(".lightbox__close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
})();
