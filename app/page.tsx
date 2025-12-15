"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Menu,
  X,
  Briefcase,
  Cloud,
  Terminal,
  Layers,
  Eye,       
  FileText,
  Send
} from "lucide-react";

// --- YOUR PROFILE DATA (UNCHANGED) ---
const PROFILE = {
  name: "Sanika Dhumal",
  role: "Full Stack Developer",
  bio: "I am a passionate Full Stack Developer focused on building scalable, high-performance web applications. With a strong foundation in Java and the MERN stack, I bridge the gap between elegant user interfaces and robust backend architecture. Beyond code, I bring strong leadership, creative problem-solving skills, and fluent English communication to drive project success.",
  email: "sanikadhumal149@gmail.com", 
  photo: "/sanika.jpeg", 
  resume: "/resume.pdf", 
  
  skills: {
    languages: ["Java", "JavaScript", "PHP", "HTML5", "CSS3", "SQL"],
    technical: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"],
    devops: ["Git & GitHub", "Vercel", "Hostinger"],
    apis: ["RESTful APIs", "Socket.io", "Google OCR API", "NodeMailer", "Postman"]
  },

  social: {
    github: "https://github.com/SanikaDhumalDevs", 
    linkedin: "https://www.linkedin.com/in/sanika-dhumal-164aab261",
  }
};

// --- INTERNSHIP DATA (UNCHANGED) ---
const INTERNSHIPS = [
  {
    company: "Dalvik Apps", 
    role: "IoT Trainee",
    period: "1 Week Intensive", 
    desc: "Learned to build functional IoT prototypes addressing real-world problems in Home Automation and Agriculture. Interfaced sensors (PIR, DHT, Soil Moisture, LDR) with microcontrollers to send live data to cloud dashboards (Blynk/ThingSpeak). Developed logic for Smart Irrigation, Intrusion Detection, and Energy-Saving Lighting systems with real-time mobile alerts.",
    tech: ["IoT", "Cloud Computing", "Sensors"]
  },
  {
    company: "IBM SkillsBuild", 
    role: "Data Analytics Intern",
    period: "June 2024 - Aug 2024",
    desc: "Developed and automated interactive Power BI dashboards to analyze 'Sustainable Development Goals' data across multiple countries and regions. Optimized data visualization workflows to improve insight generation.",
    tech: ["Power BI", "Data Analysis"]
  },
  {
    company: "Innovation Computer Academy", 
    role: "Web Development Intern",
    period: "Nov 2022 - Feb 2023",
    desc: "Developed dynamic, responsive web applications by integrating frontend interfaces with backend logic. Designed interactive UI components using HTML/CSS and JavaScript, and engineered RESTful APIs with PHP to manage MySQL database operations efficiently.",
    tech: ["HTML","CSS", "JavaScript", "PHP" , "MySQL"],
    link: "https://github.com/SanikaDhumalDevs/PHP-MySQL--Event-Registration-Management-System" 
  }
];

// --- PROJECTS CONFIGURATION (UNCHANGED) ---
const PROJECTS = [
  {
    title: "Panchapali Durgamata Trust",
    desc: "A pro-bono digital initiative to establish the online presence of a religious trust. It features Marathi language support for local accessibility. I designed and deployed this high-performance, responsive portal to serve the community.",
    tags: ["Next.js", "Node.js","Firebase", "Tailwind CSS", "Localization"],
    link: "https://panchapalidurgamata.org/", 
    image: "/project1.PNG" 
  },
  {
    title: "Smart Fusion Warranty Vault",
    desc: "An intelligent asset tracker leveraging AI and OCR to manage household items like product, medicine and food. Features automated email alerts for expiry dates to promote sustainability and responsible consumption.",
    tags: ["REACT.JS","NODE.JS","MONGODB","Tailwind CSS", "Python AI","OPEN_API","Google OCR", "NodeMailer"],
    link: "https://github.com/SanikaDhumalDevs/SmartWarrantyVault", 
    image: "/p2.PNG" 
  },
  {
    title: "SkillSwap: Community Barter Platform", 
    desc: "A peer-to-peer skill barter ecosystem where knowledge is the currency. Users connect to exchange skills via a credit-based economy. Features include a Python TF-IDF recommendation engine for smart mentor matching, real-time chat, and flexible teaching modes.",
    tags: ["NEXT.JS","TYPESCRIPT","NODE.JS","MONGODB","Tailwind CSS", "Python ML", "Socket.io"],
    link: "https://github.com/SanikaDhumalDevs/skill-swap-platform",
    image: "/project3.PNG" 
  }
];

// --- ANIMATION VARIANTS ---
const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- FIXED NAVIGATION LOGIC ---
  const handleNavigation = (item:string) => {
    // 1. Handle Resume (Open File)
    if (item === 'Resume') {
      window.open(PROFILE.resume, '_blank');
      setIsMenuOpen(false);
      return;
    }

    // 2. Handle ID Mapping (About -> home)
    let targetId = item.toLowerCase();
    if (item === 'About') targetId = 'home';

    // 3. Scroll safely
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Head>
        <title>{PROFILE.name} | {PROFILE.role}</title>
      </Head>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => handleNavigation('About')}
          >
            Sanika<span className="text-purple-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavigation(item)}
                className="hover:text-purple-400 hover:scale-105 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-slate-950/95 backdrop-blur-lg z-40 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-xl font-medium text-slate-300 items-center justify-center h-3/4">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item)}
                  className="w-full text-center py-4 border-b border-slate-800/50 hover:text-purple-400 hover:bg-slate-900/50 transition-all rounded-lg"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase"
          >
            Full Stack Developer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
              {PROFILE.name}
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {PROFILE.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => handleNavigation('Projects')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:-translate-y-1"
            >
              View My Projects
            </button>
            <a 
              href={PROFILE.social.github} 
              target="_blank"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Animation for Image */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-72 h-72 md:w-96 md:h-96 relative z-10 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl"
          >
            <Image 
              src={PROFILE.photo} 
              alt={PROFILE.name}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Sanika+Dhumal&background=random&size=400";
              }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-purple-500/30 blur-[100px] -z-10 rounded-full opacity-60" />
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Skill Card 1 */}
            <motion.div variants={fadeInUp} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skill Card 2 */}
            <motion.div variants={fadeInUp} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Frameworks & DBs</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.technical.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skill Card 3 */}
            <motion.div variants={fadeInUp} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">DevOps & Hosting</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.devops.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skill Card 4 */}
            <motion.div variants={fadeInUp} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">APIs & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.apis.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {INTERNSHIPS.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-slate-900/50 border-l-4 border-purple-500 rounded-r-xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{job.role}</h3>
                  <div className="text-purple-400 font-medium flex items-center gap-2">
                    <Briefcase size={16} /> {job.company}
                  </div>
                </div>
                <span className="text-slate-500 text-sm font-mono bg-slate-800 px-3 py-1 rounded-full w-fit border border-slate-700">
                  {job.period}
                </span>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                {job.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tech.map((t) => (
                  <span key={t} className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {t}
                  </span>
                ))}
              </div>

              {job.link && (
                <div className="mt-6 pt-4 border-t border-slate-800/50">
                  <a 
                    href={job.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors w-fit"
                  >
                    <Github size={16} /> View Source Code
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto bg-slate-900/30">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Here are some of the projects I've worked on. For deployed applications, you can view the live demo. For backend/systems projects, you can explore the source code.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, i) => {
            const isGithub = project.link.includes("github.com");
            const isPlaceholder = project.link === "#";

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col h-full hover:-translate-y-2"
              >
                <div className="relative h-48 shrink-0 overflow-hidden bg-slate-800">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-800 text-purple-400 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {isPlaceholder ? (
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-500 cursor-not-allowed pt-4 border-t border-slate-800">
                        In Development (Private)
                      </span>
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors pt-4 border-t border-slate-800"
                      >
                        {isGithub ? (
                          <>
                            <Github size={16} /> View Project
                          </>
                        ) : (
                          <>
                            Live Demo <ExternalLink size={16} />
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- RESUME SECTION --- */}
      <section id="resume" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl -z-0 rounded-full" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-600 shadow-lg">
              <FileText className="text-purple-400" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
              Want to see the full picture? Check out my resume for a detailed history of my education, professional experience, and technical skill set.
            </p>
            
            <button 
              onClick={() => handleNavigation('Resume')}
              className="group flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1"
            >
              <Eye size={20} className="group-hover:scale-110 transition-transform" />
              View Resume
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400 border border-purple-500/20">
              <Mail size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} /> Say Hello
              </a>
              <a 
                href={PROFILE.social.linkedin}
                target="_blank"
                className="px-8 py-4 border border-slate-700 text-white rounded-lg font-bold hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Sanika Dhumal. All rights reserved.</p>
      </footer>
    </div>
  );
}