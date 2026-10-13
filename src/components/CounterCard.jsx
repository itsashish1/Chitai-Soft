import React, { useState, useEffect, useRef } from 'react';

export default function CounterCard({ target, prefix = '', suffix = '', decimals = 0, label, sub }) {
  const [displayVal, setDisplayVal] = useState(`${prefix}0${suffix}`);
  const cardRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        const targetNum = parseFloat(target);
        const duration = 1800;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = targetNum * easeOut;

          setDisplayVal(`${prefix}${currentVal.toFixed(decimals)}${suffix}`);

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            setDisplayVal(`${prefix}${targetNum.toFixed(decimals)}${suffix}`);
          }
        };

        requestAnimationFrame(updateCount);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [target, prefix, suffix, decimals]);

  return (
    <div className="counter-card" ref={cardRef}>
      <div className="counter-val">{displayVal}</div>
      <div className="counter-label">{label}</div>
      {sub && <div className="counter-sub">{sub}</div>}
    </div>
  );
}
