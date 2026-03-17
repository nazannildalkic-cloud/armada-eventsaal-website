/* ═══════════════════════════════════════════════════════
   ARMADA EVENTSAAL – Premium Website Script v2.0
   ═══════════════════════════════════════════════════════ */

// ── TRANSLATIONS ──
const translations = {
    de: {
        nav_home: "Home", nav_packages: "Konzepte", nav_gallery: "Galerie", nav_date: "Termin",
        hero_title: "Unvergessliche Momente.", hero_sub: "Exklusive Säle für Ihre Traumhochzeit & Firmenevents.",
        btn_date: "Termin buchen", about_title: "Willkommen bei Armada",
        about_text: "Erleben Sie Luxus in Perfektion. Ob Hochzeit, Abiball oder Firmenfeier – unsere drei prachtvollen Säle bieten den perfekten Rahmen für 250 bis 700 Gäste in Hamburg. Unser Team begleitet Sie von der ersten Planung bis zum finalen Tanz.",
        pack_title: "Event Konzepte", p1_title: "Basis Konzept", p2_title: "Premium Paket", p3_title: "Royal All-In",
        vid_title: "Impressionen", rev_title: "Das sagen unsere Gäste",
        form_title: "Termin vereinbaren", form_btn: "Anfrage Senden",
        ayla_label: "Ayla Live-Beratung", ayla_hint: "Anruf starten"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_packages: "Konseptler", nav_gallery: "Galeri", nav_date: "Randevu",
        hero_title: "Unutulmaz Anlar.", hero_sub: "Düğünler ve Davetler için özel salonlar.",
        btn_date: "Randevu Al", about_title: "Armada'ya Hoş Geldiniz",
        about_text: "Lüksü mükemmellikle yaşayın. 250'den 700 misafir kapasitesine kadar olan salonlarımızla hizmetinizdeyiz.",
        pack_title: "Etkinlik Konseptleri", p1_title: "Temel Paket", p2_title: "Premium Paket", p3_title: "Kraliyet Paketi",
        vid_title: "İzlenimler", rev_title: "Misafirlerimiz ne diyor",
        form_title: "Randevu Alın", form_btn: "Gönder",
        ayla_label: "Ayla Canlı Danışmanlık", ayla_hint: "Aramayı Başlat"
    },
    ar: {
        nav_home: "الرئيسية", nav_packages: "المفاهيم", nav_gallery: "المعرض", nav_date: "موعد",
        hero_title: "لحظات لا تُنسى", hero_sub: "قاعات حصرية لحفلات الزفاف والفعاليات",
        btn_date: "طلب موعد", about_title: "مرحباً بكم في أرمادا",
        about_text: "استمتعوا بالفخامة المطلقة. ثلاث قاعات فاخرة تتسع حتى 700 ضيف في هامبورغ.",
        pack_title: "مفاهيم الفعاليات", p1_title: "المفهوم الأساسي", p2_title: "المفهوم المميز", p3_title: "المفهوم الملكي",
        vid_title: "انطباعات", rev_title: "آراء ضيوفنا",
        form_title: "احجز موعداً", form_btn: "إرسال الطلب",
        ayla_label: "أيلا استشارة مباشرة", ayla_hint: "بدء المكالمة"
    },
    en: {
        nav_home: "Home", nav_packages: "Concepts", nav_gallery: "Gallery", nav_date: "Inquiry",
        hero_title: "Unforgettable Moments.", hero_sub: "Exclusive venues for weddings & corporate events.",
        btn_date: "Book Now", about_title: "Welcome to Armada",
        about_text: "Experience luxury at its finest. Whether a wedding, prom, or corporate event – our three magnificent halls provide the perfect setting for 250 to 700 guests in Hamburg.",
        pack_title: "Event Concepts", p1_title: "Basic Concept", p2_title: "Premium Package", p3_title: "Royal All-In",
        vid_title: "Impressions", rev_title: "What our guests say",
        form_title: "Inquire Now", form_btn: "Send Inquiry",
        ayla_label: "Ayla Live Consultation", ayla_hint: "Start Call"
    },
    fa: {
        nav_home: "خانه", nav_packages: "مفاهیم", nav_gallery: "گالری", nav_date: "قرار ملاقات",
        hero_title: "لحظات فراموش نشدنی", hero_sub: "تالارهای منحصر به فرد برای عروسی شما",
        btn_date: "رزرو وقت", about_title: "به آرمادا خوش آمدید",
        about_text: "لوکس بودن را به کمال تجربه کنید. سه تالار باشکوه ما برای ۲۵۰ تا ۷۰۰ مهمان.",
        pack_title: "مفاهیم رویداد", p1_title: "مفهوم پایه", p2_title: "مفهوم ممتاز", p3_title: "مفهوم سلطنتی",
        vid_title: "تصاویر", rev_title: "نظرات مهمانان",
        form_title: "درخواست وقت", form_btn: "ارسال",
        ayla_label: "آیلا مشاوره زنده", ayla_hint: "شروع تماس"
    }
};

// ── VAPI VOICE AGENT ──
const PUBLIC_KEY = "946075e6-8ecc-45cb-9daf-7a22a29003e7";
const ASSISTANT_ID = "d8885729-f5b0-4140-8c59-17cc15137e36";
let vapi = null;
let isCallActive = false;

function initVapi() {
    if (typeof Vapi === 'undefined' || vapi) return;
    vapi = new Vapi(PUBLIC_KEY);
    const btn = document.getElementById('vapi-btn');
    const status = document.getElementById('status-text');
    vapi.on('call-start', () => { isCallActive = true; btn.classList.add('listening'); status.innerText = "Ayla hört zu..."; });
    vapi.on('call-end', () => { isCallActive = false; btn.classList.remove('listening'); status.innerText = "Frag Ayla"; });
}

window.startVoiceAgent = async function () {
    if (!vapi) initVapi();
    if (!isCallActive) {
        const overrides = {
            variableValues: { greeting: "Herzlich willkommen beim Armada Eventsaal. Mein Name ist Ayla. Wie kann ich Ihnen heute helfen?" },
            model: {
                provider: "openai", model: "gpt-4-turbo",
                messages: [{
                    role: "system",
                    content: "Du bist Ayla, die exklusive digitale Assistentin des Armada Eventsaal Hamburg. Du sprichst Deutsch, Türkisch, Arabisch, Englisch und Persisch. Deine Aufgabe ist es, Anfragen für Hochzeiten, Abibälle und Firmenevents freundlich entgegenzunehmen. Frage höflich nach dem Namen, der Telefonnummer und der Art des geplanten Events. Sei elegant und professionell."
                }]
            },
            transcriber: { provider: "deepgram", model: "nova-2", language: "multi" }
        };
        try { await vapi.start(ASSISTANT_ID, overrides); } catch (e) { console.error('Vapi error:', e); }
    } else { vapi.stop(); }
};
// ── BOOKING FORM (WEBHOOK) ──
const WEBHOOK_URL = "WEBHOOK_URL_HIER"; // n8n / Make Webhook URL

window.handleBooking = async function (e) {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const phone = document.getElementById('form-phone').value;
    const eventType = document.getElementById('form-event').value;
    const date = document.getElementById('form-date').value;
    const guests = document.getElementById('form-guests').value;
    const lang = document.querySelector('.lang-btn.active')?.innerText || 'DE';
    const status = document.getElementById('form-status');

    status.style.display = 'block';
    status.style.color = 'var(--gold)';
    status.innerText = "Sende Anfrage...";

    const payload = { name, email, phone, eventType, date, guests, lang, timestamp: new Date().toISOString(), source: 'website' };

    try {
        if (WEBHOOK_URL !== "WEBHOOK_URL_HIER") {
            await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        }
        // Fallback: WhatsApp via CallMeBot
        const WA_PHONE = "4917610019618";
        const WA_API_KEY = "WHATSAPP_API_KEY";
        const msg = `🔔 *NEUE ANFRAGE*%0A👤 ${name}%0A📧 ${email}%0A📞 ${phone}%0A🎉 ${eventType}%0A📅 ${date}%0A👥 ${guests} Gäste%0A🌍 ${lang}`;
        if (WA_API_KEY !== "WHATSAPP_API_KEY") {
            await fetch(`https://api.callmebot.com/whatsapp.php?phone=${WA_PHONE}&text=${msg}&apikey=${WA_API_KEY}`, { mode: 'no-cors' });
        }
        status.style.color = "#4CAF50";
        status.innerText = "✓ Erfolgreich gesendet! Wir melden uns in Kürze.";
        e.target.reset();
        setTimeout(() => { status.style.display = 'none'; }, 5000);
    } catch (error) {
        status.style.color = "#FF5252";
        status.innerText = "Fehler beim Senden. Bitte erneut versuchen.";
    }
};

// ── LANGUAGE SWITCHER ──
window.switchLang = function (lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn =>
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang))
    );
    document.body.style.direction = (lang === 'ar' || lang === 'fa') ? 'rtl' : 'ltr';
};

// ── SLIDESHOW ──
function runSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    let current = 0;
    slides.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
    slides[current].classList.remove('active');
    slides[(current + 1) % slides.length].classList.add('active');
}

// ── SCROLL ANIMATIONS (AOS replacement) ──
function initAnimations() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('aos-animate');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));
}

// ── HAMBURGER MENU ──
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('nav-links');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('open');
            nav.classList.remove('open');
        });
    });
}

// ── NAVBAR SCROLL EFFECT ──
function initNavScroll() {
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
}

// ── ACTIVE NAV LINK ──
function initActiveNav() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
        });
        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    }, { passive: true });
}

// ── LIGHTBOX ──
function initLightbox() {
    const gallery = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');
    if (!gallery || !lightbox) return;

    const images = gallery.querySelectorAll('img');
    let currentIdx = 0;

    function openLB(idx) {
        currentIdx = idx;
        lbImg.src = images[idx].src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLB() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    images.forEach((img, i) => {
        img.closest('.gal-item').addEventListener('click', () => openLB(i));
    });

    lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLB(); });
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); openLB((currentIdx - 1 + images.length) % images.length); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); openLB((currentIdx + 1) % images.length); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLB();
        if (e.key === 'ArrowLeft') openLB((currentIdx - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') openLB((currentIdx + 1) % images.length);
    });
}

// ── AUTO-SCROLL REVIEWS ──
function initReviewsScroll() {
    const inner = document.getElementById('reviews-inner');
    if (!inner) return;
    const cards = inner.innerHTML;
    inner.innerHTML = cards + cards;
}

// ── COUNTER ANIMATION ──
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.textContent.replace('+', ''));
            const suffix = el.textContent.includes('+') ? '+' : '';
            let count = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                count += step;
                if (count >= target) { count = target; clearInterval(timer); }
                el.textContent = count + suffix;
            }, 30);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
}

// ── SMOOTH SCROLL ──
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ── LEGAL MODALS ──
window.openModal = function (type) {
    const modal = document.getElementById('legal-modal');
    const text = document.getElementById('legal-text');
    if (type === 'impressum') {
        text.innerHTML = '<h3 style="margin-bottom:20px;">Impressum</h3>' +
            '<p><strong>Betreiber:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p>' +
            '<p style="margin-top:15px;"><strong>Kontakt:</strong><br>Mobil: 0176 – 100 19 618<br>E-Mail: info@armada-events.de</p>' +
            '<p style="margin-top:15px;"><strong>Verantwortlich für den Inhalt gem. § 55 Abs. 2 RStV:</strong><br>Irfan Gündoğan</p>';
    } else {
        text.innerHTML = '<h3 style="margin-bottom:20px;">Datenschutzerklärung</h3>' +
            '<p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Die über das Kontaktformular übermittelten Daten (Name, Telefonnummer, E-Mail, Veranstaltungsdetails) werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>' +
            '<p style="margin-top:15px;">Die Daten werden über eine verschlüsselte Verbindung an unser internes System weitergeleitet und nicht an Dritte weitergegeben.</p>' +
            '<p style="margin-top:15px;">Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten. Kontakt: info@armada-events.de</p>';
    }
    modal.classList.add('active');
};

window.closeModal = function () {
    document.getElementById('legal-modal').classList.remove('active');
};

// ── 3D PARTICLE BACKGROUND ──
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], mouse = { x: -1000, y: -1000 };

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const COUNT = Math.min(80, Math.floor(window.innerWidth / 18));
    const colors = ['rgba(212,175,55,', 'rgba(232,160,191,', 'rgba(123,45,142,', 'rgba(255,255,255,'];

    for (let i = 0; i < COUNT; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            z: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 2 + 0.5,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx * p.z;
            p.y += p.vy * p.z;

            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const alpha = Math.max(0.08, 0.4 - dist / 800) * p.z;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
            ctx.fillStyle = p.color + alpha + ')';
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx2 = p.x - p2.x;
                const dy2 = p.y - p2.y;
                const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                if (d < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = 'rgba(212,175,55,' + (0.06 * (1 - d / 150)) + ')';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Mouse interaction
            if (dist < 200) {
                p.vx += dx / dist * 0.01;
                p.vy += dy / dist * 0.01;
            }
            p.vx *= 0.99;
            p.vy *= 0.99;
        }

        requestAnimationFrame(draw);
    }
    draw();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initAnimations();
    initHamburger();
    initNavScroll();
    initActiveNav();
    initLightbox();
    initReviewsScroll();
    initCounters();
    initSmoothScroll();
    setInterval(runSlideshow, 5000);
});