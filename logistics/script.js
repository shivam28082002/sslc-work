(function () {
  var WA_NUMBER = "971500000000"; // demo number +971 50 000 0000

  var burger = document.querySelector(".burger"), nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });

  // ---- Demo shipment dataset ----
  var SHIPMENTS = {
    "BLC-2026-0042": {
      mode: "Sea freight · FCL 1 × 40'HC", from: "Jebel Ali, UAE", to: "Rotterdam, Netherlands",
      status: "In transit", badge: "transit", eta: "02 Nov 2026", weight: "18,450 kg", ref: "MSKU 448210-7",
      events: [
        { t: "Booking confirmed", d: "06 Oct 2026, 10:12", s: "done" },
        { t: "Container picked up from shipper — Dubai Industrial City", d: "08 Oct 2026, 14:40", s: "done" },
        { t: "Export customs cleared — Dubai Customs", d: "09 Oct 2026, 09:05", s: "done" },
        { t: "Loaded on vessel MSC Aurora V.642W — Jebel Ali", d: "11 Oct 2026, 22:30", s: "done" },
        { t: "Transiting Suez Canal", d: "Expected 19 Oct 2026", s: "current" },
        { t: "Arrival — Port of Rotterdam", d: "ETA 02 Nov 2026", s: "pending" },
        { t: "Import clearance & delivery to consignee", d: "ETA 04 Nov 2026", s: "pending" }
      ]
    },
    "BLC-2026-0117": {
      mode: "Air freight · 6 pallets", from: "Dubai (DXB), UAE", to: "Nairobi (NBO), Kenya",
      status: "Delivered", badge: "done", eta: "Delivered 13 Oct 2026", weight: "1,240 kg", ref: "AWB 176-55120934",
      events: [
        { t: "Cargo received at BlueLine air hub — DAFZ", d: "11 Oct 2026, 08:20", s: "done" },
        { t: "Security screening & export clearance", d: "11 Oct 2026, 13:45", s: "done" },
        { t: "Departed DXB on flight EK 719", d: "12 Oct 2026, 03:15", s: "done" },
        { t: "Arrived NBO — import customs cleared", d: "12 Oct 2026, 16:50", s: "done" },
        { t: "Delivered — signed by J. Mwangi", d: "13 Oct 2026, 11:05", s: "done" }
      ]
    },
    "BLC-2026-0203": {
      mode: "Road freight · FTL 13.6 m trailer", from: "Jebel Ali, UAE", to: "Riyadh, Saudi Arabia",
      status: "Customs hold", badge: "hold", eta: "17 Oct 2026", weight: "21,000 kg", ref: "TRK DXB-4471",
      events: [
        { t: "Truck loaded & sealed — Jebel Ali warehouse 7", d: "13 Oct 2026, 18:00", s: "done" },
        { t: "Departed UAE — Ghuwaifat border", d: "14 Oct 2026, 06:30", s: "done" },
        { t: "At Batha border — awaiting SFDA document check", d: "15 Oct 2026, 09:10 · our broker is on site", s: "current" },
        { t: "Saudi customs release", d: "Expected 16 Oct 2026", s: "pending" },
        { t: "Delivery to consignee — Riyadh 2nd Industrial City", d: "ETA 17 Oct 2026", s: "pending" }
      ]
    }
  };

  var result = document.getElementById("trackResult");
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function track(raw) {
    var num = String(raw || "").trim().toUpperCase().replace(/\s+/g, "");
    if (/^BLC\d{4}\d{4}$/.test(num)) num = num.slice(0, 3) + "-" + num.slice(3, 7) + "-" + num.slice(7);
    var s = SHIPMENTS[num];
    if (!num) { result.innerHTML = '<p class="r-error">Please enter a tracking number.</p>'; return; }
    if (!s) {
      result.innerHTML = '<p class="r-error">We could not find “' + esc(num) + '”.</p><p class="sub" style="margin-top:.6rem">Check the reference on your booking confirmation, or try a demo number: BLC-2026-0042, BLC-2026-0117 or BLC-2026-0203.</p>';
      return;
    }
    var html = '<div class="r-head"><div><h3>' + num + '</h3><p class="r-route">' + esc(s.from) + ' → ' + esc(s.to) + '</p></div>' +
      '<span class="badge badge--' + s.badge + '">' + esc(s.status) + '</span></div>' +
      '<div class="r-meta"><div><span>Mode</span><strong>' + esc(s.mode) + '</strong></div>' +
      '<div><span>ETA</span><strong>' + esc(s.eta) + '</strong></div>' +
      '<div><span>Weight · Ref</span><strong>' + esc(s.weight) + ' · ' + esc(s.ref) + '</strong></div></div><ol class="timeline">';
    s.events.forEach(function (ev) {
      html += '<li class="' + ev.s + '"><strong>' + esc(ev.t) + '</strong><span>' + esc(ev.d) + '</span></li>';
    });
    html += '</ol><a class="btn btn--wa" style="margin-top:.6rem" target="_blank" rel="noopener" href="https://wa.me/' + WA_NUMBER +
      '?text=' + encodeURIComponent("Hello BlueLine Cargo, I have a question about shipment " + num + ".") + '">Ask about this shipment on WhatsApp</a>';
    result.innerHTML = html;
  }

  var tInput = document.getElementById("t-num");
  document.getElementById("trackForm").addEventListener("submit", function (e) { e.preventDefault(); track(tInput.value); });
  document.getElementById("heroTrack").addEventListener("submit", function (e) {
    e.preventDefault();
    var v = document.getElementById("ht-num").value;
    tInput.value = v; track(v);
    document.getElementById("track").scrollIntoView();
  });
  document.querySelectorAll("[data-demo]").forEach(function (b) {
    b.addEventListener("click", function () {
      tInput.value = b.dataset.demo; document.getElementById("ht-num").value = b.dataset.demo;
      track(b.dataset.demo);
      if (b.closest("#heroTrack")) document.getElementById("track").scrollIntoView();
    });
  });
  // Support links like index.html?track=BLC-2026-0042
  var q = new URLSearchParams(location.search).get("track");
  if (q) { tInput.value = q; track(q); }

  // ---- Quote form -> WhatsApp ----
  var dateEl = document.getElementById("q-date");
  dateEl.min = new Date().toISOString().slice(0, 10);
  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target.elements, err = document.getElementById("quoteError");
    if (!f.origin.value.trim() || !f.destination.value.trim() || !f.name.value.trim()) {
      err.textContent = "Please fill in origin, destination and your name."; return;
    }
    err.textContent = "";
    var lines = [
      "Hello BlueLine Cargo, I would like a freight quote.", "",
      "Mode: " + f.mode.value,
      "From: " + f.origin.value.trim(),
      "To: " + f.destination.value.trim(),
      "Cargo: " + f.cargo.value
    ];
    if (f.weight.value) lines.push("Weight: " + f.weight.value + " kg");
    if (f.volume.value.trim()) lines.push("Volume: " + f.volume.value.trim());
    if (f.ready.value) lines.push("Ready date: " + f.ready.value);
    lines.push("", "Name: " + f.name.value.trim() + (f.company.value.trim() ? " (" + f.company.value.trim() + ")" : ""));
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });
})();
