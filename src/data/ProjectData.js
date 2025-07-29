import heritageimage from '../assets/Projectsimg/heritageimage.jpg';
import gasleaksystemimage from '../assets/Projectsimg/gasleaks.jpg';
import damopenimage from '../assets/Projectsimg/damopenimage.jpg';
import attendanceimage from '../assets/Projectsimg/attendanceimage.png';
import weatherimage from '../assets/Projectsimg/weatherimage.jpg';
import chatbotimage from '../assets/Projectsimg/chatbotimage.jpg';
import portfolio from '../assets/Projectsimg/portfolio.jpg';
import foodpowderimage from '../assets/Projectsimg/foodpowderimage.png';

const projectData = [
  {
  id: 1,
  title: "FoodPowder Web Application",
  category: "WEBSITES",
  image: foodpowderimage, 
  description: {
    short: "A full-stack platform to showcase, manage, and purchase traditional food powders.",
    long: "FoodPowder WebApp is an e-commerce-like platform where users can browse, order, and pay for traditional food powders, while an admin dashboard allows the seller to manage categories, products, and orders. The backend is powered by Java Spring Boot with Firebase & Razorpay integration. The client-side is a responsive React app deployed to Netlify."
  },
  features: [
    "User login with JWT authentication",
    "Add to cart and order food powders",
    "Admin panel for managing products and categories",
    "Razorpay payment integration (test mode)",
    "Firebase media storage for product images",
    "Contact form to reach admins",
    "Separate frontend for user and admin",
    "Modern responsive UI"
  ],
  techStack: {
    frontend: ["React", "Vite", "Bootstrap CSS"],
    backend: ["Java 21", "Spring Boot", "JWT", "Docker"],
    database: ["Firebase Firestore"],
    ai_Tools: [],
    tools: ["Render", "Netlify", "Git", "Postman", "VS Code"]
  },
  screenshots: ["foodpowder_home.jpg", "admin_dashboard.jpg"],

  howItWorks: [
    "Users browse and add food powders to their cart.",
    "Razorpay test payment is used to simulate UPI, cards, etc.",
    "Firebase stores all media and images securely.",
    "Admins log in to a secure panel to manage content.",
    "Backend APIs are protected and deployed via Docker on Render."
  ],

  impact: "Empowers small-scale food powder sellers to bring their products online with a managed system that includes ordering, payments, and product handling – all with zero cost backend deployment.",
  
  challenges: [
    "Handling token-based auth with protected cart routes",
    "Configuring Firebase in a secure way for Render deploy",
    "Setting up Razorpay test payment flow for dev",
    "Optimizing image loading and responsive display"
  ],

  futurePlans: [
    "Product review and rating system",
    "Order tracking via SMS/Email",
    "Role-based multi-admin support",
    "Comment section for each product",
    "Progressive Web App (PWA) or Android app",
    "Self-host backend using old laptop server setup"
  ],

  links: {
    github: "https://github.com/Akilan13kr/FoodApp",
    website: "https://k-r-akilan-foodappclient.netlify.app/",
    youtube: "https://youtu.be/your-video-link"
  },

  role: "Full-stack developer – designed and implemented frontend (user/admin), backend APIs, Razorpay integration, Firebase handling, and Docker deployment",

  inProgress: false
},
 {
    id: 2,
    title: "Gas Leak Detection IoT System",
    category: "IOT",
    image: gasleaksystemimage,
    description: {
      short: "An IoT-based safety system for detecting gas leaks and triggering automated responses.",
      long: "This system uses gas sensors and a SIM800L module to detect hazardous gas leaks in real-time, automatically triggering an exhaust fan and sending SMS alerts. Designed using Arduino and Flask."
    },
    features: [
      "Real-time gas level monitoring",
      "Automatic fan control on detection",
      "SMS alert via SIM800L",
      "LCD display for live status"
    ],
    techStack: {
      frontend: [],
      backend: ["Flask"],
      ai_Tools: [],
      database: [],
      tools: ["Arduino", "SIM800L", "HC-SR04", "Servo Motor"]
    },
    screenshots: ["gasleak.jpg"],
    howItWorks: [
      "Sensor detects gas leakage.",
      "Flask receives and logs the signal.",
      "Fan turns on and SMS is sent to user.",
      "System resets when gas level drops."
    ],
    impact: "Enhances home and industrial safety with real-time gas leak alerts.",
    challenges: [
      "Stabilizing SIM800L communication",
      "Power supply regulation for modules",
      "Accurate threshold tuning"
    ],
    futurePlans: [
      "Add mobile notification support",
      "Cloud data storage for historical logs",
      "Integration with home automation systems"
    ],
    links: {
      github: "",
      website: "",
      youtube: ""
    },
    role: "Hardware and software integration – built circuit and Flask backend",
    inProgress: true
  },
  {
    id: 3,
    title: "Disaster Management Dam Controller",
    category: "IOT",
    image: damopenimage,
    description: {
      short: "A dam automation system that controls water gates based on level readings.",
      long: "An IoT solution that monitors water level using ultrasonic sensors and opens/closes a servo-controlled dam gate. Also sends SMS alerts and shows readings on an LCD."
    },
    features: [
      "Automatic gate control using servo",
      "Water level detection via HC-SR04",
      "SMS alert through SIM800L",
      "LCD display with live status"
    ],
    techStack: {
      frontend: [],
      backend: [],
      ai_Tools: [],
      database: [],
      tools: ["Arduino", "HC-SR04", "Servo Motor", "SIM800L"]
    },
    screenshots: ["damopenimage.jpg"],
    howItWorks: [
      "Ultrasonic sensor checks water level every 5 sec.",
      "If level is above threshold, gate opens partially/fully.",
      "SMS is sent depending on risk level.",
      "Gate closes once level returns to normal."
    ],
    impact: "Helps prevent disasters by providing automated early response to rising water levels.",
    challenges: [
      "Servo power control and timing",
      "Reliable SMS sending with SIM800L",
      "Stable reading from ultrasonic sensor"
    ],
    futurePlans: [
      "Mobile app for real-time alerts",
      "Data logging and trend analysis",
      "Solar-powered version"
    ],
    links: {
      github: "https://github.com/Akilan13kr/Automatic-Dam-Opener.git",
      website: "",
      youtube: ""
    },
    role: "Solo Developer – built complete IoT setup with logic, LCD & servo control",
    inProgress: false
  },
  {
    id: 4,
    title: "Android Attendance System",
    category: "APPS",
    image: attendanceimage,
    description: {
      short: "A mobile app to track attendance with real-time Firebase backend.",
      long: "An Android app that lets students mark their attendance using QR or button. Admins can track and manage attendance data synced via Firebase."
    },
    features: [
      "Student registration/login",
      "Mark attendance with real-time sync",
      "Firebase database integration",
      "Admin view with attendance summary"
    ],
    techStack: {
      frontend: ["Android XML"],
      backend: ["Firebase"],
      ai_Tools: [],
      database: ["Firebase Realtime DB"],
      tools: ["Android Studio"]
    },
    screenshots: ["attendanceimage.png"],
    howItWorks: [
      "Student logs in and clicks 'Mark Present'.",
      "Data is stored in Firebase with timestamp.",
      "Admin accesses full log of each student."
    ],
    impact: "Simplifies attendance for institutions with real-time centralized records.",
    challenges: [
      "Firebase security rule setup",
      "Handling user auth efficiently",
      "App UI design with validation"
    ],
    futurePlans: [
      "Add geofencing",
      "Introduce face recognition",
      "Generate downloadable reports"
    ],
    links: {
      github: "",
      website: "",
      youtube: ""
    },
    role: "Solo Developer – built UI, database logic, and Firebase auth",
    inProgress: false
  },
  {
    id: 5,
    title: "Weather Prediction System",
    category: "AI",
    image: weatherimage,
    description: {
      short: "A machine learning system to predict weather conditions from historical image data.",
      long: "This ML project uses a trained model to classify weather images and predict conditions like sunny, cloudy, or rainy, based on past data."
    },
    features: [
      "Image classification for weather type",
      "Trained model using datasets",
      "Python-based prediction logic",
      "Terminal or simple UI input"
    ],
    techStack: {
      frontend: [],
      backend: ["Python"],
      ai_Tools: ["TensorFlow", "Keras"],
      database: [],
      tools: ["Jupyter Notebook", "NumPy", "Pandas"]
    },
    screenshots: ["weatherimage.jpg"],
    howItWorks: [
      "User uploads a weather image.",
      "Model processes the image.",
      "Predicted class (e.g., Cloudy) is shown.",
      "Accuracy is measured on test data."
    ],
    impact: "Offers a foundation for AI-based forecasting with simple datasets.",
    challenges: [
      "Training accuracy vs. overfitting",
      "Choosing suitable model architecture",
      "Finding labeled image datasets"
    ],
    futurePlans: [
      "Integrate live webcam weather feed",
      "Deploy to a web interface",
      "Add temperature prediction"
    ],
    links: {
      github: "https://github.com/Akilan13kr/Weather-Prediction.git",
      website: "",
      youtube: ""
    },
    role: "AI Developer – trained and tested the model end to end",
    inProgress: false
  },
  {
    "id": 6,
    "title": "Company Recommendation Chatbot",
    "category": "AI",
    "image": chatbotimage,
    "description": {
      "short": "An AI chatbot that recommends companies to job seekers based on domain and skills.",
      "long": "A smart recommendation system that helps job seekers discover relevant companies by analyzing their skills and preferred domains. The chatbot provides detailed company information including services, specializations, and contact details."
    },
    "features": [
      "Natural language understanding",
      "Company recommendation engine",
      "Custom-trained neural network model",
      "Dynamic response generation",
      "Web-based interface"
    ],
    "techStack": {
      "frontend": ["HTML/CSS", "JavaScript"],
      "backend": ["Python", "Flask"],
      "ai_Tools": ["NLTK", "Keras", "TensorFlow"],
      "database": ["JSON"],
      "tools": ["VS Code", "Google Colab"]
    },
    "screenshots": ["chatbotimage.jpg"],
    "howItWorks": [
      "User asks about companies in a specific domain (e.g., 'Find AI companies')",
      "Chatbot processes the query using NLP techniques",
      "System matches query with company data from JSON database",
      "Returns detailed company information including services and specializations"
    ],
    "impact": "Helps job seekers efficiently discover companies matching their skills and interests, reducing job search time.",
    "challenges": [
      "Training accurate intent classification",
      "Handling varied user query patterns",
      "Maintaining up-to-date company information"
    ],
    "futurePlans": [
      "Integrate with job listing APIs",
      "Add user profile system for personalized recommendations",
      "Implement feedback mechanism to improve recommendations",
      "Deploy as mobile/web application"
    ],
    "links": {
      "github": "https://github.com/Akilan13kr/Recommendation-Chatbot.git",
      "website": "",
      "youtube": ""
    },
    "role": "Full-stack Developer - Built NLP model, backend API, and frontend interface",
    "inProgress": false
  },
  {
    id: 7,
    title: "Developer Portfolio",
    category: "WEBSITES",
    image: portfolio,
    description: {
      short: "An interactive personal portfolio built with React and Batman-style dark theme.",
      long: "My personal portfolio to showcase projects, skills, and resume, featuring interactive design, routing, and a dark UI inspired by the Batman theme."
    },
    features: [
      "Animated sections and smooth scroll",
      "Project filter + detail view routing",
      "Dark theme with Batman styling",
      "Downloadable resume + contact form"
    ],
    techStack: {
      frontend: ["React", "CSS", "JavaScript"],
      backend: [],
      ai_Tools: [],
      database: [],
      tools: ["VS Code", "React Router"]
    },
    screenshots: ["portfolio.jpg"],
    howItWorks: [
      "User browses sections or filters projects.",
      "Clicking a card opens a detailed route.",
      "Resume and contact are available in one scroll."
    ],
    impact: "Showcases my full stack skills and leaves a strong personal brand.",
    challenges: [
      "Getting theme design pixel-perfect",
      "Routing integration with one-page layout",
      "Making cards responsive and dynamic"
    ],
    futurePlans: [
      "Add blog section",
      "Integrate animations with GSAP",
      "Make theme switchable (light/dark)"
    ],
    links: {
      github: "https://github.com/Akilan13kr/Portfolio.git",
      website: "",
      youtube: ""
    },
    role: "Frontend Developer – designed and coded all sections",
    inProgress: true
  },
    {
    id: 8,
    title: "Digital Platform for Preserving Heritage",
    category: "WEBSITES",
    image: heritageimage,
    description: {
      short: "A platform to document and preserve cultural heritage through community contributions and AI.",
      long: "This web-based platform allows users to contribute, explore, and preserve endangered cultural heritage by uploading multimedia and written content. An AI model helps classify submissions, and an admin panel verifies authenticity to ensure content quality."
    },
    features: [
      "User login and content submission",
      "AI-based image classification",
      "Admin content verification panel",
      "Responsive design with modern UI"
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Flask", "Firebase"],
      ai_Tools: ["TensorFlow", "OpenCV"],
      database: ["Firebase Firestore"],
      tools: ["Git", "Postman", "VS Code"]
    },
    screenshots: ["heritage_home.jpg", "heritage_dashboard.jpg"],
    howItWorks: [
      "Users register and upload multimedia files.",
      "AI scans and classifies cultural data.",
      "Admins verify submissions for authenticity.",
      "Approved data gets added to the heritage archive."
    ],
    impact: "Helps preserve endangered traditions by collecting and verifying community-contributed cultural data.",
    challenges: [
      "Managing multimedia uploads efficiently",
      "Designing an AI model for cultural content",
      "Creating a secure and simple admin system"
    ],
    futurePlans: [
      "Multilingual content support",
      "Mobile app integration",
      "Public-facing AI heritage assistant"
    ],
    links: {
      github: "https://github.com/yourusername/heritage-platform",
      website: "https://yourheritageplatform.com",
      youtube: "https://yourheritageplatform.com"
    },
    role: "Solo Developer – built entire app including AI, backend, and UI",
    inProgress: true
  },
];

export default projectData;
