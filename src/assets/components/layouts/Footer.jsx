import React from "react";
import Section from "../Section";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Para from "../Paragraph";
import List from "../List";
import Logo from "../../Images/Logo.png";

const Footer = () => {
  return (
    <Section className="pt-[120px] pb-[40px]">
      <Container className="mb-[80px]">
        <Flex className="justify-between">
          <div>
            <Image src={Logo} className="mb-[45px]" />
            <Para
              text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."
              className="font-nun text-[18px] text-[#6C7D93] w-[450px] leading-[32px]"
            />
          </div>
          <div>
            <Para
              text="Features"
              className="text-[#413F45] text-[24px] font-semibold capitalize mb-[50px]"
            />
            <ul className="flex flex-col gap-[30px]">
              <List text="Home" kind="footer" />
              <List text="About" kind="footer" />
              <List text="Benifit" kind="footer" />
              <List text="Pricing" kind="footer" />
              <List text="Blog" kind="footer" />
            </ul>
          </div>
          <div>
            <Para
              text="Products"
              className="text-[#413F45] text-[24px] font-semibold capitalize mb-[50px]"
            />
            <ul className="flex flex-col gap-[30px]">
              <List text="Task Management" kind="footer" />
              <List text="Company growth" kind="footer" />
              <List text="Time tracking" kind="footer" />
            </ul>
          </div>
          <div>
            <Para
              text="Support"
              className="text-[#413F45] text-[24px] font-semibold capitalize mb-[50px]"
            />
            <ul className="flex flex-col gap-[30px]">
              <List text="Customer service" kind="footer" />
              <List text="Accessibility" kind="footer" />
              <List text="Contact us" kind="footer" />
            </ul>
          </div>
        </Flex>
      </Container>
      <Container>
        <div>
          <ul className="flex justify-between">
            <List
              text="@20201 Innovate.All rights reserved."
              kind="footer"
              className=""
            />
            <Flex className="gap-[60px]">
              <List text="Privacy policy" kind="footer" className="" />
              <List text="Terms & condition" kind="footer" />
            </Flex>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
