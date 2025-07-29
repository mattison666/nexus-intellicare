import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "about": "About",
      "servicesNav": "Services",
      "projects": "Projects",
      "academy": "Academy",
      "blog": "Blog",
      "contact": "Contact",
      "getStarted": "Get Started",
      
      // Hero Section
      "heroTitle": "We Shape the Future with Intelligence and Creativity",
      "heroDescription": "Innovative AI solutions that transform ideas into reality. We combine artificial intelligence with creative design to deliver exceptional digital experiences.",
      "ourProjects": "Our Projects",
      
      // About Preview
      "aboutTitle": "Why Choose AI Creative Group?",
      "aboutDescription": "We blend creativity with cutting-edge AI technology to deliver solutions that exceed expectations.",
      "creativity": "Creativity",
      "innovation": "Innovation", 
      "efficiency": "Efficiency",
      "progress": "Progress",
      "learnMore": "Learn More",
      
      // Services
      "servicesTitle": "Our Smart Services",
      "servicesDescription": "Comprehensive AI-powered solutions for modern businesses",
      "design": "Design & Identity",
      "development": "Development",
      "marketing": "Marketing", 
      "education": "Education",
      "designDesc": "AI-powered design solutions that captivate and convert",
      "developmentDesc": "Cutting-edge applications with intelligent features",
      "marketingDesc": "Data-driven strategies that amplify your reach",
      "educationDesc": "Learn the future of technology with expert guidance",
      "viewAllServices": "View All Services",
      
      // Projects
      "projectsTitle": "Featured Projects",
      "projectsDescription": "Discover our latest AI-powered innovations",
      "viewAllProjects": "View All Projects",
      
      // Testimonials
      "testimonialsTitle": "What Our Clients Say",
      "testimonialsDescription": "Real feedback from satisfied customers",
      
      // CTA
      "ctaTitle": "Start Your Project Now in One Step",
      "ctaDescription": "Transform your ideas into reality with our AI-powered solutions",
      "getFreeConsultation": "Get a Free Consultation",
      
      // Footer
      "footerDescription": "Leading the future of AI-powered creative solutions",
      "quickLinks": "Quick Links",
      "servicesFooter": "Services",
      "newsletter": "Newsletter",
      "newsletterDescription": "Stay updated with our latest innovations",
      "subscribe": "Subscribe",
      "privacyPolicy": "Privacy Policy",
      "terms": "Terms of Service",
      "allRightsReserved": "All rights reserved.",
      
      // Contact
      "contactTitle": "Let's Start Your Project",
      "contactDescription": "Ready to transform your ideas? Get in touch with our experts.",
      "name": "Name",
      "email": "Email",
      "phone": "Phone (Optional)",
      "message": "Message",
      "send": "Send Message",
      "contactInfo": "Contact Information",
      
      // About Page
      "aboutPageTitle": "About Us",
      "aboutPageDescription": "Learn more about our mission, vision, and the team behind AI Creative Group",
      "ourMission": "Our Mission",
      "ourVision": "Our Vision",
      "ourValues": "Our Values",
      "team": "Our Team",
      "missionText": "To democratize AI technology and make it accessible for creative professionals worldwide.",
      "visionText": "A world where creativity and artificial intelligence work together to solve complex problems.",
      "valuesText": "Innovation, integrity, collaboration, and excellence in everything we do.",
      
      // Services Page
      "servicesPageTitle": "Our Smart Services",
      "servicesPageDescription": "Comprehensive AI-powered solutions designed to accelerate your business growth",
      "designIdentity": "Design & Identity",
      "webDevelopment": "Web Development", 
      "smartMarketing": "Smart Marketing",
      "securityCloud": "Security & Cloud",
      "designIdentityDesc": "Logo Design, AI UI/UX, Motion Graphics & 3D",
      "webDevelopmentDesc": "Web Apps, Mobile Apps, Smart Dashboards, ChatGPT Integration",
      "smartMarketingDesc": "AI Content Generation, SMMA Campaigns, AI SEO Optimization", 
      "securityCloudDesc": "AI Penetration Testing, Data Protection, Secure Cloud Storage"
    }
  },
  ar: {
    translation: {
      // Navigation
      "home": "الرئيسية",
      "about": "من نحن",
      "servicesNav": "الخدمات",
      "projects": "المشاريع", 
      "academy": "الأكاديمية",
      "blog": "المدونة",
      "contact": "اتصل بنا",
      "getStarted": "ابدأ الآن",
      
      // Hero Section
      "heroTitle": "نصنع المستقبل بالذكاء والإبداع",
      "heroDescription": "حلول ذكية مبتكرة تحول الأفكار إلى واقع. نجمع بين الذكاء الاصطناعي والتصميم الإبداعي لتقديم تجارب رقمية استثنائية.",
      "ourProjects": "مشاريعنا",
      
      // About Preview
      "aboutTitle": "لماذا تختار مجموعة الإبداع الذكي؟",
      "aboutDescription": "نمزج الإبداع مع أحدث تقنيات الذكاء الاصطناعي لتقديم حلول تفوق التوقعات.",
      "creativity": "الإبداع",
      "innovation": "الابتكار",
      "efficiency": "الكفاءة", 
      "progress": "التقدم",
      "learnMore": "اعرف المزيد",
      
      // Services
      "servicesTitle": "خدماتنا الذكية",
      "servicesDescription": "حلول شاملة مدعومة بالذكاء الاصطناعي للشركات الحديثة",
      "design": "التصميم والهوية",
      "development": "التطوير",
      "marketing": "التسويق",
      "education": "التعليم",
      "designDesc": "حلول تصميم مدعومة بالذكاء الاصطناعي تجذب وتحول",
      "developmentDesc": "تطبيقات متطورة مع ميزات ذكية",
      "marketingDesc": "استراتيجيات مدفوعة بالبيانات تضخم وصولك",
      "educationDesc": "تعلم مستقبل التكنولوجيا مع إرشاد الخبراء",
      "viewAllServices": "عرض جميع الخدمات",
      
      // Projects
      "projectsTitle": "المشاريع المميزة",
      "projectsDescription": "اكتشف أحدث ابتكاراتنا المدعومة بالذكاء الاصطناعي",
      "viewAllProjects": "عرض جميع المشاريع",
      
      // Testimonials
      "testimonialsTitle": "ماذا يقول عملاؤنا",
      "testimonialsDescription": "تقييمات حقيقية من عملاء راضين",
      
      // CTA
      "ctaTitle": "ابدأ مشروعك الآن في خطوة واحدة",
      "ctaDescription": "حول أفكارك إلى واقع مع حلولنا المدعومة بالذكاء الاصطناعي",
      "getFreeConsultation": "احصل على استشارة مجانية",
      
      // Footer
      "footerDescription": "نقود مستقبل الحلول الإبداعية المدعومة بالذكاء الاصطناعي",
      "quickLinks": "روابط سريعة",
      "servicesFooter": "الخدمات",
      "newsletter": "النشرة الإخبارية",
      "newsletterDescription": "ابق محدثاً مع أحدث ابتكاراتنا",
      "subscribe": "اشترك",
      "privacyPolicy": "سياسة الخصوصية",
      "terms": "شروط الخدمة",
      "allRightsReserved": "جميع الحقوق محفوظة.",
      
      // Contact
      "contactTitle": "لنبدأ مشروعك",
      "contactDescription": "مستعد لتحويل أفكارك؟ تواصل مع خبرائنا.",
      "name": "الاسم",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف (اختياري)",
      "message": "الرسالة",
      "send": "إرسال الرسالة",
      "contactInfo": "معلومات التواصل",
      
      // About Page
      "aboutPageTitle": "من نحن",
      "aboutPageDescription": "تعرف على مهمتنا ورؤيتنا والفريق وراء مجموعة الإبداع الذكي",
      "ourMission": "مهمتنا",
      "ourVision": "رؤيتنا",
      "ourValues": "قيمنا",
      "team": "فريقنا",
      "missionText": "إضفاء الطابع الديمقراطي على تقنية الذكاء الاصطناعي وجعلها متاحة للمهنيين المبدعين في جميع أنحاء العالم.",
      "visionText": "عالم يعمل فيه الإبداع والذكاء الاصطناعي معاً لحل المشاكل المعقدة.",
      "valuesText": "الابتكار والنزاهة والتعاون والتميز في كل ما نقوم به.",
      
      // Services Page
      "servicesPageTitle": "خدماتنا الذكية",
      "servicesPageDescription": "حلول شاملة مدعومة بالذكاء الاصطناعي مصممة لتسريع نمو أعمالك",
      "designIdentity": "التصميم والهوية",
      "webDevelopment": "تطوير الويب",
      "smartMarketing": "التسويق الذكي",
      "securityCloud": "الأمان والحوسبة السحابية",
      "designIdentityDesc": "تصميم الشعارات، واجهة المستخدم بالذكاء الاصطناعي، الرسوم المتحركة والثلاثية الأبعاد",
      "webDevelopmentDesc": "تطبيقات الويب، تطبيقات الهاتف المحمول، لوحات التحكم الذكية، تكامل ChatGPT",
      "smartMarketingDesc": "توليد المحتوى بالذكاء الاصطناعي، حملات SMMA، تحسين SEO بالذكاء الاصطناعي",
      "securityCloudDesc": "اختبار الاختراق بالذكاء الاصطناعي، حماية البيانات، التخزين السحابي الآمن"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;