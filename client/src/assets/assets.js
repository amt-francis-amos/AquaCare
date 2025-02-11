import aquaLogo from  './aquaCare.png'
import heroDoc from './hero_doc.png'
import adviceImg from './advice-img.jpg'

export const assets = {
    aquaLogo,
    heroDoc,
    adviceImg,
 
}


export const adviceCards = [
    {
      title: "Nutrition",
      description:
        "Learn about balanced diets, healthy eating habits, and essential nutrients for a strong immune system.",
      image: assets.adviceImg,
    },
    {
      title: "Mental Health",
      description:
        "Discover strategies to manage stress, anxiety, and maintain a healthy mental state.",
      image: assets.adviceImg,
    },
    {
      title: "Exercise & Fitness",
      description:
        "Explore workout routines, tips for staying active, and the benefits of regular exercise.",
      image: assets.adviceImg,
    },
    {
      title: "Disease Prevention",
      description:
        "Stay informed about vaccinations, hygiene, and ways to prevent common diseases.",
      image: assets.adviceImg,
    },
    {
      title: "Sleep & Recovery",
      description:
        "Understand the importance of sleep and how to improve sleep quality for better health.",
      image: assets.adviceImg,
    },
    {
      title: "General Wellness",
      description:
        "Get advice on hydration, self-care, and daily habits for a healthier lifestyle.",
      image: assets.adviceImg,
    },
  ];



  export  const alerts = [
    {
      id: 1,
      category: "Outbreak",
      title: "Bilhazia Outbreak in New Takoradi",
      message: "Stay indoors if possible and follow health guidelines.",
      date: "Feb 10, 2025",
      status: "Urgent",
    },
    {
      id: 2,
      category: "Clean Water",
      title: "Water Contamination Alert",
      message: "Boil water before drinking due to recent contamination.",
      date: "Feb 9, 2025",
      status: "Important",
    },
    {
      id: 3,
      category: "General",
      title: "Community Health Checkup",
      message: "Free health screening available at City Hall this weekend.",
      date: "Feb 8, 2025",
      status: "Notice",
    },
]


export const posts = [
  { id: 1, user: "John Doe", title: "How to improve React performance?", content: "I'm struggling with performance issues in React. Any tips?", comments: 5 },
  { id: 2, user: "Jane Smith", title: "Best backend for a forum app?", content: "What backend would you recommend for building a scalable forum app?", comments: 3 }
];

export const discussionData = [
  {
    id: 1,
    title: "How to improve React performance?",
    content: "I'm struggling with performance issues in React. Any tips?",
    comments: [
      { id: 1, user: "Alice", text: "Use React.memo to optimize rendering." },
      { id: 2, user: "Bob", text: "Try code-splitting and lazy loading." }
    ]
  },
  {
    id: 2,
    title: "Best backend for a forum app?",
    content: "What backend would you recommend for building a scalable forum app?",
    comments: [
      { id: 1, user: "Charlie", text: "Node.js with Express is a great choice!" },
      { id: 2, user: "Dave", text: "You could also consider Firebase for real-time updates." }
    ]
  }
];




export const doctors = [
  {
    id: 1,
    name: "Dr. John Mensah",
    specialty: "Infectious Diseases",
    available: "Mon-Fri | 9AM - 5PM",
  },
  {
    id: 2,
    name: "Dr. Akosua Ofori",
    specialty: "Parasitology & Public Health",
    available: "Tues-Sat | 10AM - 4PM",
  },
];



export const symptomDatabase = {
  fever: {
    condition: "Possible Infection",
    advice: "Drink plenty of fluids, rest, and take paracetamol if necessary. Seek medical help if fever persists for more than 3 days.",
  },
  headache: {
    condition: "Possible Dehydration, Stress, or Migraine",
    advice: "Drink water, rest in a dark room, and avoid loud noises. If severe or persistent, consult a doctor.",
  },
  stomach_pain: {
    condition: "Possible Indigestion or Food Poisoning",
    advice: "Drink warm water, avoid spicy foods, and rest. If pain is severe, see a doctor immediately.",
  },
  cough: {
    condition: "Possible Cold or Respiratory Infection",
    advice: "Drink warm fluids, avoid smoking, and rest. Seek medical attention if cough persists for more than 2 weeks.",
  },
};


export const hospitals = [
  { id: 1, name: "Korle-Bu Teaching Hospital", lat: 5.5600, lng: -0.2103 },
  { id: 2, name: "Ridge Hospital", lat: 5.5609, lng: -0.1970 },
  { id: 3, name: "37 Military Hospital", lat: 5.5836, lng: -0.1746 },
];

export const available_doctors = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", location: "Korle-Bu" },
  { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", location: "Ridge Hospital" },
  { id: 3, name: "Dr. Samuel Adams", specialty: "General Physician", location: "37 Military Hospital" },
];
