import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      Copyright &copy; {currentYear} by{' '}
      <a href="https://markoni.codes">markoni.codes</a>
    </div>
  );
};

export default Copyright;
