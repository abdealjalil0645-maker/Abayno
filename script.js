// Language Switching
const translations = {
  en: {
    welcome: "Welcome to Complexe Touristique Abaynou",
    subtitle: "Luxury, Comfort, and Hospitality",
    bookNow: "Book Now",
    detailsTitle: "Hotel Details",
    detailsText: "Our hospitable staff at the reception is happy to assist with any inquiries. Guests enjoy conference halls, celebration halls, smoking areas, free Wi-Fi, tour booking assistance, and a relaxing garden. Free indoor parking is available.",
    galleryTitle: "Gallery",
    videoTitle: "Video Tour",
    contactTitle: "Contact Us",
    phone: "📞 0666132685"
  },
  fr: {
    welcome: "Bienvenue au Complexe Touristique Abaynou",
    subtitle: "Luxe, Confort et Hospitalité",
    bookNow: "Réservez Maintenant",
    detailsTitle: "Détails de l'Hôtel",
    detailsText: "Notre personnel accueillant à la réception est heureux d'aider pour toute demande. Les clients profitent de salles de conférence, salles de fête, zones fumeurs, Wi-Fi gratuit, assistance pour les excursions et un jardin relaxant. Parking intérieur gratuit disponible.",
    galleryTitle: "Galerie",
    videoTitle: "Visite Vidéo",
    contactTitle: "Contactez-nous",
    phone: "📞 0666132685"
  },
  ar: {
    welcome: "مرحباً بكم في المركب السياحي أبينـو",
    subtitle: "الفخامة والراحة والضيافة",
    bookNow: "احجز الآن",
    detailsTitle: "تفاصيل الفندق",
    detailsText: "يسعد طاقم الموظفين المضياف عند قسم الاستقبال المساعدة لدى وجود أي استفسار. نضع العديد من الخدمات والتجهيزات في خدمة ضيوفنا، حيث يجدون قاعة مؤتمرات وقاعة احتفالات ومنطقة مدخنين. وتتوفر أيضاً خدمة واي فاي دون دفع رسوم إضافية. يمكن الحصول على مساعدة في حجز الرحلات والنزهات في مكتب تنظيم الجولات السياحية. بالإضافة لذلك تمنح الحديقة حيزاً مناسباً للاسترخاء والاستجمام في الهواء الطلق. يمكن للضيوف القادمين بسياراتهم الخاصة أن يصفّوها دون دفع رسوم إضافية في مرآب داخلي خاص بالمبنى.",
    galleryTitle: "المعرض",
    videoTitle: "جولة بالفيديو",
    contactTitle: "اتصل بنا",
    phone: "📞 0666132685"
  }
};

// Apply translations when language button is clicked
document.querySelectorAll('.language-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    for (let key in translations[lang]) {
      document.getElementById(key).innerText = translations[lang][key];
    }
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
