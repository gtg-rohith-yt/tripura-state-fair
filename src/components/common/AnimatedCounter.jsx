import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

/**
 * Reusable AnimatedCounter component that smoothly counts up numerical statistics
 * from 0 to their target value when entering the viewport.
 * 
 * Preserves existing prefixes, suffixes, commas, and decimals without inventing statistics or causing layout shifts.
 */
export default function AnimatedCounter({ value, duration = 1200, className = '', style = {} }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    // Respect prefers-reduced-motion: if reduced motion is preferred or not intersecting, display raw value
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !isIntersecting) {
      setDisplayValue(value);
      return;
    }

    if (typeof value !== 'string' && typeof value !== 'number') {
      setDisplayValue(value);
      return;
    }

    const strValue = String(value);

    // Extract first numeric group (supporting decimals & commas e.g. 10,491.69 or 1,500+)
    const numericMatch = strValue.match(/\d[\d,.]*/);
    if (!numericMatch) {
      setDisplayValue(strValue);
      return;
    }

    const matchedStr = numericMatch[0];
    const rawNumStr = matchedStr.replace(/,/g, '');
    const isDecimal = rawNumStr.includes('.');
    const decimalPlaces = isDecimal ? (rawNumStr.split('.')[1] || '').length : 0;
    const targetNum = parseFloat(rawNumStr);

    if (isNaN(targetNum) || targetNum === 0) {
      setDisplayValue(strValue);
      return;
    }

    const prefix = strValue.substring(0, numericMatch.index);
    const suffix = strValue.substring(numericMatch.index + matchedStr.length);
    const hasComma = matchedStr.includes(',');

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth ease-out cubic curve: 1 - (1 - t)^3
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = easedProgress * targetNum;

      let formattedNum = isDecimal 
        ? currentNum.toFixed(decimalPlaces) 
        : Math.floor(currentNum).toString();

      if (hasComma) {
        const parts = formattedNum.split('.');
        parts[0] = parseInt(parts[0], 10).toLocaleString();
        formattedNum = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(strValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isIntersecting, value, duration]);

  return (
    <span 
      ref={ref} 
      className={`animated-counter-val ${className}`}
      style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums', ...style }}
    >
      {displayValue}
    </span>
  );
}
