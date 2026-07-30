import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import profileData from '../../data/profileData';
import { staggerContainer, staggerItem, scaleIn } from '../../utils/animations';

const Profile: React.FC = () => {
  const { name, title, avatar, summary, contact } = profileData;

  return (
    <AnimatedCard>
      <motion.div className="profile-row" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div className="profile-avatar" variants={scaleIn} whileHover={{ scale: 1.1, rotate: 5 }}>
          {avatar}
        </motion.div>
        <motion.div className="profile-info" variants={staggerContainer}>
          <motion.h1 variants={staggerItem}>{name}</motion.h1>
          <motion.div className="title" variants={staggerItem}>{title}</motion.div>
          <motion.div className="contact-links" variants={staggerContainer}>
            <motion.a variants={staggerItem} whileHover={{ x: 5 }} href={`mailto:${contact.email}`}>
              <i className="fas fa-envelope"></i> {contact.email}
            </motion.a>
            <motion.a variants={staggerItem} whileHover={{ x: 5 }} href="#">
              <i className="fas fa-phone"></i> {contact.phone}
            </motion.a>
            <motion.a variants={staggerItem} whileHover={{ x: 5 }} href="#">
              <i className="fas fa-map-pin"></i> {contact.location}
            </motion.a>
            <motion.a variants={staggerItem} whileHover={{ x: 5 }} href="#">
              <i className="fab fa-linkedin"></i> {contact.linkedin}
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="summary-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <strong>Professional Summary</strong>
        {summary}
      </motion.div>
    </AnimatedCard>
  );
};

export default Profile;