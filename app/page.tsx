"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Server,
  Cpu, 
  Send,
  Menu,
  X,
  Briefcase,
  Globe,
  Cloud,
  Terminal,
  Layers,
  Eye,       
  FileText   
} from "lucide-react";

// --- YOUR PROFILE DATA ---
const PROFILE = {
  name: "Sanika Dhumal",
  role: "Full Stack Developer",
  bio: "I am a passionate Full Stack Developer focused on building scalable, high-performance web applications. With a strong foundation in Java and the MERN stack, I bridge the gap between elegant user interfaces and robust backend architecture. Beyond code, I bring strong leadership, creative problem-solving skills, and fluent English communication to drive project success.",
  email: "sanikadhumal149@gmail.com", 
  photo: "/sanika.jpeg", 
  resume: "/resume.pdf", 
  
  skills: {
    languages: [
      "Java", 
      "JavaScript",  
      "PHP", 
      "HTML5", 
      "CSS3", 
      "SQL"
    ],
    technical: [
      "Next.js", 
      "React.js", 
      "Node.js", 
      "Express.js",
      "MongoDB", 
      "MySQL",
      "Tailwind CSS",
      
    ],
    devops: [
      "Git & GitHub",
      "Vercel",
      "Hostinger",
      
    ],
    apis: [
      "RESTful APIs",
      "Socket.io",
      "Google OCR API",
      "NodeMailer",
      "Postman"
    ]
  },

  social: {
    github: "https://github.com/SanikaDhumalDevs", 
    linkedin: "https://www.linkedin.com/in/sanika-dhumal-164aab261",
  }
};

// --- INTERNSHIP DATA ---
const INTERNSHIPS = [
  {
    company: "Dalvik Apps", 
    role: "IoT Trainee",
    period: "1 Week Intensive", 
    desc: "Learned to build functional IoT prototypes addressing real-world problems in Home Automation and Agriculture. Interfaced sensors (PIR, DHT, Soil Moisture, LDR) with microcontrollers to send live data to cloud dashboards (Blynk/ThingSpeak). Developed logic for Smart Irrigation, Intrusion Detection, and Energy-Saving Lighting systems with real-time mobile alerts.",
    tech: ["IoT", "Cloud Computing", "Sensors", "C++"]
  },
  {
    company: "IBM SkillsBuild", 
    role: "Data Analytics Intern",
    period: "June 2024 - Aug 2024",
    desc: "Developed and automated interactive Power BI dashboards to analyze 'Sustainable Development Goals' data across multiple countries and regions. Optimized data visualization workflows to improve insight generation.",
    tech: ["Power BI", "Data Visualization", "Data Analysis"]
  },
  {
    company: "Innovation Computer Academy", 
    role: "Web Development Intern",
    period: "Nov 2022 - Feb 2023",
    desc: "Developed dynamic, responsive web applications by integrating frontend interfaces with backend logic. Designed interactive UI components using HTML/CSS and JavaScript, and engineered RESTful APIs with PHP to manage MySQL database operations efficiently.",
    tech: ["HTML/CSS", "JavaScript", "PHP" , "MySQL"],
    // 👇 ADDED LINK HERE (Replace with your actual GitHub repo link)
    link: "https://github.com/SanikaDhumalDevs/PHP-MySQL--Event-Registration-Management-System" 
  }
];

// --- PROJECTS CONFIGURATION ---
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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-purple-500/30">
      <Head>
        <title>{PROFILE.name} | {PROFILE.role}</title>
      </Head>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
            Sanika<span className="text-purple-500">.</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-x-0 top-16 bg-slate-950 border-b border-slate-800 z-40"
          >
            <div className="flex flex-col p-6 gap-4 text-lg font-medium text-slate-300">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left py-2 border-b border-slate-900">
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {PROFILE.name}
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {PROFILE.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-lg shadow-purple-900/20"
            >
              View My Projects
            </button>
            <a 
              href={PROFILE.social.github} 
              target="_blank"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2"
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
          <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
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
          </div>
          <div className="absolute inset-0 bg-purple-500/30 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Technical Frameworks & DBs</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.technical.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">DevOps & Hosting</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.devops.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">APIs & Tools Used</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PROFILE.skills.apis.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {INTERNSHIPS.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900/50 border-l-4 border-purple-500 rounded-r-xl p-8 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <div className="text-purple-400 font-medium flex items-center gap-2">
                    <Briefcase size={16} /> {job.company}
                  </div>
                </div>
                <span className="text-slate-500 text-sm font-mono bg-slate-800 px-3 py-1 rounded-full w-fit">
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

              {/* 👇 ADDED THIS BLOCK FOR THE LINK */}
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Here are some of the projects I've worked on. For deployed applications, you can view the live demo. For backend/systems projects, you can explore the source code.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, i) => {
            const isGithub = project.link.includes("github.com");
            const isPlaceholder = project.link === "#";

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all group hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col h-full"
              >
                <div className="relative h-48 shrink-0 overflow-hidden bg-slate-800">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
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
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-600">
              <FileText className="text-purple-400" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
              Want to see the full picture? Check out my resume for a detailed history of my education, professional experience, and technical skill set.
            </p>
            
            <a 
              href={PROFILE.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-purple-500/25"
            >
              <Eye size={20} className="group-hover:scale-110 transition-transform" />
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
              <Mail size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> Say Hello
              </a>
              <a 
                href={PROFILE.social.linkedin}
                target="_blank"
                className="px-8 py-4 border border-slate-700 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
              >
                Connect on LinkedIn
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