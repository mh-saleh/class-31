import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import Button from "../Button";
import Section from "../Section";
import Image from "../Image";
import Para from "../Paragraph";
import Heading from "../Heading";
import Logo from "../../Images/subLogo.png";
import ImageOne from "../../Images/WAW.png";
import ImageTwo from "../../Images/WAWTwo.png";

const WhoAreWe = () => {
  return (
    <Section className="py-[90px] bg-white">
      <Container>
        <Flex className="justify-between">
          <Image src={ImageOne} />
          <div className="max-w-[460px] text-left">
            <Image src={Logo} />
            <Heading text="Who We Are" as="h3" className="my-[25px]" />
            <Para
              text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified,"
              type={true}
            />
            <Para
              text="Join the 10.000+ Companys Trusting "
              type={true}
              className="my-[15px]"
            />
            <Image src={ImageTwo} divClassName="mr-[20px]" />
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default WhoAreWe;
