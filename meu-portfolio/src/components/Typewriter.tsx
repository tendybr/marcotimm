import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseTime?: number;
  startDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 100,
  erasingSpeed = 50,
  pauseTime = 2000,
  startDelay = 3400, // Alinhado com a animação de entrada do header
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    // Delay inicial para sincronizar com a subida do header
    const initialTimer = setTimeout(() => {
      setIsWaiting(false);
    }, startDelay);

    return () => clearTimeout(initialTimer);
  }, [startDelay]);

  useEffect(() => {
    if (isWaiting) return;

    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullText = phrases[currentPhraseIndex];
      const isComplete = !isDeleting && currentText === fullText;
      const isBackAtStart = isDeleting && currentText === '';

      if (isComplete) {
        // Pausa após terminar de escrever
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isBackAtStart) {
        // Pausa após terminar de apagar
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        timer = setTimeout(() => {}, 500); 
      } else {
        // Continua escrevendo ou apagando
        const nextText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);

        setCurrentText(nextText);
        timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, erasingSpeed, pauseTime, isWaiting]);

  return (
    <div className="nav-label-text typewriter-container">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

export default Typewriter;
