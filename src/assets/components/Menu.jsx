import React from "react";
import List from "./List";

const Menu = ({ className, kind }) => {
  let navbar = (
    <div className={` ${className} self-center`}>
      <ul className="flex gap-[40px] ">
        <List kind="navbar" text="Home"></List>
        <List kind="navbar" text="About"></List>
        <List kind="navbar" text="Service"></List>
        <List kind="navbar" text="Portfolio"></List>
        <List kind="navbar" text="Price"></List>
        <List kind="navbar" text="Blog"></List>
      </ul>
    </div>
  );
  let workList = (
    <div className={` ${className} self-center`}>
      <ul className="flex gap-[40px] ">
        <List kind="work" text="All"></List>
        <List kind="work" text="Digital Mkt"></List>
        <List kind="work" text="Branding"></List>
        <List kind="work" text="Content Mkt"></List>
        <List kind="work" text="Social Media Mkt"></List>
      </ul>
    </div>
  );

  let mew = kind === "navbar" ? navbar : workList;

  return mew;
};

export default Menu;
