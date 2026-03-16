(function () {

  /* ══ HERO SLIDER ══ */
  var slides = Array.from(document.querySelectorAll('.hero-slide'));
  var idx = 0;
  function rotateSlides() {
    if (!slides.length) return;
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }
  setInterval(rotateSlides, 5000);

  /* ══ PAKETRECHNER ══ */
  var guestsInput = document.getElementById('guests');
  var guestValue = document.getElementById('guestValue');
  var pkg = document.getElementById('package');
  var styleEl = document.getElementById('style');
  var liveCooking = document.getElementById('liveCooking');
  var photoTeam = document.getElementById('photoTeam');
  var limousine = document.getElementById('limousine');
  var resultPackage = document.getElementById('resultPackage');
  var resultPrice = document.getElementById('resultPrice');
  var resultHint = document.getElementById('resultHint');
  var waBtn = document.getElementById('waBtn');

  var packageBase = { basis: 14, premium: 19, royal: 30 };
  var styleFactor = { modern: 1, classic: 1.06, oriental: 1.12 };

  function formatEUR(v) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);
  }

  function updateCalculator() {
    if (!guestsInput) return;
    var guests = Number(guestsInput.value || 250);
    var p = pkg ? pkg.value : 'premium';
    var s = styleEl ? styleEl.value : 'modern';
    var base = { basis: 3500, premium: 8500, royal: 15000 };
    var perPerson = packageBase[p] || 19;
    var total = base[p] + guests * perPerson * (styleFactor[s] || 1);
    if (liveCooking && liveCooking.checked) total += 2200;
    if (photoTeam && photoTeam.checked) total += 2800;
    if (limousine && limousine.checked) total += 900;

    var guestText = guests + ' Gäste';
    if (guestValue) guestValue.textContent = guestText;

    var pNames = { basis: 'Basis Paket', premium: 'Premium Paket', royal: 'Royal All-In' };
    if (resultPackage) resultPackage.textContent = pNames[p] || 'Premium Paket';
    if (resultPrice) resultPrice.textContent = 'ab ' + formatEUR(Math.round(total / 100) * 100);
    if (resultHint) resultHint.textContent = 'Indikator für ' + guestText + ' · Finaler Preis nach Beratungsgespräch.';

    if (waBtn) {
      var name = document.getElementById('name') ? document.getElementById('name').value : '';
      var phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
      var date = document.getElementById('date') ? document.getElementById('date').value : '';
      var type = document.getElementById('eventType') ? document.getElementById('eventType').value : '';
      var msg = 'Hallo ARMADA Team,\n\nWir möchten eine Hochzeit anfragen:\nGäste: ' + guests + '\nPaket: ' + (pNames[p] || p) + '\nPreisrahmen: ab ' + formatEUR(Math.round(total / 100) * 100) + '\n' + (name ? 'Name: ' + name + '\n' : '') + (phone ? 'Tel: ' + phone + '\n' : '') + (date ? 'Termin: ' + date + '\n' : '') + (type ? 'Eventtyp: ' + type : '');
      waBtn.href = 'https://wa.me/4917610019618?text=' + encodeURIComponent(msg);
    }
  }

  ['input', 'change'].forEach(function(evt) {
    if (guestsInput) guestsInput.addEventListener(evt, updateCalculator);
    if (pkg) pkg.addEventListener(evt, updateCalculator);
    if (styleEl) styleEl.addEventListener(evt, updateCalculator);
    if (liveCooking) liveCooking.addEventListener(evt, updateCalculator);
    if (photoTeam) photoTeam.addEventListener(evt, updateCalculator);
    if (limousine) limousine.addEventListener(evt, updateCalculator);
  });

  updateCalculator();

  /* ══ FORMSPREE REDIRECT DETECTION ══ */
  var params = new URLSearchParams(window.location.search);
  if (params.get('anfrage') === 'ok') {
    var status = document.getElementById('status');
    if (status) {
      status.textContent = 'Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns innerhalb von 24 Stunden.';
      status.style.color = '#D4AF37';
    }
  }

})();
