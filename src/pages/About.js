import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { skills, education, experience } from '../data/skills';
import './About.css';
import profilePic from '../assets/pp.jpg';
import resumePDF from '../assets/David Manzi Resume.pdf';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-hero-content">
            <div className="about-text">
              <h1 className="section-title">About Me</h1>
              <p className="about-description">
                I'm a passionate Full Stack Developer with expertise in Java, JavaScript, React, and Spring Boot. 
                I love creating innovative web solutions that combine robust backend systems with beautiful, 
                responsive frontend interfaces. I bring ideas to life through clean, efficient code and exceptional user experiences.
                Based in Kigali, Rwanda, I'm available for remote work and local opportunities.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>20+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <motion.a 
                href={resumePDF} 
                className="btn btn-primary"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </div>
            <div className="about-image">
              <img src={profilePic} alt="David Manzi" className="profile-pic" />
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="skills-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              I work with a variety of technologies to create robust and scalable applications
            </p>
          </motion.div>

          <div className="skills-container">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div key={category} className="skill-category" variants={itemVariants}>
                <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="skills-grid">
                  {skillList.map((skill) => (
                    <motion.div 
                      key={skill.name} 
                      className="skill-card"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="experience-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              My professional journey and the companies I've had the pleasure to work with
            </p>
          </motion.div>

          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-icon">
                  <FiBriefcase />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.position}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="education-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              My academic background and continuous learning journey
            </p>
          </motion.div>

          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="education-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="education-icon">
                  <FiBookOpen />
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <span className="education-year">{edu.year}</span>
                  <p>{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Personal Info Section */}
        <motion.section 
          className="personal-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="personal-content">
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              and creative ideas. Let's connect and see how we can bring your vision to life.
            </p>
            <motion.a 
              href="/contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 