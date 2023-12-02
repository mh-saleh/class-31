import React from "react";

const Image = ({ src, className, divClassName }) => {
  return (
    <div className={divClassName}>
      <img className={` ${className}`} src={src} alt={src} />
    </div>
  );
};

export default Image;
