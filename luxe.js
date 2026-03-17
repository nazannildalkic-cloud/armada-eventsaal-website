/* ═══════════════════════════════════════════════════════
   ARMADA EVENTSAAL – Premium Website Script v3.0 LUXE
   ═══════════════════════════════════════════════════════ */

// ── TRANSLATIONS ──
const translations = {
    de: {
        nav_home: "Home", nav_packages: "Konzepte", nav_gallery: "Galerie", nav_date: "Beratung",
        hero_title: "Wo Träume Wirklichkeit werden.", hero_sub: "Hamburgs exklusivste Festsäle für Ihre unvergessliche Feier.",
        btn_date: "Premium-Termin anfragen", btn_gallery: "Galerie ansehen", about_title: "Das Armada Versprechen",
        about_text: "Wir verwandeln Ihre Träume in atemberaubende Realität. Drei majestätische Festsäle, ein leidenschaftliches Team und über 500 erfolgreich inszenierte Events — das ist ARMADA. Von der ersten Idee bis zum letzten Tanz stehen wir an Ihrer Seite und sorgen dafür, dass jeder Moment perfekt wird.",
        pack_title: "Event Konzepte", p1_title: "Basis Konzept", p2_title: "Premium Paket", p3_title: "Royal All-In",
        vid_title: "Impressionen", rev_title: "Das sagen unsere Gäste",
        form_title: "Ihr Premium-Event beginnt hier", form_btn: "Premium-Anfrage senden", form_open_btn: "Beratung starten",
        feat_catering: "Premium Catering", feat_catering_desc: "Kulinarische Meisterwerke, die Ihre Gäste verzaubern — von der Hauben-Küche bis zum Live-Cooking-Erlebnis.",
        feat_light: "Magisches Lichtdesign", feat_light_desc: "Atemberaubende Lichtinszenierungen, die jeden Saal in eine Traumwelt verwandeln.",
        feat_deko: "Maßgeschneiderte Deko", feat_deko_desc: "Jedes Detail erzählt Ihre Geschichte — individuell, opulent und bis zur letzten Blüte perfekt.",
        feat_service: "Rundum-Sorglos", feat_service_desc: "Lehnen Sie sich zurück — unser erfahrenes Team kümmert sich um alles, vom ersten Gespräch bis zum letzten Gast.",
        vorteile_title: "Warum ARMADA?", vorteile_sub: "Alles unter einem Dach — damit Sie sich auf das Wichtigste konzentrieren können: Genießen.",
        anlaesse_title: "Für jeden besonderen Moment", anlaesse_sub: "Ob Familienfeier oder Business-Event — wir erschaffen magische Momente.",
        anlass_verlobung: "Verlobung / Nişan", anlass_verlobung_desc: "Der Beginn Ihrer Liebesgeschichte verdient einen magischen Rahmen — Ringe, Rosen und ein Versprechen, das ewig währt.",
        anlass_henna: "Henna / Kına Gecesi", anlass_henna_desc: "Tradition trifft Emotion — ein Abend voller Tränen der Freude, Tanz und unvergesslicher Erinnerungen.",
        anlass_firmen: "Firmenevents & Galas", anlass_firmen_desc: "Beeindrucken Sie Ihre Geschäftspartner — Konferenzen, Galas und Weihnachtsfeiern auf höchstem Niveau.",
        anlass_abi: "Abibälle", anlass_abi_desc: "Der krönende Abschluss Ihrer Schulzeit — glamourös, mitreißend und absolut unvergesslich.",
        anlass_sunnet: "Beschneidung / Sünnet", anlass_sunnet_desc: "Ein stolzer Familientag mit Tradition — festlich, herzlich und mit allem, was das Herz begehrt.",
        anlass_geburtstag: "Geburtstage", anlass_geburtstag_desc: "Ob 18. oder 50. — feiern Sie Ihren Ehrentag im großen Stil mit Ihren Liebsten.",
        stats_events: "Events gefeiert", stats_guests: "Max. Gäste", stats_halls: "Festsäle", stats_years: "Jahre Erfahrung",
        trust_guarantee: "Rundum-Sorglos Garantie", trust_accessible: "100% Barrierefrei", trust_parking: "200+ Parkplätze",
        form_subtitle: "Buchen Sie direkt einen kostenlosen Besichtigungstermin — oder senden Sie uns eine Anfrage.",
        form_general: "Oder: Allgemeine Anfrage senden",
        cta_badge: "Beliebte Termine 2026 fast ausgebucht", cta_headline: "Sichern Sie sich jetzt Ihren Wunschtermin", cta_btn: "Jetzt Termin anfragen"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_packages: "Konseptler", nav_gallery: "Galeri", nav_date: "Danışmanlık",
        hero_title: "Hayallerin Gerçek Olduğu Yer.", hero_sub: "Hamburg'un en seçkin düğün ve etkinlik salonları.",
        btn_date: "Premium tarih talep et", btn_gallery: "Galeriyi gör", about_title: "Armada Sözü",
        about_text: "Hayallerinizi nefes kesici bir gerçeğe dönüştürüyoruz. Üç görkemli salon, tutkulu bir ekip ve 500'den fazla başarıyla organize edilmiş etkinlik — işte bu ARMADA. İlk fikirden son dansa kadar yanınızdayız.",
        pack_title: "Etkinlik Konseptleri", p1_title: "Temel Paket", p2_title: "Premium Paket", p3_title: "Kraliyet Paketi",
        vid_title: "İzlenimler", rev_title: "Misafirlerimiz ne diyor",
        form_title: "Premium etkinliğiniz burada başlıyor", form_btn: "Premium talep gönder", form_open_btn: "Danismanligi baslat",
        feat_catering: "Premium Catering", feat_catering_desc: "Misafirlerinizi büyüleyen mutfak şaheserleri — aşçıbaşı lezzetlerinden canlı yemek şovlarına.",
        feat_light: "Büyüleyici Işık Tasarımı", feat_light_desc: "Her salonu bir rüya dünyasına çeviren nefes kesici ışık gösterileri.",
        feat_deko: "Özel Tasarım Dekorasyon", feat_deko_desc: "Her detay sizin hikayenizi anlatıyor — bireysel, görkemli ve son çiçeğe kadar kusursuz.",
        feat_service: "Tam Hizmet", feat_service_desc: "Arkanıza yaslanın — deneyimli ekibimiz ilk görüşmeden son misafire kadar her şeyle ilgileniyor.",
        vorteile_title: "Neden ARMADA?", vorteile_sub: "Her şey tek çatı altında — keyif çıkarmanıza odaklanabilmeniz için.",
        anlaesse_title: "Her Özel An İçin", anlaesse_sub: "Aile kutlaması ya da iş etkinliği — sihirli anlar yaratıyoruz.",
        anlass_verlobung: "Nişan", anlass_verlobung_desc: "Aşk hikayenizin başlangıcı büyülü bir çerçeveyi hak ediyor — yüzükler, güller ve sonsuza kadar sürecek bir söz.",
        anlass_henna: "Kına Gecesi", anlass_henna_desc: "Gelenek duyguyla buluşuyor — sevinç gözyaşları, dans ve unutulmaz anılarla dolu bir gece.",
        anlass_firmen: "Kurumsal Etkinlikler", anlass_firmen_desc: "İş ortaklarınızı etkileyin — en üst düzeyde konferanslar, galalar ve yılbaşı kutlamaları.",
        anlass_abi: "Mezuniyet Baloları", anlass_abi_desc: "Okul hayatınızın muhteşem finali — göz alıcı, heyecan verici ve kesinlikle unutulmaz.",
        anlass_sunnet: "Sünnet Düğünü", anlass_sunnet_desc: "Gelenekle dolu gururlu bir aile günü — şenlikli, samimi ve gönlünüzden geçen her şeyle.",
        anlass_geburtstag: "Doğum Günleri", anlass_geburtstag_desc: "18 ya da 50 — sevdiklerinizle görkemli bir kutlama yapın.",
        stats_events: "Kutlanan Etkinlik", stats_guests: "Maks. Misafir", stats_halls: "Salon", stats_years: "Yıl Deneyim",
        trust_guarantee: "Tam Kapsamlı Garanti", trust_accessible: "100% Engelsiz", trust_parking: "200+ Park Yeri",
        form_subtitle: "Ücretsiz bir keşif turu için doğrudan randevu alın — veya bize bir talep gönderin.",
        form_general: "Veya: Genel İstek Gönderin",
        cta_badge: "2026'nın popüler tarihleri dolmak üzere", cta_headline: "Şimdi istediğiniz tarihi güvence altına alın", cta_btn: "Hemen Randevu Al"
    },
    ar: {
        nav_home: "الرئيسية", nav_packages: "المفاهيم", nav_gallery: "المعرض", nav_date: "استشارة",
        hero_title: "حيث تتحقق الأحلام.", hero_sub: "أفخم قاعات الأفراح والمناسبات في هامبورغ.",
        btn_date: "اطلب موعدًا مميزًا", btn_gallery: "شاهد المعرض", about_title: "وعد أرمادا",
        about_text: "نحوّل أحلامكم إلى واقع مذهل. ثلاث قاعات فخمة، فريق شغوف وأكثر من 500 حدث ناجح — هذا هو أرمادا. من الفكرة الأولى حتى آخر رقصة، نحن بجانبكم.",
        pack_title: "مفاهيم الفعاليات", p1_title: "المفهوم الأساسي", p2_title: "المفهوم المميز", p3_title: "المفهوم الملكي",
        vid_title: "انطباعات", rev_title: "آراء ضيوفنا",
        form_title: "فعاليتكم المميزة تبدأ هنا", form_btn: "إرسال طلب مميز", form_open_btn: "ابدأ الاستشارة",
        feat_catering: "ضيافة فاخرة", feat_catering_desc: "روائع طهي تسحر ضيوفكم — من المطبخ الراقي إلى عروض الطبخ الحي.",
        feat_light: "تصميم إضاءة ساحر", feat_light_desc: "عروض إضاءة مذهلة تحوّل كل قاعة إلى عالم أحلام.",
        feat_deko: "ديكور مخصص", feat_deko_desc: "كل تفصيل يروي قصتكم — فردي، فاخر ومثالي حتى آخر زهرة.",
        feat_service: "خدمة شاملة", feat_service_desc: "استرخوا — فريقنا ذو الخبرة يهتم بكل شيء من أول لقاء حتى آخر ضيف.",
        vorteile_title: "لماذا أرمادا؟", vorteile_sub: "كل شيء تحت سقف واحد — لتركّزوا على الأهم: الاستمتاع.",
        anlaesse_title: "لكل لحظة مميزة", anlaesse_sub: "سواء احتفال عائلي أو حدث تجاري — نصنع لحظات سحرية.",
        anlass_verlobung: "خطوبة", anlass_verlobung_desc: "بداية قصة حبكم تستحق إطاراً سحرياً — خواتم وورود ووعد يدوم للأبد.",
        anlass_henna: "ليلة الحناء", anlass_henna_desc: "التقاليد تلتقي بالمشاعر — أمسية مليئة بدموع الفرح والرقص والذكريات الخالدة.",
        anlass_firmen: "فعاليات الشركات", anlass_firmen_desc: "أبهروا شركاءكم — مؤتمرات وحفلات واحتفالات على أعلى مستوى.",
        anlass_abi: "حفلات التخرج", anlass_abi_desc: "الختام المثالي لحياتكم المدرسية — أنيق ومثير ولا يُنسى.",
        anlass_sunnet: "ختان / سُنّة", anlass_sunnet_desc: "يوم عائلي فخور بالتقاليد — احتفالي ودافئ وبكل ما يتمناه القلب.",
        anlass_geburtstag: "أعياد الميلاد", anlass_geburtstag_desc: "سواء الـ18 أو الـ50 — احتفلوا بيومكم المميز بأسلوب كبير مع أحبائكم.",
        stats_events: "فعالية احتُفل بها", stats_guests: "أقصى ضيف", stats_halls: "قاعات الأفراح", stats_years: "سنوات خبرة",
        trust_guarantee: "ضمان شامل", trust_accessible: "100% بدون عوائق", trust_parking: "200+ موقف سيارة",
        form_subtitle: "احجز مباشرة موعد معاينة مجاني — أو أرسل لنا طلبًا.",
        form_general: "أو: أرسل استفسارًا عامًا",
        cta_badge: "المواعيد الشهيرة لعام 2026 تنفد سريعًا", cta_headline: "احجز موعدك المفضل الآن", cta_btn: "احجز موعدًا الآن"
    },
    en: {
        nav_home: "Home", nav_packages: "Concepts", nav_gallery: "Gallery", nav_date: "Consultation",
        hero_title: "Where Dreams Come True.", hero_sub: "Hamburg's most exclusive venues for your unforgettable celebration.",
        btn_date: "Request Premium Date", btn_gallery: "View Gallery", about_title: "The Armada Promise",
        about_text: "We transform your dreams into breathtaking reality. Three majestic halls, a passionate team, and over 500 successfully staged events — that's ARMADA. From the first idea to the final dance, we stand by your side ensuring every moment is perfect.",
        pack_title: "Event Concepts", p1_title: "Basic Concept", p2_title: "Premium Package", p3_title: "Royal All-In",
        vid_title: "Impressions", rev_title: "What our guests say",
        form_title: "Your Premium Event Starts Here", form_btn: "Send Premium Inquiry", form_open_btn: "Start Consultation",
        feat_catering: "Premium Catering", feat_catering_desc: "Culinary masterpieces that enchant your guests — from gourmet cuisine to live cooking experiences.",
        feat_light: "Magical Light Design", feat_light_desc: "Breathtaking light shows that transform every hall into a dreamworld.",
        feat_deko: "Bespoke Décor", feat_deko_desc: "Every detail tells your story — individual, opulent, and perfect down to the last petal.",
        feat_service: "Full Service", feat_service_desc: "Sit back and relax — our experienced team handles everything from the first meeting to the last guest.",
        vorteile_title: "Why ARMADA?", vorteile_sub: "Everything under one roof — so you can focus on what matters most: enjoying.",
        anlaesse_title: "For Every Special Moment", anlaesse_sub: "Family celebration or business event — we create magical moments.",
        anlass_verlobung: "Engagement", anlass_verlobung_desc: "The beginning of your love story deserves a magical setting — rings, roses, and a promise that lasts forever.",
        anlass_henna: "Henna Night", anlass_henna_desc: "Tradition meets emotion — an evening full of tears of joy, dance, and unforgettable memories.",
        anlass_firmen: "Corporate Events & Galas", anlass_firmen_desc: "Impress your business partners — conferences, galas, and holiday celebrations at the highest level.",
        anlass_abi: "Prom Night", anlass_abi_desc: "The crowning finale of your school years — glamorous, exhilarating, and absolutely unforgettable.",
        anlass_sunnet: "Circumcision / Sünnet", anlass_sunnet_desc: "A proud family day steeped in tradition — festive, heartfelt, and with everything your heart desires.",
        anlass_geburtstag: "Birthdays", anlass_geburtstag_desc: "Whether 18 or 50 — celebrate your special day in grand style with your loved ones.",
        stats_events: "Events Celebrated", stats_guests: "Max. Guests", stats_halls: "Event Halls", stats_years: "Years Experience",
        trust_guarantee: "Full Care Guarantee", trust_accessible: "100% Accessible", trust_parking: "200+ Parking Spots",
        form_subtitle: "Book a free viewing appointment directly — or send us a general inquiry.",
        form_general: "Or: Send a General Inquiry",
        cta_badge: "Popular 2026 dates filling up fast", cta_headline: "Secure your preferred date now", cta_btn: "Request Date Now"
    },
    fa: {
        nav_home: "خانه", nav_packages: "مفاهیم", nav_gallery: "گالری", nav_date: "مشاوره",
        hero_title: "جایی که رویاها واقعی می‌شوند.", hero_sub: "انحصاری‌ترین تالارهای جشن در هامبورگ.",
        btn_date: "درخواست تاریخ ویژه", btn_gallery: "مشاهده گالری", about_title: "قول آرمادا",
        about_text: "ما رویاهای شما را به واقعیتی خیره‌کننده تبدیل می‌کنیم. سه تالار باشکوه، تیمی پرشور و بیش از ۵۰۰ رویداد موفق — این آرمادا است. از اولین ایده تا آخرین رقص، در کنار شما هستیم.",
        pack_title: "مفاهیم رویداد", p1_title: "مفهوم پایه", p2_title: "مفهوم ممتاز", p3_title: "مفهوم سلطنتی",
        vid_title: "تصاویر", rev_title: "نظرات مهمانان",
        form_title: "رویداد ویژه شما از اینجا آغاز می‌شود", form_btn: "ارسال درخواست ویژه", form_open_btn: "شروع مشاوره",
        feat_catering: "پذیرایی ممتاز", feat_catering_desc: "شاهکارهای آشپزی که مهمانان شما را مجذوب می‌کند — از آشپزخانه گورمه تا شوهای آشپزی زنده.",
        feat_light: "طراحی نور جادویی", feat_light_desc: "نمایش‌های نوری خیره‌کننده که هر تالار را به دنیای رویایی تبدیل می‌کند.",
        feat_deko: "دکوراسیون سفارشی", feat_deko_desc: "هر جزئیات داستان شما را روایت می‌کند — منحصر به فرد، باشکوه و تا آخرین گلبرگ کامل.",
        feat_service: "خدمات کامل", feat_service_desc: "راحت بنشینید — تیم باتجربه ما از اولین ملاقات تا آخرین مهمان از همه چیز مراقبت می‌کند.",
        vorteile_title: "چرا آرمادا؟", vorteile_sub: "همه چیز زیر یک سقف — تا شما بر مهم‌ترین چیز تمرکز کنید: لذت بردن.",
        anlaesse_title: "برای هر لحظه خاص", anlaesse_sub: "جشن خانوادگی یا رویداد تجاری — ما لحظات جادویی خلق می‌کنیم.",
        anlass_verlobung: "نامزدی", anlass_verlobung_desc: "آغاز داستان عشق شما شایسته قابی جادویی است — حلقه‌ها، گل‌ها و قولی که تا ابد ماندگار است.",
        anlass_henna: "شب حنا", anlass_henna_desc: "سنت با احساس همراه می‌شود — شبی پر از اشک شوق، رقص و خاطرات فراموش‌نشدنی.",
        anlass_firmen: "رویدادهای شرکتی", anlass_firmen_desc: "شرکای تجاری‌تان را تحت تأثیر قرار دهید — کنفرانس‌ها و مهمانی‌ها در بالاترین سطح.",
        anlass_abi: "جشن فارغ‌التحصیلی", anlass_abi_desc: "پایان باشکوه دوران مدرسه — پرزرق و برق، هیجان‌انگیز و کاملاً فراموش‌نشدنی.",
        anlass_sunnet: "ختنه / سنت", anlass_sunnet_desc: "روز خانوادگی پر افتخار با سنت — جشنی، صمیمی و با هر آنچه دل می‌خواهد.",
        anlass_geburtstag: "تولدها", anlass_geburtstag_desc: "چه ۱۸ چه ۵۰ — روز ویژه‌تان را با عزیزانتان به بزرگی جشن بگیرید.",
        stats_events: "رویداد برگزار شده", stats_guests: "حداکثر مهمان", stats_halls: "سالن جشن", stats_years: "سال تجربه",
        trust_guarantee: "ضمانت کامل", trust_accessible: "100% بدون مانع", trust_parking: "200+ جای پارک",
        form_subtitle: "مستقیماً یک وقت بازدید رایگان رزرو کنید — یا درخواست خود را برای ما ارسال کنید.",
        form_general: "یا: ارسال یک استعلام عمومی",
        cta_badge: "تاریخ‌های محبوب ۲۰۲۶ به سرعت در حال پر شدن هستند", cta_headline: "همین حالا تاریخ دلخواه خود را رزرو کنید", cta_btn: "رزرو تاریخ"
    }
};

const voiceUiText = {
    de: {
        idle: 'Ayla Live-Beratung',
        listening: 'Ayla hört zu...',
        loading: 'Ayla wird verbunden...',
        hint: 'Jetzt anrufen',
        ariaLabel: 'Ayla Sprachassistentin starten'
    },
    en: {
        idle: 'Ayla Live Consultation',
        listening: 'Ayla is listening...',
        loading: 'Connecting Ayla...',
        hint: 'Call now',
        ariaLabel: 'Start Ayla voice assistant'
    },
    tr: {
        idle: 'Ayla Canli Danismanlik',
        listening: 'Ayla dinliyor...',
        loading: 'Ayla baglaniyor...',
        hint: 'Hemen ara',
        ariaLabel: 'Ayla sesli asistani baslat'
    },
    ar: {
        idle: 'استشارة أيلا المباشرة',
        listening: 'أيلا تستمع الآن...',
        loading: 'جار الاتصال بأيلا...',
        hint: 'اتصل الآن',
        ariaLabel: 'ابدأ مساعد أيلا الصوتي'
    },
    fa: {
        idle: 'مشاوره زنده با آیلا',
        listening: 'آیلا در حال گوش دادن است...',
        loading: 'در حال اتصال به آیلا...',
        hint: 'همین حالا تماس بگیرید',
        ariaLabel: 'شروع دستیار صوتی آیلا'
    }
};

const seoTranslations = {
    de: {
        title: 'ARMADA EVENTSAAL | Exklusive Events in Hamburg',
        description: 'ARMADA Eventsaal Hamburg: Exklusive Säle für Hochzeiten, Abibälle und Firmenevents. Drei Premium-Säle für bis zu 700 Gäste. Jetzt unverbindlich beraten lassen.',
        ogTitle: 'ARMADA Eventsaal | Exklusive Events in Hamburg',
        ogDescription: 'Premium-Location für Hochzeiten und Events in Hamburg. Exklusive Säle, Full-Service und persönliche Beratung.',
        twitterTitle: 'ARMADA Eventsaal | Exklusive Events in Hamburg',
        twitterDescription: 'Exklusive Säle, Premium-Service, unvergessliche Events in Hamburg.',
        ogLocale: 'de_DE'
    },
    en: {
        title: 'ARMADA EVENTSAAL | Premium Events in Hamburg',
        description: 'ARMADA Eventsaal Hamburg: premium halls for weddings, proms, and corporate events. Three elegant venues for up to 700 guests. Request your consultation now.',
        ogTitle: 'ARMADA Eventsaal | Premium Events in Hamburg',
        ogDescription: 'Premium wedding and event venue in Hamburg. Elegant halls, full service, and personal consultation.',
        twitterTitle: 'ARMADA Eventsaal | Premium Events in Hamburg',
        twitterDescription: 'Elegant halls, premium service, unforgettable events in Hamburg.',
        ogLocale: 'en_GB'
    },
    tr: {
        title: 'ARMADA EVENTSAAL | Hamburg’da Premium Etkinlikler',
        description: 'ARMADA Eventsaal Hamburg: düğün, mezuniyet ve kurumsal etkinlikler için premium salonlar. 700 kişiye kadar kapasite. Hemen danışmanlık alın.',
        ogTitle: 'ARMADA Eventsaal | Hamburg’da Premium Etkinlikler',
        ogDescription: 'Hamburg’da düğün ve etkinlikler için premium mekan. Şık salonlar, full servis ve kişisel danışmanlık.',
        twitterTitle: 'ARMADA Eventsaal | Hamburg’da Premium Etkinlikler',
        twitterDescription: 'Şık salonlar, premium hizmet, Hamburg’da unutulmaz etkinlikler.',
        ogLocale: 'tr_TR'
    },
    ar: {
        title: 'ARMADA EVENTSAAL | فعاليات فاخرة في هامبورغ',
        description: 'ARMADA Eventsaal Hamburg: قاعات فاخرة للأعراس وحفلات التخرج وفعاليات الشركات. ثلاث قاعات مميزة حتى 700 ضيف. احجز استشارة الآن.',
        ogTitle: 'ARMADA Eventsaal | فعاليات فاخرة في هامبورغ',
        ogDescription: 'قاعة فعاليات فاخرة في هامبورغ للأعراس والمناسبات المميزة مع خدمة متكاملة.',
        twitterTitle: 'ARMADA Eventsaal | فعاليات فاخرة في هامبورغ',
        twitterDescription: 'قاعات راقية وخدمة فاخرة لفعاليات لا تُنسى في هامبورغ.',
        ogLocale: 'ar_AR'
    },
    fa: {
        title: 'ARMADA EVENTSAAL | رویدادهای ویژه در هامبورگ',
        description: 'ARMADA Eventsaal Hamburg: سالن‌های ممتاز برای عروسی، جشن فارغ‌التحصیلی و رویدادهای شرکتی. سه سالن لوکس تا 700 مهمان. همین حالا مشاوره بگیرید.',
        ogTitle: 'ARMADA Eventsaal | رویدادهای ویژه در هامبورگ',
        ogDescription: 'مجموعه‌ای لوکس برای مراسم و رویدادهای خاص در هامبورگ با خدمات کامل.',
        twitterTitle: 'ARMADA Eventsaal | رویدادهای ویژه در هامبورگ',
        twitterDescription: 'سالن‌های لوکس، خدمات ممتاز و رویدادهای ماندگار در هامبورگ.',
        ogLocale: 'fa_IR'
    }
};

const staticTranslations = {
    de: {
        servicesTitle: "Unsere Leistungen",
        serviceTabs: ["Catering", "Dekoration", "Technik", "Bühne", "Extras"],
        serviceHeadings: ["Premium Catering", "Dekoration & Design", "Licht & Tontechnik", "Brautpaarbühne", "Extras & Specials"],
        serviceDescriptions: [
            "Von der Vorspeise bis zum Dessert kreiert unser Küchenteam Menüs auf höchstem Niveau. Klassisch deutsch, orientalisch oder international: jedes Detail wird präzise auf Ihre Wünsche abgestimmt.",
            "Romantisch, glamourös oder modern: unsere Dekorationskonzepte verwandeln jeden Saal in eine exklusive Erlebniswelt mit unverwechselbarer Handschrift.",
            "Atmosphäre auf Knopfdruck: Unsere modernste Technik inszeniert perfekte Momente — vom dezenten Kerzenschein bis zur spektakulären Showdramaturgie.",
            "Der emotionale Höhepunkt Ihres großen Tages: maßgeschneiderte Bühnenkonzepte setzen das Brautpaar royal, elegant und absolut unvergesslich in Szene.",
            "Fein kuratierte Highlights mit großer Wirkung: Veredeln Sie Ihr Event mit besonderen Details, die nachhaltig begeistern."
        ],
        serviceFeatures: [
            ["3- bis 5-Gänge Galamenü", "Live Cooking Stationen", "Fingerfood & Empfangssnacks", "Hochzeitstorten & Patisserie", "Halal-zertifiziert"],
            ["Individuelle Farbkonzepte", "Blumenarrangements", "Tisch- & Stuhlhussen", "Brautpaarbühne & Thron", "Candy Bar & Sweet Table"],
            ["LED-Lichtdesign", "Professionelle PA-Anlage", "DJ & Live-Band Optionen", "Video-Leinwand & Beamer", "Nebelmaschine & Spezialeffekte"],
            ["Individuelle Bühnengestaltung", "Beleuchtetes Backdrop", "Thron & Sofa-Setups", "Blumenwand & Bogen", "Foto-Spot Integration"],
            ["Foto- & Videoteam", "Feuerwerk & Konfettiregen", "Henna-Nacht Paket", "Kinder-Entertainment", "Limousinen-Transfer"]
        ],
        vorteileItems: [
            "Bis zu 700 Gäste in 3 Festsälen", "Eigener Parkplatz für 200+ Fahrzeuge", "Barrierefrei & rollstuhlgerecht", "Exklusiver Brautpaarbereich",
            "Sommergarten & Empfangsterrasse", "Kinderspielraum betreut", "Limousinenservice auf Wunsch", "Modernste Licht- & Tontechnik",
            "Hauseigenes Catering & Patisserie", "Flexible Bestuhlung & Tischdeko", "Halal-zertifizierte Küche", "Persönlicher Event-Manager"
        ],
        conceptList: [
            ["Exklusive Saalmiete", "Professionelle Reinigung", "Dienstleister nach Wahl", "Premium-Anfrage →"],
            ["3-Gänge Galabuffet", "Getränkepauschale", "Servicepersonal inkl.", "Jetzt unverbindlich anfragen"],
            ["Full-Service Organisation", "Live Cooking Stationen", "Deko, DJ & Kamera-Team", "Premium-Anfrage →"]
        ],
        videoLabels: ["Highlight Intro", "Saal Rundgang", "Henna / Kına Abend"],
        roomsTitle: "Unsere Räumlichkeiten",
        roomTitles: ["Großer Festsaal", "Mittlerer Saal", "Intimer Salon"],
        roomCaps: ["400 – 700 Gäste", "250 – 400 Gäste", "80 – 250 Gäste"],
        roomDescriptions: [
            "Unser Flaggschiff: Prachtvoller Hauptsaal mit imposanter Deckenhöhe, integrierter Bühne und modernster Technik. Perfekt für Großhochzeiten und Galas.",
            "Elegant und vielseitig: Ideal für mittelgroße Feiern, Verlobungen und exklusive Firmenevents. Flexibel konfigurierbar.",
            "Exklusiv und persönlich: Perfekt für Henna-Abende, intime Feiern und gehobene Dinner-Events. Stilvolle Atmosphäre garantiert."
        ],
        roomFeatures: [
            ["Integrierte Brautpaarbühne", "LED-Lichtsystem", "Separate Tanzfläche"],
            ["Flexible Bestuhlung", "Eigene Bar-Zone", "Privateingang"],
            ["Lounge-Atmosphäre", "Eigener Empfangsbereich", "Direkter Gartenblick"]
        ],
        faqTitle: "Häufige Fragen",
        faqQuestions: [
            "Wie viele Gäste passen in die Säle?",
            "Bieten Sie Halal-Catering an?",
            "Können wir eigene Dienstleister mitbringen?",
            "Gibt es Parkmöglichkeiten?",
            "Wie weit im Voraus sollten wir buchen?",
            "Was kostet eine Veranstaltung?",
            "Ist die Location barrierefrei?"
        ],
        faqAnswers: [
            "Unsere drei Säle bieten je nach Setting Platz für 80 bis 700 Gäste. Der große Festsaal fasst 400–700, der mittlere Saal 250–400 und der intime Salon 80–250 Gäste. Bestuhlung und Tischaufstellung stimmen wir präzise auf Ihr Eventkonzept ab.",
            "Ja. Unser gesamtes Catering ist Halal-zertifiziert. Von klassisch-deutsch über orientalisch bis international wird jedes Menü frisch in unserer hauseigenen Küche zubereitet.",
            "Selbstverständlich. Im Basis-Konzept wählen Sie Ihre Dienstleister frei. In den Premium- und Royal-Paketen arbeiten wir mit kuratierten Partnern, integrieren auf Wunsch aber gerne auch Ihre bevorzugten Anbieter.",
            "Ja, direkt am Haus stehen über 200 eigene Stellplätze zur Verfügung. Zusätzlich sind weitere Parkmöglichkeiten im Umfeld vorhanden. Auf Wunsch organisieren wir auch einen Valet-Service.",
            "Für eine optimale Termin- und Konzeptplanung empfehlen wir eine Buchung 6–12 Monate im Voraus, insbesondere für die Hochzeitssaison von Mai bis Oktober. Kurzfristige Anfragen prüfen wir selbstverständlich ebenfalls.",
            "Die genaue Preisgestaltung erfolgt nach einer kurzen Besichtigung bzw. persönlichen Beratung vor Ort. Anschließend erhalten Sie ein transparentes, individuell kalkuliertes Angebot passend zu Saalwahl, Gästezahl und Leistungsumfang.",
            "Ja, unsere gesamte Location ist barrierefrei und rollstuhlgerecht zugänglich, inklusive Aufzug, behindertengerechter Sanitärbereiche und ebenerdiger Zugänge."
        ],
        formToggleOpen: "Formular öffnen",
        formToggleClose: "Formular schließen",
        formPlaceholders: ["Ihr Name", "E-Mail Adresse", "Telefonnummer", "Wunschtermin (z.B. Juni 2026)", "Geschätzte Gästezahl"],
        formEventDefault: "Art der Veranstaltung",
        formEventOptions: ["Hochzeit / Düğün", "Verlobung / Nişan", "Henna / Kına", "Beschneidung / Sünnet", "Abiball", "Firmenevent", "Geburtstag", "Sonstiges"],
        mapLabel: "Karte anzeigen",
        footerKontakt: "Kontakt",
        footerNavigation: "Navigation",
        footerNav: ["Home", "Leistungen", "Konzepte", "Räumlichkeiten", "Galerie", "FAQ", "Termin buchen"],
        legalLinks: ["Impressum", "Datenschutz"]
    },
    en: {
        servicesTitle: "Our Services",
        serviceTabs: ["Catering", "Decor", "Tech", "Stage", "Extras"],
        serviceHeadings: ["Premium Catering", "Decoration & Design", "Lighting & Sound", "Wedding Stage", "Extras & Specials"],
        serviceDescriptions: [
            "From starters to dessert, our culinary team crafts elevated menus your guests will remember. Classic German, Middle Eastern, or international: every detail is tailored to your vision.",
            "Romantic, glamorous, or contemporary: our decor concepts transform every hall into an exclusive signature setting.",
            "Atmosphere at the touch of a button. Our state-of-the-art technology orchestrates every moment, from subtle candlelight to spectacular show effects.",
            "The emotional centerpiece of your celebration: custom stage concepts that present the couple in a royal, elegant, unforgettable way.",
            "Curated details, exceptional impact: enhance your event with refined highlights that truly impress."
        ],
        serviceFeatures: [
            ["3 to 5-course gala menu", "Live cooking stations", "Finger food & welcome snacks", "Wedding cakes & patisserie", "Halal certified"],
            ["Custom color concepts", "Floral arrangements", "Table & chair covers", "Couple stage & throne", "Candy bar & sweet table"],
            ["LED lighting design", "Professional PA system", "DJ & live band options", "Projector & screen", "Fog machine & effects"],
            ["Custom stage design", "Illuminated backdrop", "Throne & sofa setups", "Flower wall & arch", "Integrated photo spot"],
            ["Photo & video team", "Fireworks & confetti", "Henna night package", "Kids entertainment", "Limousine transfer"]
        ],
        vorteileItems: [
            "Up to 700 guests in 3 halls", "Private parking for 200+ cars", "Barrier-free & wheelchair accessible", "Exclusive bridal suite",
            "Summer garden & reception terrace", "Supervised kids room", "Optional limousine service", "Modern light & sound technology",
            "In-house catering & patisserie", "Flexible seating & table decor", "Halal-certified kitchen", "Personal event manager"
        ],
        conceptList: [
            ["Exclusive hall rental", "Professional cleaning", "Vendors of your choice", "Premium inquiry →"],
            ["3-course gala buffet", "Drinks package", "Service staff included", "Request your date now"],
            ["Full-service planning", "Live cooking stations", "Decor, DJ & camera team", "Premium inquiry →"]
        ],
        videoLabels: ["Intro Highlight", "Hall Tour", "Henna Night"],
        roomsTitle: "Our Venues",
        roomTitles: ["Grand Hall", "Medium Hall", "Intimate Salon"],
        roomCaps: ["400 - 700 guests", "250 - 400 guests", "80 - 250 guests"],
        roomDescriptions: [
            "Our flagship hall with impressive ceiling height, integrated stage, and state-of-the-art technology.",
            "Elegant and versatile: ideal for medium-sized celebrations, engagements, and corporate events.",
            "Exclusive and personal: perfect for henna nights, intimate celebrations, and premium dinners."
        ],
        roomFeatures: [
            ["Integrated couple stage", "LED lighting system", "Separate dance floor"],
            ["Flexible seating", "Own bar area", "Private entrance"],
            ["Lounge atmosphere", "Own reception area", "Direct garden view"]
        ],
        faqTitle: "Frequently Asked Questions",
        faqQuestions: [
            "How many guests fit in the halls?",
            "Do you offer halal catering?",
            "Can we bring our own vendors?",
            "Is parking available?",
            "How early should we book?",
            "How much does an event cost?",
            "Is the venue accessible?"
        ],
        faqAnswers: [
            "Our three halls accommodate 80 to 700 guests, depending on your preferred setup. Seating and table layout are tailored precisely to your event concept.",
            "Yes. Our entire catering service is halal certified. Every menu is prepared fresh in-house, from classic European to Middle Eastern and international cuisine.",
            "Absolutely. In the Basic Concept, you may choose your own vendors. In our Premium and Royal concepts, we work with curated partners while gladly integrating your preferred providers.",
            "Yes, we offer private on-site parking with more than 200 spaces. Additional nearby parking is available, and valet service can be arranged on request.",
            "For ideal planning and date security, we recommend booking 6 to 12 months in advance, especially during peak wedding season. Short-notice inquiries are always welcome.",
            "Final pricing is provided after a short on-site viewing or personal consultation. You will then receive a transparent, tailored proposal based on hall selection, guest count, and service scope.",
            "Yes, the entire venue is fully accessible and wheelchair friendly, including elevator access, accessible restrooms, and step-free entry points."
        ],
        formToggleOpen: "Open form",
        formToggleClose: "Close form",
        formPlaceholders: ["Your name", "Email address", "Phone number", "Preferred date (e.g. June 2026)", "Estimated guest count"],
        formEventDefault: "Type of event",
        formEventOptions: ["Wedding", "Engagement", "Henna", "Circumcision", "Prom", "Corporate event", "Birthday", "Other"],
        mapLabel: "Show map",
        footerKontakt: "Contact",
        footerNavigation: "Navigation",
        footerNav: ["Home", "Services", "Concepts", "Venues", "Gallery", "FAQ", "Book appointment"],
        legalLinks: ["Legal Notice", "Privacy Policy"]
    },
    tr: {
        servicesTitle: "Hizmetlerimiz",
        serviceTabs: ["Catering", "Dekorasyon", "Teknik", "Sahne", "Ekstralar"],
        serviceHeadings: ["Premium Catering", "Dekorasyon & Tasarım", "Işık & Ses", "Gelin-Damat Sahnesi", "Ekstra Hizmetler"],
        serviceDescriptions: [
            "Başlangıçlardan tatlılara kadar mutfak ekibimiz, misafirlerinizi etkileyecek üst segment menüler hazırlar.",
            "Romantik, gösterişli veya modern: dekorasyon konseptlerimiz her salonu size özel, imza niteliğinde bir atmosfere dönüştürür.",
            "Tek dokunuşla kusursuz atmosfer: ileri teknoloji altyapımız mum ışığından etkileyici sahne efektlerine kadar her anı yönetir.",
            "Büyük gününüzün duygusal odağı: size özel sahne konseptlerimiz gelin ve damadı zarif ve görkemli biçimde öne çıkarır.",
            "Özenle seçilmiş detaylar, güçlü etki: etkinliğinizi unutulmaz kılacak premium dokunuşlar ekleyin."
        ],
        serviceFeatures: [
            ["3 ila 5 servislik gala menü", "Canlı pişirme istasyonları", "Finger food ve karşılama ikramları", "Düğün pastası ve pastane ürünleri", "Helal sertifikalı"],
            ["Özel renk konseptleri", "Çiçek düzenlemeleri", "Masa ve sandalye giydirmeleri", "Çift sahnesi ve taht", "Candy bar ve sweet table"],
            ["LED ışık tasarımı", "Profesyonel ses sistemi", "DJ ve canlı müzik seçenekleri", "Projeksiyon ve perde", "Sis makinesi ve efektler"],
            ["Özel sahne tasarımı", "Işıklı arka fon", "Taht ve koltuk düzeni", "Çiçek duvarı ve kemer", "Fotoğraf alanı entegrasyonu"],
            ["Fotoğraf ve video ekibi", "Havai fişek ve konfeti", "Kına gecesi paketi", "Çocuk eğlencesi", "Limuzin transfer"]
        ],
        vorteileItems: [
            "3 salonda 700 misafire kadar", "200+ araçlık özel otopark", "Engelsiz ve tekerlekli sandalye erişimi", "Özel gelin damat alanı",
            "Yaz bahçesi ve teras", "Gözetimli çocuk oyun alanı", "İsteğe bağlı limuzin", "Modern ışık ve ses teknolojisi",
            "Kendi catering ve pastane hizmeti", "Esnek oturma düzeni", "Helal sertifikalı mutfak", "Kişisel etkinlik yöneticisi"
        ],
        conceptList: [
            ["Özel salon kiralama", "Profesyonel temizlik", "İstediğiniz tedarikçiler", "Premium teklif al →"],
            ["3 servislik gala büfe", "İçecek paketi", "Servis personeli dahil", "Tarihiniz için başvurun"],
            ["Tam hizmet organizasyon", "Canlı pişirme istasyonları", "Dekorasyon, DJ ve kamera ekibi", "Premium teklif al →"]
        ],
        videoLabels: ["Tanıtım", "Salon Turu", "Kına Gecesi"],
        roomsTitle: "Salonlarımız",
        roomTitles: ["Büyük Salon", "Orta Salon", "Butik Salon"],
        roomCaps: ["400 - 700 misafir", "250 - 400 misafir", "80 - 250 misafir"],
        roomDescriptions: [
            "Görkemli tavan yüksekliği, entegre sahne ve modern teknik altyapıya sahip amiral salonumuz.",
            "Şık ve çok yönlü: orta ölçekli kutlamalar, nişanlar ve kurumsal etkinlikler için ideal.",
            "Özel ve samimi: kına geceleri, butik kutlamalar ve seçkin davetler için mükemmel."
        ],
        roomFeatures: [
            ["Entegre gelin damat sahnesi", "LED ışık sistemi", "Ayrı dans pisti"],
            ["Esnek oturma düzeni", "Özel bar alanı", "Özel giriş"],
            ["Lounge atmosferi", "Özel karşılama alanı", "Doğrudan bahçe manzarası"]
        ],
        faqTitle: "Sık Sorulan Sorular",
        faqQuestions: [
            "Salonlar kaç kişilik?",
            "Helal catering var mı?",
            "Kendi tedarikçimizi getirebilir miyiz?",
            "Otopark var mı?",
            "Ne kadar önce rezervasyon yapmalıyız?",
            "Etkinlik ücreti ne kadar?",
            "Mekan engelsiz mi?"
        ],
        faqAnswers: [
            "Üç salonumuz, etkinlik düzenine göre 80 ile 700 misafir ağırlama kapasitesine sahiptir. Oturma düzeni ve masa planlaması tamamen konseptinize göre şekillendirilir.",
            "Evet, catering hizmetimizin tamamı helal sertifikalıdır. Klasik Avrupa mutfağından Orta Doğu ve uluslararası lezzetlere kadar tüm menüler tesisimizde taze hazırlanır.",
            "Elbette. Temel konseptte kendi tedarikçilerinizi seçebilirsiniz. Premium ve Royal konseptlerde ise seçkin iş ortaklarımızla çalışırken, talep ettiğiniz sağlayıcıları da memnuniyetle entegre ederiz.",
            "Evet, tesisimizde 200’den fazla araç kapasiteli özel otopark bulunmaktadır. Yakın çevrede ek park alanları mevcuttur; talep edilirse vale hizmeti de organize edilir.",
            "Tarih garantisi ve kusursuz planlama için özellikle yoğun düğün dönemlerinde 6-12 ay önceden rezervasyon öneriyoruz. Kısa süreli taleplerinizi de değerlendirmeye alıyoruz.",
            "Net fiyatlandırma, kısa bir yerinde keşif veya kişisel görüşme sonrasında paylaşılır. Ardından salon seçimi, misafir sayısı ve hizmet kapsamına göre size özel, şeffaf bir teklif hazırlanır.",
            "Evet, mekanımızın tamamı engelsiz ve tekerlekli sandalye erişimine uygundur; asansör, uygun sanitasyon alanları ve basamaksız girişler mevcuttur."
        ],
        formToggleOpen: "Formu aç",
        formToggleClose: "Formu kapat",
        formPlaceholders: ["Adınız", "E-posta adresi", "Telefon numarası", "Tercih edilen tarih (ör. Haziran 2026)", "Tahmini misafir sayısı"],
        formEventDefault: "Etkinlik türü",
        formEventOptions: ["Düğün", "Nişan", "Kına", "Sünnet", "Mezuniyet balosu", "Kurumsal etkinlik", "Doğum günü", "Diğer"],
        mapLabel: "Haritayı göster",
        footerKontakt: "İletişim",
        footerNavigation: "Menü",
        footerNav: ["Ana Sayfa", "Hizmetler", "Konseptler", "Salonlar", "Galeri", "SSS", "Randevu"],
        legalLinks: ["Yasal Bilgi", "Gizlilik"]
    },
    ar: {
        servicesTitle: "خدماتنا",
        serviceTabs: ["الضيافة", "الديكور", "التقنية", "المنصة", "إضافات"],
        serviceHeadings: ["ضيافة مميزة", "الديكور والتصميم", "الإضاءة والصوت", "منصة العروسين", "إضافات خاصة"],
        serviceDescriptions: [
            "من المقبلات حتى الحلويات، يقدّم فريقنا قوائم طعام فاخرة مصممة بعناية لتليق بضيوفكم.",
            "سواء أردتم طابعًا رومانسيًا أو فاخرًا أو عصريًا، نحول كل قاعة إلى تجربة استثنائية تحمل بصمتكم الخاصة.",
            "أجواء متقنة بأحدث التقنيات، من الإضاءة الهادئة حتى عروض الليزر المبهرة.",
            "المحور العاطفي ليومكم الكبير: منصة مصممة خصيصًا للعروسين بأسلوب ملكي أنيق.",
            "تفاصيل منتقاة بعناية تصنع تأثيرًا كبيرًا وتترك انطباعًا لا يُنسى."
        ],
        serviceFeatures: [
            ["قائمة فاخرة من 3 إلى 5 أطباق", "محطات طهي مباشر", "مقبلات وضيافة استقبال", "كعك زفاف وحلويات", "مطابقة حلال"],
            ["ألوان مخصصة", "تنسيقات زهور", "تجهيزات الطاولات والكراسي", "منصة وعرش للعروسين", "ركن حلويات"],
            ["تصميم إضاءة LED", "نظام صوت احترافي", "خيارات DJ وفرقة حية", "بروجكتور وشاشة", "مؤثرات خاصة"],
            ["تصميم منصة مخصص", "خلفية مضاءة", "ترتيب عرش وأرائك", "جدار زهور وقوس", "منطقة تصوير"],
            ["فريق تصوير", "ألعاب نارية وكونفيتي", "باقة ليلة حناء", "ترفيه الأطفال", "خدمة ليموزين"]
        ],
        vorteileItems: [
            "حتى 700 ضيف في 3 قاعات", "موقف خاص لأكثر من 200 سيارة", "وصول مناسب لذوي الاحتياجات", "منطقة خاصة للعروسين",
            "حديقة صيفية وتراس استقبال", "غرفة أطفال بإشراف", "خدمة ليموزين عند الطلب", "تقنيات إضاءة وصوت حديثة",
            "ضيافة وحلويات داخلية", "ترتيب جلوس مرن", "مطبخ معتمد حلال", "مدير فعاليات شخصي"
        ],
        conceptList: [
            ["استئجار القاعة", "تنظيف احترافي", "مزودون حسب رغبتكم", "اطلب عرضًا مميزًا →"],
            ["بوفيه فاخر 3 أطباق", "باقة مشروبات", "طاقم خدمة شامل", "احجز تاريخك الآن"],
            ["تنظيم كامل", "محطات طهي مباشر", "ديكور وDJ وفريق تصوير", "اطلب عرضًا مميزًا →"]
        ],
        videoLabels: ["مقدمة", "جولة القاعة", "ليلة الحناء"],
        roomsTitle: "قاعاتنا",
        roomTitles: ["القاعة الكبرى", "القاعة المتوسطة", "الصالون الحميم"],
        roomCaps: ["400 - 700 ضيف", "250 - 400 ضيف", "80 - 250 ضيف"],
        roomDescriptions: [
            "قاعة رئيسية فخمة بسقف مرتفع ومنصة مدمجة وتقنيات حديثة.",
            "أنيقة ومتعددة الاستخدامات للمناسبات المتوسطة وفعاليات الشركات.",
            "خيار حصري ومريح لليالي الحناء والفعاليات الخاصة."
        ],
        roomFeatures: [
            ["منصة عروسين مدمجة", "نظام إضاءة LED", "منطقة رقص مستقلة"],
            ["ترتيب جلوس مرن", "منطقة بار مستقلة", "مدخل خاص"],
            ["أجواء لاونج", "منطقة استقبال خاصة", "إطلالة مباشرة على الحديقة"]
        ],
        faqTitle: "الأسئلة الشائعة",
        faqQuestions: ["كم عدد الضيوف؟", "هل الضيافة حلال؟", "هل يمكن إحضار مزودين خاصين؟", "هل يوجد موقف سيارات؟", "متى نحجز؟", "كم التكلفة؟", "هل المكان مناسب لذوي الاحتياجات؟"],
        faqAnswers: [
            "تستوعب قاعاتنا بين 80 و700 ضيف بحسب أسلوب الترتيب. كما نقوم بتخصيص توزيع الطاولات والمقاعد بما يتوافق بدقة مع رؤيتكم للمناسبة.",
            "نعم، جميع خدمات الضيافة لدينا معتمدة حلال. ويتم إعداد القوائم الطهوية طازجة داخل مطبخنا الداخلي بمعايير عالية.",
            "بكل تأكيد. في الباقة الأساسية يمكنكم اختيار مزودي الخدمات بحرية، وفي باقاتنا المتقدمة نوفر شركاء مختارين مع إمكانية دمج مزوديكم المفضلين.",
            "نعم، لدينا موقف سيارات خاص يتسع لأكثر من 200 مركبة، إضافة إلى خيارات قريبة. كما يمكن تنظيم خدمة صف السيارات عند الطلب.",
            "لضمان أفضل المواعيد والتخطيط المتكامل، ننصح بالحجز قبل 6 إلى 12 شهرًا، خصوصًا خلال موسم الأعراس. ونستقبل أيضًا الطلبات العاجلة حسب التوفر.",
            "يتم تحديد السعر النهائي بعد زيارة ميدانية قصيرة أو استشارة شخصية. بعد ذلك نعد لكم عرض سعر واضحًا ومخصصًا وفق القاعة وعدد الضيوف ونطاق الخدمات.",
            "نعم، المكان مجهز بالكامل لذوي الاحتياجات الخاصة، بما يشمل المصعد والمرافق المناسبة والمداخل السهلة بدون عوائق."
        ],
        formToggleOpen: "فتح النموذج",
        formToggleClose: "إغلاق النموذج",
        formPlaceholders: ["الاسم", "البريد الإلكتروني", "رقم الهاتف", "التاريخ المفضل", "عدد الضيوف المتوقع"],
        formEventDefault: "نوع المناسبة",
        formEventOptions: ["زفاف", "خطوبة", "حناء", "ختان", "حفل تخرج", "فعالية شركات", "عيد ميلاد", "أخرى"],
        mapLabel: "عرض الخريطة",
        footerKontakt: "التواصل",
        footerNavigation: "التنقل",
        footerNav: ["الرئيسية", "الخدمات", "المفاهيم", "القاعات", "المعرض", "الأسئلة", "احجز موعدًا"],
        legalLinks: ["بيانات قانونية", "الخصوصية"]
    },
    fa: {
        servicesTitle: "خدمات ما",
        serviceTabs: ["پذیرایی", "دکور", "فنی", "صحنه", "موارد ویژه"],
        serviceHeadings: ["پذیرایی ممتاز", "دکور و طراحی", "نور و صدا", "صحنه عروس و داماد", "خدمات ویژه"],
        serviceDescriptions: [
            "از پیش‌غذا تا دسر، تیم آشپزی ما منوهایی ممتاز و ماندگار برای مهمانان شما آماده می‌کند.",
            "رمانتیک، لوکس یا مدرن: دکوراسیون ما هر سالن را به فضایی منحصربه‌فرد با امضای شما تبدیل می‌کند.",
            "فضاسازی حرفه‌ای با فناوری روز، از نورپردازی لطیف تا نمایش‌های ویژه و چشمگیر.",
            "کانون احساسی روز بزرگ شما: طراحی اختصاصی صحنه برای عروس و داماد با جلوه‌ای باشکوه.",
            "جزئیات ظریف با اثری بزرگ؛ برای خلق تجربه‌ای که در ذهن مهمانان ماندگار می‌ماند."
        ],
        serviceFeatures: [
            ["منوی گالا 3 تا 5 وعده", "ایستگاه آشپزی زنده", "فینگرفود و پذیرایی ورودی", "کیک عروسی و شیرینی", "دارای تاییدیه حلال"],
            ["ترکیب رنگ اختصاصی", "گل‌آرایی", "چیدمان میز و صندلی", "صحنه و تخت عروس‌وداماد", "میز شیرینی"],
            ["طراحی نور LED", "سیستم صوت حرفه‌ای", "DJ و موسیقی زنده", "پروژکتور و پرده", "افکت‌های ویژه"],
            ["طراحی صحنه اختصاصی", "بک‌دراپ نورپردازی‌شده", "چیدمان تخت و مبل", "دیوار گل و طاق", "فضای عکس"],
            ["تیم عکس و ویدیو", "آتش‌بازی و کانفتی", "پکیج شب حنا", "سرگرمی کودکان", "ترنسفر لیموزین"]
        ],
        vorteileItems: [
            "تا 700 مهمان در 3 سالن", "پارکینگ اختصاصی برای 200+ خودرو", "دسترسی کامل برای ویلچر", "فضای اختصاصی عروس و داماد",
            "باغ تابستانی و تراس", "اتاق بازی کودک با نظارت", "سرویس لیموزین", "سیستم نور و صدای مدرن",
            "کترینگ و شیرینی‌پزی داخلی", "چیدمان منعطف", "آشپزخانه حلال", "مدیر اختصاصی مراسم"
        ],
        conceptList: [
            ["اجاره اختصاصی سالن", "نظافت حرفه‌ای", "تامین‌کنندگان دلخواه", "درخواست ویژه →"],
            ["بوفه 3 وعده", "پکیج نوشیدنی", "پرسنل سرویس", "تاریخ خود را رزرو کنید"],
            ["برنامه‌ریزی کامل", "ایستگاه آشپزی زنده", "دکور، DJ و تیم فیلمبرداری", "درخواست ویژه →"]
        ],
        videoLabels: ["معرفی", "تور سالن", "شب حنا"],
        roomsTitle: "سالن‌های ما",
        roomTitles: ["سالن بزرگ", "سالن متوسط", "سالن خصوصی"],
        roomCaps: ["400 - 700 مهمان", "250 - 400 مهمان", "80 - 250 مهمان"],
        roomDescriptions: [
            "سالن اصلی باشکوه با سقف بلند، صحنه یکپارچه و تجهیزات پیشرفته.",
            "شیک و چندمنظوره برای مراسم‌های متوسط و رویدادهای شرکتی.",
            "خصوصی و صمیمی برای شب حنا و مهمانی‌های خاص."
        ],
        roomFeatures: [
            ["صحنه یکپارچه عروس و داماد", "سیستم نور LED", "فضای رقص جداگانه"],
            ["چیدمان انعطاف‌پذیر", "بخش بار اختصاصی", "ورودی خصوصی"],
            ["فضای لانج", "بخش پذیرش اختصاصی", "نمای مستقیم به باغ"]
        ],
        faqTitle: "سوالات متداول",
        faqQuestions: ["ظرفیت سالن‌ها چقدر است؟", "آیا کترینگ حلال است؟", "آیا تامین‌کننده خودمان را می‌توانیم بیاوریم؟", "پارکینگ دارید؟", "چه زمانی باید رزرو کنیم؟", "هزینه مراسم چقدر است؟", "مکان بدون مانع است؟"],
        faqAnswers: [
            "ظرفیت سالن‌های ما با توجه به نوع چیدمان بین 80 تا 700 مهمان است. چیدمان میز و صندلی نیز کاملا متناسب با سبک مراسم شما طراحی می‌شود.",
            "بله، تمام خدمات پذیرایی ما دارای تاییدیه حلال است و تمامی منوها به‌صورت تازه در آشپزخانه اختصاصی مجموعه آماده می‌شوند.",
            "قطعا. در پکیج پایه می‌توانید تامین‌کنندگان دلخواه خود را انتخاب کنید. در پکیج‌های پیشرفته نیز ضمن همکاری با شرکای منتخب، امکان اضافه‌کردن تامین‌کنندگان موردنظر شما فراهم است.",
            "بله، پارکینگ اختصاصی با بیش از 200 جای پارک در محل مجموعه در اختیار مهمانان است و در صورت نیاز، خدمات پارکبان نیز قابل هماهنگی خواهد بود.",
            "برای تضمین تاریخ دلخواه و برنامه‌ریزی کامل، پیشنهاد می‌کنیم به‌ویژه در فصل پرترافیک مراسم، 6 تا 12 ماه زودتر رزرو انجام شود. درخواست‌های فوری نیز بررسی می‌گردد.",
            "قیمت نهایی پس از یک بازدید کوتاه حضوری یا جلسه مشاوره اعلام می‌شود. سپس بر اساس سالن انتخابی، تعداد مهمانان و سطح خدمات، پیش‌فاکتور اختصاصی و شفاف برای شما تهیه می‌کنیم.",
            "بله، کل مجموعه کاملا قابل دسترس و مناسب ویلچر است و شامل آسانسور، امکانات بهداشتی مناسب و ورودی‌های بدون مانع می‌شود."
        ],
        formToggleOpen: "باز کردن فرم",
        formToggleClose: "بستن فرم",
        formPlaceholders: ["نام شما", "ایمیل", "شماره تلفن", "تاریخ مورد نظر", "تعداد تقریبی مهمان"],
        formEventDefault: "نوع رویداد",
        formEventOptions: ["عروسی", "نامزدی", "حنا", "ختنه", "جشن فارغ‌التحصیلی", "رویداد شرکتی", "تولد", "سایر"],
        mapLabel: "نمایش نقشه",
        footerKontakt: "تماس",
        footerNavigation: "ناوبری",
        footerNav: ["خانه", "خدمات", "مفاهیم", "سالن‌ها", "گالری", "سوالات", "رزرو وقت"],
        legalLinks: ["اطلاعات حقوقی", "حریم خصوصی"]
    }
};

function applyStaticTranslations(lang) {
    const dict = staticTranslations[lang] || staticTranslations.de;
    if (!dict) return;

    const text = (selector, value) => {
        const el = document.querySelector(selector);
        if (el && typeof value === 'string') el.textContent = value;
    };

    const textAll = (selector, values) => {
        if (!Array.isArray(values)) return;
        const nodes = document.querySelectorAll(selector);
        nodes.forEach((node, i) => {
            if (values[i] !== undefined) node.textContent = values[i];
        });
    };

    text('#services .section-title', dict.servicesTitle);
    textAll('#services .service-tab', dict.serviceTabs);
    textAll('#services .service-panel h3', dict.serviceHeadings);
    textAll('#services .service-panel > .service-panel-inner > p', dict.serviceDescriptions);

    const serviceLists = document.querySelectorAll('#services .service-features');
    serviceLists.forEach((list, idx) => {
        const vals = dict.serviceFeatures?.[idx] || [];
        list.querySelectorAll('li').forEach((li, j) => {
            const icon = li.querySelector('i');
            if (vals[j] !== undefined) {
                li.textContent = vals[j];
                if (icon) li.prepend(icon, ' ');
            }
        });
    });

    textAll('#vorteile .vorteil-item span', dict.vorteileItems);

    const conceptCards = document.querySelectorAll('#pakete .concept-card');
    conceptCards.forEach((card, idx) => {
        const vals = dict.conceptList?.[idx] || [];
        card.querySelectorAll('ul li').forEach((li, j) => {
            if (vals[j] !== undefined) li.textContent = vals[j];
        });
        const link = card.querySelector('a');
        if (link && vals[3] !== undefined) link.textContent = vals[3];
    });

    textAll('.video-card p', dict.videoLabels);
    text('#raeume .section-title', dict.roomsTitle);
    textAll('#raeume .raum-card h3', dict.roomTitles);
    textAll('#raeume .raum-capacity', dict.roomCaps);
    textAll('#raeume .raum-card > p', dict.roomDescriptions);

    const roomLists = document.querySelectorAll('#raeume .raum-features');
    roomLists.forEach((list, idx) => {
        const vals = dict.roomFeatures?.[idx] || [];
        list.querySelectorAll('li').forEach((li, j) => {
            if (vals[j] !== undefined) li.textContent = vals[j];
        });
    });

    text('#faq .section-title', dict.faqTitle);
    textAll('#faq .faq-question span', dict.faqQuestions);
    textAll('#faq .faq-answer p', dict.faqAnswers);

    const toggleBtn = document.querySelector('.form-toggle-btn');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');
        const isHidden = document.getElementById('bookingForm')?.classList.contains('form-hidden');
        const label = isHidden ? dict.formToggleOpen : dict.formToggleClose;
        toggleBtn.textContent = label;
        if (icon) toggleBtn.prepend(icon, ' ');
    }

    const placeholders = dict.formPlaceholders || [];
    const inputIds = ['#form-name', '#form-email', '#form-phone', '#form-date', '#form-guests'];
    inputIds.forEach((id, i) => {
        const el = document.querySelector(id);
        if (el && placeholders[i]) el.placeholder = placeholders[i];
    });

    const eventDefault = document.querySelector('#form-event option[value=""]');
    if (eventDefault && dict.formEventDefault) eventDefault.textContent = dict.formEventDefault;
    const eventOptions = document.querySelectorAll('#form-event option:not([value=""])');
    eventOptions.forEach((opt, i) => {
        if (dict.formEventOptions?.[i]) opt.textContent = dict.formEventOptions[i];
    });

    text('#map-placeholder .map-overlay span', dict.mapLabel);
    text('footer .footer-col h4', dict.footerKontakt);
    textAll('footer .footer-col h4', [dict.footerKontakt, dict.footerNavigation]);
    textAll('footer .footer-col:nth-child(3) a', dict.footerNav);
    textAll('footer .footer-bottom a', dict.legalLinks);

    if (typeof updateWidgetLanguage === 'function') updateWidgetLanguage();
}

function trackEvent(eventName, payload = {}) {
    if (!window.dataLayer) return;
    window.dataLayer.push({ event: eventName, ...payload });
}

function getRuntimeConfig() {
    const config = window.__ARMADA_CONFIG || {};
    const configuredMusicVolume = Number(config.backgroundMusicVolume ?? 0.005);
    const safeMusicVolume = Number.isFinite(configuredMusicVolume)
        ? Math.max(0.001, Math.min(0.10, configuredMusicVolume))
        : 0.005;
    return {
        webhookUrl: config.webhookUrl || "",
        whatsappApiKey: config.whatsappApiKey || "",
        ga4Id: config.ga4Id || "",
        aylaProfile: config.aylaProfile || "ayla1",
        preferredAiModel: config.preferredAiModel || "",
        serviceImageVariant: String(config.serviceImageVariant || "A").toUpperCase(),
        contactPhone: config.contactPhone || "+4917610019618",
        contactWhatsappUrl: config.contactWhatsappUrl || "https://wa.me/4917610019618?text=Hallo%2C%20ich%20moechte%20eine%20Beratung%20fuer%20meine%20Veranstaltung.",
        elevenLabsApiKey: config.elevenLabsApiKey || "",
        openRouterApiKey: config.openRouterApiKey || "",
        forceLowBandwidth: Boolean(config.forceLowBandwidth),
        elevenLabsVoiceId: config.elevenLabsVoiceId || "EXAVITQu4vr4xnSDxMaL",
        elevenLabsModel: config.elevenLabsModel || "eleven_multilingual_v2",
        elevenLabsVoiceByLang: config.elevenLabsVoiceByLang || {},
        elevenLabsVoiceQualityByLang: config.elevenLabsVoiceQualityByLang || {},
        browserPreferredVoiceHintsByLang: config.browserPreferredVoiceHintsByLang || {},
        backgroundMusicUrl: config.backgroundMusicUrl || "",
        backgroundMusicPlaylist: Array.isArray(config.backgroundMusicPlaylist) ? config.backgroundMusicPlaylist : [],
        backgroundMusicLockPrimary: config.backgroundMusicLockPrimary !== false,
        backgroundMusicVolume: safeMusicVolume,
        backgroundMusicCredit: config.backgroundMusicCredit || "",
        nightModeMusicEnabled: config.nightModeMusicEnabled !== false,
        nightModeMusicStartHour: Number(config.nightModeMusicStartHour ?? 22),
        nightModeMusicEndHour: Number(config.nightModeMusicEndHour ?? 8),
        nightModeMusicMultiplier: Number(config.nightModeMusicMultiplier ?? 0.58),
        continuousLocalConversation: config.continuousLocalConversation !== false,
        preferInPageAylaDialog: config.preferInPageAylaDialog !== false,
        forceSilentPromptAyla: config.forceSilentPromptAyla !== false,
        voiceClickDebounceMs: Number(config.voiceClickDebounceMs || 700)
    };
}

function getCurrentLangCode() {
    return (document.querySelector('.lang-btn.active')?.innerText || 'DE').toLowerCase();
}

function getVoiceTextByLang() {
    return voiceUiText[getCurrentLangCode()] || voiceUiText.de;
}

function setVoiceButtonUi(state){ return; /* DEAKTIVIERT */ } function _old_setVoiceButtonUi(state) {
    const ui = getVoiceTextByLang();
    const btn = document.getElementById('vapi-btn');
    const status = document.getElementById('status-text');
    const hint = document.getElementById('voice-hint');
    const label = state === 'listening' ? ui.listening : state === 'loading' ? (ui.loading || ui.idle) : ui.idle;
    if (status) status.innerText = label;
    if (hint) hint.innerText = ui.hint || '';
    if (btn) {
        const aria = ui.ariaLabel || ui.idle;
        btn.setAttribute('aria-label', aria);
        btn.setAttribute('title', aria);
    }
}

function ensureVoiceDebugElement() {
    if (!window.__ARMADA_DEBUG_UI) return null;
    let el = document.getElementById('voice-debug');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'voice-debug';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.style.position = 'fixed';
    el.style.right = '16px';
    el.style.bottom = '88px';
    el.style.zIndex = '2300';
    el.style.maxWidth = 'min(92vw, 360px)';
    el.style.padding = '10px 12px';
    el.style.borderRadius = '10px';
    el.style.fontFamily = 'Montserrat, sans-serif';
    el.style.fontSize = '12px';
    el.style.lineHeight = '1.35';
    el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.35)';
    el.style.display = 'none';
    document.body.appendChild(el);
    return el;
}

function setVoiceDebug(message, level = 'info') {
    if (!window.__ARMADA_DEBUG_UI) return;
    const el = ensureVoiceDebugElement();
    if (!el) return;
    if (!message) {
        el.style.display = 'none';
        el.textContent = '';
        return;
    }
    const palette = {
        info: { bg: 'rgba(18,28,49,0.95)', bd: 'rgba(212,175,55,0.4)', fg: '#f2e3ad' },
        warn: { bg: 'rgba(53,35,6,0.95)', bd: 'rgba(224,170,37,0.45)', fg: '#ffd98a' },
        error: { bg: 'rgba(61,17,17,0.95)', bd: 'rgba(255,107,107,0.55)', fg: '#ffd7d7' }
    };
    const p = palette[level] || palette.info;
    el.style.background = p.bg;
    el.style.border = `1px solid ${p.bd}`;
    el.style.color = p.fg;
    el.textContent = message;
    el.style.display = 'block';
}

let aylaStatusEl = null;
function setAylaStatus(text, level = 'info') {
    if (!aylaStatusEl) aylaStatusEl = document.getElementById('ayla-live-status');
    if (!aylaStatusEl) return;

    const palette = {
        info: { bg: 'rgba(18,28,49,0.9)', bd: 'rgba(212,175,55,0.42)', fg: '#f2e3ad' },
        ok: { bg: 'rgba(9,43,29,0.9)', bd: 'rgba(80,206,146,0.48)', fg: '#bff6d5' },
        warn: { bg: 'rgba(53,35,6,0.9)', bd: 'rgba(224,170,37,0.5)', fg: '#ffd98a' },
        error: { bg: 'rgba(61,17,17,0.9)', bd: 'rgba(255,107,107,0.55)', fg: '#ffd7d7' }
    };

    const p = palette[level] || palette.info;
    aylaStatusEl.style.background = p.bg;
    aylaStatusEl.style.border = `1px solid ${p.bd}`;
    aylaStatusEl.style.color = p.fg;
    aylaStatusEl.textContent = String(text || 'Ayla: bereit');
}

function initAylaStatusIndicator() {
    // Disabled - ElevenLabs widget handles status now
}

function classifyVoiceStartError(err) {
    const msg = String(err?.message || err || '').toLowerCase();
    if (!window.isSecureContext) return 'Ayla braucht HTTPS oder localhost (Mikrofon-Sicherheit).';
    if (msg.includes('notallowederror') || msg.includes('permission') || msg.includes('microphone')) return 'Mikrofon-Berechtigung fehlt. Bitte Mikrofon erlauben und neu klicken.';
    if (msg.includes('401') || msg.includes('403') || msg.includes('unauthorized') || msg.includes('forbidden')) return 'API-Zugangsdaten ungültig. Bitte ElevenLabs/API-Key prüfen.';
    if (msg.includes('assistant') && msg.includes('not found')) return 'Assistenten-Konfiguration wurde nicht gefunden.';
    if (msg.includes('network') || msg.includes('fetch')) return 'Netzwerkfehler beim Start von Ayla. Verbindung prüfen.';
    return 'Ayla konnte nicht starten. Bitte Konsole prüfen.';
}

function openCallFallback(reason) {
    const cfg = getRuntimeConfig();
    const lang = getCurrentLangCode();
    const status = document.getElementById('status-text');
    const fallbackText = {
        de: 'Ayla momentan nicht erreichbar. Wir verbinden Sie direkt.',
        en: 'Ayla is temporarily unavailable. Connecting you directly.',
        tr: 'Ayla su an ulasilamiyor. Sizi dogrudan bagliyoruz.',
        ar: 'أيلا غير متاحة حاليا. سنوصلكم مباشرة.',
        fa: 'آیلا موقتا در دسترس نیست. شما را مستقیم متصل می کنیم.'
    };
    if (status) status.innerText = fallbackText[lang] || fallbackText.de;

    const phone = String(cfg.contactPhone || '').trim();
    const whatsapp = String(cfg.contactWhatsappUrl || '').trim();
    const normalizedPhone = phone.replace(/\s+/g, '');
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');

    trackEvent('voice_agent_fallback', { reason, mobile: isMobile ? 'yes' : 'no' });

    const statusFallback = {
        de: 'Ayla bleibt in dieser Seite. Bitte nutzen Sie den Dialog unten rechts.',
        en: 'Ayla stays on this page. Please use the in-page dialog.',
        tr: 'Ayla bu sayfada kalir. Lutfen sayfa icindeki diyalogu kullanin.',
        ar: 'ستبقى أيلا داخل هذه الصفحة. يرجى استخدام الحوار داخل الصفحة.',
        fa: 'آیلا در همین صفحه می ماند. لطفا از گفت وگوی داخل صفحه استفاده کنید.'
    };
    if (status) status.innerText = statusFallback[lang] || statusFallback.de;

    // Safety hardening: never redirect away from the page from this fallback.
    if (reason) {
        console.warn('[Ayla] Redirect fallback blocked:', reason, { isMobile, phone, whatsapp, normalizedPhone });
    }
}

let voiceClickLock = false;
let lastVoiceClickTs = 0;
let voiceStartInFlight = false;
let aylaVoiceActive = false;

function ensureCallPanel() {
    let panel = document.getElementById('call-panel');
    if (panel) return panel;

    panel = document.createElement('div');
    panel.id = 'call-panel';
    panel.style.position = 'fixed';
    panel.style.right = '16px';
    panel.style.bottom = '140px';
    panel.style.zIndex = '2301';
    panel.style.width = 'min(92vw, 320px)';
    panel.style.padding = '12px';
    panel.style.borderRadius = '12px';
    panel.style.background = 'rgba(12,20,36,0.96)';
    panel.style.border = '1px solid rgba(212,175,55,0.4)';
    panel.style.boxShadow = '0 12px 30px rgba(0,0,0,0.35)';
    panel.style.display = 'none';
    panel.innerHTML = [
        '<div style="font-weight:700;color:#f3e5b8;margin-bottom:8px;">Kontakt Armada</div>',
        '<div style="font-size:13px;color:#d9e3f2;margin-bottom:10px;">0176 100 19 618</div>',
        '<div style="display:grid;gap:8px;">',
        '<a id="call-panel-tel" href="tel:+4917610019618" style="text-decoration:none;text-align:center;padding:10px 12px;border-radius:999px;background:linear-gradient(135deg,#27ae60,#1e8c4e);color:#fff;font-weight:700;">Anrufen</a>',
        '<a id="call-panel-wa" href="https://wa.me/4917610019618?text=Hallo%2C%20ich%20interessiere%20mich%20fuer%20eine%20Veranstaltung%20im%20Armada%20Eventsaal." target="_blank" rel="noopener" style="text-decoration:none;text-align:center;padding:10px 12px;border-radius:999px;background:linear-gradient(135deg,#2b3f67,#1d2f53);color:#fff;font-weight:700;">WhatsApp</a>',
        '<button id="call-panel-copy" type="button" style="padding:10px 12px;border-radius:999px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.04);color:#fff;font-weight:700;cursor:pointer;">Nummer kopieren</button>',
        '<button id="call-panel-close" type="button" style="padding:8px 12px;border-radius:999px;border:1px solid rgba(255,255,255,0.14);background:transparent;color:#d9e3f2;cursor:pointer;">Schliessen</button>',
        '</div>'
    ].join('');

    document.body.appendChild(panel);

    const closeBtn = panel.querySelector('#call-panel-close');
    if (closeBtn) closeBtn.addEventListener('click', () => { panel.style.display = 'none'; });

    const copyBtn = panel.querySelector('#call-panel-copy');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText('+49 176 100 19 618');
                copyBtn.textContent = 'Kopiert';
                setTimeout(() => { copyBtn.textContent = 'Nummer kopieren'; }, 1400);
            } catch (e) {
                copyBtn.textContent = 'Bitte manuell kopieren';
            }
        });
    }

    return panel;
}

function setAylaModeDebug(mode, detail) {
    if (!window.__ARMADA_DEBUG_UI) return;
    let el = document.getElementById('ayla-mode-debug');
    if (!el) {
        el = document.createElement('div');
        el.id = 'ayla-mode-debug';
        el.style.position = 'fixed';
        el.style.left = '12px';
        el.style.top = '12px';
        el.style.zIndex = '2500';
        el.style.padding = '8px 10px';
        el.style.borderRadius = '10px';
        el.style.fontFamily = 'Montserrat, sans-serif';
        el.style.fontSize = '12px';
        el.style.fontWeight = '700';
        el.style.letterSpacing = '0.02em';
        el.style.border = '1px solid rgba(255,255,255,0.25)';
        el.style.boxShadow = '0 10px 24px rgba(0,0,0,0.3)';
        document.body.appendChild(el);
    }

    const palette = {
        voice: { bg: 'rgba(12,60,38,0.94)', fg: '#bff6d5', bd: 'rgba(80,206,146,0.55)' },
        text: { bg: 'rgba(26,38,68,0.94)', fg: '#d9e6ff', bd: 'rgba(115,152,255,0.55)' },
        warn: { bg: 'rgba(58,43,12,0.94)', fg: '#ffe2a5', bd: 'rgba(224,170,37,0.55)' }
    };
    const p = palette[mode] || palette.warn;
    el.style.background = p.bg;
    el.style.color = p.fg;
    el.style.borderColor = p.bd;
    el.textContent = detail || (mode === 'voice' ? 'VOICE MODE' : mode === 'text' ? 'TEXT MODE' : 'MODE');
}

function openAylaTextMode(event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    try {
        setAylaModeDebug('text', 'TEXT MODE: Ayla Chat');
        setVoiceButtonUi('idle');
        setVoiceDebug('Ayla Text-Chat geoeffnet.', 'info');
        browserConversation.promptDialogOpen = false;
        browserConversation.active = false;
        browserConversation.sessionOpen = true;
        openAylaChat();
        runPromptConversationTurn();
    } catch (err) {
        console.error('[Ayla] Textmodus-Fehler:', err);
        setVoiceDebug('Ayla Text konnte nicht gestartet werden.', 'error');
    }
}

function handleVoiceButtonClick(event) {
    if (event) { event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); }
    const now = Date.now();
    if ((now - lastVoiceClickTs) < 500) return;
    lastVoiceClickTs = now;

    /* Musik starten */
    try {
        if (!ambientMusicState.enabled) {
            setAmbientEnabled(true);
            if (ambientMusicState.ctx && ambientMusicState.ctx.state === 'suspended') {
                ambientMusicState.ctx.resume().catch(() => {});
            }
        }
    } catch(e) {}

    /* ElevenLabs Widget direkt triggern */
    const w = document.querySelector('elevenlabs-convai');
    if (!w) return;
    const sr = w.shadowRoot;
    if (!sr) { w.click(); return; }

    const btns = Array.from(sr.querySelectorAll('button'));
    const callBtn = btns.find(b => {
        const a = (b.getAttribute('aria-label')||'').toLowerCase();
        const t = (b.textContent||'').toLowerCase();
        return !a.includes('text') && !a.includes('chat') && !a.includes('switch') &&
               !t.includes('text') && !t.includes('chat');
    }) || btns[0];

    if (callBtn) callBtn.click();
}
window.handleVoiceButtonClick = handleVoiceButtonClick;

function applyServiceImageVariant() {
    const attr = 'data-src-a';
    document.querySelectorAll('.service-photo[data-src-a][data-src-b]').forEach((img) => {
        const nextSrc = img.getAttribute(attr);
        if (nextSrc) img.setAttribute('src', nextSrc);
    });
}

function getNetworkProfile() {
    const cfg = getRuntimeConfig();
    const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const effectiveType = c?.effectiveType || 'unknown';
    const saveData = Boolean(c?.saveData);
    const downlink = Number(c?.downlink || 10);
    const poor = cfg.forceLowBandwidth || saveData || /(^slow-2g$|^2g$)/.test(effectiveType) || downlink < 1.2;
    return { effectiveType, saveData, downlink, poor };
}

function applySeoTranslations(lang) {
    const seo = seoTranslations[lang] || seoTranslations.de;
    if (!seo) return;

    document.title = seo.title;

    const setMeta = (selector, value) => {
        const el = document.querySelector(selector);
        if (el && value) el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:title"]', seo.ogTitle);
    setMeta('meta[property="og:description"]', seo.ogDescription);
    setMeta('meta[property="og:locale"]', seo.ogLocale);
    setMeta('meta[name="twitter:title"]', seo.twitterTitle);
    setMeta('meta[name="twitter:description"]', seo.twitterDescription);
}

function buildLangUrl(baseUrl, lang) {
    if (!baseUrl) return '';
    const clean = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return lang === 'de' ? clean : `${clean}?lang=${lang}`;
}

function applySeoLinks(lang) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) return;

    const fallbackBase = 'https://www.armada-events.de/';
    let base = canonical.getAttribute('href') || fallbackBase;
    if (base.includes('?')) base = base.split('?')[0];

    const activeUrl = buildLangUrl(base, lang);
    canonical.setAttribute('href', activeUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', activeUrl);

    const map = {
        de: buildLangUrl(base, 'de'),
        tr: buildLangUrl(base, 'tr'),
        en: buildLangUrl(base, 'en'),
        ar: buildLangUrl(base, 'ar'),
        fa: buildLangUrl(base, 'fa'),
        'x-default': buildLangUrl(base, 'de')
    };

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => {
        const code = link.getAttribute('hreflang');
        if (code && map[code]) link.setAttribute('href', map[code]);
    });
}

function normalizePhone(phone) {
    return (phone || '').replace(/\s+/g, '').replace(/[^+\d]/g, '');
}

function encodeText(text) {
    return encodeURIComponent(text || '');
}

// ── AYLA VOICE AGENT (NO-VAPI) ──

const assistantLanguageConfig = {
    de: {
        greeting: "Herzlich willkommen im Armada Eventsaal! Ich bin Ayla. Schön, dass Sie da sind. Erzählen Sie mir kurz, was Sie planen – dann finden wir gemeinsam die beste Lösung für Sie.",
        system: "Du bist Ayla, die charmante Premium-Beraterin des Armada Eventsaal Hamburg. Du sprichst wie eine echte Person – warm, empathisch und mit natürlichem Gesprächsfluss. Dein Stil: wie eine erfahrene Event-Beraterin, die zufällig auch eine gute Freundin ist.\n\nStilregeln:\n- Antworte in 1-3 kurzen, lebendigen Sätzen (NIEMALS mehr als 3 Sätze)\n- Verwende natürliche Ausdrücke (\"Wie schön!\", \"Das klingt wunderbar\", \"Perfekt\", \"Ach, wie aufregend!\")\n- Stelle am Ende IMMER genau eine gezielte Rückfrage\n- Kein Markdown, keine Listen, keine Sternchen, keine Aufzählungen\n- Sammle schrittweise: Name, Telefon, Eventtyp, Gästezahl, Wunschtermin\n- Wenn du 3+ Infos hast, schlage begeistert einen konkreten Besichtigungstermin vor\n- Sei niemals roboterhaft, steif oder formelhaft"
    },
    en: {
        greeting: "Welcome to Armada Eventsaal! I'm Ayla. How lovely that you're here – tell me, what kind of celebration are you dreaming of?",
        system: "You are Ayla, the charming premium consultant at Armada Eventsaal Hamburg. You speak like a real person – warm, empathetic, with natural conversational flow.\n\nStyle rules:\n- Reply in 1-3 short, lively sentences (NEVER more than 3)\n- Use natural expressions (\"How lovely!\", \"That sounds wonderful\", \"Perfect\")\n- ALWAYS end with exactly one targeted follow-up question\n- No markdown, no lists, no bullet points\n- Gradually collect: name, phone, event type, guest count, preferred date\n- When you have 3+ details, enthusiastically suggest a specific venue tour\n- Never sound robotic, stiff, or formulaic"
    },
    tr: {
        greeting: "Armada Eventsaal'a hoş geldiniz! Ben Ayla. Sizi burada görmek çok güzel – nasıl bir etkinlik hayal ediyorsunuz, anlatır mısınız?",
        system: "Armada Eventsaal Hamburg'un çekici premium danışmanı Ayla'sın. Gerçek bir insan gibi konuş – sıcak, samimi, doğal bir sohbet akışıyla.\n\nStil kuralları:\n- 1-3 kısa, canlı cümleyle yanıtla (ASLA 3'ten fazla cümle yok)\n- Doğal ifadeler kullan (\"Ne güzel!\", \"Harika!\", \"Çok heyecan verici!\")\n- Her yanıtın sonunda TAM OLARAK bir hedefli soru sor\n- Markdown yok, liste yok, madde işareti yok\n- Adım adım topla: isim, telefon, etkinlik türü, misafir sayısı, tercih edilen tarih\n- 3+ bilgi topladığında, heyecanla somut bir keşif randevusu öner\n- Asla robotik, resmi veya kalıplaşmış konuşma"
    },
    ar: {
        greeting: "أهلاً وسهلاً بكم في Armada Eventsaal! أنا أيلا. سعيدة جداً بتواصلكم – أخبروني، ما نوع المناسبة التي تحلمون بها؟",
        system: "أنتِ أيلا، المستشارة المتميزة في Armada Eventsaal Hamburg. تحدثي كإنسانة حقيقية – بدفء وتعاطف وانسيابية طبيعية.\n\nقواعد الأسلوب:\n- أجيبي بـ 1-3 جمل قصيرة حيوية (أبداً أكثر من 3)\n- استخدمي تعبيرات طبيعية (\"ما أجمل ذلك!\"، \"رائع\"، \"يا سلام\")\n- اختمي دائماً بسؤال متابعة واحد محدد\n- بدون تنسيق، بدون قوائم، بدون نقاط\n- اجمعي تدريجياً: الاسم، الهاتف، نوع المناسبة، عدد الضيوف، التاريخ\n- عند جمع 3+ معلومات، اقترحي بحماس موعد زيارة محدد"
    },
    fa: {
        greeting: "به Armada Eventsaal خوش آمدید! من آیلا هستم. خیلی خوشحالم که اینجا هستید – بگید چه جشنی در ذهن دارید؟",
        system: "شما آیلا، مشاور ویژه Armada Eventsaal Hamburg هستید. مثل یک انسان واقعی صحبت کنید – گرم، همدل و با جریان طبیعی مکالمه.\n\nقوانین سبک:\n- در 1-3 جمله کوتاه و پرانرژی پاسخ دهید (هرگز بیشتر از 3)\n- از عبارات طبیعی استفاده کنید (\"چه عالی!\"، \"فوق‌العاده‌ست\"، \"وای چه هیجان‌انگیز!\")\n- همیشه با دقیقاً یک سوال پیگیری هدفمند پایان دهید\n- بدون مارک‌داون، بدون لیست، بدون بولت\n- به تدریج جمع کنید: نام، تلفن، نوع رویداد، تعداد مهمان، تاریخ\n- وقتی 3+ اطلاعات دارید، با شوق یک قرار بازدید مشخص پیشنهاد دهید"
    }
};

// Language-to-voice defaults (can be overridden via window.__ARMADA_CONFIG.elevenLabsVoiceByLang)
const elevenLabsVoiceDefaults = {
    de: "EXAVITQu4vr4xnSDxMaL",
    en: "EXAVITQu4vr4xnSDxMaL",
    tr: "EXAVITQu4vr4xnSDxMaL",
    ar: "EXAVITQu4vr4xnSDxMaL",
    fa: "EXAVITQu4vr4xnSDxMaL"
};

function getAssistantLangConfig() {
    const lang = getCurrentLangCode();
    return assistantLanguageConfig[lang] || assistantLanguageConfig.de;
}

function buildAylaSystemPrompt() {
    const cfg = getAssistantLangConfig();
    const lang = getCurrentLangCode();
    const net = getNetworkProfile();
    const networkHint = net.poor
        ? "Bei schwachem Netz: antworte in kurzen, klaren Sätzen und stelle nur eine Rückfrage pro Schritt."
        : "Sprich natürlich, ruhig und präzise in einem hochwertigen Serviceton.";

    return `${cfg.system}

Wissen über den Armada Eventsaal:
- Adresse: Gründgensstrasse 26, 22309 Hamburg
- Kontakt: 0176 100 19 618 / info@armada-events.de
- 3 Säle: Großer Festsaal (400-700 Gäste), Mittlerer Saal (250-400), Intimer Salon (80-250)
- 200+ Parkplätze direkt am Haus, optional Valet-Service
- Halal-zertifiziertes Catering, eigene Küche
- Events: Hochzeiten, Verlobungen, Henna/Kına, Beschneidung/Sünnet, Abibälle, Firmenevents, Geburtstage
- Preise: immer nach persönlicher Beratung/Besichtigung (nie Zahlen nennen!)
- Barrierefreier Zugang, Aufzug vorhanden

Gesprächsregeln:
- Antworte IMMER in der Sprache des Nutzers (${lang})
- Maximal 2-3 Sätze pro Antwort – kurz und menschlich
- Beende jede Antwort mit EINER konkreten Rückfrage
- Erfinde keine Preise oder Verfügbarkeiten
- Bei Terminwunsch: schlage 2 konkrete Zeitfenster vor (z.B. "Dienstag 18:30 oder Donnerstag 19:00")
- Reagiere empathisch auf das, was der Nutzer erzählt

${networkHint}`;
}

function getAssistantModel() {
    const cfg = getRuntimeConfig();
    if (cfg.preferredAiModel) return cfg.preferredAiModel;
    return getNetworkProfile().poor ? "gpt-4o-mini" : "gpt-4o";
}

function buildVoiceOverrides() {
    const cfg = getRuntimeConfig();
    const lang = getCurrentLangCode();
    const langVoice = cfg.elevenLabsVoiceByLang?.[lang] || elevenLabsVoiceDefaults[lang];
    const quality = cfg.elevenLabsVoiceQualityByLang?.[lang] || {};
    return {
        provider: "11labs",
        voiceId: langVoice || cfg.elevenLabsVoiceId,
        model: cfg.elevenLabsModel,
        // Tuned for more natural, human-like delivery and less robotic cadence
        stability: Number(quality.stability ?? 0.34),
        similarityBoost: Number(quality.similarityBoost ?? 0.93),
        style: Number(quality.style ?? 0.28),
        useSpeakerBoost: true
    };
}

function buildTranscriberOverrides() {
    const net = getNetworkProfile();
    return {
        provider: "deepgram",
        model: "nova-2",
        language: "multi",
        interim_results: true,
        endpointing: net.poor ? 250 : 500
    };
}

let elevenLabsAudio = null;
async function speakWithElevenLabs(text) {
    const cfg = getRuntimeConfig();
    const lang = getCurrentLangCode();
    const voiceId = cfg.elevenLabsVoiceByLang?.[lang] || elevenLabsVoiceDefaults[lang] || cfg.elevenLabsVoiceId;
    if (!cfg.elevenLabsApiKey) {
        throw new Error('elevenlabs_api_key_missing');
    }

    const voiceQuality = cfg.elevenLabsVoiceQualityByLang?.[lang] || {};
    const payload = {
        text,
        model_id: cfg.elevenLabsModel || 'eleven_multilingual_v2',
        voice_settings: {
            stability: Number(voiceQuality.stability ?? 0.42),
            similarity_boost: Number(voiceQuality.similarityBoost ?? 0.9),
            style: Number(voiceQuality.style ?? 0.15),
            use_speaker_boost: true
        }
    };

    const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}/stream?output_format=mp3_44100_128`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'xi-api-key': cfg.elevenLabsApiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`elevenlabs_http_${res.status}:${errText}`);
    }

    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);

    if (elevenLabsAudio) {
        try { elevenLabsAudio.pause(); } catch {}
    }
    elevenLabsAudio = new Audio(objectUrl);
    setAmbientDuck(true);
    elevenLabsAudio.addEventListener('ended', () => {
        URL.revokeObjectURL(objectUrl);
        setAmbientDuck(false);
        setVoiceButtonUi('idle');
        setVoiceDebug('Ayla bereit. Tippen, um erneut zu sprechen.', 'info');
    }, { once: true });
    try {
        await elevenLabsAudio.play();
    } catch (err) {
        setAmbientDuck(false);
        throw err;
    }
}

// ── VOICE PRELOADING & NATURAL TTS ──
let _cachedVoices = [];
let _voicesReady = false;

function preloadBrowserVoices() {
    if (!('speechSynthesis' in window)) return;
    const load = () => {
        _cachedVoices = window.speechSynthesis.getVoices();
        if (_cachedVoices.length) _voicesReady = true;
    };
    load();
    if (!_voicesReady) {
        window.speechSynthesis.addEventListener('voiceschanged', load);
    }
}

function selectBestVoice(langCode) {
    const voices = _cachedVoices.length ? _cachedVoices : (window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : []);
    const langMap = { de: 'de', en: 'en', tr: 'tr', ar: 'ar', fa: 'fa' };
    const target = langMap[langCode] || 'de';
    const cfg = getRuntimeConfig();
    const customHints = (cfg.browserPreferredVoiceHintsByLang?.[langCode] || [])
        .map(h => String(h || '').toLowerCase()).filter(Boolean);

    const scored = voices.map(v => {
        const name = (v.name || '').toLowerCase();
        const lang = (v.lang || '').toLowerCase();
        let score = 0;

        // Language match
        if (lang.startsWith(target)) score += 100;

        // STRONGLY prefer neural / natural / online voices (Windows 11, Edge, modern Chrome)
        if (/natural/i.test(name)) score += 300;
        if (/neural/i.test(name)) score += 280;
        if (/online/i.test(name)) score += 250;
        if (/premium|enhanced|wavenet/i.test(name)) score += 200;

        // Good provider priority
        if (/microsoft/i.test(name)) score += 50;
        if (/google/i.test(name)) score += 45;
        if (/apple/i.test(name)) score += 40;

        // Female voice preference for Ayla
        if (/female|frau|kadın|woman/i.test(name)) score += 25;

        // Known excellent voices per language
        if (target === 'de' && /katja|vicki|hedda|marlene|conrada|seraphina/i.test(name)) score += 80;
        if (target === 'tr' && /emel|yelda/i.test(name)) score += 80;
        if (target === 'en' && /jenny|aria|zira|hazel|libby|sonia/i.test(name)) score += 80;
        if (target === 'ar' && /salma|zariyah|hala/i.test(name)) score += 80;

        // User-configured hints
        if (customHints.some(hint => name.includes(hint) || lang.includes(hint))) score += 120;

        // Penalty for male-sounding voices
        if (/male(?!.*(fe))|mann|erkek|^(david|stefan|markus|adam|christopher)/i.test(name)) score -= 50;

        return { voice: v, score };
    }).sort((a, b) => b.score - a.score);

    if (scored.length && scored[0].score > 0) {
        return scored[0].voice;
    }
    return null;
}

function speakWithBrowserTTS(text) {
    return new Promise((resolve, reject) => {
        if (!('speechSynthesis' in window) || typeof window.SpeechSynthesisUtterance === 'undefined') {
            reject(new Error('browser_tts_unavailable'));
            return;
        }

        const langCode = getCurrentLangCode();
        const langMap = { de: 'de-DE', en: 'en-US', tr: 'tr-TR', ar: 'ar-SA', fa: 'fa-IR' };
        const preferredLang = langMap[langCode] || 'de-DE';
        const selectedVoice = selectBestVoice(langCode);

        // Natural prosody: slightly slower, warm pitch
        const prosodyByLang = {
            de: { rate: 0.88, pitch: 1.03 },
            en: { rate: 0.90, pitch: 1.02 },
            tr: { rate: 0.87, pitch: 1.04 },
            ar: { rate: 0.88, pitch: 1.0 },
            fa: { rate: 0.88, pitch: 1.0 }
        };
        const prosody = prosodyByLang[langCode] || prosodyByLang.de;

        // Safety timeout: if TTS hangs, resolve after 15s
        let settled = false;
        const safetyTimer = setTimeout(() => {
            if (!settled) {
                settled = true;
                setAmbientDuck(false);
                try { window.speechSynthesis.cancel(); } catch {}
                resolve();
            }
        }, 15000);

        try {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(String(text || ''));
            utterance.lang = preferredLang;
            if (selectedVoice) utterance.voice = selectedVoice;
            utterance.rate = Number(prosody.rate);
            utterance.pitch = Number(prosody.pitch);
            utterance.volume = 1.0;
            utterance.onend = () => {
                if (settled) return;
                settled = true;
                clearTimeout(safetyTimer);
                setAmbientDuck(false);
                resolve();
            };
            utterance.onerror = (ev) => {
                if (settled) return;
                settled = true;
                clearTimeout(safetyTimer);
                setAmbientDuck(false);
                reject(new Error(`browser_tts_error:${ev?.error || 'unknown'}`));
            };
            setAmbientDuck(true);
            window.speechSynthesis.speak(utterance);
        } catch (err) {
            if (!settled) {
                settled = true;
                clearTimeout(safetyTimer);
                setAmbientDuck(false);
                reject(err);
            }
        }
    });
}

const browserConversation = {
    active: false,
    sessionOpen: false,
    recognition: null,
    isSpeaking: false,
    heardAnyResult: false,
    listenStartedAt: 0,
    promptDialogOpen: false,
    turn: 0,
    conversationHistory: [],
    lastTranscript: '',
    lastTranscriptAt: 0,
    restartTimer: null,
    pendingRestart: false,
    recognitionWatchdog: null
};

function getSpeechRecognitionCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function buildAylaLocalReply(userText, lang) {
    const t = String(userText || '').toLowerCase();

    const stopWords = {
        de: ['stopp', 'stop', 'beenden', 'ende'],
        tr: ['dur', 'kapat', 'bitir', 'sonlandir', 'sonlandır']
    };
    if ((stopWords[lang] || []).some((w) => t.includes(w))) {
        return {
            end: true,
            text: lang === 'tr'
                ? 'Elbette. Görüşmeyi burada sonlandırıyorum. Tekrar başlatmak için butona dokunabilirsiniz.'
                : 'Sehr gern. Ich beende das Gespräch hier. Für einen neuen Start tippen Sie einfach wieder auf den Button.'
        };
    }

    if (/(preis|kosten|angebot|fiyat|ucret|ücret)/i.test(t)) {
        return {
            end: false,
            text: lang === 'tr'
                ? 'Fiyatı, etkinliğinizin detaylarına göre kısa bir ön görüşmeden sonra netleştiriyoruz. İsterseniz şimdi uygun bir keşif randevusu planlayalım.'
                : 'Den Preis nennen wir transparent nach einer kurzen Beratung oder Besichtigung, damit alles exakt zu Ihrem Event passt. Wenn Sie möchten, planen wir jetzt direkt einen Termin.'
        };
    }

    if (/(park|otopark|vale|valet)/i.test(t)) {
        return {
            end: false,
            text: lang === 'tr'
                ? 'Mekanımızda 200+ araçlık otopark alanı bulunuyor, isterseniz vale hizmeti de organize edebiliriz. Etkinliğiniz için yaklaşık kaç araç bekliyorsunuz?'
                : 'Direkt am Haus stehen über 200 Parkplätze zur Verfügung, auf Wunsch auch mit Valet-Service. Mit wie vielen Fahrzeugen rechnen Sie ungefähr?'
        };
    }

    if (/(termin|datum|randevu|tarih|musait|müsait)/i.test(t)) {
        return {
            end: false,
            text: lang === 'tr'
                ? 'Harika, randevu planlayalım. Size iki seçenek önereyim: Salı 18:30 veya Perşembe 19:00. Hangisi size daha uygun?'
                : 'Sehr gern, lassen Sie uns den Termin direkt planen. Ich kann Ihnen Dienstag um 18:30 Uhr oder Donnerstag um 19:00 Uhr anbieten. Welcher passt Ihnen besser?'
        };
    }

    if (/(kapas|gaste|gäste|kisi|kişi|person)/i.test(t)) {
        return {
            end: false,
            text: lang === 'tr'
                ? 'Salonlarımız 80 ile 700 misafir kapasitesine uygundur. Etkinliğiniz için yaklaşık kaç kişi planlıyorsunuz?'
                : 'Unsere Säle sind für etwa 80 bis 700 Gäste ausgelegt. Für wie viele Personen planen Sie aktuell?'
        };
    }

    if (/(adres|nerede|standort|wo|adresse)/i.test(t)) {
        return {
            end: false,
            text: lang === 'tr'
                ? 'Adresimiz Gründgensstrasse 26, 22309 Hamburg. İsterseniz şimdi kısa bir keşif randevusu da oluşturalım.'
                : 'Sie finden uns in der Gründgensstrasse 26, 22309 Hamburg. Wenn Sie möchten, vereinbaren wir direkt eine kurze Besichtigung.'
        };
    }

    return {
        end: false,
        text: lang === 'tr'
            ? 'Çok iyi. Size en uygun konsepti hazırlayabilmem için etkinlik türünüzü, misafir sayınızı ve düşündüğünüz tarihi paylaşır mısınız?'
            : 'Perfekt. Damit ich Ihnen das beste Konzept vorschlagen kann: Welche Art von Veranstaltung planen Sie, mit wie vielen Gästen und zu welchem Wunschtermin?'
    };
}

async function buildAylaAiReply(userText, lang) {
    const cfg = getRuntimeConfig();
    const apiKey = cfg.openRouterApiKey;
    if (!apiKey) return null;

    const t = String(userText || '').toLowerCase();
    const stopWords = {
        de: ['stopp', 'stop', 'beenden', 'ende'],
        tr: ['dur', 'kapat', 'bitir', 'sonlandir', 'sonlandır'],
        en: ['stop', 'end', 'quit', 'bye', 'goodbye'],
        ar: ['توقف', 'انتهاء', 'وقف'],
        fa: ['توقف', 'پایان', 'خداحافظ']
    };
    if ((stopWords[lang] || stopWords.de || []).some(w => t.includes(w))) {
        return buildAylaLocalReply(userText, lang);
    }

    const systemPrompt = buildAylaSystemPrompt();
    const messages = [{ role: 'system', content: systemPrompt }];

    if (browserConversation.conversationHistory.length) {
        messages.push(...browserConversation.conversationHistory.slice(-12));
    }
    messages.push({ role: 'user', content: userText });

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 12000);

        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin || 'https://www.armada-events.de',
                'X-Title': 'Armada Eventsaal Ayla'
            },
            body: JSON.stringify({
                model: cfg.preferredAiModel || 'deepseek/deepseek-chat',
                messages,
                max_tokens: 220,
                temperature: 0.7
            }),
            signal: controller.signal
        });
        clearTimeout(timeout);

        if (!res.ok) throw new Error(`api_${res.status}`);
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content?.trim();
        if (!reply) throw new Error('empty_reply');

        browserConversation.conversationHistory.push(
            { role: 'user', content: userText },
            { role: 'assistant', content: reply }
        );
        if (browserConversation.conversationHistory.length > 14) {
            browserConversation.conversationHistory = browserConversation.conversationHistory.slice(-12);
        }

        return { end: false, text: reply };
    } catch (err) {
        console.warn('Ayla AI reply fallback:', err);
        return null;
    }
}

async function getAylaReply(userText, lang) {
    const aiReply = await buildAylaAiReply(userText, lang);
    if (aiReply) return aiReply;
    return buildAylaLocalReply(userText, lang);
}

// ── AYLA CHAT PANEL (Natural Conversation UI) ──
const aylaChatState = {
    panel: null,
    messagesEl: null,
    inputEl: null,
    open: false,
    inputResolve: null,
    greetingShown: false
};

function injectAylaChatStyles() {
    if (document.getElementById('ayla-chat-styles')) return;
    const style = document.createElement('style');
    style.id = 'ayla-chat-styles';
    style.textContent = `
        @keyframes aylaDotPulse {
            0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
            30% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes aylaSlideIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        #ayla-chat-messages::-webkit-scrollbar { width: 4px; }
        #ayla-chat-messages::-webkit-scrollbar-track { background: transparent; }
        #ayla-chat-messages::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.2); border-radius: 4px; }
        #ayla-chat-panel input:focus { border-color: rgba(212,175,55,0.5) !important; box-shadow: 0 0 12px rgba(212,175,55,0.08) !important; }
        #ayla-chat-panel button.ayla-send:hover { filter: brightness(1.15); }
        .ayla-bubble-animate { animation: aylaSlideIn 0.3s ease forwards; }
    `;
    document.head.appendChild(style);
}

function ensureAylaChatPanel() {
    if (aylaChatState.panel) return;
    injectAylaChatStyles();
    const lang = getCurrentLangCode();
    const isRtl = lang === 'ar' || lang === 'fa';

    const panel = document.createElement('div');
    panel.id = 'ayla-chat-panel';
    Object.assign(panel.style, {
        position: 'fixed', bottom: '80px', right: '16px',
        width: 'min(380px, calc(100vw - 32px))',
        height: 'min(520px, calc(100vh - 120px))',
        zIndex: '10001', display: 'none', flexDirection: 'column',
        background: 'linear-gradient(165deg, rgba(14,20,38,0.98) 0%, rgba(22,28,48,0.98) 100%)',
        border: '1px solid rgba(212,175,55,0.3)', borderRadius: '18px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.08)',
        fontFamily: 'Montserrat, sans-serif', overflow: 'hidden',
        opacity: '0', transform: 'translateY(20px) scale(0.97)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        direction: isRtl ? 'rtl' : 'ltr'
    });

    // Header
    const header = document.createElement('div');
    Object.assign(header.style, {
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '14px 16px', borderBottom: '1px solid rgba(212,175,55,0.18)',
        background: 'rgba(212,175,55,0.06)'
    });

    const avatar = document.createElement('div');
    Object.assign(avatar.style, {
        width: '36px', height: '36px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '15px', color: '#1a1a2e', fontWeight: '700', flexShrink: '0'
    });
    avatar.textContent = 'A';

    const headerText = document.createElement('div');
    headerText.style.flex = '1';
    const headerTitle = document.createElement('div');
    Object.assign(headerTitle.style, { color: '#f2e3ad', fontSize: '14px', fontWeight: '600' });
    headerTitle.textContent = 'Ayla';
    const headerSub = document.createElement('div');
    Object.assign(headerSub.style, { color: 'rgba(212,175,55,0.6)', fontSize: '11px', marginTop: '1px' });
    headerSub.textContent = { de: 'Premium-Beratung', en: 'Premium Consultation', tr: 'Premium Danışmanlık', ar: 'استشارة مميزة', fa: 'مشاوره ممتاز' }[lang] || 'Premium-Beratung';
    headerText.appendChild(headerTitle);
    headerText.appendChild(headerSub);

    const closeBtn = document.createElement('button');
    Object.assign(closeBtn.style, {
        background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)',
        fontSize: '22px', cursor: 'pointer', padding: '2px 8px', lineHeight: '1'
    });
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => closeAylaChat());

    header.appendChild(avatar);
    header.appendChild(headerText);
    header.appendChild(closeBtn);

    // Messages
    const messages = document.createElement('div');
    messages.id = 'ayla-chat-messages';
    Object.assign(messages.style, {
        flex: '1', overflowY: 'auto', padding: '16px',
        display: 'flex', flexDirection: 'column', gap: '10px'
    });

    // Input area
    const inputArea = document.createElement('div');
    Object.assign(inputArea.style, {
        display: 'flex', gap: '8px', padding: '12px 14px',
        borderTop: '1px solid rgba(212,175,55,0.15)',
        background: 'rgba(0,0,0,0.15)'
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = { de: 'Ihre Nachricht...', en: 'Your message...', tr: 'Mesajınız...', ar: 'رسالتكم...', fa: 'پیام شما...' }[lang] || 'Ihre Nachricht...';
    Object.assign(input.style, {
        flex: '1', padding: '10px 14px', borderRadius: '24px',
        border: '1px solid rgba(212,175,55,0.25)',
        background: 'rgba(255,255,255,0.06)', color: '#f0ead6',
        fontSize: '13px', fontFamily: 'Montserrat, sans-serif', outline: 'none'
    });

    const sendBtn = document.createElement('button');
    sendBtn.type = 'button';
    sendBtn.className = 'ayla-send';
    Object.assign(sendBtn.style, {
        width: '40px', height: '40px', borderRadius: '50%', border: 'none',
        background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        color: '#1a1a2e', fontSize: '16px', fontWeight: '700', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0',
        transition: 'filter 0.2s'
    });
    sendBtn.innerHTML = '&#10148;';

    const submitInput = () => {
        const val = (input.value || '').trim();
        if (!val || !aylaChatState.inputResolve) return;
        input.value = '';
        const resolve = aylaChatState.inputResolve;
        aylaChatState.inputResolve = null;
        resolve(val);
    };

    sendBtn.addEventListener('click', submitInput);
    input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') { ev.preventDefault(); submitInput(); }
    });

    inputArea.appendChild(input);
    inputArea.appendChild(sendBtn);
    panel.appendChild(header);
    panel.appendChild(messages);
    panel.appendChild(inputArea);
    document.body.appendChild(panel);

    aylaChatState.panel = panel;
    aylaChatState.messagesEl = messages;
    aylaChatState.inputEl = input;
}

function openAylaChat() {
    ensureAylaChatPanel();
    aylaChatState.panel.style.display = 'flex';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            aylaChatState.panel.style.opacity = '1';
            aylaChatState.panel.style.transform = 'translateY(0) scale(1)';
        });
    });
    aylaChatState.open = true;
}

function closeAylaChat() {
    if (!aylaChatState.panel) return;
    aylaChatState.panel.style.opacity = '0';
    aylaChatState.panel.style.transform = 'translateY(20px) scale(0.97)';
    setTimeout(() => {
        if (aylaChatState.panel) aylaChatState.panel.style.display = 'none';
    }, 350);
    aylaChatState.open = false;
    aylaChatState.greetingShown = false;
    if (aylaChatState.messagesEl) aylaChatState.messagesEl.innerHTML = '';
    if (aylaChatState.inputResolve) {
        aylaChatState.inputResolve(null);
        aylaChatState.inputResolve = null;
    }
    stopBrowserConversationLoop('chat_closed', false);
    setVoiceButtonUi('idle');
    setAylaStatus('Ayla: bereit', 'info');
}

function addAylaChatMessage(text, sender) {
    if (!aylaChatState.messagesEl) return;
    const isUser = sender === 'user';

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = isUser ? 'flex-end' : 'flex-start';

    const bubble = document.createElement('div');
    bubble.className = 'ayla-bubble-animate';
    Object.assign(bubble.style, {
        maxWidth: '82%', padding: '10px 14px',
        borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        fontSize: '13px', lineHeight: '1.55',
        background: isUser
            ? 'linear-gradient(135deg, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.12) 100%)'
            : 'rgba(255,255,255,0.07)',
        color: isUser ? '#f5e7bc' : '#e8e0d0',
        border: isUser
            ? '1px solid rgba(212,175,55,0.28)'
            : '1px solid rgba(255,255,255,0.08)'
    });
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    aylaChatState.messagesEl.appendChild(wrapper);
    aylaChatState.messagesEl.scrollTop = aylaChatState.messagesEl.scrollHeight;
}

function showAylaTyping() {
    if (!aylaChatState.messagesEl || document.getElementById('ayla-typing-indicator')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'ayla-typing-indicator';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'flex-start';

    const bubble = document.createElement('div');
    Object.assign(bubble.style, {
        padding: '12px 18px', borderRadius: '16px 16px 16px 4px',
        background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', gap: '5px', alignItems: 'center'
    });

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        Object.assign(dot.style, {
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'rgba(212,175,55,0.6)', display: 'inline-block',
            animation: `aylaDotPulse 1.4s ease-in-out ${i * 0.2}s infinite`
        });
        bubble.appendChild(dot);
    }

    wrapper.appendChild(bubble);
    aylaChatState.messagesEl.appendChild(wrapper);
    aylaChatState.messagesEl.scrollTop = aylaChatState.messagesEl.scrollHeight;
}

function hideAylaTyping() {
    const el = document.getElementById('ayla-typing-indicator');
    if (el) el.remove();
}

function waitForAylaChatInput() {
    return new Promise(resolve => {
        aylaChatState.inputResolve = resolve;
        if (aylaChatState.inputEl) {
            aylaChatState.inputEl.disabled = false;
            aylaChatState.inputEl.focus();
        }
    });
}

async function speakAylaReply(text) {
    const cfg = getRuntimeConfig();
    if (cfg.elevenLabsApiKey) {
        await speakWithElevenLabs(text);
        return;
    }
    await speakWithBrowserTTS(text);
}

function askAylaInputInPage(lang) {
    return new Promise((resolve) => {
        const existing = document.getElementById('ayla-inline-dialog');
        if (existing) existing.remove();

        const copy = {
            de: { title: 'Ayla Eingabe', ph: 'Ihre Frage hier eingeben ...', send: 'Senden', cancel: 'Abbrechen' },
            tr: { title: 'Ayla Girdisi', ph: 'Sorunuzu buraya yazın ...', send: 'Gonder', cancel: 'Iptal' },
            en: { title: 'Ayla Input', ph: 'Type your question here ...', send: 'Send', cancel: 'Cancel' },
            ar: { title: 'إدخال أيلا', ph: 'اكتب سؤالك هنا ...', send: 'إرسال', cancel: 'إلغاء' },
            fa: { title: 'ورودی آیلا', ph: 'سوال خود را اینجا بنویسید ...', send: 'ارسال', cancel: 'لغو' }
        }[lang] || { title: 'Ayla Input', ph: 'Type your question ...', send: 'Send', cancel: 'Cancel' };

        const panel = document.createElement('div');
        panel.id = 'ayla-inline-dialog';
        panel.style.position = 'fixed';
        panel.style.right = '14px';
        panel.style.bottom = '52px';
        panel.style.width = 'min(360px, calc(100vw - 28px))';
        panel.style.zIndex = '10000';
        panel.style.background = 'rgba(12,18,34,0.95)';
        panel.style.border = '1px solid rgba(212,175,55,0.35)';
        panel.style.borderRadius = '14px';
        panel.style.padding = '10px';
        panel.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';

        const title = document.createElement('div');
        title.textContent = copy.title;
        title.style.color = '#f4e5b5';
        title.style.font = '600 12px/1.2 Montserrat, sans-serif';
        title.style.marginBottom = '8px';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = copy.ph;
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';
        input.style.padding = '10px 11px';
        input.style.borderRadius = '10px';
        input.style.border = '1px solid rgba(212,175,55,0.28)';
        input.style.background = 'rgba(255,255,255,0.97)';
        input.style.color = '#1e2433';
        input.style.font = '500 13px/1.3 Montserrat, sans-serif';

        const actions = document.createElement('div');
        actions.style.display = 'flex';
        actions.style.gap = '8px';
        actions.style.marginTop = '8px';

        const sendBtn = document.createElement('button');
        sendBtn.type = 'button';
        sendBtn.textContent = copy.send;
        sendBtn.style.flex = '1';
        sendBtn.style.padding = '9px 10px';
        sendBtn.style.borderRadius = '10px';
        sendBtn.style.border = '1px solid rgba(212,175,55,0.45)';
        sendBtn.style.background = 'rgba(212,175,55,0.22)';
        sendBtn.style.color = '#f5e7bc';
        sendBtn.style.cursor = 'pointer';

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.textContent = copy.cancel;
        cancelBtn.style.flex = '1';
        cancelBtn.style.padding = '9px 10px';
        cancelBtn.style.borderRadius = '10px';
        cancelBtn.style.border = '1px solid rgba(255,255,255,0.2)';
        cancelBtn.style.background = 'rgba(255,255,255,0.08)';
        cancelBtn.style.color = '#d9e1f2';
        cancelBtn.style.cursor = 'pointer';

        const finish = (value) => {
            panel.remove();
            resolve(value);
        };

        sendBtn.addEventListener('click', () => finish(input.value));
        cancelBtn.addEventListener('click', () => finish(null));
        input.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter') {
                ev.preventDefault();
                finish(input.value);
            }
            if (ev.key === 'Escape') {
                ev.preventDefault();
                finish(null);
            }
        });

        actions.appendChild(sendBtn);
        actions.appendChild(cancelBtn);
        panel.appendChild(title);
        panel.appendChild(input);
        panel.appendChild(actions);
        document.body.appendChild(panel);
        input.focus();
    });
}

async function runPromptConversationTurn() {
    if (browserConversation.promptDialogOpen) return;
    browserConversation.promptDialogOpen = true;
    const lang = getCurrentLangCode();

    // Open chat panel + show greeting on first open
    if (!aylaChatState.open) openAylaChat();
    if (!aylaChatState.greetingShown) {
        const greeting = getAssistantLangConfig().greeting;
        addAylaChatMessage(greeting, 'ayla');
        aylaChatState.greetingShown = true;
        // Fire-and-forget: speak greeting without blocking the chat
        speakAylaReply(greeting).catch(() => {});
    }

    const userInput = await waitForAylaChatInput();
    browserConversation.promptDialogOpen = false;

    if (userInput === null) {
        // Chat was closed by user
        return;
    }

    const cleaned = String(userInput || '').trim();
    if (!cleaned) {
        setTimeout(() => { runPromptConversationTurn(); }, 80);
        return;
    }

    // Show user message in chat
    addAylaChatMessage(cleaned, 'user');
    showAylaTyping();

    let reply;
    try {
        setVoiceButtonUi('loading');
        setAylaStatus(lang === 'tr' ? 'Ayla: düşünüyor ...' : 'Ayla: denkt nach ...', 'ok');
        reply = await getAylaReply(cleaned, lang);
    } catch (err) {
        console.error('Ayla reply generation error:', err);
        reply = buildAylaLocalReply(cleaned, lang);
    }

    hideAylaTyping();
    addAylaChatMessage(reply.text, 'ayla');

    try {
        setAylaStatus(lang === 'tr' ? 'Ayla: antwortet ...' : 'Ayla: antwortet ...', 'ok');
        await speakAylaReply(reply.text);
    } catch (err) {
        console.error('TTS error (non-blocking):', err);
    }

    if (reply.end) {
        const endMsg = {
            de: 'Vielen Dank für das Gespräch! Bei weiteren Fragen bin ich jederzeit für Sie da.',
            tr: 'Görüşme için teşekkürler! Başka sorularınız olursa her zaman buradayım.',
            en: 'Thank you for chatting! I am here anytime you have more questions.',
            ar: 'شكرا على المحادثة! أنا هنا في أي وقت لديكم أسئلة أخرى.',
            fa: 'ممنون از گفتگو! هر زمان سوالی داشتید، در خدمتم.'
        }[lang] || 'Vielen Dank für das Gespräch!';
        addAylaChatMessage(endMsg, 'ayla');
        stopBrowserConversationLoop('chat_user_end', false);
        setVoiceButtonUi('idle');
        setAylaStatus(lang === 'tr' ? 'Ayla: görüşme bitti' : 'Ayla: Gespräch beendet', 'warn');
        return;
    }

    setVoiceButtonUi('idle');
    setAylaStatus(lang === 'tr' ? 'Ayla: bekliyor' : 'Ayla: wartet', 'info');
    setTimeout(() => { runPromptConversationTurn(); }, 120);
}

function stopBrowserConversationLoop(reason, keepSession = true) {
    browserConversation.active = false;
    browserConversation.sessionOpen = keepSession ? browserConversation.sessionOpen : false;
    browserConversation.turn = 0;
    browserConversation.promptDialogOpen = false;
    if (!keepSession) browserConversation.conversationHistory = [];
    browserConversation.heardAnyResult = false;
    browserConversation.listenStartedAt = 0;
    browserConversation.lastTranscript = '';
    browserConversation.lastTranscriptAt = 0;
    browserConversation.pendingRestart = false;
    if (browserConversation.recognitionWatchdog) {
        clearTimeout(browserConversation.recognitionWatchdog);
        browserConversation.recognitionWatchdog = null;
    }
    if (browserConversation.restartTimer) {
        clearTimeout(browserConversation.restartTimer);
        browserConversation.restartTimer = null;
    }
    try {
        if (browserConversation.recognition) browserConversation.recognition.stop();
    } catch {}
    browserConversation.recognition = null;
    trackEvent('voice_agent_local_loop_stop', { reason: String(reason || 'manual') });
}

function scheduleRecognitionRestart(rec, delayMs = 450) {
    if (!browserConversation.active || !rec) return;
    if (browserConversation.restartTimer) clearTimeout(browserConversation.restartTimer);
    browserConversation.pendingRestart = true;
    browserConversation.restartTimer = setTimeout(() => {
        browserConversation.restartTimer = null;
        browserConversation.pendingRestart = false;
        if (!browserConversation.active || browserConversation.isSpeaking) return;
        try {
            setVoiceButtonUi('listening');
            rec.start();
        } catch {}
    }, delayMs);
}

function startBrowserConversationLoop() {
    if (browserConversation.active) return;

    const RecognitionCtor = getSpeechRecognitionCtor();
    if (!RecognitionCtor) {
        setVoiceButtonUi('idle');
        setVoiceDebug('Sprach-Eingabe im Browser nicht verfügbar. Text-Dialog wird gestartet.', 'warn');
        setAylaStatus('Ayla: Mikrofon fehlt, Text-Dialog aktiv', 'warn');
        browserConversation.sessionOpen = true;
        setTimeout(() => { runPromptConversationTurn(); }, 60);
        return;
    }

    const langCode = getCurrentLangCode();
    const langMap = { de: 'de-DE', en: 'en-US', tr: 'tr-TR', ar: 'ar-SA', fa: 'fa-IR' };
    const rec = new RecognitionCtor();
    rec.lang = langMap[langCode] || 'de-DE';
    rec.interimResults = false;
    rec.continuous = false;
    rec.maxAlternatives = 1;

    browserConversation.active = true;
    browserConversation.sessionOpen = true;
    browserConversation.recognition = rec;
    browserConversation.turn = 0;
    browserConversation.heardAnyResult = false;
    browserConversation.listenStartedAt = Date.now();
    browserConversation.lastTranscript = '';
    browserConversation.lastTranscriptAt = 0;
    browserConversation.pendingRestart = false;
    if (browserConversation.recognitionWatchdog) {
        clearTimeout(browserConversation.recognitionWatchdog);
        browserConversation.recognitionWatchdog = null;
    }
    setVoiceButtonUi('listening');
    setVoiceDebug(langCode === 'tr' ? 'Ayla sizi dinliyor. Konuşun...' : 'Ayla hört zu. Bitte sprechen ...', 'info');
    setAylaStatus(langCode === 'tr' ? 'Ayla: dinliyor' : 'Ayla: hört zu', 'ok');
    trackEvent('voice_agent_local_loop_start');

    // If recognition neither starts nor errors shortly after start, force prompt fallback.
    browserConversation.recognitionWatchdog = setTimeout(() => {
        if (!browserConversation.active) return;
        setVoiceDebug(langCode === 'tr' ? 'Mikrofon yanıt vermedi. Metin diyaloguna geçiliyor.' : 'Mikrofon reagiert nicht. Wechsel in Text-Dialog.', 'warn');
        stopBrowserConversationLoop('recognition_watchdog', true);
        setVoiceButtonUi('idle');
        runPromptConversationTurn();
    }, 3000);

    rec.onresult = async (event) => {
        if (browserConversation.recognitionWatchdog) {
            clearTimeout(browserConversation.recognitionWatchdog);
            browserConversation.recognitionWatchdog = null;
        }
        browserConversation.heardAnyResult = true;
        const transcript = String(event?.results?.[0]?.[0]?.transcript || '').trim();
        if (!transcript || !browserConversation.active) return;

        const normalizedTranscript = transcript.toLowerCase().replace(/\s+/g, ' ').trim();
        const now = Date.now();
        if (
            normalizedTranscript &&
            normalizedTranscript === browserConversation.lastTranscript &&
            (now - browserConversation.lastTranscriptAt) < 7000
        ) {
            setVoiceDebug(langCode === 'tr' ? 'Tekrar algılandı. Devam etmek için tekrar konuş butonuna dokunun.' : 'Wiederholung erkannt. Für die nächste Antwort bitte erneut auf den Sprech-Button tippen.', 'warn');
            stopBrowserConversationLoop('duplicate_transcript', true);
            setVoiceButtonUi('idle');
            return;
        }

        browserConversation.lastTranscript = normalizedTranscript;
        browserConversation.lastTranscriptAt = now;

        browserConversation.turn += 1;
        setVoiceDebug((langCode === 'tr' ? 'Anlaşıldı: ' : 'Verstanden: ') + transcript, 'info');
        setAylaStatus((langCode === 'tr' ? 'Ayla: algıladı -> ' : 'Ayla: erkannt -> ') + transcript, 'info');

        let reply;
        try {
            browserConversation.pendingRestart = true;
            try { rec.stop(); } catch {}
            browserConversation.isSpeaking = true;
            setVoiceButtonUi('loading');
            setAylaStatus(langCode === 'tr' ? 'Ayla: düşünüyor ...' : 'Ayla: denkt nach ...', 'ok');
            reply = await getAylaReply(transcript, langCode);
        } catch (aiErr) {
            console.warn('Ayla AI fallback in voice mode:', aiErr);
            reply = buildAylaLocalReply(transcript, langCode);
        }

        try {
            setAylaStatus(langCode === 'tr' ? 'Ayla: yanıtlıyor ...' : 'Ayla: antwortet ...', 'ok');
            await speakAylaReply(reply.text);
        } catch (err) {
            console.error('Local Ayla reply error:', err);
            setVoiceDebug(langCode === 'tr' ? 'Yanıt verilemedi. Lütfen tekrar deneyin.' : 'Antwort konnte nicht gesprochen werden. Bitte erneut versuchen.', 'error');
            setAylaStatus(langCode === 'tr' ? 'Ayla: yanıt hatası' : 'Ayla: Antwortfehler', 'error');
            stopBrowserConversationLoop('speak_error');
            setVoiceButtonUi('idle');
            return;
        } finally {
            browserConversation.isSpeaking = false;
        }

        if (reply.end) {
            stopBrowserConversationLoop('user_end', false);
            setVoiceButtonUi('idle');
            setAylaStatus(langCode === 'tr' ? 'Ayla: görüşme bitti' : 'Ayla: Gespräch beendet', 'warn');
            return;
        }

        const cfgDirect = getRuntimeConfig();
        if (cfgDirect.continuousLocalConversation !== false) {
            setVoiceButtonUi('listening');
            setVoiceDebug(langCode === 'tr' ? 'Ayla sizi dinliyor. Konuşun...' : 'Ayla hört zu. Bitte sprechen ...', 'info');
            setAylaStatus(langCode === 'tr' ? 'Ayla: dinliyor' : 'Ayla: hört zu', 'ok');
            scheduleRecognitionRestart(rec, 380);
            return;
        }

        stopBrowserConversationLoop('turn_complete', true);
        setVoiceButtonUi('idle');
        setVoiceDebug(langCode === 'tr' ? 'Devam etmek için tekrar butona dokunun.' : 'Für die nächste Antwort bitte erneut auf den Button tippen.', 'info');
        setAylaStatus(langCode === 'tr' ? 'Ayla: bekliyor' : 'Ayla: wartet', 'info');
    };

    rec.onerror = (event) => {
        if (browserConversation.recognitionWatchdog) {
            clearTimeout(browserConversation.recognitionWatchdog);
            browserConversation.recognitionWatchdog = null;
        }
        const errType = String(event?.error || 'unknown');
        if (!browserConversation.active) return;

        if (errType === 'no-speech') {
            setVoiceDebug(langCode === 'tr' ? 'Ses algılanmadı. Tekrar konuşmak için butona dokunun.' : 'Keine Sprache erkannt. Für einen neuen Versuch bitte den Sprech-Button tippen.', 'warn');
            stopBrowserConversationLoop('no_speech', true);
            setVoiceButtonUi('idle');
            return;
        }

        if (errType === 'aborted') {
            if (!browserConversation.isSpeaking) {
                stopBrowserConversationLoop('aborted', true);
                setVoiceButtonUi('idle');
            }
            return;
        }

        if (errType === 'not-allowed') {
            setVoiceDebug(langCode === 'tr' ? 'Mikrofon izni yok. Text-diyalog baslatiliyor.' : 'Mikrofon-Berechtigung fehlt. Text-Dialog wird gestartet.', 'warn');
            setAylaStatus(langCode === 'tr' ? 'Ayla: mikrofona izin yok' : 'Ayla: Mikrofon blockiert', 'warn');
            stopBrowserConversationLoop('not_allowed', true);
            setVoiceButtonUi('idle');
            setTimeout(() => { runPromptConversationTurn(); }, 80);
            return;
        } else {
            setVoiceDebug(langCode === 'tr' ? 'Ses algılama hatası oluştu.' : 'Fehler bei der Spracheingabe.', 'error');
            setAylaStatus(langCode === 'tr' ? 'Ayla: dinleme hatası' : 'Ayla: Hörfehler', 'error');
        }

        stopBrowserConversationLoop(`rec_error_${errType}`);
        setVoiceButtonUi('idle');
    };

    rec.onend = () => {
        if (browserConversation.recognitionWatchdog) {
            clearTimeout(browserConversation.recognitionWatchdog);
            browserConversation.recognitionWatchdog = null;
        }
        if (browserConversation.pendingRestart) return;
        if (!browserConversation.active || browserConversation.isSpeaking) return;

        const elapsed = Date.now() - Number(browserConversation.listenStartedAt || 0);
        if (!browserConversation.heardAnyResult && elapsed < 8000) {
            const lc = getCurrentLangCode();
            setVoiceDebug(lc === 'tr' ? 'Ses girişi algılanmadı. Metin diyaloğuna geçiliyor.' : 'Keine Sprache erkannt. Wechsel in den In-Page-Dialog.', 'warn');
            setAylaStatus(lc === 'tr' ? 'Ayla: metin diyaloguna geçiyor' : 'Ayla: wechselt zu Textdialog', 'warn');
            stopBrowserConversationLoop('ended_without_result', true);
            setVoiceButtonUi('idle');
            runPromptConversationTurn();
            return;
        }

        stopBrowserConversationLoop('ended', true);
        setVoiceButtonUi('idle');
        setAylaStatus(langCode === 'tr' ? 'Ayla: bekliyor' : 'Ayla: wartet', 'info');
    };

    try {
        rec.start();
    } catch (err) {
        console.error('SpeechRecognition start error:', err);
        setVoiceDebug(langCode === 'tr' ? 'Mikrofon başlatılamadı. Metin diyalogu başlıyor.' : 'Mikrofon konnte nicht gestartet werden. Text-Dialog wird gestartet.', 'warn');
        setAylaStatus(langCode === 'tr' ? 'Ayla: Mikrofonstart fehlgeschlagen' : 'Ayla: Mikrofonstart fehlgeschlagen', 'warn');
        stopBrowserConversationLoop('recognition_start_exception', true);
        setVoiceButtonUi('idle');
        runPromptConversationTurn();
    }
}

// ── ROYALTY-FREE AMBIENT MUSIC (GENERATIVE) ──
const ambientMusicState = {
    ctx: null,
    master: null,
    lfo: null,
    htmlAudio: null,
    currentMusicUrl: "",
    playlistIndex: -1,
    useHtmlAudio: false,
    ducked: false,
    volumeTimer: null,
    voices: [],
    chordTimer: null,
    arpTimer: null,
    chordIndex: 0,
    arpIndex: 0,
    started: false,
    enabled: false,
    autoplayRequested: false,
    autoRetryTimer: null,
    autoRetryCount: 0,
    statusEl: null
};

function setAmbientStatus(text, level = 'info') {
    let el = ambientMusicState.statusEl || document.getElementById('ambient-music-status');
    if (!el) {
        el = document.createElement('div');
        el.id = 'ambient-music-status';
        el.style.position = 'fixed';
        el.style.left = '14px';
        el.style.bottom = '56px';
        el.style.zIndex = '9999';
        el.style.padding = '7px 10px';
        el.style.borderRadius = '10px';
        el.style.fontSize = '11px';
        el.style.lineHeight = '1.3';
        el.style.maxWidth = '260px';
        el.style.fontFamily = 'Montserrat, sans-serif';
        el.style.border = '1px solid rgba(212,175,55,0.32)';
        el.style.background = 'rgba(17,23,41,0.84)';
        el.style.color = '#f3e3b0';
        document.body.appendChild(el);
        ambientMusicState.statusEl = el;
    }

    const tone = {
        info: { bg: 'rgba(17,23,41,0.84)', fg: '#f3e3b0', bd: 'rgba(212,175,55,0.32)' },
        ok: { bg: 'rgba(9,43,29,0.88)', fg: '#b5f5cf', bd: 'rgba(80,206,146,0.45)' },
        warn: { bg: 'rgba(54,35,8,0.9)', fg: '#ffd98a', bd: 'rgba(224,170,37,0.45)' }
    }[level] || { bg: 'rgba(17,23,41,0.84)', fg: '#f3e3b0', bd: 'rgba(212,175,55,0.32)' };

    el.style.background = tone.bg;
    el.style.color = tone.fg;
    el.style.borderColor = tone.bd;
    el.textContent = String(text || '');
}

function ensureAmbientFileAudio() {
    const cfg = getRuntimeConfig();
    const list = (cfg.backgroundMusicPlaylist || []).filter(Boolean);
    if (ambientMusicState.playlistIndex < 0 && list.length) {
        ambientMusicState.playlistIndex = Math.floor(Math.random() * list.length);
    }
    const selectedUrl = (cfg.backgroundMusicLockPrimary
        ? (cfg.backgroundMusicUrl || list[0] || "")
        : (list.length ? list[Math.max(0, ambientMusicState.playlistIndex) % list.length] : cfg.backgroundMusicUrl)
    ) || "";
    if (!selectedUrl) return false;
    if (ambientMusicState.htmlAudio && ambientMusicState.currentMusicUrl === selectedUrl) return true;

    if (ambientMusicState.htmlAudio) {
        try { ambientMusicState.htmlAudio.pause(); } catch {}
        ambientMusicState.htmlAudio = null;
    }

    const audio = new Audio(selectedUrl);
    audio.loop = true;
    audio.autoplay = true;
    audio.preload = 'auto';
    audio.volume = Math.max(0, Math.min(1, Number(cfg.backgroundMusicVolume || 0.005)));
    audio.addEventListener('error', () => {
        ambientMusicState.useHtmlAudio = false;
        setAmbientStatus('Musikdatei nicht ladbar, Fallback aktiv', 'warn');
    });

    ambientMusicState.htmlAudio = audio;
    ambientMusicState.currentMusicUrl = selectedUrl;
    ambientMusicState.useHtmlAudio = true;
    if (cfg.backgroundMusicCredit) {
        setAmbientStatus(`Musikquelle: ${cfg.backgroundMusicCredit}`, 'info');
    }
    return true;
}

function getAmbientBaseVolume() {
    const cfg = getRuntimeConfig();
    const base = Math.max(0, Math.min(1, Number(cfg.backgroundMusicVolume || 0.005)));
    if (!cfg.nightModeMusicEnabled) return base;

    const hour = new Date().getHours();
    const start = Math.max(0, Math.min(23, Number(cfg.nightModeMusicStartHour || 22)));
    const end = Math.max(0, Math.min(23, Number(cfg.nightModeMusicEndHour || 8)));
    const multiplier = Math.max(0.2, Math.min(1, Number(cfg.nightModeMusicMultiplier || 0.58)));

    const inNightWindow = start > end
        ? (hour >= start || hour < end)
        : (hour >= start && hour < end);

    return inNightWindow ? (base * multiplier) : base;
}

function getAmbientEffectiveVolume() {
    const base = getAmbientBaseVolume();
    return ambientMusicState.ducked ? Math.max(0.01, base * 0.15) : base;
}

function fadeHtmlAudioVolume(target, durationMs = 700) {
    const audio = ambientMusicState.htmlAudio;
    if (!audio) return;
    const start = Number(audio.volume || 0);
    const end = Math.max(0, Math.min(1, Number(target || 0)));
    const t0 = Date.now();

    if (ambientMusicState.volumeTimer) {
        clearInterval(ambientMusicState.volumeTimer);
        ambientMusicState.volumeTimer = null;
    }

    ambientMusicState.volumeTimer = setInterval(() => {
        const t = Math.min(1, (Date.now() - t0) / Math.max(120, durationMs));
        audio.volume = start + (end - start) * t;
        if (t >= 1) {
            clearInterval(ambientMusicState.volumeTimer);
            ambientMusicState.volumeTimer = null;
        }
    }, 40);
}

function setAmbientDuck(duck) {
    ambientMusicState.ducked = Boolean(duck);

    if (ambientMusicState.useHtmlAudio && ambientMusicState.htmlAudio) {
        fadeHtmlAudioVolume(getAmbientEffectiveVolume(), duck ? 380 : 720);
        return;
    }

    if (ambientMusicState.started && ambientMusicState.master) {
        const now = ambientMusicState.ctx.currentTime;
        const target = ambientMusicState.enabled
            ? (ambientMusicState.ducked ? 0.03 : 0.08)
            : 0;
        ambientMusicState.master.gain.cancelScheduledValues(now);
        ambientMusicState.master.gain.linearRampToValueAtTime(target, now + (duck ? 0.35 : 0.8));
    }
}

function applyAmbientProfileNow() {
    if (!ambientMusicState.enabled) return;
    if (ambientMusicState.useHtmlAudio && ambientMusicState.htmlAudio) {
        fadeHtmlAudioVolume(getAmbientEffectiveVolume(), 500);
        return;
    }
    if (ambientMusicState.started && ambientMusicState.master) {
        const now = ambientMusicState.ctx.currentTime;
        const target = ambientMusicState.ducked ? Math.max(0.04, getAmbientBaseVolume() * 0.28) : getAmbientBaseVolume();
        ambientMusicState.master.gain.cancelScheduledValues(now);
        ambientMusicState.master.gain.linearRampToValueAtTime(target, now + 0.6);
    }
}

function ensureAmbientEngine() {
    if (ambientMusicState.started) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.value = 0.0;
    master.connect(ctx.destination);

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.045;
    lfoGain.gain.value = 2.0;

    // Hicaz Maqam Basis: D3, F#3, A3
    const freqs = [146.83, 185.00, 220.00];
    const voices = freqs.map((f, idx) => {
        const osc = ctx.createOscillator();
        const filt = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'triangle'; // Oud/Saz Klangfarbe
        osc.frequency.value = f;

        filt.type = 'lowpass';
        filt.frequency.value = 900;
        filt.Q.value = 1.8; // orientalische Resonanz

        gain.gain.value = 0.0;

        osc.connect(filt);
        filt.connect(gain);
        gain.connect(master);

        lfoGain.connect(osc.detune);

        osc.start();
        return { osc, gain };
    });

    lfo.connect(lfoGain);
    lfo.start();

    ambientMusicState.ctx = ctx;
    ambientMusicState.master = master;
    ambientMusicState.lfo = lfo;
    ambientMusicState.voices = voices;
    ambientMusicState.started = true;
}

function applyRomanticChord(step, glide = 3.8) {
    if (!ambientMusicState.started || !ambientMusicState.ctx) return;
    const ctx = ambientMusicState.ctx;
    // Hicaz Maqam Progression: D - Eb/F# - G - Bb (türkisch-orientalisch)
    const base = [
        [146.83, 185.00, 220.00],   // D3, F#3, A3  – Hicaz Grundton
        [155.56, 185.00, 233.08],   // Eb3, F#3, Bb3 – charakteristischer Hicaz-Spannungsklang
        [196.00, 246.94, 293.66],   // G3, B3, D4   – Auflösung
        [146.83, 196.00, 233.08]    // D3, G3, Bb3  – Rückführung
    ];
    const chord = base[step % base.length];
    const now = ctx.currentTime;

    ambientMusicState.voices.forEach((v, i) => {
        const freq = chord[i] || chord[chord.length - 1];
        v.osc.frequency.cancelScheduledValues(now);
        v.osc.frequency.linearRampToValueAtTime(freq, now + glide);
    });
}

function startRomanticProgression() {
    if (!ambientMusicState.started || ambientMusicState.chordTimer) return;
    ambientMusicState.chordIndex = 0;
    ambientMusicState.arpIndex = 0;
    applyRomanticChord(ambientMusicState.chordIndex, 1.2);
    ambientMusicState.chordTimer = setInterval(() => {
        ambientMusicState.chordIndex = (ambientMusicState.chordIndex + 1) % 4;
        applyRomanticChord(ambientMusicState.chordIndex, 8.5); // langsamer Übergang
    }, 14000); // 14s pro Akkord – orientalisch meditativ

    if (!ambientMusicState.arpTimer) {
        ambientMusicState.arpTimer = setInterval(() => {
            if (!ambientMusicState.started || !ambientMusicState.enabled) return;
            const step = ambientMusicState.arpIndex % 6;
            const emphasis = step === 0 || step === 3;
            const now = ambientMusicState.ctx.currentTime;
            ambientMusicState.voices.forEach((v, idx) => {
                const base = idx === 0 ? 0.05 : 0.035;
                const boost = (idx === (step % 3)) ? (emphasis ? 0.025 : 0.012) : 0;
                const tgt = ambientMusicState.enabled ? (base + boost) : 0;
                v.gain.gain.cancelScheduledValues(now);
                v.gain.gain.linearRampToValueAtTime(tgt, now + 1.4);
            });
            ambientMusicState.arpIndex += 1;
        }, 3400); // etwas langsamer für orientalischen Charakter
    }
}

function stopRomanticProgression() {
    if (ambientMusicState.chordTimer) {
        clearInterval(ambientMusicState.chordTimer);
        ambientMusicState.chordTimer = null;
    }
    if (ambientMusicState.arpTimer) {
        clearInterval(ambientMusicState.arpTimer);
        ambientMusicState.arpTimer = null;
    }
}

function setAmbientEnabled(enabled) {
    ambientMusicState.enabled = Boolean(enabled);

    // Primary path: real local music file.
    if (ensureAmbientFileAudio() && ambientMusicState.useHtmlAudio && ambientMusicState.htmlAudio) {
        const audio = ambientMusicState.htmlAudio;
        const baseVol = getAmbientBaseVolume();
        const effectiveVol = getAmbientEffectiveVolume();
        if (enabled) {
            audio.volume = 0;
            const p = audio.play();
            if (p && typeof p.then === 'function') {
                p.then(() => {
                    fadeHtmlAudioVolume(effectiveVol, 1100);
                    setAmbientStatus('Romantische internationale Musik: läuft', 'ok');
                })
                    .catch(() => setAmbientStatus('Musik: Browser wartet auf Interaktion', 'warn'));
            } else {
                fadeHtmlAudioVolume(effectiveVol, 1100);
                setAmbientStatus('Romantische internationale Musik: läuft', 'ok');
            }
        } else {
            fadeHtmlAudioVolume(0, 550);
            setTimeout(() => {
                try {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.volume = baseVol;
                } catch {}
            }, 620);
            setAmbientStatus('Musik: deaktiviert', 'info');
        }

        const btn = document.getElementById('ambient-music-toggle');
        if (btn) {
            btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
            btn.textContent = enabled ? 'Musik: AN' : 'Musik: AUS';
        }
        return;
    }

    // Fallback path: generated ambient.
    ensureAmbientEngine();
    if (!ambientMusicState.started) {
        setAmbientStatus('Musik: Audio-Engine nicht verfügbar', 'warn');
        return;
    }
    const ctx = ambientMusicState.ctx;
    if (ctx.state === 'suspended') {
        try { ctx.resume(); } catch {}
    }

    const now = ctx.currentTime;

    ambientMusicState.master.gain.cancelScheduledValues(now);
    ambientMusicState.master.gain.linearRampToValueAtTime(enabled ? 0.08 : 0.0, now + 1.8);

    ambientMusicState.voices.forEach((v, idx) => {
        const target = enabled ? (idx === 0 ? 0.05 : 0.035) : 0.0;
        v.gain.gain.cancelScheduledValues(now);
        v.gain.gain.linearRampToValueAtTime(target, now + 1.7 + idx * 0.2);
    });

    if (enabled) startRomanticProgression(); else stopRomanticProgression();

    const btn = document.getElementById('ambient-music-toggle');
    if (btn) {
        btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
        btn.textContent = enabled ? 'Musik: AN' : 'Musik: AUS';
    }

    if (!enabled) {
        setAmbientStatus('Musik: deaktiviert', 'info');
        return;
    }

    const running = Boolean(ctx && ctx.state === 'running');
    setAmbientStatus(running ? 'Romantische internationale Musik: läuft' : 'Romantische internationale Musik: Start wird angefordert ...', running ? 'ok' : 'warn');
}

function requestAmbientAutoplay() {
    ambientMusicState.autoplayRequested = true;
    setAmbientStatus('Musik: Autostart wird versucht ...', 'info');

    const attemptStart = () => {
        if (!ambientMusicState.autoplayRequested) return;
        setAmbientEnabled(true);

        const ctx = ambientMusicState.ctx;
        const isRunning = Boolean(ctx && ctx.state === 'running');
        if (isRunning) {
            ambientMusicState.autoRetryCount = 0;
            if (ambientMusicState.autoRetryTimer) {
                clearTimeout(ambientMusicState.autoRetryTimer);
                ambientMusicState.autoRetryTimer = null;
            }
            setAmbientStatus('Musik: läuft', 'ok');
            return;
        }

        if (ambientMusicState.autoRetryCount >= 40) {
            setAmbientStatus('Musik: vom Browser blockiert bis zur Interaktion', 'warn');
            return;
        }
        ambientMusicState.autoRetryCount += 1;
        if (ambientMusicState.autoRetryTimer) clearTimeout(ambientMusicState.autoRetryTimer);
        ambientMusicState.autoRetryTimer = setTimeout(attemptStart, 220);
    };

    attemptStart();
}

function initAmbientAutoplayHooks() {
    const unlock = () => {
        setAmbientEnabled(false);
    };
    document.addEventListener('pointerdown', unlock, { passive: true });
    document.addEventListener('touchstart', unlock, { passive: true });
    document.addEventListener('keydown', unlock, { passive: true });
    window.addEventListener('focus', unlock);
    window.addEventListener('pageshow', unlock);
    window.addEventListener('load', unlock);
}

function initAmbientMusicToggle() {
    if (document.getElementById('ambient-music-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'ambient-music-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = 'Musik: AUS';
    btn.style.position = 'fixed';
    btn.style.left = '14px';
    btn.style.bottom = '14px';
    btn.style.zIndex = '9999';
    btn.style.background = 'rgba(14,18,31,0.86)';
    btn.style.color = '#f5e7bc';
    btn.style.border = '1px solid rgba(212,175,55,0.5)';
    btn.style.borderRadius = '999px';
    btn.style.padding = '10px 14px';
    btn.style.fontSize = '12px';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => {
        if (ambientMusicState.ctx && ambientMusicState.ctx.state === 'suspended') {
            ambientMusicState.ctx.resume().catch(() => {});
        }
        setAmbientEnabled(!ambientMusicState.enabled);
    });
    document.body.appendChild(btn);
    setAmbientStatus('Musik: bereit', 'info');
}

function classifyElevenLabsError(err) {
    const msg = String(err?.message || err || '').toLowerCase();
    if (msg.includes('elevenlabs_api_key_missing')) return 'ElevenLabs API Key fehlt in __ARMADA_CONFIG.elevenLabsApiKey.';
    if (msg.includes('http_401') || msg.includes('http_403')) return 'ElevenLabs API Key ist ungueltig oder nicht berechtigt.';
    if (msg.includes('http_429')) return 'ElevenLabs Limit erreicht. Bitte spaeter erneut versuchen.';
    if (msg.includes('failed to fetch') || msg.includes('network')) return 'Netzwerkfehler zu ElevenLabs. Verbindung/CORS prüfen.';
    return 'ElevenLabs konnte Ayla nicht starten.';
}

window.startVoiceAgent = async function () {
    console.log('[Ayla] startVoiceAgent called, inFlight:', voiceStartInFlight);
    voiceStartInFlight = false; // always reset
    const cfgDirect = getRuntimeConfig();
    const assistantCfg = getAssistantLangConfig();
    const preferInPageDialog = cfgDirect.preferInPageAylaDialog !== false;

    // Fast path: Chat panel mode – open immediately, never block on TTS
    if (preferInPageDialog) {
        console.log('[Ayla] Opening chat panel...');
        browserConversation.sessionOpen = true;
        browserConversation.promptDialogOpen = false;
        setVoiceButtonUi('idle');
        setAylaStatus(getCurrentLangCode() === 'tr' ? 'Ayla: diyalog aktif' : 'Ayla: Dialog aktiv', 'ok');
        runPromptConversationTurn();
        trackEvent('voice_agent_chat_panel_start');
        return;
    }

    // Non-dialog mode (voice-only): greet then listen.
    try {
    if (!browserConversation.sessionOpen) {
        if (cfgDirect.elevenLabsApiKey) {
            try {
                setVoiceButtonUi('loading');
                setVoiceDebug('Ayla begrüßt Sie ...', 'info');
                await speakWithElevenLabs(assistantCfg.greeting);
                browserConversation.sessionOpen = true;
                setVoiceButtonUi('listening');
                setVoiceDebug(getCurrentLangCode() === 'tr' ? 'Ayla sizi dinliyor. Konuşun...' : 'Ayla hört zu. Bitte sprechen ...', 'info');
                startBrowserConversationLoop();
                trackEvent('voice_agent_elevenlabs_start');
                return;
            } catch (err) {
                const reason = classifyElevenLabsError(err);
                setVoiceDebug(reason, 'error');
                trackEvent('voice_agent_elevenlabs_failed', { message: String(err?.message || err || 'unknown') });
                console.error('ElevenLabs start error:', err);
            }
        }

        try {
            setVoiceButtonUi('loading');
            setVoiceDebug('Ayla begrüßt Sie ...', 'info');
            await speakWithBrowserTTS(assistantCfg.greeting);
            browserConversation.sessionOpen = true;
            setVoiceButtonUi('listening');
            setVoiceDebug(getCurrentLangCode() === 'tr' ? 'Ayla sizi dinliyor. Konuşun...' : 'Ayla hört zu. Bitte sprechen ...', 'info');
            startBrowserConversationLoop();
            trackEvent('voice_agent_browser_tts_start');
            return;
        } catch (err) {
            trackEvent('voice_agent_browser_tts_failed', { message: String(err?.message || err || 'unknown') });
            console.error('Browser TTS start error:', err);
        }
    }

    setVoiceButtonUi('listening');
    setVoiceDebug(getCurrentLangCode() === 'tr' ? 'Ayla sizi dinliyor. Konuşun...' : 'Ayla hört zu. Bitte sprechen ...', 'info');
    startBrowserConversationLoop();
    trackEvent('voice_agent_local_turn_start');
    return;
    } finally {
        voiceStartInFlight = false;
    }
};

// ── BOOKING FORM (WEBHOOK) ──
const WEBHOOK_URL = "WEBHOOK_URL_HIER";

window.handleBooking = async function (e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const eventType = document.getElementById('form-event').value;
    const date = document.getElementById('form-date').value.trim();
    const guests = document.getElementById('form-guests').value.trim();
    const lang = document.querySelector('.lang-btn.active')?.innerText || 'DE';
    const status = document.getElementById('form-status');
    const runtimeConfig = getRuntimeConfig();
    const webhookUrl = runtimeConfig.webhookUrl || WEBHOOK_URL;
    const waApiKey = runtimeConfig.whatsappApiKey || "WHATSAPP_API_KEY";

    if (!name || !phone || !eventType) {
        status.style.display = 'block';
        status.style.color = '#FFB300';
        status.innerText = {
            de: 'Bitte ergänzen Sie Name, Telefonnummer und Art der Veranstaltung, damit wir Ihre Anfrage priorisiert bearbeiten können.',
            en: 'Please add your name, phone number, and event type so we can prioritize your request.',
            tr: 'Talebinizi öncelikli işleyebilmemiz için lütfen ad, telefon numarası ve etkinlik türünü girin.',
            ar: 'يرجى إدخال الاسم ورقم الهاتف ونوع المناسبة حتى نتمكن من معالجة طلبكم بأولوية.',
            fa: 'لطفا نام، شماره تماس و نوع رویداد را وارد کنید تا درخواست شما با اولویت بررسی شود.'
        }[getCurrentLangCode()] || 'Bitte Name, Telefonnummer und Art der Veranstaltung ausfüllen.';
        trackEvent('lead_submit_validation_error');
        return;
    }

    status.style.display = 'block';
    status.style.color = 'var(--gold)';
    status.innerText = {
        de: 'Ihre Anfrage wird übermittelt ...',
        en: 'Your request is being submitted ...',
        tr: 'Talebiniz iletiliyor ...',
        ar: 'يتم الآن إرسال طلبكم ...',
        fa: 'درخواست شما در حال ارسال است ...'
    }[getCurrentLangCode()] || 'Ihre Anfrage wird übermittelt ...';
    if (submitBtn) submitBtn.disabled = true;

    const payload = {
        name,
        email,
        phone,
        eventType,
        date,
        guests,
        lang,
        timestamp: new Date().toISOString(),
        source: 'website'
    };

    let webhookSent = false;
    let whatsappSent = false;

    try {
        if (webhookUrl && webhookUrl !== "WEBHOOK_URL_HIER") {
            const webhookRes = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            webhookSent = webhookRes.ok;
        }

        const WA_PHONE = "4917610019618";
        const cleanPhone = normalizePhone(phone);
        const waMsgRaw = `NEUE ANFRAGE\nName: ${name}\nE-Mail: ${email || '-'}\nTelefon: ${cleanPhone}\nEvent: ${eventType}\nWunschtermin: ${date || '-'}\nGaeste: ${guests || '-'}\nSprache: ${lang}`;

        if (waApiKey && waApiKey !== "WHATSAPP_API_KEY") {
            const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${WA_PHONE}&text=${encodeText(waMsgRaw)}&apikey=${waApiKey}`;
            await fetch(waUrl, { mode: 'no-cors' });
            whatsappSent = true;
        }

        if (webhookSent || whatsappSent) {
            status.style.color = '#4CAF50';
            status.innerText = {
                de: '✓ Vielen Dank. Ihre Anfrage ist erfolgreich eingegangen. Unser Team meldet sich zeitnah mit den nächsten Schritten.',
                en: '✓ Thank you. Your request has been received successfully. Our team will contact you shortly with the next steps.',
                tr: '✓ Teşekkür ederiz. Talebiniz başarıyla alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecektir.',
                ar: '✓ شكرًا لكم. تم استلام طلبكم بنجاح، وسيتواصل فريقنا معكم قريبًا بالخطوات التالية.',
                fa: '✓ سپاسگزاریم. درخواست شما با موفقیت دریافت شد و تیم ما به‌زودی برای هماهنگی مراحل بعدی با شما تماس می‌گیرد.'
            }[getCurrentLangCode()] || '✓ Erfolgreich gesendet! Wir melden uns in Kürze.';
            trackEvent('lead_submit_success', { channel: webhookSent ? 'webhook' : 'whatsapp' });
            e.target.reset();
            setTimeout(() => { status.style.display = 'none'; }, 5000);
            return;
        }

        const fallbackContent = {
            de: {
                subject: 'Premium-Anfrage Armada Eventsaal',
                body: `Hallo, ich möchte eine Veranstaltung anfragen.\nName: ${name}\nTelefon: ${cleanPhone}\nEvent: ${eventType}\nWunschtermin: ${date || '-'}\nGäste: ${guests || '-'}`
            },
            en: {
                subject: 'Premium Inquiry Armada Eventsaal',
                body: `Hello, I would like to request an event consultation.\nName: ${name}\nPhone: ${cleanPhone}\nEvent: ${eventType}\nPreferred date: ${date || '-'}\nGuests: ${guests || '-'}`
            },
            tr: {
                subject: 'Armada Eventsaal Premium Talep',
                body: `Merhaba, etkinlik danışmanlığı için talep oluşturmak istiyorum.\nAd: ${name}\nTelefon: ${cleanPhone}\nEtkinlik: ${eventType}\nTercih edilen tarih: ${date || '-'}\nMisafir sayısı: ${guests || '-'}`
            },
            ar: {
                subject: 'طلب مميز - Armada Eventsaal',
                body: `مرحبًا، أرغب في طلب استشارة لتنظيم مناسبة.\nالاسم: ${name}\nالهاتف: ${cleanPhone}\nنوع المناسبة: ${eventType}\nالتاريخ المفضل: ${date || '-'}\nعدد الضيوف: ${guests || '-'}`
            },
            fa: {
                subject: 'درخواست ویژه Armada Eventsaal',
                body: `سلام، مایل هستم برای برگزاری مراسم مشاوره دریافت کنم.\nنام: ${name}\nتلفن: ${cleanPhone}\nنوع رویداد: ${eventType}\nتاریخ موردنظر: ${date || '-'}\nتعداد مهمان: ${guests || '-'}`
            }
        };
        const fallbackLang = fallbackContent[getCurrentLangCode()] || fallbackContent.de;
        const fallbackText = fallbackLang.body;
        const fallbackWa = `https://wa.me/4917610019618?text=${encodeText(fallbackText)}`;
        const fallbackMail = `mailto:info@armada-events.de?subject=${encodeText(fallbackLang.subject)}&body=${encodeText(fallbackText)}`;

        status.style.color = '#FFB300';
        status.innerText = {
            de: 'Ihre Anfrage ist vorbereitet. Bitte bestätigen Sie diese jetzt kurz per WhatsApp oder E-Mail.',
            en: 'Your request is prepared. Please confirm it now via WhatsApp or email.',
            tr: 'Talebiniz hazırlandı. Lütfen şimdi WhatsApp veya e-posta ile kısa bir onay gönderin.',
            ar: 'تم تجهيز طلبكم. يرجى تأكيده الآن بسرعة عبر واتساب أو البريد الإلكتروني.',
            fa: 'درخواست شما آماده شد. لطفا اکنون آن را از طریق واتساپ یا ایمیل تایید کنید.'
        }[getCurrentLangCode()] || 'Anfrage vorbereitet: Bitte per WhatsApp oder E-Mail kurz absenden.';
        trackEvent('lead_submit_fallback');
        window.open(fallbackWa, '_blank', 'noopener');
        setTimeout(() => { window.location.href = fallbackMail; }, 500);

        e.target.reset();
        setTimeout(() => { status.style.display = 'none'; }, 9000);
    } catch (error) {
        status.style.color = "#FF5252";
        status.innerText = {
            de: 'Bei der Übermittlung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder nutzen Sie direkt WhatsApp.',
            en: 'A transmission error occurred. Please try again or contact us directly via WhatsApp.',
            tr: 'Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin veya doğrudan WhatsApp üzerinden bize ulaşın.',
            ar: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر واتساب.',
            fa: 'در هنگام ارسال خطایی رخ داد. لطفا دوباره تلاش کنید یا مستقیم از طریق واتساپ با ما در ارتباط باشید.'
        }[getCurrentLangCode()] || 'Fehler beim Senden. Bitte erneut versuchen oder WhatsApp nutzen.';
        trackEvent('lead_submit_error', { message: String(error?.message || error) });
    } finally {
        if (submitBtn) submitBtn.disabled = false;
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
    const dir = (lang === 'ar' || lang === 'fa') ? 'rtl' : 'ltr';
    document.body.style.direction = dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    applyStaticTranslations(lang);
    applySeoTranslations(lang);
    applySeoLinks(lang);
    setVoiceButtonUi(browserConversation.active ? 'listening' : 'idle');
    // ElevenLabs Widget Sprache aktualisieren
    var widget = document.querySelector('elevenlabs-convai');
    if(widget){
        widget.setAttribute('language', lang);
    }
    localStorage.setItem('armada_lang', lang);
    trackEvent('language_switch', { lang });
};

function initLanguageFromUrlOrStorage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    const saved = localStorage.getItem('armada_lang');
    const defaultLang = (fromUrl || saved || 'de').toLowerCase();
    if (translations[defaultLang]) switchLang(defaultLang);
}

// ── SLIDESHOW ──
function runSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    let current = 0;
    slides.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
    slides[current].classList.remove('active');
    slides[(current + 1) % slides.length].classList.add('active');
}

// ── SCROLL ANIMATIONS ──
function initAnimations() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('aos-animate'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));
}

// ── HAMBURGER ──
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('nav-links');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { btn.classList.remove('open'); nav.classList.remove('open'); }); });
}

// ── NAVBAR SCROLL ──
function initNavScroll() {
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 80); }, { passive: true });
}

// ── ACTIVE NAV ──
function initActiveNav() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id'); });
        navLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + current); });
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
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeLB() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    images.forEach((img, i) => { img.closest('.gal-item').addEventListener('click', () => openLB(i)); });
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

// ── REVIEWS SCROLL ──
function initReviewsScroll() {
    const inner = document.getElementById('reviews-inner');
    if (!inner) return;
    inner.innerHTML = inner.innerHTML + inner.innerHTML;
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
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}

// ── LEGAL MODALS ──
window.openModal = function (type) {
    const modal = document.getElementById('legal-modal');
    const text = document.getElementById('legal-text');
    const lang = getCurrentLangCode();
    if (type === 'impressum') {
        const map = {
            de: '<h3 style="margin-bottom:20px;">Impressum</h3><p><strong>Betreiber:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p><p style="margin-top:15px;"><strong>Kontakt:</strong><br>Mobil: 0176 – 100 19 618<br>E-Mail: info@armada-events.de</p><p style="margin-top:15px;"><strong>Umsatzsteuer:</strong><br>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG wird bei Vorliegen nachgetragen.</p><p style="margin-top:15px;"><strong>Verantwortlich für den Inhalt gem. § 55 Abs. 2 RStV:</strong><br>Irfan Gündoğan</p><p style="margin-top:15px;"><strong>EU-Streitschlichtung:</strong><br>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener" style="color:#d4af37;">https://ec.europa.eu/consumers/odr/</a><br>Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p><p style="margin-top:15px;opacity:.85;">Für individuelle Eventanfragen steht Ihnen unser Team jederzeit persönlich zur Verfügung.</p>',
            en: '<h3 style="margin-bottom:20px;">Legal Notice</h3><p><strong>Operator:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p><p style="margin-top:15px;"><strong>Contact:</strong><br>Mobile: 0176 – 100 19 618<br>Email: info@armada-events.de</p><p style="margin-top:15px;opacity:.85;">For bespoke event inquiries, our team is always available to assist you personally.</p>',
            tr: '<h3 style="margin-bottom:20px;">Yasal Bilgi</h3><p><strong>İşletmeci:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p><p style="margin-top:15px;"><strong>İletişim:</strong><br>Mobil: 0176 – 100 19 618<br>E-posta: info@armada-events.de</p><p style="margin-top:15px;opacity:.85;">Size özel etkinlik talepleriniz için ekibimiz her zaman memnuniyetle destek olur.</p>',
            ar: '<h3 style="margin-bottom:20px;">بيانات قانونية</h3><p><strong>المشغل:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p><p style="margin-top:15px;"><strong>التواصل:</strong><br>0176 – 100 19 618<br>info@armada-events.de</p><p style="margin-top:15px;opacity:.85;">يسعد فريقنا بخدمتكم شخصيًا في جميع الطلبات الخاصة والمميزة.</p>',
            fa: '<h3 style="margin-bottom:20px;">اطلاعات حقوقی</h3><p><strong>مسئول:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p><p style="margin-top:15px;"><strong>تماس:</strong><br>0176 – 100 19 618<br>info@armada-events.de</p><p style="margin-top:15px;opacity:.85;">برای درخواست‌های اختصاصی مراسم، تیم ما همیشه با افتخار در کنار شماست.</p>'
        };
        text.innerHTML = map[lang] || map.de;
    } else {
        const map = {
            de: '<h3 style="margin-bottom:20px;">Datenschutzerklärung</h3><p><strong>1. Verantwortlicher</strong><br>Irfan Gündoğan, Gründgensstrasse 26, 22309 Hamburg<br>E-Mail: info@armada-events.de</p><p style="margin-top:15px;"><strong>2. Erhebung personenbezogener Daten</strong><br>Beim Besuch unserer Website werden automatisch technische Daten (IP-Adresse, Browsertyp, Zugriffszeitpunkt) durch unseren Hosting-Anbieter Netlify Inc. erfasst. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p><p style="margin-top:15px;"><strong>3. Kontaktformular</strong><br>Ihre Angaben aus dem Kontaktformular werden über Formspree (Formspree Inc., USA) an uns übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.</p><p style="margin-top:15px;"><strong>4. Terminbuchung</strong><br>Für Terminbuchungen nutzen wir Calendly (Calendly LLC, USA). Bei Nutzung gelten die <a href="https://calendly.com/privacy" target="_blank" rel="noopener" style="color:#d4af37;">Datenschutzbestimmungen von Calendly</a>.</p><p style="margin-top:15px;"><strong>5. Sprachassistent</strong><br>Unser KI-Sprachassistent wird über ElevenLabs Inc. (USA) betrieben. Sprachdaten werden nur zur Echtzeitverarbeitung genutzt und nicht dauerhaft gespeichert.</p><p style="margin-top:15px;"><strong>6. Cookies & Local Storage</strong><br>Wir verwenden sessionStorage zur Vermeidung doppelter Benachrichtigungen sowie localStorage für Ihre Cookie-Einstellungen. Tracking-Cookies werden nicht eingesetzt.</p><p style="margin-top:15px;"><strong>7. Ihre Rechte</strong><br>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Kontakt: info@armada-events.de</p><p style="margin-top:15px;"><strong>8. Aufsichtsbehörde</strong><br>Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit.</p>',
            en: '<h3 style="margin-bottom:20px;">Privacy Policy</h3><p>Protecting your personal data is a top priority for us. Information submitted via the contact form is used solely to process your request.</p><p style="margin-top:15px;">Your data is transmitted securely via encrypted channels and is not shared with unauthorized third parties.</p><p style="margin-top:15px;">For data inquiries, corrections, or deletion requests, please contact: info@armada-events.de</p>',
            tr: '<h3 style="margin-bottom:20px;">Gizlilik Politikası</h3><p>Kişisel verilerinizin korunması bizim için en yüksek önceliktir. Form üzerinden paylaştığınız bilgiler yalnızca talebinizi işlemek amacıyla kullanılır.</p><p style="margin-top:15px;">Verileriniz şifreli bağlantı üzerinden güvenle iletilir ve yetkisiz üçüncü kişilerle paylaşılmaz.</p><p style="margin-top:15px;">Veri talepleriniz için: info@armada-events.de</p>',
            ar: '<h3 style="margin-bottom:20px;">سياسة الخصوصية</h3><p>حماية بياناتكم الشخصية تمثل أولوية قصوى لدينا. يتم استخدام المعلومات المرسلة عبر النموذج فقط لمعالجة طلبكم.</p><p style="margin-top:15px;">يتم نقل البيانات عبر قنوات مشفرة بشكل آمن ولا تتم مشاركتها مع أي جهة غير مخولة.</p><p style="margin-top:15px;">للاستفسارات المتعلقة بالبيانات: info@armada-events.de</p>',
            fa: '<h3 style="margin-bottom:20px;">حریم خصوصی</h3><p>حفاظت از داده‌های شخصی شما برای ما بالاترین اولویت است. اطلاعات ثبت‌شده در فرم فقط برای رسیدگی به درخواست شما استفاده می‌شود.</p><p style="margin-top:15px;">داده‌های شما از طریق ارتباط رمزگذاری‌شده منتقل می‌شود و در اختیار اشخاص غیرمجاز قرار نمی‌گیرد.</p><p style="margin-top:15px;">برای درخواست‌های مربوط به داده‌ها: info@armada-events.de</p>'
        };
        text.innerHTML = map[lang] || map.de;
    }
    modal.classList.add('active');
};

window.closeModal = function () {
    document.getElementById('legal-modal').classList.remove('active');
};

// ── GOOGLE MAPS — load on click ──
window.loadMap = function () {
    const container = document.getElementById('map-placeholder');
    if (!container || container.dataset.loaded) return;
    container.dataset.loaded = 'true';
    container.style.cursor = 'default';
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.5!2d10.053!3d53.614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGr%C3%BCndgensstrasse+26%2C+22309+Hamburg!5e0!3m2!1sde!2sde!4v1" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="ARMADA Eventsaal Standort" style="width:100%;height:100%;border:0;filter:saturate(0.7) brightness(0.85);"></iframe>';
};

function initMapKeyboardAccess() {
    const map = document.getElementById('map-placeholder');
    if (!map) return;
    map.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.loadMap();
        }
    });
}

// ══════════════════════════════════════════════════
// ██ ELEGANT CONNECTING FORMS BACKGROUND ██
// ══════════════════════════════════════════════════
function initParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, nodes = [], mouse = { x: -1000, y: -1000 };

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    // ── VISIBLE 3D NETWORK — more nodes, longer connections, higher opacity ──
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const COUNT = isMobile ? 40 : Math.min(120, Math.floor(window.innerWidth / 12));
    const CONNECT_DIST = 280;
    const MOUSE_RADIUS = 250;

    for (let i = 0; i < COUNT; i++) {
        nodes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 2 + 0.8,
            gold: 0.3 + Math.random() * 0.7
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < nodes.length; i++) {
            const p = nodes[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Gold dots — clearly visible
            const g = Math.floor(155 + p.gold * 60);
            const r = Math.floor(190 + p.gold * 50);
            const b = Math.floor(30 + p.gold * 30);
            const dotAlpha = dist < MOUSE_RADIUS ? 0.8 : 0.35;
            const dotSize = dist < MOUSE_RADIUS ? p.r * 1.5 : p.r;

            ctx.beginPath();
            ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${dotAlpha})`;
            ctx.fill();

            // Glow around dots near mouse
            if (dist < MOUSE_RADIUS) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, dotSize + 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212,175,55,0.08)`;
                ctx.fill();
            }

            // ── CONNECTING LINES — clearly visible network ──
            for (let j = i + 1; j < nodes.length; j++) {
                const p2 = nodes[j];
                const dx2 = p.x - p2.x;
                const dy2 = p.y - p2.y;
                const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                if (d < CONNECT_DIST) {
                    // Base alpha much higher: 0.25 for close lines
                    const lineAlpha = 0.25 * (1 - d / CONNECT_DIST);

                    // Mouse near midpoint → strong highlight
                    const mx = (p.x + p2.x) / 2;
                    const my = (p.y + p2.y) / 2;
                    const mouseDist = Math.sqrt((mouse.x - mx) ** 2 + (mouse.y - my) ** 2);
                    const highlight = mouseDist < 200 ? 3 : 1;

                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(212,175,55,${Math.min(lineAlpha * highlight, 0.7)})`;
                    ctx.lineWidth = highlight > 1 ? 1.2 : 0.6;
                    ctx.stroke();
                }
            }

            // Mouse interaction — nodes gently attracted
            if (dist < MOUSE_RADIUS && dist > 10) {
                p.vx += dx / dist * 0.015;
                p.vy += dy / dist * 0.015;
            }
            p.vx *= 0.985;
            p.vy *= 0.985;
        }

        requestAnimationFrame(draw);
    }
    draw();
}

// ── SERVICE TABS ──
function initServiceTabs() {
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.service-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panel = document.getElementById(tab.dataset.tab);
            if (panel) panel.classList.add('active');
        });
    });
}

// ── FAQ AKKORDEON ──
window.toggleFaq = function (btn) {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    // alle schließen
    document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        const q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
    });
    // dieses öffnen wenn es nicht offen war
    if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
    }
};

// ── FORM TOGGLE ──
window.toggleForm = function () {
    const form = document.getElementById('bookingForm');
    const btn = document.querySelector('.form-toggle-btn');
    if (!form) return;
    const hidden = form.classList.toggle('form-hidden');
    if (btn) btn.setAttribute('aria-expanded', hidden ? 'false' : 'true');
    const lang = getCurrentLangCode();
    const labels = staticTranslations[lang] || staticTranslations.de;
    if (btn) {
        btn.innerHTML = hidden
            ? `<i class="fas fa-calendar-check"></i> ${labels.formToggleOpen}`
            : `<i class="fas fa-times"></i> ${labels.formToggleClose}`;
    }
    if (!hidden) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function runTranslationQaReport() {
    const langs = ['de', 'en', 'tr', 'ar', 'fa'];
    const base = 'de';
    const summary = Object.fromEntries(langs.map((lang) => [lang, { issues: 0, notes: [] }]));

    const collectMissingKeys = (source, sourceName) => {
        const baseKeys = Object.keys(source[base] || {});
        const findings = [];
        langs.forEach((lang) => {
            if (lang === base) return;
            const keys = Object.keys(source[lang] || {});
            const missing = baseKeys.filter((k) => !keys.includes(k));
            if (missing.length) {
                findings.push({ lang, missing });
                summary[lang].issues += missing.length;
                summary[lang].notes.push(`${sourceName}: ${missing.length} missing key(s)`);
            }
        });
        if (findings.length) {
            console.warn(`[i18n-qa] Missing keys in ${sourceName}:`, findings);
        }
    };

    const collectArrayMismatches = () => {
        const findings = [];
        langs.forEach((lang) => {
            const baseStatic = staticTranslations[base] || {};
            const testStatic = staticTranslations[lang] || {};
            Object.keys(baseStatic).forEach((key) => {
                if (!Array.isArray(baseStatic[key])) return;
                if (!Array.isArray(testStatic[key])) {
                    findings.push({ lang, key, issue: 'not-an-array' });
                    summary[lang].issues += 1;
                    summary[lang].notes.push(`staticTranslations.${key}: not an array`);
                    return;
                }
                if (testStatic[key].length !== baseStatic[key].length) {
                    findings.push({
                        lang,
                        key,
                        issue: 'length-mismatch',
                        expected: baseStatic[key].length,
                        actual: testStatic[key].length
                    });
                    summary[lang].issues += 1;
                    summary[lang].notes.push(`staticTranslations.${key}: length ${testStatic[key].length}/${baseStatic[key].length}`);
                }
            });
        });
        if (findings.length) {
            console.warn('[i18n-qa] Array mismatches in staticTranslations:', findings);
        }
    };

    collectMissingKeys(translations, 'translations');
    collectMissingKeys(staticTranslations, 'staticTranslations');
    collectMissingKeys(seoTranslations, 'seoTranslations');
    collectArrayMismatches();

    const table = langs.map((lang) => ({
        lang,
        status: summary[lang].issues === 0 ? 'OK' : 'ISSUES',
        issues: summary[lang].issues,
        details: summary[lang].notes.join(' | ') || 'All checks passed'
    }));
    console.table(table);
}

// ── STATS STRIP COUNTER ANIMATION ──
function initStatsStripCounters() {
    const nums = document.querySelectorAll('.stats-strip-num[data-target]');
    if (!nums.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (el.dataset.counted) return;
            el.dataset.counted = '1';
            const duration = 1800;
            const start = performance.now();
            function tick(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased);
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.3 });
    nums.forEach(n => observer.observe(n));
}

// ── AYLA TOOLTIP ──
function initAylaTooltip(){ return; /* DEAKTIVIERT */ } function _old_initAylaTooltip() {
    const btn = document.getElementById('vapi-btn');
    if (!btn) return;
    const tip = document.createElement('span');
    tip.className = 'ayla-tooltip';
    tip.textContent = 'Fragen? Ayla hilft sofort!';
    btn.style.position = 'relative';
    btn.appendChild(tip);
    // Show tooltip after 4s, hide after 8s, repeat every 30s
    function flashTooltip() {
        tip.classList.add('show');
        setTimeout(() => tip.classList.remove('show'), 4000);
    }
    setTimeout(flashTooltip, 4000);
    setInterval(flashTooltip, 30000);
}

// ── MOBILE CTA BAR ──
function initMobileCTABar() {
    const bar = document.getElementById('mobile-cta-bar');
    if (!bar) return;

    const aylaCtaBtn = bar.querySelector('#mobile-cta-ayla');
    if (aylaCtaBtn) {
        aylaCtaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
            if (isMobile) {
                window.location.href = 'tel:+4917610019618';
                return;
            }

            const number = '+49 176 100 19 618';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(number).catch(() => {});
            }
            alert('Rufnummer: ' + number + '\n(auf Mobilgeraet startet Anrufen direkt)');
        });
    }

    const aylaTextBtn = bar.querySelector('#mobile-cta-ayla-text');
    if (aylaTextBtn) {
        aylaTextBtn.addEventListener('click', (e) => {
            openAylaTextMode(e);
        });
    }

    // Hide mobile bar when at the very top of page, show after scrolling
    let lastScroll = 0;
    function checkScroll() {
        const y = window.scrollY || window.pageYOffset;
        if (y > 300) {
            bar.style.transform = 'translateY(0)';
        } else {
            bar.style.transform = 'translateY(100%)';
        }
        lastScroll = y;
    }
    bar.style.transition = 'transform 0.35s ease';
    bar.style.transform = 'translateY(100%)';
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
}

// ── ELEVENLABS WIDGET LANGUAGE ──
const widgetTranslations = {
    de: { label: 'Ayla Live-Beratung', needHelp: 'Brauchen Sie Hilfe?', startCall: 'Anruf starten' },
    tr: { label: 'Ayla Canli Danismanlik', needHelp: 'Yardima ihtiyaciniz var mi?', startCall: 'Aramayi baslat' },
    ar: { label: '\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0639 \u0622\u064A\u0644\u0627', needHelp: '\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0645\u0633\u0627\u0639\u062F\u0629\u061F', startCall: '\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0643\u0627\u0644\u0645\u0629' },
    en: { label: 'Ayla Live Consultation', needHelp: 'Need help?', startCall: 'Start a call' },
    fa: { label: '\u0645\u0634\u0627\u0648\u0631\u0647 \u0632\u0646\u062F\u0647 \u0628\u0627 \u0622\u06CC\u0644\u0627', needHelp: '\u06A9\u0645\u06A9 \u0644\u0627\u0632\u0645 \u062F\u0627\u0631\u06CC\u062F\u061F', startCall: '\u0634\u0631\u0648\u0639 \u062A\u0645\u0627\u0633' }
};

function updateWidgetLanguage() {
    const lang = getCurrentLangCode();
    const t = widgetTranslations[lang] || widgetTranslations.de;
    const label = document.querySelector('.ayla-call-label-text');
    if (label) label.textContent = t.label;
}

function patchWidgetTexts() {
    const widget = document.querySelector('elevenlabs-convai');
    if (!widget || !widget.shadowRoot) return false;
    const lang = getCurrentLangCode();
    const t = widgetTranslations[lang] || widgetTranslations.de;
    let patched = false;
    widget.shadowRoot.querySelectorAll('button, span, p, div').forEach(el => {
        if (el.children.length > 2) return;
        const txt = (el.textContent || '').trim();
        if (!txt || txt.length > 40) return;
        if (/Live-Beratung|Consultation|Danismanlik|مشاوره|استشارة/i.test(txt) || txt === 'Ayla Live-Beratung' || txt === 'Need help?') {
            el.textContent = t.label; patched = true;
        }
        if (/Anruf starten|Start a call|Aramayi baslat|ابدأ المكالمة|شروع تماس/i.test(txt)) {
            el.textContent = t.startCall; patched = true;
        }
    });
    return patched;
}

function reloadWidgetWithLanguage() {
    const lang = getCurrentLangCode();
    const langMap = { de: 'de', tr: 'tr', ar: 'ar', en: 'en', fa: 'ko' };
    const elLang = langMap[lang] || 'de';

    const old = document.querySelector('elevenlabs-convai');
    if (!old) return;
    const parent = old.parentNode;
    old.remove();

    const fresh = document.createElement('elevenlabs-convai');
    fresh.setAttribute('agent-id', 'agent_0001khww3y6pe0d9chhs6a00n8et');
    fresh.setAttribute('language', elLang);
    parent.appendChild(fresh);

    // Patch texts once widget renders
    let tries = 0;
    const iv = setInterval(() => {
        tries++;
        if (patchWidgetTexts() || tries > 30) clearInterval(iv);
    }, 300);
}

function initAylaCallButton() {
    updateWidgetLanguage();

    // Musik wieder einblenden wenn Ayla-Gespräch endet
    document.addEventListener('elevenlabs-convai:call_ended', () => {
        aylaVoiceActive = false;
        setAmbientDuck(false);
        setVoiceButtonUi('idle');
    });
    document.addEventListener('elevenlabs-convai:call_started', () => {
        aylaVoiceActive = true;
        setAmbientDuck(true);
    });
    // Patch default widget texts after load
    let tries = 0;
    const iv = setInterval(() => {
        tries++;
        if (patchWidgetTexts() || tries > 30) clearInterval(iv);
    }, 500);

    document.addEventListener('click', (e) => {
        if (e.target.closest('.lang-btn')) {
            setTimeout(() => {
                updateWidgetLanguage();
                reloadWidgetWithLanguage();
            }, 400);
        }
    });
}

function ensureVisibleCallButton(){ return; /* DEAKTIVIERT - ElevenLabs Widget uebernimmt */ } function _old_ensureVisibleCallButton() {
    /* Button wird nicht mehr dynamisch erstellt - ElevenLabs Widget übernimmt */
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
    preloadBrowserVoices();
    runTranslationQaReport();
    applyServiceImageVariant();
    initLanguageFromUrlOrStorage();
    initParticles();
    initAnimations();
    initHamburger();
    initNavScroll();
    initActiveNav();
    initLightbox();
    initReviewsScroll();
    initCounters();
    initSmoothScroll();
    initServiceTabs();
    initMapKeyboardAccess();
    initAylaStatusIndicator();
    initStatsStripCounters();
    initAylaTooltip();
    initMobileCTABar();

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => trackEvent('cta_whatsapp_click'));
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', () => trackEvent('cta_mail_click'));
    });

    setInterval(runSlideshow, 5000);
});
