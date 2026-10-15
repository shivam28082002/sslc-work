(function () {
  var WA_NUMBER = "971500000000"; // demo number +971 50 000 0000
  var IMG = function (id, w) { return "https://images.unsplash.com/photo-" + id + "?w=" + (w || 900) + "&q=80"; };

  // ---- Demo dataset (fictional listings) ----
  var PROPERTIES = [
    { id: "PG-1021", title: "Sea-view 2BR apartment with balcony", type: "rent", area: "Juffair", beds: 2, baths: 2, sqm: 125, price: 520, furnished: "Fully furnished",
      img: "1502672260266-1c1ef2d93688", alt: "Light-filled apartment living room with sofa and plants",
      features: ["Sea view", "Pool & gym", "Covered parking", "EWA included up to BD 30"],
      desc: "A bright corner apartment on the 18th floor, five minutes from the Juffair corniche. Open-plan living, two en-suite bedrooms and a balcony facing the Gulf." },
    { id: "PG-1034", title: "4BR family villa with private pool", type: "sale", area: "Saar", beds: 4, baths: 5, sqm: 410, price: 285000, furnished: "Unfurnished",
      img: "1564013799919-ab600027ffc6", alt: "White two-storey villa with palm trees and a pool",
      features: ["Private pool", "Maid's room", "Garden", "Freehold for GCC & expats"],
      desc: "A family villa in a quiet Saar compound, close to St Christopher's and the Saar Mall. Double-height majlis, landscaped garden and a 10 m pool." },
    { id: "PG-1040", title: "Furnished 1BR in Seef high-rise", type: "rent", area: "Seef", beds: 1, baths: 1, sqm: 78, price: 380, furnished: "Fully furnished",
      img: "1522708323590-d24dbb6b0267", alt: "Compact furnished apartment with kitchen and dining table",
      features: ["Walk to City Centre mall", "Gym", "24/7 security", "High-speed internet"],
      desc: "Ideal for professionals — a fully furnished one-bedroom with a separate study nook, steps from Seef Mall and the Bahrain Financial Harbour shuttle." },
    { id: "PG-1052", title: "Waterfront 3BR apartment, Amwaj Islands", type: "sale", area: "Amwaj Islands", beds: 3, baths: 3, sqm: 190, price: 148000, furnished: "Semi furnished",
      img: "1560448204-e02f11c3d0e2", alt: "Spacious living room with large windows and modern furniture",
      features: ["Marina view", "Beach access", "Kids' play area", "Rental yield approx. 7%"],
      desc: "A spacious lagoon-facing apartment in the Tala Island area of Amwaj, with a wrap-around balcony and direct beach access. Freehold and investor friendly." },
    { id: "PG-1063", title: "Contemporary 5BR villa in Riffa Views", type: "sale", area: "Riffa", beds: 5, baths: 6, sqm: 520, price: 465000, furnished: "Unfurnished",
      img: "1600585154340-be6161a56a0c", alt: "Contemporary villa with dark cladding and glass walls at dusk",
      features: ["Golf course view", "Home cinema", "Smart home", "Two-car garage"],
      desc: "An architect-designed villa on the fairway at Riffa Views, with floor-to-ceiling glazing, a home cinema and a rooftop terrace for evening gatherings." },
    { id: "PG-1071", title: "Family 3BR townhouse with garden", type: "rent", area: "Janabiya", beds: 3, baths: 4, sqm: 260, price: 750, furnished: "Semi furnished",
      img: "1600566753190-17f0baa2a6c3", alt: "Modern townhouse with timber and concrete facade",
      features: ["Private garden", "Shared pool", "Near King Fahd Causeway", "Pet friendly"],
      desc: "A semi-furnished townhouse in a gated Janabiya compound, popular with families commuting to Saudi Arabia. Large garden and a shared pool." },
    { id: "PG-1088", title: "Luxury 2BR at Bahrain Bay", type: "rent", area: "Bahrain Bay", beds: 2, baths: 3, sqm: 160, price: 1100, furnished: "Fully furnished",
      img: "1600607687939-ce8a6c25118c", alt: "Elegant open-plan apartment with timber wall and city views",
      features: ["Concierge", "Infinity pool", "Skyline view", "Valet parking"],
      desc: "A designer-furnished residence in Bahrain Bay with hotel-style services, panoramic skyline views and a short walk to the Four Seasons." },
    { id: "PG-1093", title: "Investment studio, Busaiteen", type: "sale", area: "Busaiteen", beds: 0, baths: 1, sqm: 52, price: 39500, furnished: "Fully furnished",
      img: "1545324418-cc1a3fa10c00", alt: "Modern residential building facade with balconies",
      features: ["Tenanted at BD 260/month", "Near the airport", "Low service charge"],
      desc: "A ready-tenanted furnished studio near Bahrain International Airport — an entry-level freehold investment with a current gross yield of about 7.9%." },
    { id: "PG-1105", title: "Grade-A office floor in Seef", type: "rent", area: "Seef", beds: 0, baths: 2, sqm: 240, price: 1450, furnished: "Fitted office",
      img: "1497366216548-37526070297c", alt: "Bright fitted open-plan office with meeting room",
      features: ["Fitted & partitioned", "6 parking bays", "Commercial registration ready", "Sea view"],
      desc: "A fully fitted office in a Seef tower with reception, two meeting rooms and an open workspace for up to 25 staff. Available immediately." }
  ];

  var AREAS = PROPERTIES.map(function (p) { return p.area; }).filter(function (a, i, arr) { return arr.indexOf(a) === i; }).sort();
  document.querySelectorAll("select[data-areas]").forEach(function (sel) {
    AREAS.concat(sel.id === "l-area" ? ["Other"] : []).forEach(function (a) {
      var o = document.createElement("option"); o.value = a; o.textContent = a; sel.appendChild(o);
    });
  });

  var fmt = function (n) { return n.toLocaleString("en-US"); };
  var priceLabel = function (p) { return "BD " + fmt(p.price) + (p.type === "rent" ? " <span>/ month</span>" : ""); };
  var bedLabel = function (b, p) { return b === 0 ? (p && p.furnished === "Fitted office" ? "Office" : "Studio") : b + " bed" + (b > 1 ? "s" : ""); };
  var waLink = function (p) {
    var msg = "Hello Pearl Gate Properties, I'm interested in " + p.id + " — " + p.title + " (" + p.area + ", BD " + fmt(p.price) +
      (p.type === "rent" ? "/month" : "") + "). Is it still available? I'd like to arrange a viewing.";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  };
  var WA_SVG = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.7-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z"/></svg>';

  var grid = document.getElementById("grid"), form = document.getElementById("filters");
  function render() {
    var f = form.elements;
    var type = f.type.value, area = f.area.value, beds = +f.beds.value, max = +f.price.value || Infinity, sort = f.sort.value;
    var list = PROPERTIES.filter(function (p) {
      return (type === "all" || p.type === type) && (area === "all" || p.area === area) && p.beds >= beds && p.price <= max;
    });
    if (sort === "low") list.sort(function (a, b) { return a.price - b.price; });
    if (sort === "high") list.sort(function (a, b) { return b.price - a.price; });
    if (sort === "size") list.sort(function (a, b) { return b.sqm - a.sqm; });
    grid.innerHTML = list.map(function (p) {
      return '<article class="card">' +
        '<button class="card__media" data-open="' + p.id + '" aria-label="View details of ' + p.title + '"><img src="' + IMG(p.img) + '" alt="' + p.alt + '" loading="lazy">' +
        '<span class="card__tag' + (p.type === "sale" ? " card__tag--sale" : "") + '">For ' + (p.type === "rent" ? "rent" : "sale") + '</span></button>' +
        '<div class="card__body"><p class="card__price">' + priceLabel(p) + '</p><h3>' + p.title + '</h3><p class="card__loc">' + p.area + ', Bahrain · ' + p.furnished + '</p>' +
        '<ul class="specs"><li><strong>' + bedLabel(p.beds, p) + '</strong></li><li><strong>' + p.baths + '</strong> bath</li><li><strong>' + p.sqm + '</strong> m²</li></ul>' +
        '<div class="card__actions"><button class="btn btn--outline" data-open="' + p.id + '">Details</button>' +
        '<a class="btn btn--wa" href="' + waLink(p) + '" target="_blank" rel="noopener">' + WA_SVG + ' Enquire</a></div></div></article>';
    }).join("");
    document.getElementById("count").textContent = list.length + " of " + PROPERTIES.length + " properties";
    document.getElementById("empty").hidden = list.length > 0;
  }
  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("reset", function () { setTimeout(render, 0); });
  form.addEventListener("submit", function (e) { e.preventDefault(); });
  render();

  // Hero search pushes values into filters
  document.getElementById("heroSearch").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    f.type.value = document.getElementById("hs-type").value;
    f.area.value = document.getElementById("hs-area").value;
    f.beds.value = document.getElementById("hs-beds").value;
    render();
    document.getElementById("listings").scrollIntoView();
  });

  // Detail modal
  var modal = document.getElementById("modal"), body = document.getElementById("modalBody");
  grid.addEventListener("click", function (e) {
    var t = e.target.closest("[data-open]"); if (t) openProperty(t.dataset.open);
  });
  function openProperty(id) {
    var p = PROPERTIES.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    body.innerHTML = '<div class="m-grid"><img src="' + IMG(p.img, 1400) + '" alt="' + p.alt + '"><div class="m-info">' +
      '<p class="eyebrow">' + p.id + ' · For ' + (p.type === "rent" ? "rent" : "sale") + '</p><h2 id="m-title">' + p.title + '</h2>' +
      '<p class="card__price">' + priceLabel(p) + '</p><p>' + p.area + ', Kingdom of Bahrain · ' + p.furnished + '</p>' +
      '<div class="m-specs"><div><strong>' + (p.beds || "—") + '</strong><span>Beds</span></div><div><strong>' + p.baths + '</strong><span>Baths</span></div><div><strong>' + p.sqm + '</strong><span>m²</span></div><div><strong>' + (p.type === "rent" ? "Now" : "Freehold") + '</strong><span>' + (p.type === "rent" ? "Available" : "Title") + '</span></div></div>' +
      '<p>' + p.desc + '</p><ul class="m-feat">' + p.features.map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul>' +
      '<a class="btn btn--wa" href="' + waLink(p) + '" target="_blank" rel="noopener">' + WA_SVG + ' Enquire on WhatsApp</a></div></div>';
    modal.showModal();
  }
  // Shareable listing links, e.g. index.html#PG-1034
  if (/^#PG-\d+$/.test(location.hash)) openProperty(location.hash.slice(1));
  modal.querySelector(".modal__close").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });

  // Landlord form -> WhatsApp
  document.getElementById("listForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target.elements, err = document.getElementById("listError");
    if (!f.name.value.trim() || !f.area.value) { err.textContent = "Please add your name and the property's area."; return; }
    err.textContent = "";
    var msg = "Hello Pearl Gate Properties, I'd like to list my property.\n\n" +
      "Name: " + f.name.value.trim() + (f.phone.value.trim() ? "\nMobile: " + f.phone.value.trim() : "") +
      "\nProperty: " + f.ptype.value + ", " + f.beds.value + " bedroom(s)" +
      "\nArea: " + f.area.value +
      "\nGoal: " + f.goal.value +
      (f.price.value.trim() ? "\nExpected price/rent: BD " + f.price.value.trim() : "");
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  // Mobile menu
  var burger = document.querySelector(".burger"), nav = document.getElementById("nav");
  burger.addEventListener("click", function () { var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
})();
