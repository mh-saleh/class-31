import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import Button from "../Button";
import Section from "../Section";
import Menu from "../Menu";
import Image from "../Image";
import Logo from "../../Images/Logo.png";
const Navbar = () => {
  return (
    <Section className="py-[30px] fixed w-[100%] z-50">
      <Container>
        <Flex className="justify-between">
          <Image src={Logo} />
          <Menu kind="navbar" />
          <Button
            text="Contact Us"
            className="text-[18px] font-semibold bg-[#FF7628] capitalize text-white py-[14px] px-[28px] rounded-full"
          />
        </Flex>
      </Container>
    </Section>
  );
};

export default Navbar;
