import React from "react";

const Paragraph = ({ text, className, type }) => {
  let design = type ? "text-[18px] font-pap text-[#6C7D93] leading-[30px]" : "";
  return <p className={` ${className} ${design}`}>{text}</p>;
};

export default Paragraph;
