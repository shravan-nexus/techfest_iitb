export const FESTIVAL_DATE = new Date('2026-12-16T09:00:00+05:30');

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
  { value: '30', suffix: 'th', label: 'Edition', sublabel: 'A legacy since 1998' },
  { value: '1', suffix: 'Cr+', label: 'Prize Pool', sublabel: 'Across all competitions' },
  { value: '1.75', suffix: 'L+', label: 'Footfall', sublabel: 'Annual participants' },
  { value: '30', suffix: '+', label: 'Countries', sublabel: 'Global reach' },
] as const;

export type Competition = {
  name: string;
  category: string;
  prize: string;
  description: string;
  icon: string;
  tags: string[];
};

export const COMPETITIONS: Competition[] = [
  {
    name: 'International Robowars',
    category: 'Robotics',
    prize: '₹3,80,000',
    description: 'The ultimate battle of machines. Build combat robots that fight in an arena of metal and mayhem.',
    icon: 'Swords',
    tags: ['Robotics', 'Combat', 'Engineering'],
  },
  {
    name: 'National Probability Challenge',
    category: 'Quantitative',
    prize: '₹3,80,000',
    description: 'A quantitative reasoning contest in association with Jane Street. Tests mathematical intuition and decision-making.',
    icon: 'Calculator',
    tags: ['Math', 'Trading', 'Quant'],
  },
  {
    name: 'The Quantitative Code Conflux',
    category: 'Coding',
    prize: '₹3,80,000',
    description: 'Where algorithms meet finance. Code your way through real-world quantitative problems.',
    icon: 'Code2',
    tags: ['Coding', 'Finance', 'Algorithms'],
  },
  {
    name: 'Namma Space',
    category: 'Aerospace',
    prize: '₹1,50,000',
    description: 'Build and deploy satellite systems. Challenge the boundaries of space technology.',
    icon: 'Rocket',
    tags: ['Space', 'Satellite', 'Aerospace'],
  },
  {
    name: 'OLL Robotics Championship',
    category: 'Robotics',
    prize: '₹1,50,000',
    description: 'Regional qualifiers across India culminating at the Grand Finale at IIT Bombay.',
    icon: 'Bot',
    tags: ['Robotics', 'Regional', 'Grand Finale'],
  },
  {
    name: 'LogIQids Ideathon',
    category: 'Innovation',
    prize: '₹1,00,000',
    description: 'Pitch your most innovative ideas. Design practical, evidence-based solutions for real-world problems.',
    icon: 'Lightbulb',
    tags: ['Innovation', 'Ideation', 'Social Impact'],
  },
  {
    name: 'Thetashift',
    category: 'Hardware',
    prize: '₹1,00,000',
    description: 'Build a manually controlled wireless spherical bot and race through a 12-obstacle arena.',
    icon: 'CircuitBoard',
    tags: ['Hardware', 'RC', 'Obstacle Course'],
  },
  {
    name: 'Drone Challenge',
    category: 'Aerospace',
    prize: '₹1,50,000',
    description: 'Pilot drones through challenging courses. Test precision, speed, and autonomous flight systems.',
    icon: 'Plane',
    tags: ['Drones', 'Autonomous', 'Racing'],
  },
  {
    name: 'Boeing Aeromodelling',
    category: 'Aerospace',
    prize: '₹1,00,000',
    description: 'Design, build, and fly model aircraft. Sponsored by Boeing, judged on engineering and flight performance.',
    icon: 'Wind',
    tags: ['Aeromodelling', 'Aviation', 'Design'],
  },
  {
    name: 'Game of Codes',
    category: 'Coding',
    prize: '₹1,00,000',
    description: 'A competitive programming challenge. Solve algorithmic problems against the clock.',
    icon: 'Gamepad2',
    tags: ['Programming', 'Algorithms', 'Speed'],
  },
  {
    name: 'AUV Challenge',
    category: 'Aquatics',
    prize: '₹1,50,000',
    description: 'Build autonomous underwater vehicles. Navigate complex aquatic tasks and obstacle courses.',
    icon: 'Waves',
    tags: ['Underwater', 'Autonomous', 'Robotics'],
  },
  {
    name: 'International Full Throttle',
    category: 'Racing',
    prize: '₹1,00,000',
    description: 'RC Nitro Buggy racing. Engineering meets speed on a custom-designed track.',
    icon: 'Gauge',
    tags: ['RC', 'Racing', 'Nitro'],
  },
];

export type Workshop = {
  title: string;
  icon: string;
  description: string;
};

export const WORKSHOPS: Workshop[] = [
  { title: 'Artificial Intelligence', icon: 'Brain', description: 'Deep learning, neural networks, and modern AI architectures.' },
  { title: 'Robotics & Automation', icon: 'Bot', description: 'Hands-on robot building, sensors, and control systems.' },
  { title: 'Cybersecurity', icon: 'ShieldCheck', description: 'Ethical hacking, penetration testing, and digital forensics.' },
  { title: 'Blockchain & Web3', icon: 'Blocks', description: 'Smart contracts, decentralized apps, and crypto fundamentals.' },
  { title: 'IoT & Embedded Systems', icon: 'Cpu', description: 'Connected devices, microcontrollers, and sensor networks.' },
  { title: 'Cloud Computing', icon: 'Cloud', description: 'AWS, Azure, DevOps, and scalable infrastructure.' },
  { title: 'AR/VR Development', icon: 'Glasses', description: 'Immersive experiences with Unity and WebXR.' },
  { title: 'Data Science', icon: 'BarChart3', description: 'Statistical analysis, visualization, and predictive modeling.' },
  { title: 'FinTech & Quant', icon: 'TrendingUp', description: 'Algorithmic trading, risk modeling, and financial tech.' },
  { title: 'Aerospace Engineering', icon: 'Rocket', description: 'Aerodynamics, propulsion, and flight dynamics.' },
  { title: 'Biotechnology', icon: 'Dna', description: 'Genetic engineering, bioinformatics, and bioprocessing.' },
  { title: 'Game Development', icon: 'Gamepad2', description: 'Game engines, 3D graphics, and interactive design.' },
];

export type EventItem = {
  title: string;
  icon: string;
  description: string;
  highlight: string;
  image: string;
};

export const EVENTS: EventItem[] = [
  {
    title: 'Lecture Series',
    icon: 'Mic',
    description: 'Renowned dignitaries from across the globe share ideas, experiences, and insights at IIT Bombay. 200+ lectures conducted over the years with an annual footfall of 5,000+.',
    highlight: '20+ Countries',
    image: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'International Exhibitions',
    icon: 'Telescope',
    description: 'Cutting-edge innovations from 30+ countries. Universities, research institutions, companies, and startups showcase advancements in robotics, AI, aerospace, and defense technology.',
    highlight: '30+ Countries',
    image: 'https://images.pexels.com/photos/25809255/pexels-photo-25809255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Technoholix',
    icon: 'Sparkles',
    description: 'The entertainment segment featuring world-class technological shows, light performances, and on-the-spot activities. Past performers include Light Balance and world champion Double Dutch crews.',
    highlight: 'World-Class Shows',
    image: 'https://images.pexels.com/photos/13031821/pexels-photo-13031821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Summit',
    icon: 'Trophy',
    description: 'High-impact discussions bringing together industry leaders, policymakers, and innovators to address the most pressing challenges of our time.',
    highlight: 'Industry Leaders',
    image: 'https://images.pexels.com/photos/20732953/pexels-photo-20732953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const GALLERY_IMAGES = [
  { url: 'https://images.pexels.com/photos/8566536/pexels-photo-8566536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Humanoid robot with glowing blue features', span: 'lg:col-span-2 lg:row-span-2' },
  { url: 'https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Code on a laptop screen with blue lighting', span: '' },
  { url: 'https://images.pexels.com/photos/8438956/pexels-photo-8438956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Woman playing chess against a robot arm', span: '' },
  { url: 'https://images.pexels.com/photos/3722737/pexels-photo-3722737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'White drone flying against blue sky', span: 'lg:col-span-2' },
  { url: 'https://images.pexels.com/photos/8108728/pexels-photo-8108728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Circuit board with neon glow', span: '' },
  { url: 'https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Engaged audience at a conference', span: '' },
  { url: 'https://images.pexels.com/photos/8566467/pexels-photo-8566467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Humanoid robot with LED face display', span: 'lg:col-span-2' },
  { url: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cybersecurity data on a monitor', span: '' },
];

export const MARQUEE_ITEMS = [
  'Robotics', 'Artificial Intelligence', 'Hackathons', 'Aerospace', 'Drones',
  'Cybersecurity', 'Quant Finance', 'Biotechnology', 'IoT', 'Blockchain',
  'Game Development', 'Autonomous Vehicles', 'Quantum Computing', 'AR/VR',
];
