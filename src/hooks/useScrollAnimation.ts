import { useInView } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ScrollAnimationResult {
  ref: RefObject<HTMLElement>;
  isInView: boolean;
}

export const useScrollAnimation = (threshold: number = 0.1): ScrollAnimationResult => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "-100px 0px"
  });

  return { ref, isInView };
};