'use client';
import { motion } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';

export default function MotionTypewriter({
  children,
  delay = 0,
  speed = 40,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [textElements, setTextElements] = useState<HTMLElement[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  // Initialize and find all text nodes in the children
  useEffect(() => {
    if (elementRef.current) {
      // Display the content initially to capture all text nodes
      setIsVisible(true);
      
      // Find all text-containing elements
      const textNodes: HTMLElement[] = [];
      const findTextNodes = (element: HTMLElement) => {
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null
        );
        
        let node;
        while (node = walker.nextNode()) {
          if (node.textContent && node.textContent.trim()) {
            // Get the closest element parent of this text node
            let parent = node.parentElement;
            if (parent && !textNodes.includes(parent)) {
              textNodes.push(parent);
            }
          }
        }
      };
      
      findTextNodes(elementRef.current);
      setTextElements(textNodes);
      
      // Hide original content
      setIsVisible(false);
      
      // Start typing animation after delay
      const timer = setTimeout(() => {
        setIsTyping(true);
        setIsVisible(true);
        setCurrentTextIndex(0);
        setCurrentCharIndex(0);
        setDisplayedText('');
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [delay, children]);

  // Handle the typing animation
  useEffect(() => {
    if (!isTyping || textElements.length === 0) return;
    
    const currentElement = textElements[currentTextIndex];
    if (!currentElement) return;
    
    const fullText = currentElement.textContent || '';
    
    if (currentCharIndex < fullText.length) {
      // Still typing the current text element
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else {
      // Move to the next text element
      if (currentTextIndex < textElements.length - 1) {
        const timer = setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentCharIndex(0);
          setDisplayedText('');
        }, 100); // Small pause between elements
        
        return () => clearTimeout(timer);
      } else {
        // All done
        setIsTyping(false);
      }
    }
  }, [isTyping, textElements, currentTextIndex, currentCharIndex, speed]);

  // Update the current element's content
  useEffect(() => {
    if (!isTyping || textElements.length === 0) return;
    
    const currentElement = textElements[currentTextIndex];
    if (currentElement) {
      // Store original text
      const originalText = currentElement.textContent || '';
      
      // Temporarily update the content for the animation
      currentElement.textContent = displayedText;
      
      return () => {
        // Restore original content when component unmounts or text changes
        if (currentElement) {
          currentElement.textContent = originalText;
        }
      };
    }
  }, [isTyping, textElements, currentTextIndex, displayedText]);

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {children}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
}