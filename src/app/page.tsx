"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  User, 
  ExternalLink, 
  ChevronRight, 
  Terminal, 
  Database, 
  Cpu, 
  Trophy, 
  CheckCircle,
  FileText,
  Calendar
} from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import styles from "./page.module.css";

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate successful form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const projects = [
    {
      id: "bluesentinel",
      title: "BlueSentinel-Grid",
      category: "web",
      description: "AI-powered civic tech platform for marine pollution detection and 7-day forecasting. Built for the BlueSentinel-Grid Hackathon 2025.",
      longDescription: "A single-page dashboard for environmental advocacy. Features image classification of marine debris using the Claude AI API, simulated LSTM forecasting models for coastal pollution indices, and interactive SVG pollution heatmaps. Forms are hooked up to Formspree for serverless reporting directly sent to the Odisha Pollution Control Board.",
      tech: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Claude API", "Formspree"],
      github: "https://github.com/kalaiii-23/Marine-Ecosystem-BLueSentinel-Grid"
    },
    {
      id: "getagrip",
      title: "GetAGrip",
      category: "mobile",
      description: "A comprehensive career guidance and mentorship mobile platform designed to improve student navigation and mentorship access.",
      longDescription: "Engineered as an interactive mobile application using React, Tailwind CSS, and Firebase. Features secure real-time authentication, database management for user mentor-mentee pairing, custom chat systems, and scalable hosting on Vercel.",
      tech: ["React", "CSS3", "Firebase Auth", "Firestore", "Vercel"],
      github: "https://github.com/kalaiii-23/GetAGrip" // Fallback project link
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      category: "mobile",
      description: "Offline-first mobile application designed to log, manage, and visualize daily expenditures.",
      longDescription: "Built with React Native and Expo utilizing TypeScript. Integrates local storage mechanisms for secure, device-only data logging. Incorporates detailed category filtering, monthly budget warnings, and interactive spending charts to help users manage their financial health.",
      tech: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
      github: "https://github.com/kalaiii-23/Expense-Tracker"
    },
    {
      id: "recipe-finder",
      title: "Recipe Finder",
      category: "web",
      description: "A dynamic web application that allows users to search, filter, and discover recipes from a global API.",
      longDescription: "Developed using pure JavaScript with external API integration. Designed a responsive UI to support fluid cross-device navigation and optimized DOM rendering logic to drastically reduce search latency by 40%.",
      tech: ["JavaScript", "HTML5", "CSS3", "MealDB API", "DOM Optimizations"],
      github: "https://github.com/kalaiii-23/Recipe-Finder"
    },
    {
      id: "intranet-mailing",
      title: "Intranet Mailing System",
      category: "desktop",
      description: "Desktop-based local mailing application optimized for secure offline message handling within closed networks.",
      longDescription: "Developed in Java using the Swing framework. Implemented modular compose, send, and receive utilities with strict adherence to OOP principles. Features offline local message caching and custom serialization for storing user messages securely.",
      tech: ["Java", "Java Swing", "OOP Principles", "File IO"],
      github: "https://github.com/kalaiii-23" // General github fallback
    },
    {
      id: "codsoft-tasks",
      title: "Codsoft Java Tasks",
      category: "desktop",
      description: "A collection of academic Java applications showcasing algorithmic logic and OOP programming standards.",
      longDescription: "Includes CODSOFT-TASK1 (Interactive Number Guessing Game), CODSOFT-TASK2 (Student Grade Calculator with grade metrics), and CODSOFT-TASK3 (Object-oriented ATM Interface with simulated bank account transactions).",
      tech: ["Java", "OOP", "Data Structures"],
      github: "https://github.com/kalaiii-23?tab=repositories"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={`${styles.heroContent} animate-slide-right`}>
              <span className={styles.badge}>AI & Data Science Student</span>
              <h1 className={styles.heroTitle}>
                Hi, I'm <span className="gradient-text">Kalaimagal S</span>
              </h1>
              <p className={styles.heroSubtitle}>
                B.Tech Student in Artificial Intelligence & Data Science | Web Developer & Data Analyst
              </p>
              <p className={styles.heroDescription}>
                Passionate about transforming raw data into actionable insights and building scalable, AI-driven digital solutions. Actively seeking opportunities to contribute technical expertise and analytical skills to real-world software and data engineering teams.
              </p>
              
              <div className={styles.contactChips}>
                <a href="mailto:skalaimagal323@gmail.com" className={styles.chip}>
                  <Mail size={16} /> skalaimagal323@gmail.com
                </a>
                <a href="tel:+917305512647" className={styles.chip}>
                  <Phone size={16} /> +91 7305512647
                </a>
                <span className={styles.chip}>
                  <MapPin size={16} /> Chennai, India
                </span>
              </div>

              <div className={styles.heroActions}>
                <a href="#projects" className={styles.primaryBtn}>
                  View My Work
                </a>
                <a href="#contact" className={styles.secondaryBtn}>
                  Get In Touch
                </a>
              </div>

              <div className={styles.socialBar}>
                <a href="https://www.linkedin.com/in/kalaimagal23" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://github.com/kalaiii-23" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.hackerrank.com/profile/skalaimagal323" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="HackerRank">
                  <Code size={20} />
                </a>
              </div>
            </div>

            <div className={`${styles.heroImageContainer} animate-fade`}>
              <div className={styles.imageBacking}></div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/assets/profile.jpg" 
                  alt="Kalaimagal S Passport Size Photo" 
                  width={320} 
                  height={400} 
                  priority
                  className={styles.profileImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sub}>Get to Know Me</span>
            <h2 className={styles.title}>About Myself</h2>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutMain}>
              <div className={styles.cardHeader}>
                <User className={styles.cardIcon} size={20} />
                <h3>Career Objective</h3>
              </div>
              <p className={styles.objectiveText}>
                AI & Data Science undergraduate with hands-on experience in Data Analytics, Web Development, and Dashboard Design. Passionate about transforming raw data into actionable insights and building scalable AI-driven solutions. Seeking opportunities to contribute technical expertise and analytical skills in real-world environments.
              </p>

              <div className={styles.softSkillsGroup}>
                <h3>Core Soft Skills</h3>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillBadge}>Teamwork & Collaboration</div>
                  <div className={styles.skillBadge}>Attention to Detail</div>
                  <div className={styles.skillBadge}>Time Management</div>
                  <div className={styles.skillBadge}>Analytical Thinking</div>
                  <div className={styles.skillBadge}>Creative Problem Solving</div>
                </div>
              </div>
            </div>

            <div className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <BookOpen className={styles.cardIcon} size={20} />
                <h3>Education Timeline</h3>
              </div>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <span className={styles.timelineDate}>2023 - 2027</span>
                  <h4 className={styles.timelineTitle}>B.Tech AI & Data Science</h4>
                  <p className={styles.timelineInstitution}>Panimalar Engineering College, Chennai</p>
                  <span className={styles.scoreBadge}>CGPA: 8.61</span>
                </div>
                <div className={styles.timelineItem}>
                  <span className={styles.timelineDate}>2023 - 2025</span>
                  <h4 className={styles.timelineTitle}>Diploma in Bharatanatyam</h4>
                  <p className={styles.timelineInstitution}>Tamil Nadu Music and Fine Arts University</p>
                </div>
                <div className={styles.timelineItem}>
                  <span className={styles.timelineDate}>2023</span>
                  <h4 className={styles.timelineTitle}>Class XII (CBSE)</h4>
                  <p className={styles.timelineInstitution}>Vani Vidyalaya Senior Secondary, Chennai</p>
                  <span className={styles.scoreBadge}>Percentage: 74%</span>
                </div>
                <div className={styles.timelineItem}>
                  <span className={styles.timelineDate}>2021</span>
                  <h4 className={styles.timelineTitle}>Class X (CBSE)</h4>
                  <p className={styles.timelineInstitution}>Vani Vidyalaya Senior Secondary, Chennai</p>
                  <span className={styles.scoreBadge}>Percentage: 78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.skillsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sub}>Technical Stack</span>
            <h2 className={styles.title}>My Expertise</h2>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.skillsContainer}>
            {/* Programming Languages */}
            <div className={styles.skillCategory}>
              <div className={styles.catHeader}>
                <Terminal size={22} className={styles.catIcon} />
                <h3>Languages</h3>
              </div>
              <div className={styles.skillList}>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Python</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Java</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>JavaScript</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>TypeScript</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className={styles.skillCategory}>
              <div className={styles.catHeader}>
                <Code size={22} className={styles.catIcon} />
                <h3>Web Development</h3>
              </div>
              <div className={styles.skillList}>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>HTML5 & CSS3</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>React & React Native</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Next.js</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Firebase</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
              </div>
            </div>

            {/* Data Analytics & Tools */}
            <div className={styles.skillCategory}>
              <div className={styles.catHeader}>
                <Database size={22} className={styles.catIcon} />
                <h3>Data Analytics</h3>
              </div>
              <div className={styles.skillList}>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Microsoft Power BI</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>MySQL / SQL Databases</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Microsoft Excel</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>MS Office Suite</span>
                  <span className={styles.level}>Advanced</span>
                </div>
              </div>
            </div>

            {/* Concepts */}
            <div className={styles.skillCategory}>
              <div className={styles.catHeader}>
                <Cpu size={22} className={styles.catIcon} />
                <h3>Methodologies</h3>
              </div>
              <div className={styles.skillList}>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Data Cleaning</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>Data Dashboarding</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>OOP Concepts</span>
                  <span className={styles.level}>Advanced</span>
                </div>
                <div className={styles.skillCard}>
                  <span className={styles.skillName}>API Integration</span>
                  <span className={styles.level}>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.experienceSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sub}>Professional Journey</span>
            <h2 className={styles.title}>Internship History</h2>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.experienceGrid}>
            {/* Internship 1 */}
            <div className={`${styles.expCard} glass-card`}>
              <div className={styles.expHeader}>
                <div>
                  <h3 className={styles.expRole}>Web Development Intern</h3>
                  <h4 className={styles.expCompany}>TEK Pyramid</h4>
                </div>
                <div className={styles.expMeta}>
                  <span className={styles.duration}>1 Month</span>
                  <span className={styles.date}><Calendar size={14} /> May 2025</span>
                </div>
              </div>
              <ul className={styles.bulletList}>
                <li>Developed a fully responsive music player using <strong>React</strong> and <strong>Firebase</strong>, serving 50+ test users.</li>
                <li>Implemented highly interactive UI components improving user engagement and user experience.</li>
                <li>Integrated Firebase database modules for real-time playlist data handling and secure user sessions.</li>
              </ul>
            </div>

            {/* Internship 2 */}
            <div className={`${styles.expCard} glass-card`}>
              <div className={styles.expHeader}>
                <div>
                  <h3 className={styles.expRole}>Data Analytics Intern</h3>
                  <h4 className={styles.expCompany}>NoviTech R&D Pvt. Ltd.</h4>
                </div>
                <div className={styles.expMeta}>
                  <span className={styles.duration}>1 Month</span>
                  <span className={styles.date}><Calendar size={14} /> June 2025</span>
                </div>
              </div>
              <ul className={styles.bulletList}>
                <li>Cleaned and processed 500+ records of structural data using advanced <strong>Excel functions</strong>, improving raw data accuracy by 20%.</li>
                <li>Built 3 interactive <strong>Power BI dashboards</strong> to visualize KPIs and support immediate decision-making.</li>
                <li>Automated complex validation processes using tailored Excel formulas, successfully reducing manual error frequencies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sub}>My Creations</span>
            <h2 className={styles.title}>Recent Projects</h2>
            <div className={styles.bar}></div>
          </div>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <button 
              className={`${styles.filterBtn} ${activeCategory === "all" ? styles.activeFilter : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Projects
            </button>
            <button 
              className={`${styles.filterBtn} ${activeCategory === "web" ? styles.activeFilter : ""}`}
              onClick={() => setActiveCategory("web")}
            >
              Web Dev
            </button>
            <button 
              className={`${styles.filterBtn} ${activeCategory === "mobile" ? styles.activeFilter : ""}`}
              onClick={() => setActiveCategory("mobile")}
            >
              Mobile Apps
            </button>
            <button 
              className={`${styles.filterBtn} ${activeCategory === "desktop" ? styles.activeFilter : ""}`}
              onClick={() => setActiveCategory("desktop")}
            >
              Desktop & Java
            </button>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((p) => (
              <div key={p.id} className={`${styles.projectCard} glass-card`}>
                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDescription}>{p.description}</p>
                  <p className={styles.projectLongDetails}>{p.longDescription}</p>
                  
                  <div className={styles.techStack}>
                    {p.tech.map((t, idx) => (
                      <span key={idx} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.projectFooter}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <GithubIcon size={18} /> View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className={styles.certificationsSection}>
        <div className="container">
          <div className={styles.certificationsGrid}>
            {/* Certifications Column */}
            <div className={styles.certsContainer}>
              <div className={styles.sectionHeaderCompact}>
                <Award size={24} className={styles.secHeaderIcon} />
                <h2>Certifications</h2>
              </div>
              <div className={styles.certList}>
                <div className={styles.certCard}>
                  <CheckCircle className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Applied Generative AI Certification</h4>
                    <p>Infosys &bull; 2025</p>
                  </div>
                </div>
                <div className={styles.certCard}>
                  <CheckCircle className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Front End Web Developer Certification</h4>
                    <p>Infosys &bull; 2025</p>
                  </div>
                </div>
                <div className={styles.certCard}>
                  <CheckCircle className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Python for Data Science</h4>
                    <p>NPTEL &bull; 2025</p>
                  </div>
                </div>
                <div className={styles.certCard}>
                  <CheckCircle className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Certificate in Augmented Reality & Virtual Reality</h4>
                    <p>NASSCOM &bull; 2024</p>
                  </div>
                </div>
                <div className={styles.certCard}>
                  <CheckCircle className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Data Science for Beginners</h4>
                    <p>NASSCOM &bull; 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Column */}
            <div className={styles.achievementsContainer}>
              <div className={styles.sectionHeaderCompact}>
                <Trophy size={24} className={styles.secHeaderIcon} />
                <h2>Achievements</h2>
              </div>
              <div className={styles.achievementCard}>
                <div className={styles.trophyWrapper}>
                  <Trophy size={36} className={styles.trophyBig} />
                </div>
                <div className={styles.achDetails}>
                  <span className={styles.prizeBadge}>3rd Prize Winner</span>
                  <h3>HACKATHONIX '26</h3>
                  <p className={styles.achVenue}>Mobile Application Development Hackathon</p>
                  <p className={styles.achOrg}>Conducted by KCG College of Technology, 2026</p>
                  <p className={styles.achDesc}>
                    Secured 3rd place overall for designing and developing a fully functional, offline-first mobile application in 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sub}>Let's Connect</span>
            <h2 className={styles.title}>Contact Me</h2>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3>Let's build something together</h3>
              <p>
                I am open to B.Tech internships, entry-level AI & Data Science positions, and full-stack software development roles. Feel free to contact me directly using the information or the contact form.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <Mail className={styles.infoIcon} size={20} />
                  <div>
                    <h4>Email Me</h4>
                    <a href="mailto:skalaimagal323@gmail.com">skalaimagal323@gmail.com</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone className={styles.infoIcon} size={20} />
                  <div>
                    <h4>Call Me</h4>
                    <a href="tel:+917305512647">+91 7305512647</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <MapPin className={styles.infoIcon} size={20} />
                  <div>
                    <h4>Location</h4>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.contactFormContainer} glass-card`}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={48} className={styles.successIcon} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you, Kalaimagal S will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleInputChange} 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email} 
                      onChange={handleInputChange} 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formState.subject} 
                      onChange={handleInputChange} 
                      placeholder="Opportunity Details" 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formState.message} 
                      onChange={handleInputChange} 
                      rows={5} 
                      placeholder="Hi Kalaimagal..." 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
