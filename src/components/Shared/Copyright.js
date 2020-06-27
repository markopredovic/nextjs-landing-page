import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-2 text-center bg-dark text-white">
      Copyright &copy; {currentYear} by{" "}
      <a href="https://markoni.codes" className="text-warning">
        markoni.codes
      </a>
    </div>
  );
};

export default Copyright;
