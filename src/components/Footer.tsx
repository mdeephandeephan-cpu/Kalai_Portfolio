import { Mail, Phone, Code } from "lucide-react";
import styles from "./Footer.module.css";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              KALAIMAGAL<span className="gradient-text">.S</span>
            </a>
            <p className={styles.description}>
              AI & Data Science undergraduate passionate about building scalable solutions and transforming raw data into actionable insights.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className={styles.contactGroup}>
            <h4 className={styles.title}>Contact Details</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:skalaimagal323@gmail.com" className={styles.contactLink}>
                  <Mail size={16} /> skalaimagal323@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917305512647" className={styles.contactLink}>
                  <Phone size={16} /> +91 7305512647
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            &copy; {currentYear} Kalaimagal S. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/kalaimagal23"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://github.com/kalaiii-23"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/skalaimagal323"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="HackerRank"
            >
              <Code size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
