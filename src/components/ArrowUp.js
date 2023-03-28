import React from 'react';
import { useEffect, useState } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';
import '../styles/Components/ArrowUp.scss';

const ArrowUp = () => {
  //top
  const [visibleButton, setVisibleButton] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={visibleButton ? 'arrow__show' : 'arrow__notShow'}
    >
      <div className="arrow__icon">
        <BsArrowUpSquare />
      </div>
    </div>
  );
};

export default ArrowUp;
