/**
 * META IT ACADEMY - ANDIJON (LENINSKIY KO'CHASI)
 * Blue & White + Google Accents Edition
 * All Courses: 500 000 UZS / oy, Robotics, Team & Map
 */

// ==========================================
// 1. DATASETS (Courses, Robototexnika & Team)
// ==========================================

const COURSES = [
  {
    id: "robotics",
    title: "Robototexnika, Arduino & IoT",
    category: "robotics",
    categoryName: "Robototexnika",
    duration: "6 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Amaliyotchi gacha",
    salaryRange: "$500 — $1,600/oy",
    grantAvailable: true,
    summary: "Arduino, ESP32 mikrokontrollerlar, aqlli uy tizimlari (Smart Home), sensorlar, motorlar va robotlar yasash amaliy kursi.",
    technologies: ["Arduino C++", "ESP32 / ESP8266", "IoT (Internet of Things)", "Sensorlar & Sxemotexnika", "3D Modellash", "Avtonom Dronlar"],
    career: "Robotics Engineer, IoT Developer, Embedded Systems Specialist",
    syllabus: [
      { module: "1-oy", title: "Elektronika Asoslari & Sxemotexnika", desc: "Rezistorlar, tranzistorlar, diodlar, multimetr bilan ishlash va xavfsizlik." },
      { module: "2-oy", title: "Arduino & C++ Dasturlash Asoslari", desc: "Mikrokontroller arxitekturasi, pinlar bilan ishlash, shartlar, sikllar." },
      { module: "3-oy", title: "Sensorlar, Motorlar & Bluetooth Boshqaruv", desc: "Ultrasonik masofa o'lchagich, harorat sensorlari, servomotorlar, Bluetooth RC car." },
      { module: "4-oy", title: "ESP32 & IoT (Aqlli Uy Tizimlari)", desc: "Wi-Fi orqali boshqarish, mobil ilovaga ulash, Smart Home avtomatlashtirish." },
      { module: "5-oy", title: "3D Modellash & Robot Korpusini Yasash", desc: "Fusion 360 / Tinkercad, 3D printerda ehtiyot qismlarni chop etish." },
      { module: "6-oy", title: "Avtonom Robot & Robofest Musobaqasi", desc: "Chiziq bo'ylab harakatlanuvchi robot, to'siqlardan qochuvchi robot himoyasi." }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Dasturlash (React)",
    category: "dev",
    categoryName: "Dasturlash",
    duration: "8 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Junior+ gacha",
    salaryRange: "$600 — $1,800/oy",
    grantAvailable: true,
    summary: "Zamonaviy veb-saytlar va murakkab SPA veb-ilovalarning vizual qismini professional yaratishni o'rganing.",
    technologies: ["HTML5", "CSS3 / Sass", "JavaScript ES6+", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Git / GitHub"],
    career: "Frontend Developer, React Dasturchi",
    syllabus: [
      { module: "1-oy", title: "HTML5 & CSS3 Zamonaviy Standartlar", desc: "Semantik tuzilish, Flexbox, Grid, Responsive dizayn va animatsiyalar." },
      { module: "2-oy", title: "JavaScript Asoslari & DOM", desc: "O'zgaruvchilar, funksiyalar, sikllar, hodisalar (Events), LocalStorage." },
      { module: "3-oy", title: "Chuqurlashtirilgan JS (ES6+) & Async", desc: "Promises, Async/Await, Fetch API, RESTful API bilan ishlash." },
      { module: "4-5-oy", title: "React.js & State Management", desc: "Komponentlar, Hooks (useState, useEffect), Redux Toolkit, Zustand." },
      { module: "6-oy", title: "Next.js & TypeScript", desc: "Server-side rendering (SSR), Static generation (SSG), TypeScript tiplash." },
      { module: "7-8-oy", title: "Real Katta Loyiha & Portfolio", desc: "E-tijorat portali, xalqaro test sinovlari va rezyume tayyorlash." }
    ]
  },
  {
    id: "backend",
    title: "Backend Dasturlash (Python)",
    category: "dev",
    categoryName: "Dasturlash",
    duration: "9 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Junior+ gacha",
    salaryRange: "$700 — $2,200/oy",
    grantAvailable: true,
    summary: "Kuchli ma'lumotlar bazalari, xavfsiz serverlar va yuqori yuklamali RESTful API arxitekturalarini quring.",
    technologies: ["Python 3.12+", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Docker", "Linux", "Celery"],
    career: "Backend Developer, Python Software Engineer",
    syllabus: [
      { module: "1-2-oy", title: "Python Asoslari & Algoritmlar", desc: "Ma'lumotlar turlari, OOP (Obyektga yo'naltirilgan dasturlash), algoritmlar." },
      { module: "3-oy", title: "Relatsion Ma'lumotlar Bazalari (PostgreSQL)", desc: "SQL so'rovlar, indekslar, normallashtirish va ACID tamoyillari." },
      { module: "4-5-oy", title: "Django & Django REST Framework", desc: "CRUD operatsiyalar, JWT autentifikatsiya, Serializerlar, Viewsetlar." },
      { module: "6-oy", title: "Asinxron Dasturlash & Redis", desc: "Background tasklar, keshlashtirish va xabarlar navbati (Celery)." },
      { module: "7-8-oy", title: "Docker, Microservices & Linux Deploy", desc: "Konteynerlashtirish, Nginx, CI/CD quvurlari va bulutli serverlar." },
      { module: "9-oy", title: "Yakuniy Fintech Loyihasi & Ishga Kirish", desc: "To'lov tizimlari integratsiyasi va sertifikat topshirish." }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Dasturlash",
    category: "dev",
    categoryName: "Dasturlash",
    duration: "10 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Junior+ gacha",
    salaryRange: "$900 — $2,500/oy",
    grantAvailable: true,
    summary: "Mijoz interfeysidan tortib ma'lumotlar bazasigacha bo'lgan to'liq veb-tizimlarni mustaqil yarata oling.",
    technologies: ["JavaScript / Node.js", "React.js", "Express.js", "PostgreSQL / MongoDB", "REST API", "Docker", "DevOps"],
    career: "Full-Stack Software Engineer",
    syllabus: [
      { module: "1-3-oy", title: "Frontend Asoslari (HTML, CSS, JS)", desc: "Web UI, animatsiyalar, responsivlik va API integratsiyasi." },
      { module: "4-5-oy", title: "React.js Framework & UI", desc: "SPA ilovalar, global holat boshqaruvi va UI kutubxonalari." },
      { module: "6-7-oy", title: "Node.js & Backend Server", desc: "Express.js, RESTful API, PostgreSQL va MongoDB bazalari." },
      { module: "8-9-oy", title: "Real-time WebSockets & Docker", desc: "Jonli chat tizimlari, xavfsizlik auditlari, Docker va deploy." },
      { module: "10-oy", title: "Katta Startup Loyihasi", desc: "To'liq CRM tizimini ishlab chiqish va Career Center suhbatlari." }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Dasturlash (Flutter)",
    category: "dev",
    categoryName: "Dasturlash",
    duration: "7 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Junior+ gacha",
    salaryRange: "$600 — $1,900/oy",
    grantAvailable: false,
    summary: "Yagona kod bazasi bilan ham Android, ham iOS qurilmalari uchun chiroyli va tezkor mobil ilovalar yarating.",
    technologies: ["Dart", "Flutter SDK", "Bloc / Cubit", "Firebase", "REST API", "Play Store & App Store deploy"],
    career: "Mobile App Developer, Flutter Engineer",
    syllabus: [
      { module: "1-oy", title: "Dart Dasturlash Tili & OOP", desc: "Dart sintaksisi, klasslar, interfeyslar, asinxronlik." },
      { module: "2-3-oy", title: "Flutter Widgetlari & UI Dizayn", desc: "Stateless/Stateful widgetlar, material dizayn, custom animatsiyalar." },
      { module: "4-oy", title: "State Management (BLoC)", desc: "Katta mobil ilovalarda arxitektura va holat boshqaruvi." },
      { module: "5-oy", title: "Server & Firebase Integratsiyasi", desc: "Push notificationlar, autentifikatsiya, lokal kesh." },
      { module: "6-7-oy", title: "Marketlarga Yuklash & Ilova", desc: "Google Play Store va App Store platformalariga nashr qilish." }
    ]
  },
  {
    id: "ai_ds",
    title: "Sun'iy Intellekt & Data Science",
    category: "data",
    categoryName: "AI & Ma'lumotlar",
    duration: "9 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Boshlang'ichdan O'rtagacha",
    salaryRange: "$800 — $2,800/oy",
    grantAvailable: true,
    summary: "Katta ma'lumotlar tahlili, mashinali o'rganish (Machine Learning) va neyron tarmoqlar asosida AI modellari quring.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "TensorFlow", "PyTorch", "Deep Learning"],
    career: "Data Scientist, Machine Learning Engineer",
    syllabus: [
      { module: "1-2-oy", title: "Python for Data Science", desc: "Chiziqli algebra, ehtimollar nazariyasi, Pandas & NumPy." },
      { module: "3-4-oy", title: "Ma'lumotlar Tahlili (EDA)", desc: "Ma'lumotlarni tozalash, vizualizatsiya (Seaborn) va tahlil." },
      { module: "5-6-oy", title: "Klassik Mashinali O'rganish", desc: "Regressiya, klassifikatsiya, qaror daraxtlari, Random Forest." },
      { module: "7-8-oy", title: "Chuqur O'rganish (Deep Learning)", desc: "Neyron tarmoqlar, Computer Vision (CNN), NLP matn tahlili." },
      { module: "9-oy", title: "AI Model Deploy & Portfolio", desc: "FastAPI orqali AI modellarini serverga ulash va real loyiha." }
    ]
  },
  {
    id: "cybersecurity",
    title: "Kiberxavfsizlik & Ethical Hacking",
    category: "security",
    categoryName: "Xavfsizlik",
    duration: "8 oy",
    monthlyPrice: "480 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Junior+ gacha",
    salaryRange: "$800 — $2,400/oy",
    grantAvailable: true,
    summary: "Tizimlardagi zaifliklarni aniqlash, serverlar himoyasi va xavfsizlik auditlarini xalqaro standartda o'rganing.",
    technologies: ["Networking (TCP/IP)", "Linux Kali", "Penetration Testing", "Wireshark", "Burp Suite", "Cryptography"],
    career: "Cybersecurity Analyst, SOC Engineer",
    syllabus: [
      { module: "1-2-oy", title: "Tarmoq Asoslari & Linux Admin", desc: "TCP/IP modeli, DNS, routing, Linux operatsion tizimi xavfsizligi." },
      { module: "3-oy", title: "Kriptografiya & Himoya", desc: "Shifrlash algoritmlari, SSL/TLS, parollar xavfsizligi." },
      { module: "4-5-oy", title: "Veb Xavfsizlik & OWASP Top 10", desc: "SQL Injection, XSS, CSRF zaifliklarini topish va bartaraf qilish." },
      { module: "6-7-oy", title: "Penetration Testing & Audit", desc: "Kali Linux asboblari, Metasploit, Wireshark monitoringi." },
      { module: "8-oy", title: "SOC Monitoring & Sertifikat", desc: "Hodisalarga javob berish (Incident response) va tavsiyanoma." }
    ]
  },
  {
    id: "ui_ux",
    title: "UI/UX Dizayn",
    category: "design",
    categoryName: "Dizayn",
    duration: "5 oy",
    monthlyPrice: "500 000 UZS / oy",
    lessonsPerWeek: "Haftada 3 kun / 2 soatdan",
    level: "Noldan Junior gacha",
    salaryRange: "$500 — $1,500/oy",
    grantAvailable: false,
    summary: "Foydalanuvchi psixologiyasi, chiroyli dizayn tizimlari, prototiplash va qulay interfeyslar yaratish san'ati.",
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Mobile & Web UI"],
    career: "UI/UX Designer, Product Designer",
    syllabus: [
      { module: "1-oy", title: "Figma Asoslari & Auto-layout", desc: "Komponentlar, variantlar, grid tizimi, tipografika va ranglar." },
      { module: "2-oy", title: "UX Tadqiqot & Psixologiya", desc: "User Persona, Customer Journey Map (CJM), axborot arxitekturasi." },
      { module: "3-oy", title: "Mobile & Web UI Dizayn", desc: "iOS (HIG) va Android (Material 3) dizayn qoidalari." },
      { module: "4-oy", title: "Prototiplash & Animatsiyalar", desc: "Figma Smart Animate, mikro-interaksiyalar va testlash." },
      { module: "5-oy", title: "Dizayn Tizimi & Behance", desc: "Behance va Dribbble uchun keyslar tayyorlash va himoya." }
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Robototexnikada mikrokontroller (masalan, Arduino yoki ESP32) ning asosiy vazifasi nima?",
    options: [
      { text: "Faqat kompyuter ekranini sovutish", score: 0 },
      { text: "Sensorlardan ma'lumot olib, motorlar va aktuatorlarni dastur asosida boshqarish", score: 20, prefer: "robotics" },
      { text: "Faqat internet kabelini ulash", score: 0 },
      { text: "Faqat rasm chizish", score: 0 }
    ]
  },
  {
    id: 2,
    question: "Agar dasturda: 'a = 10, b = 20; agar a < b bo'lsa a = a + 5, aks holda b = b - 5' bo'lsa, 'a' ning oxirgi qiymati nechaga teng bo'ladi?",
    options: [
      { text: "10", score: 0 },
      { text: "15", score: 20 },
      { text: "20", score: 0 },
      { text: "25", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Veb-sayt yaratishda HTML va CSS ning asosiy farqi nimada?",
    options: [
      { text: "HTML saytning 'skeleti' (tuzilishi), CSS esa uning tashqi ko'rinishi va dizayni", score: 20, prefer: "frontend" },
      { text: "HTML faqat ma'lumotlar bazasi uchun ishlatiladi", score: 0 },
      { text: "HTML va CSS bir xil narsa, farqi yo'q", score: 0 },
      { text: "CSS matn yozish uchun, HTML esa rang berish uchun", score: 0 }
    ]
  },
  {
    id: 4,
    question: "Axborot xavfsizligida 'Ikki bosqichli autentifikatsiya' (2FA) nima uchun kerak?",
    options: [
      { text: "Faqat internet tezligini oshirish uchun", score: 0 },
      { text: "Hisobni begona shaxslar parolini bilgan taqdirda ham himoya qilish uchun", score: 20, prefer: "cybersecurity" },
      { text: "Kompyuter ekranini yorqinroq qilish uchun", score: 0 },
      { text: "Faqat yangi kompyuter sotib olganda", score: 0 }
    ]
  },
  {
    id: 5,
    question: "Sizga qaysi yo'nalishda amaliyot qilish ko'proq yoqadi?",
    options: [
      { text: "Robotlar, sensorlar va aqlli qurilmalar yasash (Robototexnika)", score: 20, prefer: "robotics" },
      { text: "Chiroyli veb-saytlar va animatsiyalar yaratish (Frontend/Dizayn)", score: 20, prefer: "frontend" },
      { text: "Murakkab ma'lumotlar bazasi va serverlar (Backend)", score: 20, prefer: "backend" },
      { text: "Sun'iy intellekt va neyron tarmoqlar (AI/Data)", score: 20, prefer: "ai_ds" }
    ]
  }
];

// Sample Initial Applications for Andijan
const SAMPLE_APPLICATIONS = [
  {
    id: "META-2026-1042",
    fullName: "Javohir Toshpo'latov",
    phone: "+998 (90) 845-21-19",
    birthDate: "2004-05-12",
    region: "Andijon shahri",
    courseId: "robotics",
    courseName: "Robototexnika, Arduino & IoT (500 000 UZS / oy)",
    studyMode: "Offline (Andijon filiali)",
    studyShift: "Ertalab (09:00 - 12:00)",
    knowledgeLevel: "Boshlang'ich",
    wantGrant: "Ha, 100% grant imtihonida qatnashaman",
    status: "interview",
    statusText: "Suhbat belgilandi (Leninskiy filiali)",
    createdAt: "2026-02-18 10:15"
  },
  {
    id: "META-2026-1043",
    fullName: "Dilnoza Rahimova",
    phone: "+998 (99) 314-55-88",
    birthDate: "2005-09-24",
    region: "Andijon viloyati",
    courseId: "frontend",
    courseName: "Frontend Dasturlash (React) (500 000 UZS / oy)",
    studyMode: "Offline (Andijon filiali)",
    studyShift: "Kechki (18:30 - 21:30)",
    knowledgeLevel: "O'rta",
    wantGrant: "Ha, 100% grant imtihonida qatnashaman",
    status: "approved",
    statusText: "Qabul qilindi (50% Grant)",
    createdAt: "2026-02-19 14:30"
  },
  {
    id: "META-2026-1044",
    fullName: "Sardorbek Alimov",
    phone: "+998 (97) 112-90-44",
    birthDate: "2003-11-03",
    region: "Asaka tumani",
    courseId: "backend",
    courseName: "Backend Dasturlash (Python) (500 000 UZS / oy)",
    studyMode: "Offline (Andijon filiali)",
    studyShift: "Ertalab (09:00 - 12:00)",
    knowledgeLevel: "Noldan",
    wantGrant: "Yo'q, oylik 500 000 UZS to'lov asosida",
    status: "pending",
    statusText: "Ko'rib chiqilmoqda",
    createdAt: "2026-02-20 08:20"
  }
];

// ==========================================
// 2. STATE & STORAGE MANAGEMENT
// ==========================================

function getApplications() {
  const data = localStorage.getItem("meta_it_applications");
  if (!data) {
    localStorage.setItem("meta_it_applications", JSON.stringify(SAMPLE_APPLICATIONS));
    return SAMPLE_APPLICATIONS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return SAMPLE_APPLICATIONS;
  }
}

function saveApplications(apps) {
  localStorage.setItem("meta_it_applications", JSON.stringify(apps));
  updateLiveCounters();
}

function updateLiveCounters() {
  const apps = getApplications();
  const heroCount = document.getElementById("heroLiveAppCount");
  if (heroCount) {
    heroCount.textContent = (1480 + apps.length).toLocaleString();
  }
}

// ==========================================
// 3. INITIALIZATION ON DOM READY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initParticleBackground();
  initNavVideoLogo();
  initHeroVideoLogo();
  initFooterLogo();
  initCampusVideoPlayer();

  renderCourses("all");
  initNavbar();
  initCountdown();
  initPhoneMask();
  initCourseFilters();
  initQuiz();
  initAdmissionForm();
  initStatusChecker();
  initAdminDashboard();
  initCourseDetailModal();
  updateLiveCounters();
});

// ==========================================
// 4. VIDEO-ANIMATED LOGO ENGINES WITH "META IT"
// ==========================================

// 4.1 Navbar Video-Logo Canvas (46x46)
function initNavVideoLogo() {
  const canvas = document.getElementById("navLogoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let angle = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Glowing Outer Pulsing Ring (Blue)
    const pulse = 18 + Math.sin(angle * 2) * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Orbit Particles (White & Google colors)
    const colors = ["#ffffff", "#4285f4", "#ea4335", "#fbbc05", "#34a853"];
    for (let i = 0; i < 4; i++) {
      const pAngle = angle + (i * Math.PI * 2) / 4;
      const px = cx + Math.cos(pAngle) * pulse;
      const py = cy + Math.sin(pAngle) * pulse;
      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
    }

    // Center 3D Meta Infinity Symbol
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle * 0.5);

    // Left Loop (Blue)
    ctx.beginPath();
    ctx.ellipse(-7, 0, 8, 5, Math.PI / 4, 0, Math.PI * 2);
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Right Loop (White)
    ctx.beginPath();
    ctx.ellipse(7, 0, 8, 5, -Math.PI / 4, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    // Core Glowing Dot (Cyan)
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    angle += 0.04;
    requestAnimationFrame(render);
  }
  render();
}

// 4.2 Hero Large Holographic Video-Logo with prominent "META IT" Branding
// 4.2 Hero Large Holographic Video-Logo with prominent "META IT" Advertising Engine
function initHeroVideoLogo() {
  const canvas = document.getElementById("heroLogoVideoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let time = 0;
  let frame = 0;

  // Background floating particles
  const particles = Array.from({ length: 32 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.8,
    speedY: (Math.random() - 0.5) * 0.8,
    color: ["#ffffff", "#38bdf8", "#4285f4", "#fbbc05", "#34a853"][Math.floor(Math.random() * 5)]
  }));

  const ads = [
    { title: "META IT AKADEMIYASI", sub: "📍 Andijon, Leninskiy ko'chasi", highlight: "2026 QABUL OCHILDI" },
    { title: "OYLIK TO'LOV: 500 000 UZS", sub: "🛡️ Kiberxavfsizlik: 480 000 UZS", highlight: "100% GRANT BOR" },
    { title: "AXRORIDDIN BAKHODIROV", sub: "Akademiya Asoschisi & Bosh Texnik Rahbar", highlight: "ENG KUCHLI JAMOA" },
    { title: "ROBOTOTEXNIKA & AI", sub: "Arduino, Python, React, Flutter", highlight: "AMALIY TA'LIM" }
  ];

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = 62;

    // Subtle Grid Lines
    ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
    ctx.lineWidth = 1;
    for (let x = 15; x < canvas.width; x += 25) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Floating Particles
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Hologram Rings (Blue & White)
    const ringRadius = 38;
    ctx.save();
    ctx.translate(cx, cy);

    ctx.rotate(time * 0.8);
    ctx.beginPath();
    ctx.ellipse(0, 0, ringRadius + 14, ringRadius - 14, Math.PI / 6, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(37, 99, 235, 0.75)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.rotate(-time * 1.5);
    ctx.beginPath();
    ctx.ellipse(0, 0, ringRadius + 6, ringRadius - 10, -Math.PI / 4, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // 3D Meta Emblem
    const scale = 1.15 + Math.sin(time * 2) * 0.05;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);

    // Left Wing (Blue)
    ctx.beginPath();
    ctx.ellipse(-16, 0, 18, 11, Math.PI / 5, 0, Math.PI * 2);
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3.5;
    ctx.shadowColor = "#2563eb";
    ctx.shadowBlur = 12;
    ctx.stroke();

    // Right Wing (White)
    ctx.beginPath();
    ctx.ellipse(16, 0, 18, 11, -Math.PI / 5, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3.5;
    ctx.shadowColor = "#ffffff";
    ctx.shadowBlur = 14;
    ctx.stroke();

    // Center Node (Cyan)
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.restore();
    ctx.shadowBlur = 0;

    // Live Reklama Badge
    ctx.save();
    const livePulse = Math.sin(time * 4) > 0;
    ctx.fillStyle = livePulse ? "rgba(239, 68, 68, 0.9)" : "rgba(220, 38, 38, 0.6)";
    ctx.beginPath();
    ctx.arc(24, 18, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "bold 9px 'Space Grotesk', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("LIVE REKLAMA", 34, 21);
    ctx.restore();

    // Prominent "META IT" text
    ctx.font = "bold 20px 'Space Grotesk', monospace";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
    ctx.shadowBlur = 10;
    ctx.fillText("META IT", cx, 118);
    ctx.shadowBlur = 0;

    // Dynamic Advertising Text (Transitions every 160 frames)
    const adIdx = Math.floor((frame / 160) % ads.length);
    const curAd = ads[adIdx];

    // Highlight pill
    ctx.save();
    ctx.fillStyle = "rgba(37, 99, 235, 0.35)";
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1;
    const badgeW = 190;
    ctx.strokeRect(cx - badgeW / 2, 126, badgeW, 20);
    ctx.fillRect(cx - badgeW / 2, 126, badgeW, 20);

    ctx.font = "bold 10px 'Space Grotesk', sans-serif";
    ctx.fillStyle = "#38bdf8";
    ctx.fillText("★ " + curAd.highlight + " ★", cx, 140);
    ctx.restore();

    // Main Ad Title & Sub
    ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(curAd.title, cx, 160);

    ctx.font = "500 10px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(curAd.sub, cx, 175);

    // Soundwave Equalizer Bars below logo
    const barCount = 22;
    const barWidth = 5;
    const startX = cx - (barCount * 8) / 2;
    for (let i = 0; i < barCount; i++) {
      const h = Math.abs(Math.sin(time * 3 + i * 0.4)) * 10 + 2;
      const bx = startX + i * 8;
      const by = canvas.height - 3;

      ctx.fillStyle = i % 2 === 0 ? "#38bdf8" : "#ffffff";
      ctx.fillRect(bx, by - h, barWidth, h);
    }

    time += 0.03;
    frame++;
    requestAnimationFrame(render);
  }
  render();
}

// 4.3 Footer Mini Logo
function initFooterLogo() {
  const canvas = document.getElementById("footerLogoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let a = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a);

    ctx.beginPath();
    ctx.ellipse(-5, 0, 6, 4, 0, 0, Math.PI * 2);
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(5, 0, 6, 4, 0, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    a += 0.05;
    requestAnimationFrame(render);
  }
  render();
}

// ==========================================
// 5. CAMPUS LIFE & META IT COMMERCIAL VIDEO PLAYER
// ==========================================

function initCampusVideoPlayer() {
  const canvas = document.getElementById("campusVideoCanvas");
  const playBtn = document.getElementById("playCampusVideoBtn");
  const progressFill = document.getElementById("videoProgressFill");
  const timeDisplay = document.getElementById("videoCurrentTime");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let isPlaying = true;
  let videoProgress = 0.0;
  let frame = 0;
  const totalFrames = 960; // 16-second commercial loop at 60fps

  // Floating background cyber particles
  const bgParticles = Array.from({ length: 45 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7,
    size: Math.random() * 2.5 + 1,
    color: ["#38bdf8", "#4285f4", "#ffffff", "#34a853", "#fbbc05"][Math.floor(Math.random() * 5)]
  }));

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    const h = canvas.height;

    // Deep Tech Studio Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, "#020718");
    bgGrad.addColorStop(0.5, "#071333");
    bgGrad.addColorStop(1, "#01040f");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle Perspective Cyber Grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Floating Particles
    bgParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Determine current commercial scene (0 to 3)
    const sceneIdx = Math.floor((frame % totalFrames) / 240);
    const sceneProgress = ((frame % totalFrames) % 240) / 240;

    // Fade effect at transition edges
    let alpha = 1;
    if (sceneProgress < 0.08) {
      alpha = sceneProgress / 0.08;
    } else if (sceneProgress > 0.92) {
      alpha = (1 - sceneProgress) / 0.08;
    }

    ctx.save();
    ctx.globalAlpha = Math.max(0.1, alpha);

    // ==========================================
    // SCENE 0: META IT BRAND & ACADEMY PROMO
    // ==========================================
    if (sceneIdx === 0) {
      const cx = w / 2;
      const cy = 210;

      // 3D Animated Mega Meta Emblem
      const scale = 1.6 + Math.sin(frame * 0.05) * 0.08;
      ctx.save();
      ctx.translate(cx, cy - 40);
      ctx.scale(scale, scale);

      // Orbital circles (Google colors)
      const colors = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];
      for (let i = 0; i < 4; i++) {
        const ang = (frame * 0.04) + (i * Math.PI) / 2;
        const ox = Math.cos(ang) * 44;
        const oy = Math.sin(ang) * 22;
        ctx.beginPath();
        ctx.arc(ox, oy, 3, 0, Math.PI * 2);
        ctx.fillStyle = colors[i];
        ctx.fill();
      }

      // Left Loop (Blue)
      ctx.beginPath();
      ctx.ellipse(-22, 0, 24, 15, Math.PI / 5, 0, Math.PI * 2);
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 4;
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 15;
      ctx.stroke();

      // Right Loop (White)
      ctx.beginPath();
      ctx.ellipse(22, 0, 24, 15, -Math.PI / 5, 0, Math.PI * 2);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 15;
      ctx.stroke();

      // Core Node
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#38bdf8";
      ctx.fill();
      ctx.restore();

      // Titles
      ctx.textAlign = "center";
      ctx.font = "bold 38px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(56, 189, 248, 0.85)";
      ctx.shadowBlur = 20;
      ctx.fillText("META IT ACADEMY", cx, cy + 55);
      ctx.shadowBlur = 0;

      ctx.font = "bold 16px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("ANDIJON VILOYATI • LENINSKIY KO'CHASI, 12-UY", cx, cy + 85);

      ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("Zamonaviy IT, Robototexnika va Sun'iy Intellekt Ta'lim Markazi", cx, cy + 115);

      // Feature Pills
      const pills = ["★ 100% Amaliyot", "★ Xalqaro Sertifikat", "★ Bepul Grant Imkoniyati", "★ Tajribali Mentorlar"];
      const startPillX = cx - 360;
      pills.forEach((pill, idx) => {
        const px = startPillX + idx * 185;
        ctx.fillStyle = "rgba(37, 99, 235, 0.25)";
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1;
        ctx.strokeRect(px, cy + 140, 170, 32);
        ctx.fillRect(px, cy + 140, 170, 32);
        ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(pill, px + 85, cy + 161);
      });
    }

    // ==========================================
    // SCENE 1: QABUL & NARXLAR REKLAMASI
    // ==========================================
    else if (sceneIdx === 1) {
      ctx.textAlign = "center";
      ctx.font = "bold 26px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 14;
      ctx.fillText("🔥 2026-YIL UCHUN RASMIY QABUL BOSHLANDI!", w / 2, 85);
      ctx.shadowBlur = 0;

      ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("Andijon shahrida sifatli va hamyonbop zamonaviy IT ta'limi", w / 2, 112);

      // Box 1: Barcha Darslar 500 000 UZS
      const b1x = 70;
      const b1y = 135;
      const bw = 390;
      const bh = 240;

      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.strokeRect(b1x, b1y, bw, bh);
      ctx.fillRect(b1x, b1y, bw, bh);

      // Header Tag
      ctx.fillStyle = "#2563eb";
      ctx.fillRect(b1x, b1y, bw, 42);
      ctx.font = "bold 15px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("BARCHA ASOSIY KURSLAR", b1x + bw / 2, b1y + 26);

      // Price Banner
      ctx.font = "bold 28px 'Space Grotesk', monospace";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("500 000 UZS / oy", b1x + bw / 2, b1y + 85);

      ctx.textAlign = "left";
      ctx.font = "500 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("✓ Robototexnika & Arduino IoT", b1x + 25, b1y + 120);
      ctx.fillText("✓ Python & Django Backend", b1x + 25, b1y + 145);
      ctx.fillText("✓ Frontend React & Next.js", b1x + 25, b1y + 170);
      ctx.fillText("✓ Mobil Flutter & Dart", b1x + 25, b1y + 195);
      ctx.fillText("✓ Sun'iy Intellekt & Data Science", b1x + 25, b1y + 220);

      // Box 2: Kiberxavfsizlik 480 000 UZS
      const b2x = 500;
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.strokeStyle = "#34a853";
      ctx.lineWidth = 2;
      ctx.strokeRect(b2x, b1y, bw, bh);
      ctx.fillRect(b2x, b1y, bw, bh);

      ctx.fillStyle = "rgba(5, 150, 105, 0.85)";
      ctx.fillRect(b2x, b1y, bw, 42);
      ctx.textAlign = "center";
      ctx.font = "bold 15px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("🛡️ KIBERXAVFSIZLIK (CHEGIRMA!)", b2x + bw / 2, b1y + 26);

      // Discount Price
      ctx.font = "bold 28px 'Space Grotesk', monospace";
      ctx.fillStyle = "#34d399";
      ctx.fillText("480 000 UZS / oy", b2x + bw / 2, b1y + 85);

      ctx.textAlign = "left";
      ctx.font = "500 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("✓ Ethical Hacking & Kali Linux", b2x + 25, b1y + 120);
      ctx.fillText("✓ Tarmoqlar xavfsizligi & Wireshark", b2x + 25, b1y + 145);
      ctx.fillText("✓ OWASP Top 10 veb himoya", b2x + 25, b1y + 170);
      ctx.fillText("✓ SOC monitoring & Pentest auditi", b2x + 25, b1y + 195);
      ctx.fillStyle = "#facc15";
      ctx.fillText("★ 100% Grant Imkoniyati Mavjud!", b2x + 25, b1y + 220);

      // Bottom Callout
      ctx.textAlign = "center";
      ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("📍 Andijon shahri, Leninskiy ko'chasi • Haftada 3 kun / 2 soatdan qulay darslar", w / 2, 405);
    }

    // ==========================================
    // SCENE 2: META IT ENG KUCHLI JAMOYASI (MENTORLAR)
    // ==========================================
    else if (sceneIdx === 2) {
      ctx.textAlign = "center";
      ctx.font = "bold 26px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 14;
      ctx.fillText("META IT ENG KUCHLI JAMOYASI", w / 2, 80);
      ctx.shadowBlur = 0;

      ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("Xalqaro darajadagi tajribali amaliyotchi ustozlarimiz bilan tanishing:", w / 2, 108);

      // Featured Card: Axroriddin Bakhodirov (CEO & Founder)
      const fX = 70;
      const fY = 130;
      const fW = 820;
      const fH = 120;

      ctx.fillStyle = "rgba(37, 99, 235, 0.18)";
      ctx.strokeStyle = "#4285f4";
      ctx.lineWidth = 2;
      ctx.strokeRect(fX, fY, fW, fH);
      ctx.fillRect(fX, fY, fW, fH);

      // Avatar Circle "AB"
      ctx.beginPath();
      ctx.arc(fX + 60, fY + 60, 40, 0, Math.PI * 2);
      ctx.fillStyle = "linear-gradient(135deg, #1d4ed8, #4285f4)";
      ctx.fill();
      ctx.strokeStyle = "#4285f4";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.font = "bold 24px 'Space Grotesk', monospace";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("AB", fX + 60, fY + 68);

      ctx.textAlign = "left";
      ctx.font = "bold 22px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("Axroriddin Bakhodirov", fX + 120, fY + 45);

      ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("Akademiya Asoschisi & Bosh Texnik Rahbar (Founder & CEO)", fX + 120, fY + 70);

      ctx.font = "500 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("8+ yillik dasturiy arxitektura va IT ta'lim tajribasi. Google Developer hamjamiyati faoli va IT startup loyihalar muallifi.", fX + 120, fY + 95);

      // 3 Sub-mentors Grid below
      const mentors = [
        { name: "Boburmirzo Ibrohimov", role: "Python & Django Backend", desc: "Senior Software Engineer" },
        { name: "Nodirbek Yo'ldoshev", role: "React & Next.js Frontend", desc: "Lead Frontend Mentor" },
        { name: "Shoxruxmirzo G'aniyev", role: "Robototexnika & Arduino", desc: "IoT Bosh Muhandisi" }
      ];

      mentors.forEach((m, idx) => {
        const mx = fX + idx * 280;
        const my = 270;
        const mw = 260;
        const mh = 120;

        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(mx, my, mw, mh);
        ctx.fillRect(mx, my, mw, mh);

        ctx.textAlign = "left";
        ctx.font = "bold 15px 'Space Grotesk', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(m.name, mx + 16, my + 35);

        ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#38bdf8";
        ctx.fillText(m.role, mx + 16, my + 60);

        ctx.font = "500 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(m.desc, mx + 16, my + 85);
      });

      ctx.textAlign = "center";
      ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#34d399";
      ctx.fillText("✓ Har bir o'quvchiga amaliy loyihalar va shaxsiy mentorlik kafolatlangan!", w / 2, 415);
    }

    // ==========================================
    // SCENE 3: AMALIYOT, ROBOTOTEXNIKA & ARIZA CTA
    // ==========================================
    else if (sceneIdx === 3) {
      ctx.textAlign = "center";
      ctx.font = "bold 26px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 14;
      ctx.fillText("ROBOTOTEXNIKA LABORATORIYASI & KELAJAK KASBLARI", w / 2, 80);
      ctx.shadowBlur = 0;

      ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("Andijon filialida eng so'nggi kompyuter va robototexnika jihozlari!", w / 2, 108);

      // Radar & Robot Visualizer (Left)
      const rx = 180;
      const ry = 230;
      const rRadius = 85;

      ctx.save();
      ctx.beginPath();
      ctx.arc(rx, ry, rRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rx, ry, rRadius * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
      ctx.stroke();

      // Radar sweeping beam
      const sweepAngle = frame * 0.05;
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.arc(rx, ry, rRadius, sweepAngle, sweepAngle + 0.5);
      ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
      ctx.fill();

      // Center Node
      ctx.beginPath();
      ctx.arc(rx, ry, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#38bdf8";
      ctx.fill();

      ctx.textAlign = "center";
      ctx.font = "bold 12px 'Space Grotesk', monospace";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("ARDUINO & IOT SCANNER", rx, ry + rRadius + 22);
      ctx.restore();

      // Right Side: Big Call To Action
      const ctaX = 350;
      const ctaY = 140;
      const ctaW = 540;
      const ctaH = 200;

      ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
      ctx.strokeStyle = "#4285f4";
      ctx.lineWidth = 2;
      ctx.strokeRect(ctaX, ctaY, ctaW, ctaH);
      ctx.fillRect(ctaX, ctaY, ctaW, ctaH);

      ctx.textAlign = "center";
      ctx.font = "bold 20px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("HOZIROQ ARIZA QOLDIRING!", ctaX + ctaW / 2, ctaY + 45);

      ctx.font = "500 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("📍 Andijon shahri, Leninskiy ko'chasi, 12-uy", ctaX + ctaW / 2, ctaY + 75);
      ctx.fillText("📞 Tel: +998 (90) 123-45-67  •  Telegram: @metait_academy", ctaX + ctaW / 2, ctaY + 100);

      // Glowing Pulsing Enroll Button on the canvas
      const btnW = 320;
      const btnH = 46;
      const btnX = ctaX + (ctaW - btnW) / 2;
      const btnY = ctaY + 130;
      const pulseGlow = Math.sin(frame * 0.1) * 8 + 12;

      ctx.save();
      ctx.fillStyle = "#2563eb";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = pulseGlow;
      ctx.fillRect(btnX, btnY, btnW, btnH);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.strokeRect(btnX, btnY, btnW, btnH);

      ctx.font = "bold 15px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 0;
      ctx.fillText("👉 ARIZA TOPSHIRISH UCHUN BOSING ➔", btnX + btnW / 2, btnY + 28);
      ctx.restore();

      ctx.textAlign = "center";
      ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("Dastlabki 50 nafar o'quvchiga maxsus sovg'alar va chegirmalar!", w / 2, 410);
    }

    ctx.restore(); // Restore alpha

    // ==========================================
    // GLOBAL TOP HUD & BOTTOM TIMELINE ON VIDEO
    // ==========================================
    // Top-Left Live Tag
    ctx.save();
    ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 20, 240, 28);
    ctx.fillRect(20, 20, 240, 28);

    ctx.beginPath();
    ctx.arc(36, 34, 4, 0, Math.PI * 2);
    ctx.fillStyle = Math.sin(frame * 0.1) > 0 ? "#ef4444" : "#991b1b";
    ctx.fill();

    ctx.font = "bold 11px 'Space Grotesk', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";
    ctx.fillText("META IT 4K • RASMIY REKLAMA", 48, 38);
    ctx.restore();

    // Top-Right Andijon Filiali Indicator
    ctx.save();
    ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1;
    ctx.strokeRect(w - 230, 20, 210, 28);
    ctx.fillRect(w - 230, 20, 210, 28);

    ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#38bdf8";
    ctx.textAlign = "right";
    ctx.fillText("📍 ANDIJON • LENINSKIY", w - 30, 38);
    ctx.restore();

    // Bottom Soundwave Visualizer on video canvas
    const bars = 36;
    const bW = 6;
    const bStartX = (w - (bars * 10)) / 2;
    for (let i = 0; i < bars; i++) {
      const bh = Math.abs(Math.sin(frame * 0.08 + i * 0.3)) * 14 + 3;
      ctx.fillStyle = i % 2 === 0 ? "rgba(56, 189, 248, 0.85)" : "rgba(255, 255, 255, 0.7)";
      ctx.fillRect(bStartX + i * 10, h - 8 - bh, bW, bh);
    }

    // Video Progress & Time handling
    if (isPlaying) {
      frame++;
      videoProgress = (frame % totalFrames) / totalFrames;

      if (progressFill) progressFill.style.width = `${videoProgress * 100}%`;
      if (timeDisplay) {
        const curSec = Math.floor(videoProgress * 16);
        const curS = String(curSec).padStart(2, "0");
        timeDisplay.textContent = `00:${curS} / 00:16 (Reklama)`;
      }
    }

    requestAnimationFrame(render);
  }
  render();

  // Click on canvas or button to toggle playback or scroll to admission
  if (canvas) {
    canvas.addEventListener("click", () => {
      const formEl = document.getElementById("qabul");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
        showToast("Qabul arizasi formasi ochildi! Ma'lumotlaringizni kiriting.", "success");
      }
    });
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      showToast(isPlaying ? "Reklama videosi davom ettirilmoqda" : "Video to'xtatildi", "info");
    });
  }
}

// ==========================================
// 6. BACKGROUND PARTICLE CONSTELLATION CANVAS
// ==========================================

function initParticleBackground() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const count = Math.min(Math.floor(window.innerWidth / 18), 70);
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    radius: Math.random() * 2 + 1,
    color: Math.random() > 0.4 ? "rgba(56, 189, 248, 0.7)" : "rgba(255, 255, 255, 0.8)"
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// 7. COURSES RENDERING WITH 500 000 UZS PRICE
// ==========================================

function renderCourses(filter = "all") {
  const grid = document.getElementById("coursesGrid");
  if (!grid) return;

  const filtered = filter === "all" 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  grid.innerHTML = filtered.map(course => `
    <div class="course-card" data-category="${course.category}">
      <div class="course-card-top">
        <div class="course-header-row">
          <span class="course-category-badge">${course.categoryName}</span>
          ${course.grantAvailable ? '<span class="course-grant-badge">★ 100% Grant bor</span>' : ''}
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-summary">${course.summary}</p>
        
        <div class="course-meta-tags">
          ${course.technologies.slice(0, 5).map(tech => `<span class="course-meta-tag">${tech}</span>`).join('')}
          ${course.technologies.length > 5 ? `<span class="course-meta-tag">+${course.technologies.length - 5}</span>` : ''}
        </div>
      </div>
      
      <div class="course-card-bottom">
        <div class="course-bottom-info">
          <div class="course-price-bottom">
            <span class="price-label">Oylik to'lov:</span>
            <span class="price-val">💰 ${course.monthlyPrice}</span>
          </div>
          <div class="course-duration-bottom">
            <span class="duration-label">Davomiyligi:</span>
            <span class="duration-val">⏱ ${course.duration}</span>
          </div>
        </div>
        <div class="course-btn-group">
          <button class="btn btn-outline btn-sm" onclick="openCourseDetails('${course.id}')" title="O'quv rejasini ko'rish">
            <span>Batafsil</span>
          </button>
          <button class="btn btn-primary btn-sm btn-glow-blue" onclick="selectCourseAndEnroll('${course.id}')">
            <span>Tanlash</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// Course details modal trigger
window.openCourseDetails = function(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById("courseDetailModal");
  const content = document.getElementById("courseModalContent");

  content.innerHTML = `
    <div class="course-modal-header">
      <div style="display: flex; gap: 8px; margin-bottom: 8px;">
        <span class="badge-mini">${course.categoryName}</span>
        <span class="course-price-badge" style="font-size: 0.85rem;">To'lov: ${course.monthlyPrice}</span>
      </div>
      <h2 style="font-size: 1.8rem; margin: 10px 0 6px; color: #fff;">${course.title}</h2>
      <p style="color: var(--text-secondary);">${course.summary}</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 20px;">
      <div class="admin-stat-box">
        <span class="as-label">Oylik to'lov:</span>
        <strong style="color: #34d399; font-size: 1.1rem;">${course.monthlyPrice}</strong>
      </div>
      <div class="admin-stat-box">
        <span class="as-label">Davomiyligi:</span>
        <strong style="color: #38bdf8;">${course.duration}</strong>
      </div>
      <div class="admin-stat-box">
        <span class="as-label">Manzil:</span>
        <strong style="color: #fff;">Andijon, Leninskiy ko'chasi</strong>
      </div>
    </div>

    <h4 style="color: #fff; margin-bottom: 12px;">📚 To'liq O'quv Rejasi (Syllabus):</h4>
    <div class="course-modal-syllabus">
      ${course.syllabus.map(s => `
        <div class="syllabus-module">
          <h5>${s.module}: ${s.title}</h5>
          <p>${s.desc}</p>
        </div>
      `).join('')}
    </div>

    <div style="margin-top: 24px; text-align: center;">
      <button class="btn btn-primary btn-lg btn-glow-blue" onclick="selectCourseAndEnroll('${course.id}'); document.getElementById('courseDetailModal').classList.add('hidden');">
        Ushbu kursga yozilish (500 000 UZS / oy) &rarr;
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
};

function initCourseDetailModal() {
  const closeBtn = document.getElementById("closeCourseModal");
  const modal = document.getElementById("courseDetailModal");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }
}

// Select course helper
window.selectCourseAndEnroll = function(courseId) {
  const selectElem = document.getElementById("courseSelect");
  if (selectElem) {
    selectElem.value = courseId;
  }
  const target = document.getElementById("qabul");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  showToast("Kurs tanlandi (500 000 UZS / oy)!", "info");
};

// Course filters
function initCourseFilters() {
  const filterBtns = document.querySelectorAll(".filter-tab");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderCourses(filter);
    });
  });
}

// Navbar & Mobile Menu
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }
}

// Countdown Timer
function initCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 8);
  targetDate.setHours(targetDate.getHours() + 14);

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dElem = document.getElementById("days");
    const hElem = document.getElementById("hours");
    const mElem = document.getElementById("minutes");
    const sElem = document.getElementById("seconds");

    if (dElem) dElem.textContent = String(days).padStart(2, '0');
    if (hElem) hElem.textContent = String(hours).padStart(2, '0');
    if (mElem) mElem.textContent = String(minutes).padStart(2, '0');
    if (sElem) sElem.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Phone Number Masking
function initPhoneMask() {
  const phoneInput = document.getElementById("phone");
  if (!phoneInput) return;

  phoneInput.addEventListener("input", (e) => {
    let x = e.target.value.replace(/\D/g, "");
    if (!x.startsWith("998")) {
      x = "998" + x;
    }
    x = x.substring(0, 12);

    let formatted = "+998";
    if (x.length > 3) formatted += " (" + x.substring(3, 5);
    if (x.length > 5) formatted += ") " + x.substring(5, 8);
    if (x.length > 8) formatted += "-" + x.substring(8, 10);
    if (x.length > 10) formatted += "-" + x.substring(10, 12);

    e.target.value = formatted;
  });

  phoneInput.addEventListener("focus", () => {
    if (!phoneInput.value) {
      phoneInput.value = "+998 (";
    }
  });
}

// ==========================================
// 8. INTERACTIVE QUIZ
// ==========================================

let currentQuizIndex = 0;
let userQuizScore = 0;
let userPreferredCourse = "robotics";

function initQuiz() {
  const startBtn = document.getElementById("startQuizBtn");
  const intro = document.getElementById("quizIntro");
  const container = document.getElementById("quizContainer");
  const result = document.getElementById("quizResult");
  const restartBtn = document.getElementById("restartQuizBtn");
  const applyBtn = document.getElementById("applyWithTestResultBtn");

  if (!startBtn) return;

  startBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    container.classList.remove("hidden");
    currentQuizIndex = 0;
    userQuizScore = 0;
    renderQuizQuestion();
  });

  restartBtn.addEventListener("click", () => {
    result.classList.add("hidden");
    container.classList.remove("hidden");
    currentQuizIndex = 0;
    userQuizScore = 0;
    renderQuizQuestion();
  });

  applyBtn.addEventListener("click", () => {
    const courseSelect = document.getElementById("courseSelect");
    if (courseSelect) {
      courseSelect.value = userPreferredCourse;
    }
    const comments = document.getElementById("comments");
    if (comments) {
      comments.value = `Onlayn test natijasi: ${userQuizScore} ball. Tanlangan kurs: ${userPreferredCourse}. Grant imkoniyati: ${userQuizScore >= 60 ? 'Yuqori' : 'Standart'}.`;
    }
    document.getElementById("qabul").scrollIntoView({ behavior: "smooth" });
    showToast("Test natijangiz arizaga biriktirildi!", "success");
  });
}

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const stepText = document.getElementById("quizStepText");
  const scoreText = document.getElementById("quizScoreText");
  const progressFill = document.getElementById("quizProgressFill");
  const qTitle = document.getElementById("quizQuestion");
  const optionsBox = document.getElementById("quizOptions");

  stepText.textContent = `Savol: ${currentQuizIndex + 1} / ${QUIZ_QUESTIONS.length}`;
  scoreText.textContent = `Ball: ${userQuizScore}`;
  progressFill.style.width = `${((currentQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;

  qTitle.textContent = q.question;

  const letters = ["A", "B", "C", "D"];
  optionsBox.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option-btn" onclick="selectQuizOption(${i})">
      <span class="quiz-option-letter">${letters[i]}</span>
      <span>${opt.text}</span>
    </button>
  `).join("");
}

window.selectQuizOption = function(optionIndex) {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const chosen = q.options[optionIndex];
  userQuizScore += chosen.score;
  if (chosen.prefer) {
    userPreferredCourse = chosen.prefer;
  }

  currentQuizIndex++;

  if (currentQuizIndex < QUIZ_QUESTIONS.length) {
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  const container = document.getElementById("quizContainer");
  const result = document.getElementById("quizResult");
  const scoreSpan = document.getElementById("resultScore");
  const title = document.getElementById("resultTitle");
  const desc = document.getElementById("resultDesc");
  const recName = document.getElementById("recCourseName");
  const grantText = document.getElementById("recGrantText");

  container.classList.add("hidden");
  result.classList.remove("hidden");

  scoreSpan.textContent = userQuizScore;

  const courseObj = COURSES.find(c => c.id === userPreferredCourse) || COURSES[0];
  recName.textContent = courseObj.title;

  if (userQuizScore >= 80) {
    title.textContent = "🏆 Yuqori Texnik Salohiyat!";
    desc.textContent = "Siz dasturlash va robototexnika uchun juda yuqori algoritmik qobiliyatga egasiz.";
    grantText.innerHTML = "Siz <strong>50% dan 100% gacha O'qish Granti</strong> olish imkoniyatiga egasiz!";
  } else if (userQuizScore >= 60) {
    title.textContent = "👍 Yaxshi Natija!";
    desc.textContent = "Sizda mustahkam tushuncha va yangi IT sohalariga tez kirishib ketish qobiliyati bor.";
    grantText.innerHTML = "Siz <strong>30% ta'lim granti va maxsus chegirma</strong> egasisiz!";
  } else {
    title.textContent = "🚀 Ajoyib Boshlanish!";
    desc.textContent = "Andijon filialimizda noldan o'rganish sizga to'liq mos keladi.";
    grantText.innerHTML = "Barcha darslar narxi — <strong>oylik atigi 500 000 UZS</strong>!";
  }
}

// ==========================================
// 9. ADMISSION FORM & VALIDATION
// ==========================================

function initAdmissionForm() {
  const form = document.getElementById("admissionForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFormErrors();

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const region = document.getElementById("region").value;
    const courseId = document.getElementById("courseSelect").value;
    const studyMode = form.querySelector('input[name="studyMode"]:checked')?.value || "Offline (Andijon)";
    const studyShift = form.querySelector('input[name="studyShift"]:checked')?.value || "Ertalabki";
    const knowledgeLevel = document.getElementById("knowledgeLevel").value;
    const wantGrant = document.getElementById("wantGrant").value;
    const comments = document.getElementById("comments").value.trim();
    const agreeTerms = document.getElementById("agreeTerms").checked;

    let hasError = false;

    if (!fullName || fullName.length < 3) {
      setError("fullNameError", "Iltimos, to'liq ism va familiyangizni kiriting!");
      hasError = true;
    }

    const cleanPhoneDigits = phone.replace(/\D/g, "");
    if (cleanPhoneDigits.length < 12) {
      setError("phoneError", "Telefon raqamini to'liq kiriting: +998 (__) ___-__-__");
      hasError = true;
    }

    if (!birthDate) {
      setError("birthDateError", "Tug'ilgan sanangizni tanlang!");
      hasError = true;
    }

    if (!region) {
      setError("regionError", "Hududingizni tanlang!");
      hasError = true;
    }

    if (!courseId) {
      setError("courseError", "Ta'lim yo'nalishini tanlang!");
      hasError = true;
    }

    if (!agreeTerms) {
      setError("agreeTermsError", "Ta'lim shartlariga rozilik bildiring!");
      hasError = true;
    }

    if (hasError) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const appId = `META-2026-${randomSuffix}`;

    const courseObj = COURSES.find(c => c.id === courseId);
    const courseName = courseObj ? `${courseObj.title} (${courseObj.monthlyPrice})` : courseId;

    const newApplication = {
      id: appId,
      fullName,
      phone,
      birthDate,
      region,
      courseId,
      courseName,
      studyMode,
      studyShift,
      knowledgeLevel,
      wantGrant,
      comments,
      status: "pending",
      statusText: "Ko'rib chiqilmoqda (Andijon qabul komissiyasi)",
      createdAt: new Date().toLocaleString("uz-UZ", { dateStyle: "short", timeStyle: "short" })
    };

    const apps = getApplications();
    apps.unshift(newApplication);
    saveApplications(apps);

    showSuccessReceipt(newApplication);
    form.reset();
    showToast("Arizangiz muvaffaqiyatli qabul qilindi!", "success");
  });

  const closeBtn = document.getElementById("closeSuccessModal");
  const confirmBtn = document.getElementById("confirmDoneBtn");
  const modal = document.getElementById("successModal");

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  if (confirmBtn) confirmBtn.addEventListener("click", () => modal.classList.add("hidden"));
}

function clearFormErrors() {
  document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
}

function setError(elementId, msg) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = msg;
}

function showSuccessReceipt(app) {
  const modal = document.getElementById("successModal");
  const content = document.getElementById("receiptContent");

  content.innerHTML = `
    <div class="receipt-row">
      <span>Ariza ID raqami:</span>
      <span class="ticket-id">${app.id}</span>
    </div>
    <div class="receipt-row">
      <span>Nomzod:</span>
      <span>${app.fullName}</span>
    </div>
    <div class="receipt-row">
      <span>Telefon:</span>
      <span>${app.phone}</span>
    </div>
    <div class="receipt-row">
      <span>Tanlangan yo'nalish:</span>
      <span class="highlight-blue">${app.courseName}</span>
    </div>
    <div class="receipt-row">
      <span>Oylik to'lov:</span>
      <span style="color: #34d399; font-weight: 800;">500 000 UZS / oy</span>
    </div>
    <div class="receipt-row">
      <span>Filial lokatsiyasi:</span>
      <span>Andijon sh., Leninskiy ko'chasi, 12-uy</span>
    </div>
    <div class="receipt-row">
      <span>Arizaning holati:</span>
      <span class="ticket-state-badge pending">● ${app.statusText}</span>
    </div>
    <div class="receipt-row">
      <span>Topshirilgan vaqt:</span>
      <span>${app.createdAt}</span>
    </div>
  `;

  modal.classList.remove("hidden");
}

// ==========================================
// 10. APPLICATION STATUS CHECKER
// ==========================================

function initStatusChecker() {
  const searchInput = document.getElementById("statusSearchInput");
  const checkBtn = document.getElementById("checkStatusBtn");
  const resultBox = document.getElementById("statusResultBox");

  if (!checkBtn || !searchInput) return;

  function performCheck() {
    const query = searchInput.value.trim().toLowerCase().replace(/\s+/g, "");
    if (!query) {
      showToast("Iltimos, Ariza ID yoki telefon raqamingizni kiriting!", "error");
      return;
    }

    const apps = getApplications();
    const found = apps.find(a => {
      const idMatch = a.id.toLowerCase().replace(/\s+/g, "").includes(query);
      const cleanPhone = a.phone.replace(/\D/g, "");
      const cleanQuery = query.replace(/\D/g, "");
      const phoneMatch = cleanQuery.length >= 7 && cleanPhone.includes(cleanQuery);
      return idMatch || phoneMatch;
    });

    resultBox.classList.remove("hidden");

    if (!found) {
      resultBox.innerHTML = `
        <div class="status-ticket" style="border-color: #ef4444;">
          <h4 style="color: #ef4444; margin-bottom: 8px;">❌ Ariza topilmadi</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">
            "${searchInput.value}" bo'yicha hech qanday ariza ro'yxatga olinmagan.
            Iltimos, ID raqam yoki telefon raqamni to'g'ri kiritganingizni tekshirib ko'ring yoki yangi ariza topshiring.
          </p>
        </div>
      `;
      return;
    }

    let badgeClass = "pending";
    if (found.status === "interview") badgeClass = "interview";
    if (found.status === "approved") badgeClass = "approved";

    resultBox.innerHTML = `
      <div class="status-ticket">
        <div class="status-ticket-header">
          <div>
            <div class="ticket-id">${found.id}</div>
            <small style="color: var(--text-muted);">Topshirilgan sana: ${found.createdAt}</small>
          </div>
          <span class="ticket-state-badge ${badgeClass}">● ${found.statusText}</span>
        </div>
        
        <div class="status-ticket-body">
          <div class="st-item">
            <small>Nomzod F.I.SH:</small>
            <strong>${found.fullName}</strong>
          </div>
          <div class="st-item">
            <small>Aloqa telefoni:</small>
            <strong>${found.phone}</strong>
          </div>
          <div class="st-item">
            <small>Tanlangan Kurs:</small>
            <strong class="highlight-blue">${found.courseName}</strong>
          </div>
          <div class="st-item">
            <small>Oylik to'lov:</small>
            <strong style="color: #34d399;">500 000 UZS / oy</strong>
          </div>
          <div class="st-item">
            <small>Manzil / Filial:</small>
            <strong>Andijon sh., Leninskiy ko'chasi, 12-uy</strong>
          </div>
          <div class="st-item">
            <small>Grant so'rovi:</small>
            <strong>${found.wantGrant}</strong>
          </div>
        </div>
      </div>
    `;

    showToast("Ariza muvaffaqiyatli topildi!", "success");
  }

  checkBtn.addEventListener("click", performCheck);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performCheck();
  });
}

// ==========================================
// 11. ADMIN DASHBOARD MODAL
// ==========================================

function initAdminDashboard() {
  const adminToggleBtn = document.getElementById("adminToggleBtn");
  const adminModal = document.getElementById("adminModal");
  const closeAdminBtn = document.getElementById("closeAdminModal");
  const searchInput = document.getElementById("adminSearchInput");
  const clearBtn = document.getElementById("clearAllAppsBtn");
  const loadSampleBtn = document.getElementById("loadSampleDataBtn");

  if (!adminToggleBtn || !adminModal) return;

  adminToggleBtn.addEventListener("click", () => {
    renderAdminTable();
    adminModal.classList.remove("hidden");
  });

  closeAdminBtn.addEventListener("click", () => {
    adminModal.classList.add("hidden");
  });

  searchInput.addEventListener("input", () => {
    renderAdminTable(searchInput.value.trim().toLowerCase());
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("Barcha arizalarni tozalab tashlamoqchimisiz?")) {
      saveApplications([]);
      renderAdminTable();
      showToast("Barcha arizalar tozalandi!", "info");
    }
  });

  loadSampleBtn.addEventListener("click", () => {
    saveApplications(SAMPLE_APPLICATIONS);
    renderAdminTable();
    showToast("Andijon filiali namuna arizalari yuklandi!", "success");
  });
}

function renderAdminTable(filterQuery = "") {
  const tbody = document.getElementById("adminAppsTableBody");
  const apps = getApplications();

  const totalElem = document.getElementById("adminTotalApps");
  const pendingElem = document.getElementById("adminPendingApps");
  const interviewElem = document.getElementById("adminInterviewApps");
  const approvedElem = document.getElementById("adminApprovedApps");

  const pendingCount = apps.filter(a => a.status === "pending").length;
  const interviewCount = apps.filter(a => a.status === "interview").length;
  const approvedCount = apps.filter(a => a.status === "approved").length;

  if (totalElem) totalElem.textContent = apps.length;
  if (pendingElem) pendingElem.textContent = pendingCount;
  if (interviewElem) interviewElem.textContent = interviewCount;
  if (approvedElem) approvedElem.textContent = approvedCount;

  if (!tbody) return;

  const filtered = apps.filter(a => {
    if (!filterQuery) return true;
    return a.fullName.toLowerCase().includes(filterQuery) ||
           a.phone.includes(filterQuery) ||
           a.id.toLowerCase().includes(filterQuery) ||
           a.courseName.toLowerCase().includes(filterQuery);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 30px;">
          Hech qanday ariza topilmadi.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(app => {
    let badgeStyle = "background: rgba(245, 158, 11, 0.2); color: #fbbf24;";
    if (app.status === "interview") badgeStyle = "background: rgba(6, 182, 212, 0.2); color: #06b6d4;";
    if (app.status === "approved") badgeStyle = "background: rgba(16, 185, 129, 0.2); color: #34d399;";

    return `
      <tr>
        <td><strong style="color: #38bdf8; font-family: var(--font-code);">${app.id}</strong></td>
        <td><strong>${app.fullName}</strong></td>
        <td>${app.phone}</td>
        <td>${app.courseName}</td>
        <td>${app.studyMode}</td>
        <td><small>${app.studyShift}</small></td>
        <td><span class="status-badge-table" style="${badgeStyle}">${app.statusText}</span></td>
        <td>
          <div class="actions-cell">
            <button class="btn-icon-sm" onclick="changeAppStatus('${app.id}', 'interview')" title="Suhbatga chaqirish">📞 Suhbat</button>
            <button class="btn-icon-sm" onclick="changeAppStatus('${app.id}', 'approved')" title="Qabul qilish">✅ Qabul</button>
            <button class="btn-icon-sm" onclick="deleteApp('${app.id}')" title="O'chirish" style="color: #ef4444;">🗑</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

window.changeAppStatus = function(appId, newStatus) {
  const apps = getApplications();
  const target = apps.find(a => a.id === appId);
  if (!target) return;

  target.status = newStatus;
  if (newStatus === "interview") {
    target.statusText = "Suhbat belgilandi (Leninskiy filiali)";
  } else if (newStatus === "approved") {
    target.statusText = "Qabul qilindi (Guruhga biriktirildi)";
  }

  saveApplications(apps);
  renderAdminTable();
  showToast(`${appId} holati o'zgartirildi!`, "success");
};

window.deleteApp = function(appId) {
  if (confirm(`${appId} arizasini o'chirmoqchimisiz?`)) {
    const apps = getApplications().filter(a => a.id !== appId);
    saveApplications(apps);
    renderAdminTable();
    showToast(`${appId} arizasi o'chirildi!`, "info");
  }
};

// ==========================================
// 12. TOAST SYSTEM
// ==========================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "❌";

  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
