import React from "react";

const List = ({ text, className, kind }) => {
  let navbarList = (
    <li className="">
      <a
        className={` ${className} hover:text-[#FF7628] duration-500	text-[18px] font-semibold`}
        href="#"
      >
        {text}
        <i className="fa-solid fa-angle-down ml-[6px] pt-[-10px]"></i>
      </a>
    </li>
  );
  let workList = (
    <li className="">
      <a
        className={` ${className} hover:text-[#FF7628] text-[#6C7D93] duration-500	text-[24px] font-semibold`}
        href="#"
      >
        {text}
      </a>
    </li>
  );
  let footerList = (
    <li className="">
      <a
        className={` ${className} hover:text-[#FF7628] duration-500	
      font-nun text-[20px] text-[#6C7D93] font-semibold`}
        href="#"
      >
        {text}
      </a>
    </li>
  );
  let normalList = (
    <li className="">
      <a className={` ${className} hover:text-[#FF7628] duration-500	`} href="#">
        {text}
      </a>
    </li>
  );

  let list =
    kind === "navbar"
      ? navbarList
      : kind === "work"
      ? workList
      : kind === "footer"
      ? footerList
      : normalList;
  return list;
};

export default List;
