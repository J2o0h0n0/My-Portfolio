import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Layout, ShoppingCart, Cpu, Search, Globe, ChevronRight, ChevronLeft, Send, Phone, Terminal, Layers, Zap, CheckCircle2, Info, ArrowLeft } from 'lucide-react';

// --- Types ---
type ProjectCategory = 'All' | 'WordPress' | 'Shopify' | 'Static' | 'AI';

interface Mockup {
  url: string;
  title: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory[];
  image: string;
  tags: string[];
  link: string;
  mockups?: Mockup[];
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 15,
    title: "Vidya Jyothi School",
    description: "Educational institution website showcasing a child-centric learning environment with ICSE curriculum.",
    category: ['Static'],
    image: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-Home-page.png`,
    tags: ["HTML", "CSS", "JS", "PHP", "WordPress Theme", "XAMPP"],
    link: "",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-Home-page.png`, title: "Home Page" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-about-us.png`, title: "About Us" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-contact-us.png`, title: "Contact Us" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-Academics.png`, title: "Academics" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-Admissions.png`, title: "Admissions" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-Facilities.png`, title: "Facilities" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-news-events.png`, title: "News & Events" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-parents-corner.png`, title: "Parents Corner" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/VJSK/VJSK-school-life.png`, title: "School Life" }
    ]
  },
  {
    id: 3,
    title: "The Curtain Story",
    description: "Modern home decor website focused on premium curtains and customized interior styling solutions.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/The-Curtain-Story.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://thecurtainstory.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/The-Curtain-Story.png`, title: "Home Page" }
    ]
  },
  {
    id: 6,
    title: "Universal Evaluations",
    description: "Corporate website for valuation and consultancy services catering to financial and asset assessment needs.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Universal-Evaluations.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://universalevaluations.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Universal-Evaluations.png`, title: "Home Page" }
    ]
  },
  {
    id: 7,
    title: "Scageon",
    description: "Corporate website for engineering and industrial solutions with a strong business-focused presentation.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Scageon.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://scageon.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Scageon.png`, title: "Home Page" }
    ]
  },
  {
    id: 8,
    title: "Naksha Tech",
    description: "Advanced technology website for a geospatial and engineering company specializing in Scan to BIM, GIS, LiDAR, and AI-driven mapping solutions. Built to showcase data-driven infrastructure services, digital twins, and end-to-end geospatial intelligence for smarter planning and execution.",
    category: ['Static'],
    image: `${import.meta.env.BASE_URL}images/Projects/Static/Naksha-Tech/Naksha-Tech.png`,
    tags: ["HTML", "CSS", "JS", "GIS", "LiDAR"],
    link: "https://nakshatech.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/Naksha-Tech/Naksha-Tech.png`, title: "Home Page" }
    ]
  },
  {
    id: 9,
    title: "BeMine Studio",
    description: "Interior design platform focused on turnkey solutions, structured planning, and practical design-to-execution alignment.",
    category: ['WordPress', 'AI'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Bemine-Studio.png`,
    tags: ["WordPress", "Plugins", "Privyr Lead Integration"],
    link: "https://beminestudio.com/",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Bemine-studio/home-page.png`, title: "Home Page" },
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Bemine-studio/Commercial-page.png`, title: "Commercial Projects" },
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Bemine-studio/Residential-page.png`, title: "Residential Projects" },
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Bemine-studio/Projects-page.png`, title: "All Projects" }
    ]
  },
  {
    id: 10,
    title: "Magtik Lighting",
    description: "Corporate lighting brand website highlighting performance-driven systems for commercial and industrial environments.",
    category: ['WordPress', 'AI'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Magtik.png`,
    tags: ["WordPress", "Plugins", "CSS"],
    link: "https://kumarisoni.com/magtik/",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Magtik.png`, title: "Home Page (WP)" },
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Magtik/magtik.png`, title: "Lighting Interface (AI)" }
    ]
  },
  {
    id: 1,
    title: "Aishwarya Interiors",
    description: "Luxury interior design website showcasing high-end residential projects with a focus on modern aesthetics and elegant living spaces.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Aishwarya-Interiors.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://aishwaryainteriors.in",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Aishwarya-Interiors.png`, title: "Home Page" }
    ]
  },
  {
    id: 2,
    title: "Infiniti Concepts",
    description: "Corporate website for architectural and interior material solutions including flooring, cladding, and surface products.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Infiniti-Concepts.png`,
    tags: ["Local WordPress", "XAMPP", "PHP"],
    link: "https://www.infiniticoncepts.co.in/",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Infiniti-Concepts.png`, title: "Home Page" }
    ]
  },
  {
    id: 4,
    title: "Homatico",
    description: "Service-based platform for home interiors and improvement solutions with a clean and intuitive interface.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Homatico.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://homatico.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Homatico.png`, title: "Home Page" }
    ]
  },
  {
    id: 5,
    title: "Classic Insure",
    description: "Professional insurance website presenting a range of financial protection and policy services.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Classic-Insure.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://classicinsure.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Classic-Insure.png`, title: "Home Page" }
    ]
  },
  {
    id: 11,
    title: "The Wisdom Store",
    description: "E-commerce platform for school books and study materials with nationwide academic resource delivery.",
    category: ['Shopify'],
    image: `${import.meta.env.BASE_URL}images/Projects/Shopify/The-Wisdom-Store.png`,
    tags: ["Shopify", "Apps", "Liquid", "CSS"],
    link: "https://thewisdomstore.store/",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Shopify/The-Wisdom-Store.png`, title: "Home Page" }
    ]
  },
  {
    id: 12,
    title: "Zethic",
    description: "Digital agency website specializing in WordPress development, website design, and scalable web solutions.",
    category: ['Static'],
    image: `${import.meta.env.BASE_URL}images/Projects/Static/Zethic/Zethic.png`,
    tags: ["HTML", "CSS", "JS", "PHP", "XAMPP"],
    link: "",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/Zethic/Zethic.png`, title: "Home Page" }
    ]
  },
  {
    id: 13,
    title: "Zenserves",
    description: "Modern agency website focused on AI-driven design, web development, and custom application solutions.",
    category: ['Static'],
    image: `${import.meta.env.BASE_URL}images/Projects/Static/Zenserves/zenserves-homepage.png`,
    tags: ["HTML", "CSS", "JS", "PHP", "XAMPP"],
    link: "",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/Zenserves/zenserves-homepage.png`, title: "Home Page" }
    ]
  },
  {
    id: 14,
    title: "Zenserves - New Design",
    description: "Modern agency website focused on AI-driven design, web development, and custom application solutions.",
    category: ['Static'],
    image: `${import.meta.env.BASE_URL}images/Projects/Static/Zenserves-New-Design/home.png`,
    tags: ["HTML", "CSS", "JS", "PHP", "XAMPP"],
    link: "",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/Zenserves-New-Design/home.png`, title: "Home Page" }
    ]
  },
  {
    id: 16,
    title: "Zeppstr SEO STEP FORM (Landing Page)",
    description: "SEO landing page designed to promote data-driven search engine optimization services in Bangalore.",
    category: ['Static'],
    image: `${import.meta.env.BASE_URL}images/Projects/Static/Zeppstr/Zeppstr-home-page.png`,
    tags: ["HTML", "CSS", "JS", "PHP", "XAMPP", "PHPMailer"],
    link: "",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/Zeppstr/Zeppstr-home-page.png`, title: "Home Page" },
      { url: `${import.meta.env.BASE_URL}images/Projects/Static/Zeppstr/Zeppstr-Step-Form.png`, title: "SEO Step Form" }
    ]
  },
  {
    id: 17,
    title: "Core Value Realty",
    description: "Luxury real estate platform highlighting property listings and data-driven investment solutions in Bangalore.",
    category: ['AI'],
    image: `${import.meta.env.BASE_URL}images/Projects/AI/Core-value-realty/Core-value-realty.png`,
    tags: ["AI", "SMTP"],
    link: "http://corevaluerealty.com/",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Core-value-realty/Core-value-realty.png`, title: "Property Listings" }
    ]
  },
  {
    id: 18,
    title: "Moonwalk Infra",
    description: "Corporate EPC and PEB engineering website specializing in large-scale industrial infrastructure solutions.",
    category: ['AI'],
    image: `${import.meta.env.BASE_URL}images/Projects/AI/Moonwalkinfra/Moonwalkinfra.png`,
    tags: ["AI", "SMTP"],
    link: "https://honeydew-caterpillar-701361.hostingersite.com/",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/AI/Moonwalkinfra/Moonwalkinfra.png`, title: "Industrial Infrastructure" }
    ]
  },
  {
    id: 19,
    title: "Naksha Tech",
    description: "Advanced technology website for a geospatial and engineering company specializing in Scan to BIM, GIS, LiDAR, and AI-driven mapping solutions.",
    category: ['WordPress'],
    image: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Nakshatech.png`,
    tags: ["WordPress", "Plugins", "CSS", "JavaScript", "PHP"],
    link: "https://nakshatech.com",
    mockups: [
      { url: `${import.meta.env.BASE_URL}images/Projects/Wordpress/Nakshatech.png`, title: "Home Page" }
    ]
  }
];

const SKILLS = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "PHP", "Local XAMPP"], icon: <Layout className="w-5 h-5" /> },
  { category: "CMS", items: ["WordPress", "Shopify", "PHP", "Plugins", "Custom CSS JS"], icon: <ShoppingCart className="w-5 h-5" /> },
  { category: "AI & Automation", items: ["AI Integration", "SMTP", "Privyr CRM", "Google AI Studio"], icon: <Cpu className="w-5 h-5" /> },
  { category: "Other", items: ["SEO", "Performance", "Debugging", "Migration"], icon: <Zap className="w-5 h-5" /> }
];

const EXPERIENCE = [
  {
    role: "Junior Web Developer",
    company: "Zeppstr Growth Media",
    period: "2024 - 2026 (1.5 years)",
    description: "Leading frontend development for diverse client projects, specializing in high-performance WordPress and Shopify solutions.",
    icon: <Code className="w-6 h-6" />
  },
  {
    role: "WordPress Intern",
    company: "Tesla Digital LLP",
    period: "2023 (4 months)",
    description: "Assisted in theme customization, plugin integration, and site maintenance for various digital marketing campaigns.",
    icon: <Globe className="w-6 h-6" />
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          My <span className="text-primary">Portfolio</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-white text-dark text-sm font-bold"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-primary text-white text-center font-bold"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Graphics/Shades Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border-white/20 text-xs font-bold tracking-widest uppercase text-primary mb-6"
          >
            Available for new projects
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-primary">John William</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 font-medium mb-4">
            Junior Web Developer | WordPress, Shopify & Frontend Specialist
          </p>
          <p className="text-lg text-white/60 mb-10 max-w-lg">
            Building fast, responsive, and user-focused websites with modern technologies and a touch of AI innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold neon-glow flex items-center gap-2"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative block mt-12 md:mt-0"
        >
          <div className="relative z-0 glass p-4 rounded-3xl border-white/20 shadow-2xl">
            <div 
              className="bg-dark rounded-2xl overflow-hidden aspect-[3/2] relative group cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/Hero-section/Web-Development.jpg`} 
                alt="Website Design UI" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 glass-card p-4 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
          >
            <div className="p-2 bg-primary/20 rounded-lg text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Experience</div>
              <div className="text-sm font-bold">1.5+ Years</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 glass-card p-4 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
          >
            <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Projects</div>
              <div className="text-sm font-bold">15+ Completed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 border-2 border-white/10">
              <img 
                src={`${import.meta.env.BASE_URL}images/Digital-Experiences/Crafting-Digital-Experiences.jpg`} 
                alt="Web Developer Working" 
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-3xl -z-0 translate-x-4 translate-y-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">
              Crafting Digital <span className="text-primary">Experiences</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg">
              <p>
                I’m a passionate Junior Web Developer with 1.5+ years of experience building modern, high-converting websites. I specialize in WordPress and Shopify development, creating scalable and user-friendly solutions.
              </p>
              <p>
                I also develop static websites using HTML, CSS, JavaScript, and PHP, and handle complete website migrations manually via cPanel.
              </p>
              <p>
                With a strong focus on frontend development using HTML,CSS,JS,PHP along with AI-powered tools, I build fast, optimized, and visually engaging digital experiences that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="glass-card p-4 rounded-2xl">
                <div className="text-3xl font-display font-bold text-primary mb-1">1.5+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Years Experience</div>
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <div className="text-3xl font-display font-bold text-secondary mb-1">20+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold tracking-widest uppercase text-primary mb-4"
          >
            My Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Technical <span className="text-primary">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            A comprehensive set of tools and technologies I use to bring digital visions to life, from pixel-perfect frontends to robust wordpress backends.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[32px] group relative border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{skill.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item, i) => (
                    <motion.span 
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                      className="px-4 py-1.5 rounded-xl bg-white/5 text-xs font-semibold border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ onViewMockup }: { onViewMockup: (project: Project) => void }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories: ProjectCategory[] = ['All', 'WordPress', 'Shopify', 'Static', 'AI'];

  const filteredProjects = PROJECTS.filter(p => activeCategory === 'All' || p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Featured <span className="text-primary">Work</span></h2>
            <p className="text-white/60 max-w-xl">Explore my latest projects ranging from Wordpress to AI-powered applications.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/60 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-card rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top object-left group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/70 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Logic for Live vs Mockup buttons
                        const isLiveView = activeCategory === 'WordPress' || activeCategory === 'Shopify' || (activeCategory === 'All' && (project.category.includes('WordPress') || project.category.includes('Shopify')));
                        const isAIView = activeCategory === 'AI';

                        if (isAIView && project.mockups && project.mockups.length > 0) {
                          onViewMockup(project);
                        } else if (isLiveView && project.link) {
                          window.open(project.link, '_blank');
                        } else if (project.mockups && project.mockups.length > 0) {
                          onViewMockup(project);
                        } else if (project.link) {
                          window.open(project.link, '_blank');
                        }
                      }}
                      className="flex-1 py-3 rounded-xl bg-white text-dark text-center text-sm font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {(() => {
                        const isLiveView = activeCategory === 'WordPress' || activeCategory === 'Shopify' || (activeCategory === 'All' && (project.category.includes('WordPress') || project.category.includes('Shopify')));
                        const isAIView = activeCategory === 'AI';
                        
                        if (isAIView) return 'View Mockup';
                        if (isLiveView) return 'Live';
                        return project.mockups && project.mockups.length > 0 ? 'View Mockup' : 'Live';
                      })()} <ExternalLink className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 py-3 rounded-xl glass border-white/20 text-white text-center text-sm font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      View Details <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass-card rounded-[40px] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full glass border-white/20 hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 h-full max-h-[80vh] overflow-y-auto md:overflow-hidden">
                <div className="h-64 md:h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-top object-left"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-start">
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 uppercase tracking-widest">
                      {selectedProject.category.join(' & ')}
                    </span>
                  </div>
                  <h3 className="text-4xl font-display font-bold mb-6">{selectedProject.title}</h3>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed line-clamp-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-10">
                    <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4">Technologies Used</div>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-xl bg-white/5 text-sm font-medium border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        const isLiveView = activeCategory === 'WordPress' || activeCategory === 'Shopify' || (activeCategory === 'All' && (selectedProject.category.includes('WordPress') || selectedProject.category.includes('Shopify')));
                        const isAIView = activeCategory === 'AI';

                        if (isAIView && selectedProject.mockups && selectedProject.mockups.length > 0) {
                          onViewMockup(selectedProject);
                          setSelectedProject(null);
                        } else if (isLiveView && selectedProject.link) {
                          window.open(selectedProject.link, '_blank');
                        } else if (selectedProject.mockups && selectedProject.mockups.length > 0) {
                          onViewMockup(selectedProject);
                          setSelectedProject(null);
                        } else if (selectedProject.link) {
                          window.open(selectedProject.link, '_blank');
                        }
                      }}
                      className="flex-1 py-4 rounded-2xl bg-primary text-white text-center font-bold hover:bg-primary/90 transition-all neon-glow flex items-center justify-center gap-2"
                    >
                      {(() => {
                        const isLiveView = activeCategory === 'WordPress' || activeCategory === 'Shopify' || (activeCategory === 'All' && (selectedProject.category.includes('WordPress') || selectedProject.category.includes('Shopify')));
                        const isAIView = activeCategory === 'AI';
                        
                        if (isAIView) return 'View Mockup';
                        if (isLiveView) return 'Live';
                        return selectedProject.mockups && selectedProject.mockups.length > 0 ? 'View Site Mockups' : 'Live';
                      })()} <ExternalLink className="w-5 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
          <p className="text-white/60">My career path and the milestones I've achieved along the way.</p>
        </div>

        <div className="relative space-y-12 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-20"
            >
              <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl glass border-white/20 flex items-center justify-center text-primary z-10">
                {exp.icon}
              </div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                <div className="text-lg font-medium text-white/90 mb-4">{exp.company}</div>
                <p className="text-white/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">Let's Build Something <span className="text-primary">Amazing</span></h2>
            <p className="text-xl text-white/60 mb-12">
              Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border-white/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/40 font-bold uppercase tracking-widest">Email Me</div>
                  <div className="text-xl font-medium"><a href="mailto:willywilliam1610@gmail.com" className="hover:text-primary transition-colors">willywilliam1610@gmail.com</a></div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border-white/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/40 font-bold uppercase tracking-widest">Call Me</div>
                  <div className="text-xl font-medium"><a href="tel:8880163082" className="hover:text-secondary transition-colors">8880163082</a></div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border-white/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/40 font-bold uppercase tracking-widest">LinkedIn</div>
                  <div className="text-xl font-medium"><a href="https://www.linkedin.com/in/john-william-7123b8266/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">linkedin.com/in/john-william-7123b8266/</a></div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] border-white/10"
          >
            <form 
              className="space-y-6" 
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus('sending');
                setErrorMessage('');
                
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  subject: formData.get('subject'),
                  message: formData.get('message'),
                };

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();

                  if (response.ok) {
                    setStatus('success');
                    form.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                  } else {
                    setStatus('error');
                    setErrorMessage(result.error || 'Failed to send message.');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  setStatus('error');
                  setErrorMessage('An unexpected error occurred.');
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Full Name</label>
                  <input name="name" type="text" required className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Email Address</label>
                  <input name="email" type="email" required className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Subject</label>
                <input name="subject" type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Message</label>
                <textarea name="message" rows={5} required className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <motion.button 
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 neon-glow disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold">
          My <span className="text-primary">Portfolio</span>
        </div>
        
        <div className="text-white/40 text-sm font-medium">
          © 2026 John William. Built with AI Technology.
        </div>

        <div className="flex items-center gap-6">
          <a href="mailto:willywilliam1610@gmail.com" className="text-white/60 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          <a href="tel:8880163082" className="text-white/60 hover:text-white transition-colors"><Phone className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/john-william-7123b8266/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60]">
      <motion.div 
        className="h-full bg-primary"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const MockupGallery = ({ project, onBack }: { project: Project, onBack: () => void }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setIsZoomed(false);
    if (selectedImageIndex !== null && project.mockups) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.mockups.length);
    }
  };

  const prevImage = () => {
    setIsZoomed(false);
    if (selectedImageIndex !== null && project.mockups) {
      setSelectedImageIndex((selectedImageIndex - 1 + project.mockups.length) % project.mockups.length);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed inset-0 z-[100] bg-dark overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-white/60 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 uppercase tracking-widest">
                {project.category.join(' & ')} Mockup
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold">{project.title}</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {project.mockups?.map((mockup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div 
                onClick={() => {
                  setSelectedImageIndex(idx);
                  setIsZoomed(false);
                }}
                className="glass-card rounded-[40px] overflow-hidden border-white/5 shadow-2xl cursor-zoom-in group"
              >
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-video">
                  <img 
                    src={mockup.url} 
                    alt={mockup.title} 
                    className="w-full h-full object-cover object-top object-left group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-center gap-1">
                      <Search className="w-6 h-6 text-white" />
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">View Full</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-bold text-white mb-2">{mockup.title}</h3>
                <div className="w-12 h-1 bg-primary rounded-full opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={onBack}
            className="px-12 py-5 rounded-2xl glass border-white/10 text-white font-bold hover:bg-white/5 transition-all cursor-pointer"
          >
            Return to Projects
          </button>
        </div>
      </div>

      {/* Lightbox / Slider Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && project.mockups && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-0 md:top-0 md:-right-16 p-3 rounded-full glass border-white/20 hover:bg-white/10 transition-colors z-20 cursor-pointer"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 p-4 rounded-full glass border-white/20 hover:bg-primary hover:text-white transition-all z-20 cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div 
                className="w-full h-full overflow-y-auto rounded-3xl custom-scrollbar py-6 md:py-10 px-2 md:px-4 flex flex-col items-center" 
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img 
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  src={project.mockups[selectedImageIndex].url} 
                  alt={project.mockups[selectedImageIndex].title} 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`shadow-2xl rounded-xl transition-all duration-500 flex-shrink-0 ${
                    isZoomed ? 'w-full h-auto cursor-zoom-out' : 'w-full md:max-w-[85%] h-auto cursor-zoom-in'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="mt-6 text-center">
                  <h4 className="text-2xl font-bold text-white">{project.mockups[selectedImageIndex].title}</h4>
                </div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 p-4 rounded-full glass border-white/20 hover:bg-primary hover:text-white transition-all z-20 cursor-pointer"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/60 font-medium tracking-widest text-sm flex items-center gap-4">
                <span>{selectedImageIndex + 1} / {project.mockups.length}</span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">Click image to {isZoomed ? 'shrink' : 'zoom'}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  useEffect(() => {
    if (galleryProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [galleryProject]);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      
      <AnimatePresence mode="wait">
        {galleryProject ? (
          <motion.div 
            key="gallery-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MockupGallery 
              project={galleryProject} 
              onBack={() => setGalleryProject(null)} 
            />
          </motion.div>
        ) : (
          <motion.div 
            key="main-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects onViewMockup={(p) => setGalleryProject(p)} />
            <Experience />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
