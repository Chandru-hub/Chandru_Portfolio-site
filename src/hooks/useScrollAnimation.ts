import { useInView } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ScrollAnimationResult {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
}

export const useScrollAnimation = (threshold: number = 0.05): ScrollAnimationResult => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: '0px 0px -40px 0px',
  });

  return { ref: ref as RefObject<HTMLDivElement>, isInView };
};
