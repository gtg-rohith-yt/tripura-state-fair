import React from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

/**
 * Reusable ScrollReveal Wrapper Component
 * Triggers subtle fade, translateY, or scale animation once when element enters viewport.
 * Zero external libraries, high GPU performance, respects prefers-reduced-motion.
 */
export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', // 'fade-up', 'fade-in', 'scale-up'
  delay = 0, // delay in seconds
  duration = 0.6,
  className = '',
  style = {},
  as: Component = 'div'
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const getTransformState = () => {
    if (isVisible) return 'translateY(0) scale(1)';
    if (animation === 'fade-up') return 'translateY(20px) scale(1)';
    if (animation === 'scale-up') return 'translateY(10px) scale(0.98)';
    return 'none';
  };

  const animStyle = {
    ...style,
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    opacity: isVisible ? 1 : 0,
    transform: getTransformState(),
    willChange: isVisible ? 'auto' : 'opacity, transform'
  };

  return (
    <Component ref={ref} className={`scroll-reveal-container ${className}`} style={animStyle}>
      {children}
    </Component>
  );
}
