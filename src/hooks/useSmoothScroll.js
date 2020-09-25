import { useEffect } from 'react';

const useSmoothScroll = () => {
  const getElementTop = (element) => {
    const _href = element.getAttribute('href');
    if (_href === '/') {
      return 0;
    }
    const _id = _href.substring(2);
    const _element = document.getElementById(_id);

    const top = _element.offsetTop;

    return top - 70;
  };

  const handleScroll = (e) => {
    e.preventDefault();

    const elementTop = getElementTop(e.target);

    window.scroll({
      top: elementTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const bindEvents = () => {
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });
  };

  const detouchEvents = () => {
    const links = document.querySelectorAll('.nav-link, .navbar-brand');

    links.forEach((link) => {
      link.removeEventListener('click', handleScroll);
    });
  };

  useEffect(() => {
    bindEvents();
    return () => {
      detouchEvents();
    };
  }, []);
};

export { useSmoothScroll };
