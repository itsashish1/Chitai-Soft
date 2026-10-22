import React, { useState, useEffect } from 'react';

/**
 * DynamicTypewriter component
 * Types out words character by character, pauses, deletes, and switches to the next word
 * with a high-tech glowing industrial look and blinking terminal cursor.
 */
export default function DynamicTypewriter({
  words = ['Precision Automation', 'Industrial IoT', 'Real-Time SCADA', 'Intelligent Control'],
  typingSpeed = 75,
  deletingSpeed = 45,
  pauseDuration = 2000,
  className = ''
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex % words.length];

    let timer;
    if (!isDeleting) {
      // Typing forward
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing word, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting backwards
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`dynamic-typewriter-wrap ${className}`} aria-live="polite">
      <span className="dynamic-typewriter-text">{currentText || '\u00A0'}</span>
      <span className="dynamic-typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}
