import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top fixed bottom-5 right-5 p-3 bg-orange-600 text-white rounded-full shadow-md hover:bg-orange-400 transition"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
