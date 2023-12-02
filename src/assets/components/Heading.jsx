import React from "react";

const Heading = (props) => {
  let halum = props.text.split(" ");
  let vaw = halum.map((item, index) => {
    if (item.includes("#")) {
      let maw = item.slice(1);
      return <span className="text-[#FF7628]"> {maw} </span>;
    } else {
      return <span> {item} </span>;
    }
  });
  let mew =
    props.as === "h3" ? (
      <h3
        className={`font-extrabold text-[48px] text-[#192239] ${props.className}`}
      >
        {vaw}
      </h3>
    ) : (
      <props.as className={` ${props.className}`}>{vaw}</props.as>
    );
  return mew;
};

export default Heading;
