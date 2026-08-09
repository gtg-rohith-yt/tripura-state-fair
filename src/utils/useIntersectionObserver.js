import { useEffect, useState, useRef } from 'react';

/**
 * Lightweight Intersection Observer Hook for Scroll Reveal Animations
 * Fast, pure CSS/JS, 0 dependencies, respects prefers-reduced-motion.
 */
export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce !== false && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -50px 0px'
    });

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [elementRef, isVisible];
}
