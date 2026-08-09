import React, { useState } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

/**
 * Reusable ImageReveal Component
 * Provides subtle container reveal, fade-in, upward translation, and clip-path mask reveal.
 * Preserves native lazy loading, object-fit ratio, and fallback onError handling.
 */
export default function ImageReveal({
  src,
  alt,
  className = '',
  style = {},
  aspectRatio,
  objectFit = 'cover',
  loading = 'lazy',
  onError
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: style.borderRadius || 'inherit',
    aspectRatio: aspectRatio || style.aspectRatio,
    width: style.width || '100%',
    height: style.height || '100%',
    background: 'rgba(7, 19, 14, 0.5)',
    ...style
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: objectFit,
    display: 'block',
    transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: isVisible && isLoaded ? 1 : 0,
    transform: isVisible && isLoaded ? 'translateY(0) scale(1)' : 'translateY(14px) scale(1.03)',
    clipPath: isVisible && isLoaded ? 'inset(0% 0% 0% 0%)' : 'inset(4% 0% 4% 0%)',
    willChange: isVisible ? 'auto' : 'opacity, transform, clip-path'
  };

  return (
    <div ref={ref} className={`image-reveal-container ${className}`} style={containerStyle}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={onError}
        style={imgStyle}
      />
    </div>
  );
}
