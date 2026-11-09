/* ------------------------------------------------------------------
   FASLA.DEV — central catalog data
   9 specializations (majors) · 35 tracks.
   Prices are OFFICIAL RANGES in Egyptian Pounds (EGP) per track.
   Edit a price here and it updates across the whole website.
------------------------------------------------------------------- */

export type Bi = { ar: string; en: string };

const b = (en: string, ar: string): Bi => ({ en, ar });
const p = (en: string, ar: string): Bi => ({ en, ar });

export const LEVEL = {
  beginner: b("Beginner", "مبتدئ"),
  beginnerIntermediate: b("Beginner → Intermediate", "من المبتدئ إلى المتوسط"),
  beginnerAdvanced: b("Beginner → Advanced", "من المبتدئ إلى المتقدم"),
  intermediate: b("Intermediate", "متوسط"),
  advanced: b("Advanced", "متقدم"),
};

export type Major = {
  slug: string;
  index: string;
  icon: string;
  name: Bi;
  concept: Bi;
  objectives: Bi[];
};

export type Course = {
  slug: string;
  index: string;
  major: string;
  icon: string;
  name: Bi;
  description: Bi;
  level: Bi;
  priceMin: number;
  priceMax: number;
  weeklyProjects: number;
  technologies: string[];
  projects: Bi[];
  featured?: boolean;
};

export const majors: Major[] = [
  {
    slug: "web-development",
    index: "01",
    icon: "layout",
    name: b("Web Development", "تطوير الويب"),
    concept: b(
      "Building websites, web applications, online platforms, and systems that operate through the internet.",
      "بناء المواقع وتطبيقات الويب والمنصات والأنظمة التي تعمل عبر الإنترنت."
    ),
    objectives: [
      b("Build complete, responsive web interfaces and server-side systems.", "بناء واجهات ويب متكاملة ومتجاوبة وأنظمة خادم."),
      b("Work with modern frameworks, databases and REST APIs.", "العمل مع أطر حديثة وقواعد بيانات وواجهات REST."),
      b("Apply authentication, security and testing fundamentals.", "تطبيق أساسيات المصادقة والأمان والاختبار."),
      b("Deploy and maintain real web applications.", "نشر تطبيقات ويب حقيقية وصيانتها."),
    ],
  },
  {
    slug: "mobile-development",
    index: "02",
    icon: "device",
    name: b("Mobile App Development", "تطوير تطبيقات الموبايل"),
    concept: b(
      "Developing applications for smartphones and tablets, including Android and iOS applications.",
      "تطوير تطبيقات الهواتف الذكية والأجهزة اللوحية، بما في ذلك تطبيقات أندرويد وiOS."
    ),
    objectives: [
      b("Design native-quality mobile interfaces and user flows.", "تصميم واجهات موبايل بجودة أصلية وتدفقات مستخدم واضحة."),
      b("Connect apps to APIs, Firebase and local storage.", "ربط التطبيقات بواجهات برمجية وFirebase والتخزين المحلي."),
      b("Manage app state, navigation and notifications.", "إدارة حالة التطبيق والتنقل والإشعارات."),
      b("Publish and maintain apps on Google Play and the App Store.", "نشر التطبيقات وصيانتها على Google Play وApp Store."),
    ],
  },
  {
    slug: "ai-ml",
    index: "03",
    icon: "spark",
    name: b("Artificial Intelligence & Machine Learning", "الذكاء الاصطناعي وتعلم الآلة"),
    concept: b(
      "Developing intelligent systems that analyze data, learn from information, recognize patterns, predict results, and generate content.",
      "تطوير أنظمة ذكية تحلل البيانات وتتعلم من المعلومات وتتعرف على الأنماط وتتنبأ بالنتائج وتنشئ المحتوى."
    ),
    objectives: [
      b("Write Python code for data-driven and intelligent systems.", "كتابة كود بايثون لأنظمة تعتمد على البيانات والذكاء الاصطناعي."),
      b("Train, evaluate and improve machine learning models.", "تدريب نماذج تعلم الآلة وتقييمها وتحسينها."),
      b("Work with modern AI tools, APIs and model pipelines.", "العمل مع أدوات وواجهات وخطوط نماذج ذكاء اصطناعي حديثة."),
      b("Build practical AI features for real products.", "بناء ميزات ذكاء اصطناعي عملية لمنتجات حقيقية."),
    ],
  },
  {
    slug: "data-science",
    index: "04",
    icon: "chart",
    name: b("Data Science & Data Analytics", "علم البيانات وتحليل البيانات"),
    concept: b(
      "Collecting, cleaning, analyzing, and visualizing data to help organizations make better business decisions.",
      "جمع البيانات وتنظيفها وتحليلها وعرضها بصريًا لمساعدة المؤسسات على اتخاذ قرارات أعمال أفضل."
    ),
    objectives: [
      b("Clean, analyze and visualize data with professional tools.", "تنظيف البيانات وتحليلها وعرضها بصريًا بأدوات احترافية."),
      b("Write efficient SQL and design useful databases.", "كتابة استعلامات SQL فعالة وتصميم قواعد بيانات مفيدة."),
      b("Build dashboards and KPIs that support decisions.", "بناء لوحات معلومات ومؤشرات أداء تدعم القرارات."),
      b("Turn raw data into clear business insights.", "تحويل البيانات الخام إلى رؤى أعمال واضحة."),
    ],
  },
  {
    slug: "cybersecurity",
    index: "05",
    icon: "shield",
    name: b("Cybersecurity", "الأمن السيبراني"),
    concept: b(
      "Protecting computer systems, networks, applications, and sensitive information against cyberattacks and security threats.",
      "حماية أنظمة الكمبيوتر والشبكات والتطبيقات والمعلومات الحساسة من الهجمات والتهديدات السيبرانية."
    ),
    objectives: [
      b("Understand networks, systems and common attack surfaces.", "فهم الشبكات والأنظمة وأسطح الهجوم الشائعة."),
      b("Monitor, detect and respond to security incidents.", "مراقبة الحوادث الأمنية واكتشافها والاستجابة لها."),
      b("Test systems ethically inside controlled lab environments.", "اختبار الأنظمة بطريقة أخلاقية داخل بيئات معملية آمنة."),
      b("Document findings with professional security reports.", "توثيق النتائج بتقارير أمنية احترافية."),
    ],
  },
  {
    slug: "cloud-devops",
    index: "06",
    icon: "cloud",
    name: b("Cloud Computing & DevOps", "الحوسبة السحابية وDevOps"),
    concept: b(
      "Managing cloud infrastructure, automating software development and deployment, and ensuring application reliability and scalability.",
      "إدارة البنية التحتية السحابية وأتمتة تطوير البرمجيات ونشرها وضمان موثوقية التطبيقات وقابليتها للتوسع."
    ),
    objectives: [
      b("Administer Linux servers and cloud infrastructure.", "إدارة خوادم لينكس والبنية التحتية السحابية."),
      b("Automate deployment with containers and CI/CD pipelines.", "أتمتة النشر بالحاويات وخطوط CI/CD."),
      b("Monitor systems and design for reliability and scale.", "مراقبة الأنظمة والتصميم من أجل الموثوقية والتوسع."),
      b("Apply cloud security, backup and cost fundamentals.", "تطبيق أساسيات أمان السحابة والنسخ الاحتياطي والتكلفة."),
    ],
  },
  {
    slug: "game-development",
    index: "07",
    icon: "game",
    name: b("Game Development", "تطوير الألعاب"),
    concept: b(
      "Creating 2D and 3D video games for computers, consoles, mobile devices, and virtual environments.",
      "إنشاء ألعاب فيديو ثنائية وثلاثية الأبعاد لأجهزة الكمبيوتر والمنصات والموبايل والبيئات الافتراضية."
    ),
    objectives: [
      b("Build 2D and 3D games with professional engines.", "بناء ألعاب ثنائية وثلاثية الأبعاد بمحركات احترافية."),
      b("Program gameplay, physics, animation and game AI.", "برمجة أسلوب اللعب والفيزياء والرسوم المتحركة وذكاء الألعاب."),
      b("Design levels, mechanics and balanced player experiences.", "تصميم المراحل والميكانيكيات وتجارب لعب متوازنة."),
      b("Optimize and test complete playable prototypes.", "تحسين نماذج ألعاب قابلة للعب واختبارها."),
    ],
  },
  {
    slug: "ui-ux-design",
    index: "08",
    icon: "pen",
    name: b("UI/UX Design", "تصميم واجهات وتجربة المستخدم"),
    concept: b(
      "Designing digital interfaces and user experiences that make websites and applications easy, attractive, and efficient to use.",
      "تصميم واجهات وتجارب رقمية تجعل المواقع والتطبيقات سهلة وجذابة وفعالة في الاستخدام."
    ),
    objectives: [
      b("Design clear, attractive and responsive interfaces.", "تصميم واجهات واضحة وجذابة ومتجاوبة."),
      b("Research users and map journeys, personas and flows.", "بحث المستخدمين ورسم الرحلات والشخصيات والتدفقات."),
      b("Build prototypes and design systems in Figma.", "بناء نماذج أولية وأنظمة تصميم في Figma."),
      b("Test usability and hand off designs to developers.", "اختبار سهولة الاستخدام وتسليم التصاميم للمطورين."),
    ],
  },
  {
    slug: "software-engineering-qa",
    index: "09",
    icon: "bug",
    name: b("Software Engineering & Quality Assurance (QA)", "هندسة البرمجيات وضمان الجودة"),
    concept: b(
      "Building reliable software through structured development, software architecture, testing, and quality control.",
      "بناء برمجيات موثوقة عبر التطوير المنظم وهندسة البرمجيات والاختبار ومراقبة الجودة."
    ),
    objectives: [
      b("Apply software engineering and clean architecture fundamentals.", "تطبيق أساسيات هندسة البرمجيات والهندسة النظيفة."),
      b("Design test cases, scenarios and professional bug reports.", "تصميم حالات وسيناريوهات اختبار وتقارير أخطاء احترافية."),
      b("Automate web and API tests with modern frameworks.", "أتمتة اختبارات الويب والواجهات البرمجية بأطر حديثة."),
      b("Measure performance and document quality results.", "قياس الأداء وتوثيق نتائج الجودة."),
    ],
  },
];

export const getMajor = (slug: string): Major =>
  majors.find((major) => major.slug === slug) ?? majors[0];

type RawCourse = {
  slug: string;
  major: string;
  name: Bi;
  description: Bi;
  level: Bi;
  priceMin: number;
  priceMax: number;
  technologies: string[];
  projects: Bi[];
  featured?: boolean;
};

const raw: RawCourse[] = [
  /* ---------------- 01 · Web Development ---------------- */
  {
    slug: "front-end-development",
    major: "web-development",
    name: b("Front-End Development", "تطوير الواجهات الأمامية"),
    description: b(
      "Build fast, responsive and professional interfaces with HTML, CSS, JavaScript, React, TypeScript and Next.js.",
      "ابنِ واجهات سريعة ومتجاوبة واحترافية باستخدام HTML وCSS وJavaScript وReact وTypeScript وNext.js."
    ),
    level: LEVEL.beginnerAdvanced,
    priceMin: 5000,
    priceMax: 8000,
    technologies: ["HTML5", "CSS3", "Responsive Web Design", "JavaScript", "DOM Manipulation", "Git & GitHub", "React.js", "TypeScript", "Next.js", "API Integration"],
    projects: [
      p("Business Website", "موقع أعمال"),
      p("E-commerce Website", "موقع تجارة إلكترونية"),
      p("Admin Dashboard", "لوحة تحكم إدارية"),
      p("Educational Platform", "منصة تعليمية"),
      p("Booking Website", "موقع حجوزات"),
    ],
  },
  {
    slug: "back-end-development",
    major: "web-development",
    name: b("Back-End Development", "تطوير الواجهات الخلفية"),
    description: b(
      "Engineer secure APIs, databases and server-side systems with Node.js, Laravel or ASP.NET Core.",
      "ابنِ واجهات برمجية آمنة وقواعد بيانات وأنظمة خادم باستخدام Node.js أو Laravel أو ASP.NET Core."
    ),
    level: LEVEL.beginnerAdvanced,
    priceMin: 6000,
    priceMax: 9000,
    technologies: ["Programming Fundamentals", "JavaScript / Python / PHP / C#", "Node.js / Laravel / ASP.NET Core", "REST APIs", "SQL", "MySQL / PostgreSQL", "MongoDB", "Authentication & Authorization", "Security Fundamentals", "Testing & Debugging", "Server Deployment"],
    projects: [
      p("Authentication System", "نظام مصادقة"),
      p("Inventory Management System", "نظام إدارة المخزون"),
      p("Booking Management System", "نظام إدارة الحجوزات"),
      p("E-commerce API", "واجهة برمجية لمتجر إلكتروني"),
      p("Employee Management System", "نظام إدارة الموظفين"),
    ],
  },
  {
    slug: "full-stack-development",
    major: "web-development",
    name: b("Full-Stack Development", "التطوير المتكامل (Full-Stack)"),
    description: b(
      "Own the complete product: interface, server, database, testing and deployment in one integrated path.",
      "امتلك المنتج كاملًا: الواجهة والخادم وقاعدة البيانات والاختبار والنشر في مسار واحد متكامل."
    ),
    level: LEVEL.beginnerAdvanced,
    priceMin: 10000,
    priceMax: 16000,
    technologies: ["HTML & CSS", "JavaScript", "React.js / Next.js", "Node.js / Laravel / ASP.NET", "Database Management", "REST APIs", "Authentication", "Git & GitHub", "Testing", "Deployment", "System Design Fundamentals"],
    projects: [
      p("Complete E-commerce Platform", "منصة تجارة إلكترونية متكاملة"),
      p("Learning Management System", "نظام إدارة التعلم"),
      p("ERP System", "نظام تخطيط موارد المؤسسات"),
      p("Company Management Platform", "منصة إدارة شركات"),
      p("Complete Booking Application", "تطبيق حجوزات متكامل"),
    ],
    featured: true,
  },
  /* ---------------- 02 · Mobile ---------------- */
  {
    slug: "android-development",
    major: "mobile-development",
    name: b("Android Development", "تطوير تطبيقات أندرويد"),
    description: b(
      "Build native Android applications with Kotlin, Android Studio and Jetpack Compose, and publish them on Google Play.",
      "ابنِ تطبيقات أندرويد أصلية باستخدام Kotlin وAndroid Studio وJetpack Compose وانشرها على Google Play."
    ),
    level: LEVEL.beginnerAdvanced,
    priceMin: 7000,
    priceMax: 11000,
    technologies: ["Kotlin", "Java Fundamentals", "Android Studio", "XML / Jetpack Compose", "Activities & Navigation", "REST APIs", "Firebase", "SQLite / Room Database", "Notifications", "Google Play Deployment"],
    projects: [
      p("To-Do Application", "تطبيق مهام"),
      p("Food Delivery Application", "تطبيق توصيل طعام"),
      p("E-commerce Application", "تطبيق تجارة إلكترونية"),
      p("Chat Application", "تطبيق محادثة"),
    ],
  },
  {
    slug: "ios-development",
    major: "mobile-development",
    name: b("iOS Development", "تطوير تطبيقات iOS"),
    description: b(
      "Create polished native iOS applications with Swift, SwiftUI and Xcode, from interface to App Store deployment.",
      "أنشئ تطبيقات iOS أصلية أنيقة باستخدام Swift وSwiftUI وXcode، من الواجهة إلى النشر على App Store."
    ),
    level: LEVEL.beginnerAdvanced,
    priceMin: 8000,
    priceMax: 12000,
    technologies: ["Swift", "SwiftUI", "Xcode", "UI Development", "APIs", "Core Data", "Authentication", "Push Notifications", "App Store Deployment"],
    projects: [
      p("Expense Management App", "تطبيق إدارة المصروفات"),
      p("Booking Application", "تطبيق حجوزات"),
      p("E-commerce App", "تطبيق تجارة إلكترونية"),
      p("Service Application", "تطبيق خدمات"),
    ],
  },
  {
    slug: "cross-platform-development",
    major: "mobile-development",
    name: b("Cross-Platform Development", "تطوير التطبيقات متعددة المنصات"),
    description: b(
      "Ship one codebase to Android and iOS with Flutter, Dart and React Native, backed by Firebase and REST APIs.",
      "أطلق كودًا واحدًا على أندرويد وiOS باستخدام Flutter وDart وReact Native مع Firebase وواجهات REST."
    ),
    level: LEVEL.beginnerAdvanced,
    priceMin: 7000,
    priceMax: 10000,
    technologies: ["Flutter", "Dart", "React Native", "State Management", "Firebase", "REST APIs", "Local Storage", "App Deployment"],
    projects: [
      p("E-commerce App", "تطبيق تجارة إلكترونية"),
      p("Restaurant App", "تطبيق مطعم"),
      p("Delivery App", "تطبيق توصيل"),
      p("Educational App", "تطبيق تعليمي"),
    ],
  },
  /* ---------------- 03 · AI & ML ---------------- */
  {
    slug: "python-for-ai",
    major: "ai-ml",
    name: b("Python for AI", "بايثون للذكاء الاصطناعي"),
    description: b(
      "Master Python, data structures and the mathematics foundation required for artificial intelligence.",
      "أتقن بايثون وهياكل البيانات والأساس الرياضي المطلوب للذكاء الاصطناعي."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 4000,
    priceMax: 6000,
    technologies: ["Python Fundamentals", "Object-Oriented Programming", "Data Structures", "Algorithms", "NumPy", "Pandas", "Matplotlib", "Statistics", "Probability", "Linear Algebra Fundamentals"],
    projects: [
      p("Sales Data Analysis", "تحليل بيانات المبيعات"),
      p("Excel Automation Tool", "أداة أتمتة Excel"),
      p("Basic Prediction Application", "تطبيق تنبؤ بسيط"),
    ],
  },
  {
    slug: "machine-learning",
    major: "ai-ml",
    name: b("Machine Learning", "تعلم الآلة"),
    description: b(
      "Train and evaluate predictive models with supervised and unsupervised learning using Scikit-learn.",
      "درّب نماذج تنبؤ وقيّمها بالتعلم الموجه وغير الموجه باستخدام Scikit-learn."
    ),
    level: LEVEL.intermediate,
    priceMin: 6000,
    priceMax: 9000,
    technologies: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "Scikit-learn", "Model Evaluation", "Feature Engineering"],
    projects: [
      p("House Price Prediction", "التنبؤ بأسعار المنازل"),
      p("Customer Churn Prediction", "التنبؤ بتسرب العملاء"),
      p("Loan Risk Prediction", "التنبؤ بمخاطر القروض"),
      p("Product Recommendation System", "نظام توصية بالمنتجات"),
    ],
  },
  {
    slug: "deep-learning",
    major: "ai-ml",
    name: b("Deep Learning", "التعلم العميق"),
    description: b(
      "Build and optimize neural networks with TensorFlow and PyTorch for vision, sequences and patterns.",
      "ابنِ شبكات عصبية وحسّنها باستخدام TensorFlow وPyTorch للرؤية والتسلسلات والأنماط."
    ),
    level: LEVEL.advanced,
    priceMin: 7000,
    priceMax: 11000,
    technologies: ["Neural Networks", "TensorFlow", "PyTorch", "CNN", "RNN", "Transformers Fundamentals", "Model Training", "Model Optimization"],
    projects: [
      p("Image Classification", "تصنيف الصور"),
      p("Object Recognition", "التعرف على الأجسام"),
      p("Image Analysis", "تحليل الصور"),
      p("Pattern Recognition", "التعرف على الأنماط"),
    ],
  },
  {
    slug: "generative-ai-llms",
    major: "ai-ml",
    name: b("Generative AI & LLMs", "الذكاء الاصطناعي التوليدي والنماذج اللغوية"),
    description: b(
      "Build LLM-powered products with prompt engineering, RAG, vector databases, agents and LangChain.",
      "ابنِ منتجات تعتمد على النماذج اللغوية بهندسة الأوامر وRAG وقواعد البيانات المتجهة والوكلاء وLangChain."
    ),
    level: LEVEL.intermediate,
    priceMin: 6000,
    priceMax: 10000,
    technologies: ["Large Language Models", "Prompt Engineering", "OpenAI APIs", "Embeddings", "Vector Databases", "RAG", "AI Agents", "LangChain", "AI Evaluation & Guardrails"],
    projects: [
      p("Customer Service AI Chatbot", "روبوت محادثة لخدمة العملاء"),
      p("AI Educational Assistant", "مساعد تعليمي ذكي"),
      p("PDF AI Assistant", "مساعد PDF ذكي"),
      p("Intelligent Document Search System", "نظام بحث ذكي في المستندات"),
    ],
  },
  {
    slug: "computer-vision-nlp",
    major: "ai-ml",
    name: b("Computer Vision & NLP", "الرؤية الحاسوبية ومعالجة اللغة الطبيعية"),
    description: b(
      "Teach machines to see and understand language with OpenCV, OCR, object detection and NLP techniques.",
      "علّم الآلات أن ترى وتفهم اللغة باستخدام OpenCV والتعرف الضوئي واكتشاف الأجسام ومعالجة اللغة الطبيعية."
    ),
    level: LEVEL.advanced,
    priceMin: 7000,
    priceMax: 11000,
    technologies: ["Image Processing", "OpenCV", "Object Detection", "OCR", "Natural Language Processing", "Sentiment Analysis", "Speech Processing"],
    projects: [
      p("Image Text Recognition", "التعرف على النصوص في الصور"),
      p("Product Image Classification", "تصنيف صور المنتجات"),
      p("Customer Reviews Analysis", "تحليل آراء العملاء"),
      p("Object Detection System", "نظام اكتشاف الأجسام"),
    ],
  },
  /* ---------------- 04 · Data ---------------- */
  {
    slug: "data-analysis",
    major: "data-science",
    name: b("Data Analysis", "تحليل البيانات"),
    description: b(
      "Clean, analyze and visualize business data professionally with Excel, Power Query and statistics.",
      "نظّف بيانات الأعمال وحلّلها واعرضها بصريًا بشكل احترافي باستخدام Excel وPower Query والإحصاء."
    ),
    level: LEVEL.beginner,
    priceMin: 3500,
    priceMax: 5500,
    technologies: ["Microsoft Excel", "Advanced Excel", "Data Cleaning", "Data Visualization", "Power Query", "Basic Statistics"],
    projects: [
      p("Company Sales Analysis", "تحليل مبيعات الشركة"),
      p("Employee Performance Analysis", "تحليل أداء الموظفين"),
      p("Financial Analysis", "التحليل المالي"),
    ],
  },
  {
    slug: "sql-database-analysis",
    major: "data-science",
    name: b("SQL & Database Analysis", "تحليل SQL وقواعد البيانات"),
    description: b(
      "Query, join and optimize databases with professional SQL for analysis and reporting.",
      "استعلم عن قواعد البيانات واربطها وحسّنها باستخدام SQL الاحترافي للتحليل والتقارير."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 3500,
    priceMax: 5500,
    technologies: ["SQL", "Joins", "Subqueries", "Aggregations", "Window Functions", "Database Design", "Query Optimization"],
    projects: [
      p("E-commerce Database Analysis", "تحليل قاعدة بيانات متجر إلكتروني"),
      p("Customer Data Analysis", "تحليل بيانات العملاء"),
      p("Sales Reports", "تقارير المبيعات"),
    ],
  },
  {
    slug: "business-intelligence",
    major: "data-science",
    name: b("Business Intelligence", "ذكاء الأعمال (BI)"),
    description: b(
      "Build decision-ready dashboards and KPI reports with Power BI, DAX and data modeling.",
      "ابنِ لوحات معلومات وتقارير مؤشرات أداء جاهزة لاتخاذ القرار باستخدام Power BI وDAX ونمذجة البيانات."
    ),
    level: LEVEL.intermediate,
    priceMin: 4500,
    priceMax: 7000,
    technologies: ["Power BI", "DAX", "Data Modeling", "Power Query", "Dashboard Development", "KPIs", "Business Reporting"],
    projects: [
      p("Financial Dashboard", "لوحة معلومات مالية"),
      p("Sales Dashboard", "لوحة معلومات المبيعات"),
      p("Branch Performance Dashboard", "لوحة أداء الفروع"),
      p("Inventory Dashboard", "لوحة معلومات المخزون"),
    ],
  },
  {
    slug: "data-science-track",
    major: "data-science",
    name: b("Data Science", "علم البيانات"),
    description: b(
      "Use Python, statistics and machine learning to forecast, segment and predict business outcomes.",
      "استخدم بايثون والإحصاء وتعلم الآلة للتنبؤ بالمبيعات وتجزئة العملاء وتوقع نتائج الأعمال."
    ),
    level: LEVEL.intermediate,
    priceMin: 8000,
    priceMax: 13000,
    technologies: ["Python", "Pandas", "NumPy", "Statistics", "Probability", "Machine Learning", "Data Visualization", "Predictive Analytics"],
    projects: [
      p("Sales Forecasting", "التنبؤ بالمبيعات"),
      p("Customer Behavior Analysis", "تحليل سلوك العملاء"),
      p("Demand Prediction", "التنبؤ بالطلب"),
      p("Customer Segmentation", "تجزئة العملاء"),
    ],
  },
  /* ---------------- 05 · Cybersecurity ---------------- */
  {
    slug: "networking-fundamentals",
    major: "cybersecurity",
    name: b("Networking Fundamentals", "أساسيات الشبكات"),
    description: b(
      "Understand how networks work: TCP/IP, routing, switching, firewalls and subnetting.",
      "افهم كيف تعمل الشبكات: TCP/IP والتوجيه والتبديل والجدران النارية وتقسيم الشبكات."
    ),
    level: LEVEL.beginner,
    priceMin: 3500,
    priceMax: 5500,
    technologies: ["Computer Networks", "TCP/IP", "OSI Model", "DNS", "DHCP", "Routing & Switching", "Firewalls", "Subnetting"],
    projects: [
      p("Company Network Design", "تصميم شبكة شركة"),
      p("Internal Network Configuration", "إعداد شبكة داخلية"),
      p("Network Segmentation", "تجزئة الشبكة"),
    ],
  },
  {
    slug: "linux-system-security",
    major: "cybersecurity",
    name: b("Linux & System Security", "أمن لينكس والأنظمة"),
    description: b(
      "Administer and harden Linux and Windows systems with permissions, logs and access control.",
      "أدر أنظمة لينكس وويندوز وقم بتأمينها عبر الصلاحيات والسجلات والتحكم في الوصول."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 4000,
    priceMax: 6000,
    technologies: ["Linux Commands", "Linux Administration", "Windows Administration", "User Permissions", "System Hardening", "Log Management", "Access Control"],
    projects: [
      p("Linux Server Configuration", "إعداد خادم لينكس"),
      p("Server Security Setup", "تأمين الخادم"),
      p("User & Permission Management", "إدارة المستخدمين والصلاحيات"),
    ],
  },
  {
    slug: "soc-analyst",
    major: "cybersecurity",
    name: b("SOC Analyst – Blue Team", "محلل مركز العمليات الأمنية – الفريق الأزرق"),
    description: b(
      "Monitor security events, analyze logs and respond to incidents with SIEM tools like Splunk and QRadar.",
      "راقب الأحداث الأمنية وحلّل السجلات واستجب للحوادث بأدوات SIEM مثل Splunk وQRadar."
    ),
    level: LEVEL.intermediate,
    priceMin: 7000,
    priceMax: 10000,
    technologies: ["Security Monitoring", "SIEM", "Splunk / QRadar", "Log Analysis", "Threat Detection", "Incident Response", "Digital Forensics Fundamentals"],
    projects: [
      p("Security Log Analysis", "تحليل سجلات الأمان"),
      p("Cyberattack Detection", "اكتشاف الهجمات السيبرانية"),
      p("Security Monitoring System", "نظام مراقبة أمنية"),
    ],
  },
  {
    slug: "penetration-testing",
    major: "cybersecurity",
    name: b("Penetration Testing – Red Team", "اختبار الاختراق – الفريق الأحمر"),
    description: b(
      "Ethically test systems in a safe lab with Kali Linux, Nmap, Burp Suite, Metasploit and OWASP methodology.",
      "اختبر الأنظمة بشكل أخلاقي في بيئة معملية آمنة باستخدام Kali Linux وNmap وBurp Suite وMetasploit ومنهجية OWASP."
    ),
    level: LEVEL.advanced,
    priceMin: 7000,
    priceMax: 12000,
    technologies: ["Ethical Hacking", "Kali Linux", "Nmap", "Burp Suite", "Metasploit", "OWASP Top 10", "Vulnerability Assessment", "Penetration Testing Reports"],
    projects: [
      p("Web Application Security Testing in a Lab", "اختبار أمان تطبيقات الويب في بيئة معملية"),
      p("Vulnerability Discovery", "اكتشاف الثغرات"),
      p("Penetration Testing Report", "تقرير اختبار اختراق"),
    ],
  },
  {
    slug: "digital-forensics-ir",
    major: "cybersecurity",
    name: b("Digital Forensics & Incident Response", "الأدلة الرقمية والاستجابة للحوادث"),
    description: b(
      "Investigate incidents, preserve evidence and analyze disks and memory with professional forensics practice.",
      "حقّق في الحوادث وحافظ على الأدلة وحلّل الأقراص والذاكرة بممارسات أدلة رقمية احترافية."
    ),
    level: LEVEL.intermediate,
    priceMin: 6000,
    priceMax: 10000,
    technologies: ["Digital Evidence", "Disk Forensics", "Memory Forensics", "Malware Analysis Fundamentals", "Incident Investigation", "Evidence Preservation"],
    projects: [
      p("Disk Image Investigation", "فحص صورة قرص"),
      p("Simulated Security Incident Investigation", "تحقيق محاكى في حادث أمني"),
      p("Digital Evidence Report", "تقرير أدلة رقمية"),
    ],
  },
  /* ---------------- 06 · Cloud & DevOps ---------------- */
  {
    slug: "linux-system-administration",
    major: "cloud-devops",
    name: b("Linux & System Administration", "إدارة لينكس والأنظمة"),
    description: b(
      "Administer Linux servers, users, processes, networking and monitoring with confidence.",
      "أدر خوادم لينكس والمستخدمين والعمليات والشبكات والمراقبة بثقة."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 4000,
    priceMax: 6000,
    technologies: ["Linux", "Bash Scripting", "Users & Permissions", "Processes", "Networking", "Server Administration", "Monitoring"],
    projects: [
      p("Linux Server Setup", "إعداد خادم لينكس"),
      p("Company User Management", "إدارة مستخدمي الشركة"),
      p("Web Server Configuration", "إعداد خادم ويب"),
    ],
  },
  {
    slug: "cloud-engineering",
    major: "cloud-devops",
    name: b("Cloud Engineering", "هندسة الحوسبة السحابية"),
    description: b(
      "Design and operate cloud infrastructure on AWS, Azure or Google Cloud with security and cost control.",
      "صمّم البنية التحتية السحابية وشغّلها على AWS أو Azure أو Google Cloud مع الأمان والتحكم في التكلفة."
    ),
    level: LEVEL.intermediate,
    priceMin: 7000,
    priceMax: 11000,
    technologies: ["AWS / Microsoft Azure / Google Cloud", "Virtual Machines", "Cloud Storage", "Cloud Networking", "IAM", "Cloud Security", "Backup & Recovery", "Cost Management"],
    projects: [
      p("Website Hosting on AWS", "استضافة موقع على AWS"),
      p("Cloud Infrastructure Setup", "إعداد البنية التحتية السحابية"),
      p("Cloud Backup System", "نظام نسخ احتياطي سحابي"),
    ],
  },
  {
    slug: "devops-engineering",
    major: "cloud-devops",
    name: b("DevOps Engineering", "هندسة DevOps"),
    description: b(
      "Automate delivery with Docker, Kubernetes, CI/CD, Terraform, Prometheus and Grafana.",
      "أتمتة التسليم باستخدام Docker وKubernetes وCI/CD وTerraform وPrometheus وGrafana."
    ),
    level: LEVEL.advanced,
    priceMin: 8000,
    priceMax: 12000,
    technologies: ["Git", "Linux", "Docker", "Kubernetes", "CI/CD", "Jenkins / GitHub Actions", "Terraform", "Monitoring", "Prometheus", "Grafana"],
    projects: [
      p("Automated Application Deployment", "نشر آلي للتطبيقات"),
      p("CI/CD Pipeline", "خط أنابيب CI/CD"),
      p("Dockerized Application", "تطبيق داخل حاويات Docker"),
      p("Kubernetes Environment", "بيئة Kubernetes"),
    ],
  },
  {
    slug: "site-reliability-engineering",
    major: "cloud-devops",
    name: b("Site Reliability Engineering (SRE)", "هندسة موثوقية المواقع (SRE)"),
    description: b(
      "Keep systems reliable and fast with monitoring, logging, incident management and automation.",
      "حافظ على موثوقية الأنظمة وسرعتها عبر المراقبة والسجلات وإدارة الحوادث والأتمتة."
    ),
    level: LEVEL.advanced,
    priceMin: 8000,
    priceMax: 13000,
    technologies: ["System Reliability", "Monitoring", "Logging", "Incident Management", "Performance Optimization", "Automation", "High Availability"],
    projects: [
      p("Application Performance Monitoring", "مراقبة أداء التطبيقات"),
      p("Alerting System", "نظام تنبيهات"),
      p("Fault-Tolerant Application Architecture", "هندسة تطبيقات تتحمل الأعطال"),
    ],
  },
  /* ---------------- 08 · Game Development ---------------- */
  {
    slug: "unity-game-development",
    major: "game-development",
    name: b("Unity Game Development", "تطوير الألعاب بمحرك Unity"),
    description: b(
      "Create 2D and mobile games with Unity and C#, from physics and animation to optimization.",
      "أنشئ ألعابًا ثنائية الأبعاد وألعاب موبايل باستخدام Unity وC#، من الفيزياء والرسوم المتحركة إلى التحسين."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 5000,
    priceMax: 8000,
    technologies: ["C#", "Unity Engine", "Game Objects", "Physics", "Animation", "UI Development", "Scene Management", "Game Optimization"],
    projects: [
      p("2D Platformer", "لعبة منصات ثنائية الأبعاد"),
      p("Racing Game", "لعبة سباقات"),
      p("Mobile Puzzle Game", "لعبة ألغاز للموبايل"),
    ],
  },
  {
    slug: "unreal-engine-development",
    major: "game-development",
    name: b("Unreal Engine Development", "تطوير الألعاب بمحرك Unreal"),
    description: b(
      "Build cinematic 3D experiences with Unreal Engine, Blueprints, C++, lighting and materials.",
      "ابنِ تجارب ثلاثية الأبعاد سينمائية باستخدام Unreal Engine وBlueprints وC++ والإضاءة والخامات."
    ),
    level: LEVEL.intermediate,
    priceMin: 7000,
    priceMax: 11000,
    technologies: ["Unreal Engine", "Blueprints", "C++", "3D Environments", "Lighting", "Materials", "Physics", "Animation"],
    projects: [
      p("3D Adventure Game", "لعبة مغامرات ثلاثية الأبعاد"),
      p("First-Person Shooter", "لعبة تصويب من منظور الشخص الأول"),
      p("Architectural Interactive Experience", "تجربة معمارية تفاعلية"),
    ],
  },
  {
    slug: "game-programming",
    major: "game-development",
    name: b("Game Programming", "برمجة الألعاب"),
    description: b(
      "Program game systems at a deep level: physics, collision, game AI and architecture with C++.",
      "برمج أنظمة الألعاب بعمق: الفيزياء والتصادم وذكاء الألعاب والهندسة باستخدام C++."
    ),
    level: LEVEL.advanced,
    priceMin: 6000,
    priceMax: 10000,
    technologies: ["C++", "Data Structures", "Algorithms", "Game Physics", "Collision Detection", "AI for Games", "Game Architecture"],
    projects: [
      p("Game AI System", "نظام ذكاء اصطناعي للألعاب"),
      p("Multiplayer Game Prototype", "نموذج لعبة جماعية"),
      p("Physics-Based Game", "لعبة تعتمد على الفيزياء"),
    ],
  },
  {
    slug: "game-design-development",
    major: "game-development",
    name: b("Game Design & Development", "تصميم وتطوير الألعاب"),
    description: b(
      "Design mechanics, levels and stories, then prototype and test complete playable games.",
      "صمّم الميكانيكيات والمراحل والقصص، ثم أنشئ نماذج ألعاب قابلة للعب واختبرها."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 4000,
    priceMax: 7000,
    technologies: ["Game Mechanics", "Level Design", "Game Balancing", "Storytelling", "Prototyping", "User Experience", "Game Testing"],
    projects: [
      p("Complete Game Prototype", "نموذج لعبة متكامل"),
      p("Interactive Story Game", "لعبة قصة تفاعلية"),
      p("Game Level Design", "تصميم مرحلة لعبة"),
    ],
  },
  /* ---------------- 09 · UI/UX ---------------- */
  {
    slug: "ui-design",
    major: "ui-ux-design",
    name: b("UI Design", "تصميم واجهات المستخدم"),
    description: b(
      "Design beautiful, responsive interfaces and design systems with Figma, typography and color theory.",
      "صمّم واجهات جميلة ومتجاوبة وأنظمة تصميم باستخدام Figma ونظرية الألوان والخطوط."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 3500,
    priceMax: 5500,
    technologies: ["Design Fundamentals", "Color Theory", "Typography", "Layout Design", "Figma", "Components", "Design Systems", "Responsive Interfaces"],
    projects: [
      p("Mobile App Interface", "واجهة تطبيق موبايل"),
      p("E-commerce Website Design", "تصميم موقع تجارة إلكترونية"),
      p("Dashboard Design", "تصميم لوحة تحكم"),
    ],
  },
  {
    slug: "ux-design",
    major: "ui-ux-design",
    name: b("UX Design", "تصميم تجربة المستخدم"),
    description: b(
      "Research users, map journeys and prototype experiences that are easy to use and hard to forget.",
      "ابحث المستخدمين وارسم رحلاتهم وأنشئ نماذج تجارب سهلة الاستخدام وصعبة النسيان."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 4000,
    priceMax: 6000,
    technologies: ["User Research", "User Personas", "User Journey Mapping", "Information Architecture", "Wireframing", "Prototyping", "Usability Testing"],
    projects: [
      p("Banking App UX", "تجربة مستخدم لتطبيق بنكي"),
      p("Food Delivery User Journey", "رحلة مستخدم لتوصيل الطعام"),
      p("E-commerce User Experience", "تجربة مستخدم لمتجر إلكتروني"),
    ],
  },
  {
    slug: "product-design",
    major: "ui-ux-design",
    name: b("Product Design", "تصميم المنتجات الرقمية"),
    description: b(
      "Design complete digital products end to end: research, systems, prototypes and developer handoff.",
      "صمّم منتجات رقمية متكاملة من البداية إلى النهاية: البحث والأنظمة والنماذج والتسليم للمطورين."
    ),
    level: LEVEL.intermediate,
    priceMin: 5000,
    priceMax: 8000,
    technologies: ["UI/UX", "Product Thinking", "Design Systems", "Prototyping", "User Research", "Usability Testing", "Developer Handoff"],
    projects: [
      p("Complete Digital Product", "منتج رقمي متكامل"),
      p("SaaS Platform Design", "تصميم منصة SaaS"),
      p("Mobile Product Design", "تصميم منتج موبايل"),
    ],
  },
  /* ---------------- 10 · SE & QA ---------------- */
  {
    slug: "software-engineering-fundamentals",
    major: "software-engineering-qa",
    name: b("Software Engineering Fundamentals", "أساسيات هندسة البرمجيات"),
    description: b(
      "Build strong engineering foundations: data structures, algorithms, OOP, SOLID and clean architecture.",
      "ابنِ أسسًا هندسية قوية: هياكل البيانات والخوارزميات والبرمجة الكائنية وSOLID والهندسة النظيفة."
    ),
    level: LEVEL.beginnerIntermediate,
    priceMin: 5000,
    priceMax: 8000,
    technologies: ["Programming Fundamentals", "Data Structures", "Algorithms", "OOP", "SOLID Principles", "Design Patterns", "Clean Code", "Software Architecture"],
    projects: [
      p("Employee Management System", "نظام إدارة الموظفين"),
      p("Library Management System", "نظام إدارة المكتبات"),
      p("Banking System Prototype", "نموذج نظام بنكي"),
    ],
  },
  {
    slug: "manual-testing",
    major: "software-engineering-qa",
    name: b("Manual Software Testing", "اختبار البرمجيات اليدوي"),
    description: b(
      "Learn professional testing: test cases, scenarios, bug reporting and the full STLC with Jira.",
      "تعلّم الاختبار الاحترافي: حالات وسيناريوهات الاختبار وتقارير الأخطاء ودورة حياة الاختبار مع Jira."
    ),
    level: LEVEL.beginner,
    priceMin: 3500,
    priceMax: 5500,
    technologies: ["Software Testing Fundamentals", "Test Cases", "Test Scenarios", "Bug Reporting", "SDLC", "STLC", "Jira", "API Testing Basics"],
    projects: [
      p("E-commerce Testing", "اختبار متجر إلكتروني"),
      p("Mobile Application Testing", "اختبار تطبيق موبايل"),
      p("Test Documentation", "توثيق الاختبارات"),
    ],
  },
  {
    slug: "automation-testing",
    major: "software-engineering-qa",
    name: b("Automation Testing", "اختبار الأتمتة"),
    description: b(
      "Automate web and API testing with Selenium, Playwright and Cypress inside real test frameworks.",
      "أتمتة اختبارات الويب والواجهات البرمجية باستخدام Selenium وPlaywright وCypress داخل أطر اختبار حقيقية."
    ),
    level: LEVEL.intermediate,
    priceMin: 6000,
    priceMax: 9000,
    technologies: ["Python / Java", "Selenium", "Playwright", "Cypress", "Test Frameworks", "API Automation", "Git", "CI/CD Fundamentals"],
    projects: [
      p("Automated Login Testing", "اختبار تسجيل دخول آلي"),
      p("E-commerce Automation", "أتمتة متجر إلكتروني"),
      p("API Testing Framework", "إطار اختبار واجهات برمجية"),
    ],
  },
  {
    slug: "performance-api-testing",
    major: "software-engineering-qa",
    name: b("Performance & API Testing", "اختبار الأداء والواجهات البرمجية"),
    description: b(
      "Test APIs and measure performance under load with Postman, JMeter and professional reporting.",
      "اختبر الواجهات البرمجية وقِس الأداء تحت الضغط باستخدام Postman وJMeter وتقارير احترافية."
    ),
    level: LEVEL.intermediate,
    priceMin: 5000,
    priceMax: 8000,
    technologies: ["API Testing", "Postman", "JMeter", "Load Testing", "Stress Testing", "Performance Analysis", "Monitoring"],
    projects: [
      p("API Testing Suite", "مجموعة اختبارات واجهات برمجية"),
      p("Website Load Testing", "اختبار تحميل المواقع"),
      p("Performance Testing Report", "تقرير اختبار أداء"),
    ],
  },
];

export const courses: Course[] = raw.map((course, i) => ({
  ...course,
  index: String(i + 1).padStart(2, "0"),
  icon: getMajor(course.major).icon,
  weeklyProjects: 3,
}));

export const getCourse = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug);

export const coursesByMajor = (majorSlug: string): Course[] =>
  courses.filter((course) => course.major === majorSlug);

export const formatEGP = (value: number): string =>
  new Intl.NumberFormat("en-US").format(value);

export const priceRangeLabel = (course: Course): string =>
  `${formatEGP(course.priceMin)} – ${formatEGP(course.priceMax)} EGP`;
