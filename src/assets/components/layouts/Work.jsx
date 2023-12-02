import React from "react";
import Section from "../Section";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Heading from "../Heading";
import Menu from "../Menu";
import List from "../List";
import Logo from "../../Images/subLogo.png";
import workOne from "../../Images/workOne.png";
import workTwo from "../../Images/workTwo.png";
import workThree from "../../Images/workThree.png";
import workFour from "../../Images/workFour.png";
import workFive from "../../Images/workFive.png";
import workSix from "../../Images/workSix.png";

const Work = () => {
  return (
    <Section className="my-[100px]">
      <Container>
        <div className="mx-auto text-center mb-[50px]">
          <Image src={Logo} className="mx-auto" />
          <Heading text="Who We Are" as="h3" className="mt-[25px] mb-[45px]" />
          <Menu />
        </div>
        <Flex className="justify-between">
          <Image src={workOne} />
          <Image src={workTwo} />
          <Image src={workThree} />
        </Flex>
        <Flex className="justify-between mt-[30px]">
          <Image src={workFour} />
          <Image src={workFive} />
          <Image src={workSix} />
        </Flex>
      </Container>
    </Section>
  );
};

export default Work;
