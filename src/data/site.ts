import type { Bi } from "./courses";

const b = (en: string, ar: string): Bi => ({ en, ar });

/* ------------------------------------------------------------------
   EDITABLE SITE CONFIGURATION
   Official contact channels: email fasla.dev.eg@gmail.com,
   phone / WhatsApp 01201847164. All bookings and inquiries are
   sent to the WhatsApp number. Social links are editable below.
------------------------------------------------------------------- */
export const siteConfig = {
  brand: "FASLA.DEV",
  tagline: "Code • Learn • Build",
  email: "fasla.dev.eg@gmail.com",
  phoneDisplay: "01201847164",
  phoneIntl: "+201201847164",
  whatsapp: "201201847164", // WhatsApp number (international format, no +)
  whatsappDisplay: "01201847164",
  location: b("Egypt", "مصر"),
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/share/1J9q3yjm7g/" },
    { label: "Instagram", href: "https://www.instagram.com/fasla.dev?rpxt=ajFmbXhyMHJnOWd5" },
    { label: "YouTube", href: "https://www.youtube.com/@fasla.dev_code" },
    { label: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb8zMOB89inidDnv7W47" },
    { label: "Telegram", href: "https://t.me/+WEGara2WHdozMjhk" },
    { label: "TikTok", href: "https://vm.tiktok.com/ZS9fktRWh7f57-hP8s8/" },
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
  ],
};

export const navLinks: { key: string; path: string; section?: string }[] = [
  { key: "navHome", path: "/" },
  { key: "navAbout", path: "/about" },
  { key: "navTracks", path: "/courses" },
  { key: "navProjects", path: "/", section: "projects" },
  { key: "navReviews", path: "/", section: "reviews" },
];

export const stats = [
  { value: "09", label: b("Specializations", "تخصصات رئيسية") },
  { value: "35", label: b("Development tracks", "مسار تطوير") },
  { value: "03", label: b("Practical projects weekly", "مشاريع عملية أسبوعيًا") },
  { value: "100%", label: b("Hands-on learning", "تعلّم تطبيقي") },
];

export const whyFeatures = [
  {
    icon: "route",
    title: b("Structured Learning Paths", "مسارات تعلّم منظّمة"),
    text: b(
      "Every track follows a clear sequence from fundamentals to advanced applications, so you always know what to learn next.",
      "كل مسار يتبع تسلسلًا واضحًا من الأساسيات إلى التطبيقات المتقدمة، لتعرف دائمًا ما ستتعلمه بعد ذلك."
    ),
  },
  {
    icon: "layers",
    title: b("Modern Technologies", "تقنيات حديثة"),
    text: b(
      "We teach the tools used in professional teams today: React, Node.js, Flutter, Firebase, SQL, MongoDB and more.",
      "نعلّم الأدوات المستخدمة في الفرق الاحترافية اليوم: React وNode.js وFlutter وFirebase وSQL وMongoDB وغيرها."
    ),
  },
  {
    icon: "code",
    title: b("Hands-On Development", "تطوير عملي"),
    text: b(
      "You write code from the first week. Concepts are applied immediately instead of being stored as theory.",
      "تكتب كودًا من الأسبوع الأول. تُطبق المفاهيم فورًا بدلًا من تخزينها كنظرية."
    ),
  },
  {
    icon: "calendar",
    title: b("Weekly Practical Projects", "مشاريع عملية أسبوعية"),
    text: b(
      "Three practical projects or assignments every week, calibrated to your current level and the track stage.",
      "ثلاثة مشاريع أو واجبات عملية كل أسبوع، مضبوطة على مستواك الحالي ومرحلة المسار."
    ),
  },
  {
    icon: "grid",
    title: b("Multiple Specializations", "تخصصات متعددة"),
    text: b(
      "Web, mobile, AI, data, cybersecurity, cloud, games, UI/UX and QA — nine specializations under one academy.",
      "الويب والموبايل والذكاء الاصطناعي والبيانات والأمن السيبراني والسحابة والألعاب وتصميم UI/UX وضمان الجودة — تسعة تخصصات في أكاديمية واحدة."
    ),
  },
  {
    icon: "briefcase",
    title: b("Portfolio Development", "بناء ملف الأعمال"),
    text: b(
      "Your weekly work becomes a structured portfolio that demonstrates how you think, build and solve problems.",
      "يتحول عملك الأسبوعي إلى ملف أعمال منظّم يوضح كيف تفكر وتبني وتحل المشكلات."
    ),
  },
  {
    icon: "puzzle",
    title: b("Problem-Solving Skills", "مهارات حل المشكلات"),
    text: b(
      "We train debugging, reasoning and engineering decisions — the abilities that outlast any specific framework.",
      "ندربك على تصحيح الأخطاء والتفكير المنطقي واتخاذ القرارات الهندسية — مهارات تدوم أطول من أي إطار عمل."
    ),
  },
  {
    icon: "target",
    title: b("Career-Oriented Education", "تعليم موجّه للمسار المهني"),
    text: b(
      "Learning is organised around professional practice, code quality and portfolio-ready delivery — without promising employment.",
      "ينظم التعلم حول الممارسة الاحترافية وجودة الكود والتسليم الجاهز لملف الأعمال — دون وعود بتوظيف."
    ),
  },
];

export const projectLevels = [
  {
    code: "01",
    title: b("Beginner", "المبتدئ"),
    text: b(
      "Build your confidence with small, focused pieces of software.",
      "ابنِ ثقتك بقطع برمجية صغيرة ومركزة."
    ),
    points: [
      b("Simple interfaces", "واجهات بسيطة"),
      b("Basic programming exercises", "تمارين برمجية أساسية"),
      b("Fundamental logic", "منطق برمجي أساسي"),
      b("Small interactive applications", "تطبيقات تفاعلية صغيرة"),
    ],
  },
  {
    code: "02",
    title: b("Intermediate", "المتوسط"),
    text: b(
      "Connect interfaces to real data and real services.",
      "اربط الواجهات ببيانات حقيقية وخدمات حقيقية."
    ),
    points: [
      b("Dynamic applications", "تطبيقات ديناميكية"),
      b("API integration", "التكامل مع الـ APIs"),
      b("Database operations", "عمليات قواعد البيانات"),
      b("Structured software projects", "مشاريع برمجية منظمة"),
    ],
  },
  {
    code: "03",
    title: b("Advanced", "المتقدم"),
    text: b(
      "Work on larger systems with professional structure.",
      "اعمل على أنظمة أكبر بهيكل احترافي."
    ),
    points: [
      b("Complete applications", "تطبيقات متكاملة"),
      b("Professional architecture", "هندسة احترافية"),
      b("Complex functionality", "وظائف معقدة"),
      b("Real-world development scenarios", "سيناريوهات تطوير واقعية"),
    ],
  },
  {
    code: "04",
    title: b("Final Projects", "مشاريع التخرج"),
    text: b(
      "Ship a portfolio project you can explain end to end.",
      "أطلق مشروعًا لملف أعمالك يمكنك شرحه من البداية إلى النهاية."
    ),
    points: [
      b("Complete portfolio projects", "مشاريع متكاملة لملف الأعمال"),
      b("Practical application development", "تطوير تطبيقات عملية"),
      b("Professional code organization", "تنظيم كود احترافي"),
      b("Project presentation", "عرض المشروع وتقديمه"),
    ],
  },
];

export const projectExamples = [
  b("Responsive business websites", "مواقع أعمال متجاوبة"),
  b("Interactive dashboards", "لوحات تحكم تفاعلية"),
  b("E-commerce interfaces", "واجهات متاجر إلكترونية"),
  b("Authentication systems", "أنظمة مصادقة"),
  b("REST APIs", "واجهات REST API"),
  b("Full-stack applications", "تطبيقات متكاملة"),
  b("Mobile applications", "تطبيقات موبايل"),
  b("Database-driven systems", "أنظمة تعتمد على قواعد البيانات"),
];

export type Testimonial = {
  name: Bi;
  track: Bi;
  review: Bi;
  rating: number;
};

/* Placeholder reviews — clearly labelled as samples until real
   student feedback is collected. Fictional Egyptian students. */
export const testimonials: Testimonial[] = [
  {
    name: b("Ahmed Hassan", "أحمد حسن"),
    track: b("Frontend Development", "تطوير الواجهات الأمامية"),
    rating: 5,
    review: b(
      "The weekly projects made the biggest difference. I stopped just watching tutorials and started shipping interfaces every week.",
      "المشاريع الأسبوعية أحدثت أكبر فرق. توقفت عن مشاهدة الدروس فقط وبدأت أنشر واجهات كل أسبوع."
    ),
  },
  {
    name: b("Mariam Khaled", "مريم خالد"),
    track: b("Full Stack Development", "التطبيقات المتكاملة"),
    rating: 5,
    review: b(
      "The full-stack track connected everything I had learned separately. I finally understand how a real product fits together.",
      "مسار التطبيقات المتكاملة ربط كل ما تعلمته منفصلًا. فهمت أخيرًا كيف يترابط المنتج الحقيقي."
    ),
  },
  {
    name: b("Youssef Ibrahim", "يوسف إبراهيم"),
    track: b("Backend Development", "الواجهات الخلفية"),
    rating: 5,
    review: b(
      "Security and authentication were explained with real scenarios, not just definitions. That changed how I write APIs.",
      "شرحوا الأمان والمصادقة بسيناريوهات حقيقية، لا مجرد تعريفات. هذا غيّر طريقة كتابتي للـ APIs."
    ),
  },
  {
    name: b("Nour El-Sayed", "نور السيد"),
    track: b("Cross-Platform Development", "تطوير التطبيقات متعددة المنصات"),
    rating: 5,
    review: b(
      "Building a mobile app from an empty folder to a published build felt unreal. The feedback on every project was specific and useful.",
      "بناء تطبيق موبايل من مجلد فارغ إلى نسخة منشورة كان أمرًا رائعًا. الملاحظات على كل مشروع كانت دقيقة ومفيدة."
    ),
  },
  {
    name: b("Omar Mostafa", "عمر مصطفى"),
    track: b("Cross-Platform Development", "تطوير التطبيقات متعددة المنصات"),
    rating: 4,
    review: b(
      "I liked that we used Expo and tested on real devices early. It made mobile development much less intimidating.",
      "أعجبني أننا استخدمنا Expo واختبرنا على أجهزة حقيقية مبكرًا. هذا جعل تطوير الموبايل أقل إثارة للخوف."
    ),
  },
  {
    name: b("Salma Adel", "سلمى عادل"),
    track: b("Frontend Development", "تطوير الواجهات الأمامية"),
    rating: 5,
    review: b(
      "The structure is serious. Three practical assignments every week kept me consistent, even with university pressure.",
      "الهيكل جاد. ثلاثة واجبات عملية كل أسبوع حافظت على التزامي، حتى مع ضغط الجامعة."
    ),
  },
  {
    name: b("Karim Fathy", "كريم فتحي"),
    track: b("Android Development", "تطوير تطبيقات أندرويد"),
    rating: 5,
    review: b(
      "Jetpack Compose finally made sense after the architecture lessons. I now read Android documentation with confidence.",
      "أصبح Jetpack Compose واضحًا بعد دروس الهندسة. صرت أقرأ توثيق Android بثقة."
    ),
  },
  {
    name: b("Hana Tarek", "هنا طارق"),
    track: b("iOS Development", "تطوير تطبيقات iOS"),
    rating: 5,
    review: b(
      "The instructors focus on why code is written a certain way. That is rare and it made me a better problem solver.",
      "المدربون يركزون على سبب كتابة الكود بطريقة معينة. هذا نادر وجعلني أفضل في حل المشكلات."
    ),
  },
  {
    name: b("Mahmoud Ali", "محمود علي"),
    track: b("Full Stack Development", "التطبيقات المتكاملة"),
    rating: 5,
    review: b(
      "The capstone project is the strongest part of my portfolio. Interviewers ask about it in every conversation.",
      "مشروع التخرج هو أقوى جزء في ملف أعمالي. يسألني عنه كل من أتحدث معه."
    ),
  },
  {
    name: b("Farida Samir", "فريدة سمير"),
    track: b("Backend Development", "الواجهات الخلفية"),
    rating: 4,
    review: b(
      "Databases were my weakest area. The step-by-step design exercises made SQL and MongoDB much clearer.",
      "قواعد البيانات كانت أضعف نقطة عندي. تمارين التصميم خطوة بخطوة جعلت SQL وMongoDB أوضح بكثير."
    ),
  },
  {
    name: b("Ziad Nabil", "زياد نبيل"),
    track: b("Cross-Platform Development", "تطوير التطبيقات متعددة المنصات"),
    rating: 5,
    review: b(
      "I came from a non-technical background. The first month built the fundamentals I was missing, and everything after that made sense.",
      "جئت من خلفية غير تقنية. الشهر الأول بنى الأساسيات التي كنت أفتقدها، وكل ما بعده أصبح منطقيًا."
    ),
  },
  {
    name: b("Rana Hossam", "رنا حسام"),
    track: b("Cross-Platform Development", "تطوير التطبيقات متعددة المنصات"),
    rating: 5,
    review: b(
      "What I value most is the engineering discipline: clean structure, readable code and projects I can actually explain.",
      "أكثر ما أقدّره هو الانضباط الهندسي: هيكل نظيف وكود مقروء ومشاريع أستطيع شرحها فعليًا."
    ),
  },
];

export const governorates = [
  b("Cairo", "القاهرة"),
  b("Giza", "الجيزة"),
  b("Alexandria", "الإسكندرية"),
  b("Port Said", "بورسعيد"),
  b("Suez", "السويس"),
  b("North Sinai", "شمال سيناء"),
  b("South Sinai", "جنوب سيناء"),
  b("Damietta", "دمياط"),
  b("Dakahlia", "الدقهلية"),
  b("Sharqia", "الشرقية"),
  b("Qalyubia", "القليوبية"),
  b("Kafr El-Sheikh", "كفر الشيخ"),
  b("Gharbia", "الغربية"),
  b("Monufia", "المنوفية"),
  b("Beheira", "البحيرة"),
  b("Ismailia", "الإسماعيلية"),
  b("Faiyum", "الفيوم"),
  b("Beni Suef", "بني سويف"),
  b("Minya", "المنيا"),
  b("Asyut", "أسيوط"),
  b("Sohag", "سوهاج"),
  b("Qena", "قنا"),
  b("Luxor", "الأقصر"),
  b("Aswan", "أسوان"),
  b("Red Sea", "البحر الأحمر"),
  b("New Valley", "الوادي الجديد"),
  b("Matrouh", "مطروح"),
];

export const educationLevels = [
  b("High school student", "طالب ثانوي"),
  b("High school graduate", "خريج ثانوي"),
  b("University student", "طالب جامعي"),
  b("University graduate", "خريج جامعي"),
  b("Postgraduate student", "طالب دراسات عليا"),
  b("Other", "أخرى"),
];

export const experienceLevels = [
  b("No previous experience", "لا توجد خبرة سابقة"),
  b("Some self-learning", "بعض التعلم الذاتي"),
  b("One or two small projects", "مشروع أو مشروعان صغيران"),
  b("Professional experience", "خبرة مهنية"),
];

export const contactTimes = [
  b("Morning (9 AM – 12 PM)", "صباحًا (9 ص – 12 م)"),
  b("Afternoon (12 PM – 4 PM)", "بعد الظهر (12 م – 4 م)"),
  b("Evening (4 PM – 8 PM)", "مساءً (4 م – 8 م)"),
  b("Any time", "أي وقت"),
];

export const legalPages = {
  privacy: {
    title: b("Privacy Policy", "سياسة الخصوصية"),
    updated: b("Last updated: January 2026", "آخر تحديث: يناير 2026"),
    intro: b(
      "This policy explains how FASLA.DEV handles information when you use this website and the course booking form.",
      "توضح هذه السياسة كيف يتعامل FASLA.DEV مع المعلومات عند استخدامك هذا الموقع ونموذج حجز المقعد."
    ),
    sections: [
      {
        heading: b("Information you provide", "المعلومات التي تقدمها"),
        body: [
          b(
            "The booking form collects details you choose to share, such as your name, age, governorate, contact information, educational background and learning goals.",
            "يجمع نموذج الحجز التفاصيل التي تختار مشاركتها، مثل الاسم والعمر والمحافظة ومعلومات الاتصال والخلفية التعليمية وأهداف التعلم."
          ),
          b(
            "This is a frontend demonstration. Form submissions are not transmitted to or stored on a server by this website.",
            "هذا الموقع عرض واجهة أمامية. لا تُرسل بيانات النموذج إلى خادم ولا تُخزن عليه من خلال هذا الموقع."
          ),
        ],
      },
      {
        heading: b("Local storage", "التخزين المحلي"),
        body: [
          b(
            "Your language preference and an optional booking draft are saved in your browser's localStorage so you can continue later. You can clear this data at any time through your browser settings.",
            "يُحفظ تفضيل اللغة ومسودة الحجز الاختيارية في ذاكرة التخزين المحلية بمتصفحك حتى تتمكن من المتابعة لاحقًا. يمكنك مسح هذه البيانات في أي وقت من إعدادات المتصفح."
          ),
        ],
      },
      {
        heading: b("Contact and WhatsApp", "التواصل وWhatsApp"),
        body: [
          b(
            "If you choose to continue through WhatsApp, the details you entered are used to prepare a message in your own WhatsApp session. FASLA.DEV only receives what you decide to send.",
            "إذا اخترت المتابعة عبر WhatsApp، تُستخدم التفاصيل التي أدخلتها لتجهيز رسالة في جلسة WhatsApp الخاصة بك. لا يستقبل FASLA.DEV إلا ما تقرر إرساله."
          ),
        ],
      },
      {
        heading: b("Your choices", "خياراتك"),
        body: [
          b(
            "You may request correction or deletion of any information you have shared by contacting the official FASLA.DEV email address.",
            "يمكنك طلب تصحيح أو حذف أي معلومات شاركتها بالتواصل مع البريد الإلكتروني الرسمي لـ FASLA.DEV."
          ),
        ],
      },
    ],
  },
  terms: {
    title: b("Terms and Conditions", "الشروط والأحكام"),
    updated: b("Last updated: January 2026", "آخر تحديث: يناير 2026"),
    intro: b(
      "These terms describe the use of the FASLA.DEV website and the general conditions of enrolling in a development track.",
      "تصف هذه الشروط استخدام موقع FASLA.DEV والشروط العامة للالتحاق بأحد مسارات التطوير."
    ),
    sections: [
      {
        heading: b("Course information", "معلومات المسارات"),
        body: [
          b(
            "Course names, curricula and price ranges are published for information and may be updated. Your exact price inside the published range is confirmed with the FASLA.DEV team before booking.",
            "تُنشر أسماء المسارات والمناهج ونطاقات الأسعار للعلم، وقد يتم تحديثها. يتم تأكيد سعرك النهائي داخل النطاق المنشور مع فريق FASLA.DEV قبل الحجز."
          ),
          b(
            "Seat reservation is confirmed only after direct communication with the FASLA.DEV team and completion of the agreed payment steps.",
            "لا يتم تأكيد حجز المقعد إلا بعد التواصل المباشر مع فريق FASLA.DEV وإتمام خطوات الدفع المتفق عليها."
          ),
        ],
      },
      {
        heading: b("Learning commitment", "الالتزام بالتعلم"),
        body: [
          b(
            "Tracks are practical and require regular weekly work, including three projects or assignments per week. Progress depends on your own effort and consistency.",
            "المسارات عملية وتتطلب عملًا أسبوعيًا منتظمًا، بما في ذلك ثلاثة مشاريع أو واجبات أسبوعيًا. يعتمد التقدم على جهدك ومواظبتك."
          ),
        ],
      },
      {
        heading: b("No employment guarantee", "لا ضمان للتوظيف"),
        body: [
          b(
            "FASLA.DEV provides education and portfolio development. We do not guarantee employment, salary levels or a specific career outcome.",
            "يقدم FASLA.DEV تعليمًا وبناء ملف أعمال. لا نضمن التوظيف أو مستوى الراتب أو نتيجة مهنية محددة."
          ),
        ],
      },
      {
        heading: b("Intellectual property", "الملكية الفكرية"),
        body: [
          b(
            "The FASLA.DEV name, logo, learning materials and website content belong to FASLA.DEV and may not be reused commercially without written permission.",
            "اسم FASLA.DEV وشعبه ومواد التعلم ومحتوى الموقع مملوكة لـ FASLA.DEV ولا يجوز إعادة استخدامها تجاريًا دون إذن كتابي."
          ),
        ],
      },
    ],
  },
  refund: {
    title: b("Refund Policy", "سياسة الاسترجاع"),
    updated: b("Last updated: January 2026", "آخر تحديث: يناير 2026"),
    intro: b(
      "We want enrolment decisions to be clear and fair. This policy summarises the refund principles for FASLA.DEV tracks.",
      "نريد أن تكون قرارات الالتحاق واضحة وعادلة. تلخص هذه السياسة مبادئ استرجاع الرسوم لمسارات FASLA.DEV."
    ),
    sections: [
      {
        heading: b("Before the track starts", "قبل بدء المسار"),
        body: [
          b(
            "If you cancel before the start date confirmed by the FASLA.DEV team, the refund terms shared with your booking confirmation apply.",
            "إذا ألغيت قبل تاريخ البدء الذي يؤكده فريق FASLA.DEV، تُطبق شروط الاسترجاع المرفقة بتأكيد حجزك."
          ),
        ],
      },
      {
        heading: b("After the track starts", "بعد بدء المسار"),
        body: [
          b(
            "Refunds after the start date are assessed case by case according to the terms provided at enrolment. Always request the written terms before paying.",
            "تُقيَّم طلبات الاسترجاع بعد تاريخ البدء حالة بحالة وفق الشروط المقدمة عند التسجيل. اطلب الشروط الكتابية دائمًا قبل الدفع."
          ),
        ],
      },
      {
        heading: b("How to request", "كيفية الطلب"),
        body: [
          b(
            "Contact the official FASLA.DEV email with your full name, selected track, booking date and reason for the request. Keep any payment confirmation you received.",
            "تواصل مع البريد الإلكتروني الرسمي لـ FASLA.DEV مع اسمك الكامل والمسار المختار وتاريخ الحجز وسبب الطلب، واحتفظ بأي إثبات دفع استلمته."
          ),
        ],
      },
      {
        heading: b("Important note", "ملاحظة مهمة"),
        body: [
          b(
            "This website does not process payments or store registrations. All financial and contractual details are confirmed directly with the academy team.",
            "لا يعالج هذا الموقع المدفوعات ولا يخزن التسجيلات. تُؤكد جميع التفاصيل المالية والتعاقدية مباشرة مع فريق الأكاديمية."
          ),
        ],
      },
    ],
  },
};

export type LegalKey = keyof typeof legalPages;
