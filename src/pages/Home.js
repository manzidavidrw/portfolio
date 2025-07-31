import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import { skills } from '../data/skills';
import './Home.css';
import profilePic from '../assets/pp.jpg';

const Home = () => {
  // Always include Java and JavaScript in the featured skills
  const allFrontend = skills.frontend;
  const allBackend = skills.backend;
  const javaSkill = allBackend.find(skill => skill.name === 'Java');
  const jsSkill = allFrontend.find(skill => skill.name === 'JavaScript');
  const featuredSkills = [javaSkill, jsSkill, ...allFrontend.filter(skill => skill.name !== 'JavaScript')].filter(Boolean).slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">David Manzi</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                I create beautiful, functional, and user-friendly web applications 
                using Java, JavaScript, React, and Spring Boot. Passionate about clean code and 
                exceptional user experiences.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-avatar">
                <img src={profilePic} alt="David Manzi" className="profile-pic" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="skills-preview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              I specialize in building modern web applications with cutting-edge technologies
            </p>
          </motion.div>

          <div className="services-grid">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                <FiCode />
              </div>
              <h3>Frontend Development</h3>
              <p>Creating responsive and interactive user interfaces with React, JavaScript, and modern CSS.</p>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                <FiLayers />
              </div>
              <h3>Backend Development</h3>
              <p>Building robust APIs and server-side applications with Java, Spring Boot, and databases.</p>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                <FiSmartphone />
              </div>
              <h3>Mobile-First Design</h3>
              <p>Ensuring your applications look and work perfectly on all devices and screen sizes.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Technologies I Work With</h2>
          </motion.div>

          <div className="skills-grid">
            {featuredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="skills-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/about" className="btn btn-primary">
              View All Skills
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your ideas to life</p>
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 