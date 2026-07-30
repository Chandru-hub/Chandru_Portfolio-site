import { Variants, Transition } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
};

export const softSpring: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
};

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const themeCrossfade: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: { duration: 0.25 },
  },
};

export const floatY: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const floatSlow: Variants = {
  animate: {
    y: [0, 18, 0],
    x: [0, 10, 0],
    transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const pulseSoft: Variants = {
  animate: {
    scale: [1, 1.06, 1],
    opacity: [0.45, 0.7, 0.45],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const revealBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const listReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
};

export const chipPop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 320, damping: 18 },
  },
};

export const hoverLift = {
  y: -8,
  transition: softSpring,
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

export const cardHover = {
  hover: {
    y: -8,
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(0,255,247,0.2)',
      '0 0 40px rgba(0,255,247,0.4)',
      '0 0 20px rgba(0,255,247,0.2)',
    ],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const drawLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
