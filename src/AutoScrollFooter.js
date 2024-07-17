import React, { useEffect, useRef } from 'react';
import image from './BANER-SHANNH 1.png'; // Make sure this path is correct

const AutoScrollFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    let scrollPosition = 0;

    const scrollFooter = () => {
      scrollPosition += 1;
      if (scrollPosition >= footer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      footer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scrollFooter);
    };

    requestAnimationFrame(scrollFooter);
  }, []);

  return (
    <div className="auto-scroll-footer">
      <div ref={footerRef} className="footer-content">
        <img src={image} alt="Footer" />
      </div>
    </div>
  );
};

export default AutoScrollFooter;