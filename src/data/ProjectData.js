import heritageimage from '../assets/Projectsimg/heritageimage.jpg';
import gasleaksystemimage from '../assets/Projectsimg/gasleaks.jpg';
import damopenimage from '../assets/Projectsimg/damopenimage.jpg';
import attendanceimage from '../assets/Projectsimg/attendanceimage.png';
import weatherimage from '../assets/Projectsimg/weatherimage.jpg';
import chatbotimage from '../assets/Projectsimg/chatbotimage.jpg';
import portfolio from '../assets/Projectsimg/portfolio.jpg';

const projectData = [
  {
    id: 1,
    title: "Digital Platform for Preserving Heritage",
    category: "WEBSITES",
    image: heritageimage,
    description: "A platform to document and preserve cultural heritage sites with AI assistance.",
    features: [
      "User-contributed content",
      "Admin verification dashboard",
      "AI image classification",
      "Responsive design"
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Flask", "Firebase"],
      database: ["Firestore"],
    },
    howItWorks: [
      "Users upload heritage content",
      "AI classifies the images",
      "Admin verifies submissions",
      "Verified content goes public"
    ],
    links: {
      github: "https://github.com/yourusername/heritage-platform",
      website: "https://yourheritageplatform.com",
      youtube: ""
    },
    inProgress: false
  },
  {
    id: 2,
    title: "Gas Leak Detection IoT System",
    category: "IOT",
    image: gasleaksystemimage,
    description: "A smart IoT-based system for real-time gas leak alerts using sensors and GSM.",
    features: [
      "Gas sensor integration",
      "SMS alert with SIM800L",
      "Servo and exhaust fan control"
    ],
    techStack: {
      hardware: ["Arduino Uno", "SIM800L", "HC-SR04"],
      backend: ["Flask"],
    },
    howItWorks: [
      "Sensor detects gas",
      "Signal sent to Arduino",
      "SIM800L sends alert to phone"
    ],
    links: {
      github: "https://github.com/yourusername/gas-leak-detector",
      website: "",
      youtube: ""
    },
    inProgress: true
  },
  {
    id: 3,
    title: "Disaster Management Dam Controller",
    category: "IOT",
    image: damopenimage,
    description: "Automated water level-based dam controller with SMS alerts and safety automation.",
    features: [
      "Water level sensing",
      "Servo-based dam control",
      "SMS & call alerts"
    ],
    techStack: {
      hardware: ["Arduino Uno", "SIM800L", "Ultrasonic Sensor"],
      backend: ["Flask"],
    },
    howItWorks: [
      "Water level measured",
      "Threshold triggers servo",
      "SIM800L alerts authorities"
    ],
    links: {
      github: "https://github.com/yourusername/dam-disaster-management",
      website: "",
      youtube: ""
    },
    inProgress: false
  },
  {
    id: 4,
    title: "Android Attendance System",
    category: "APP",
    image: attendanceimage,
    description: "Attendance tracking app using face recognition and Firebase real-time sync.",
    features: [
      "Student registration",
      "Firebase authentication",
      "Real-time tracking"
    ],
    techStack: {
      frontend: ["Java", "XML"],
      backend: ["Firebase"],
    },
    howItWorks: [
      "User logs in",
      "Face recognized via camera",
      "Attendance marked & stored"
    ],
    links: {
      github: "https://github.com/yourusername/attendance-app",
      website: "",
      youtube: ""
    },
    inProgress: false
  },
  {
    id: 5,
    title: "Weather Prediction System",
    category: "AI",
    image: weatherimage,
    description: "Machine learning model that predicts weather conditions based on image training.",
    features: [
      "ML model training",
      "Historical data analysis",
      "Accuracy metrics"
    ],
    techStack: {
      ai: ["Python", "TensorFlow", "Scikit-learn"],
    },
    howItWorks: [
      "Train model with past data",
      "Input new data",
      "Model predicts temperature & conditions"
    ],
    links: {
      github: "https://github.com/yourusername/ai-heritage-chatbot",
      website: "",
      youtube: ""
    },
    inProgress: false
  },
  {
    id: 6,
    title: "Recommendation Chatbot",
    category: "AI",
    image: chatbotimage,
    description: "AI chatbot that suggests trees or heritage based on user queries.",
    features: [
      "NLP-based interaction",
      "Tree/heritage suggestion",
      "Text-based UI"
    ],
    techStack: {
      ai: ["Python", "NLTK", "Flask"],
    },
    howItWorks: [
      "User enters query",
      "NLP processes input",
      "Bot responds with recommendation"
    ],
    links: {
      github: "https://github.com/yourusername/tree-plantation",
      website: "",
      youtube: ""
    },
    inProgress: false
  },
  {
    id: 7,
    title: "Developer Portfolio",
    category: "WEBSITES",
    image: portfolio,
    description: "A personal portfolio website built in React with Batman-style theming.",
    features: [
      "Dark mode Batman theme",
      "Project showcase",
      "Responsive layout"
    ],
    techStack: {
      frontend: ["React", "CSS", "React Icons"],
    },
    howItWorks: [
      "Projects mapped and filtered",
      "Cards animated and clickable",
      "Routing to detail pages"
    ],
    links: {
      github: "https://github.com/yourusername/portfolio",
      website: "",
      youtube: ""
    },
    inProgress: true
  }
];

export default projectData;
