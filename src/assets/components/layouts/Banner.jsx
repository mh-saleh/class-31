import Flex from "../Flex";
import Container from "../Container";
import Button from "../Button";
import Section from "../Section";
import Image from "../Image";
import Para from "../Paragraph";
import Heading from "../Heading";
import React from "react";
import Logo from "../../Images/subLogo.png";

const Banner = () => {
  return (
    <Section className="bg-BannerBG bg-cover bg-no-repeat bg-center py-[170px]">
      <Container className="">
        <div className="w-[686px]">
          <Image src={Logo} />
          <Heading
            text="We Are Digital #Marketing Agency"
            as="h2"
            className="text-[72px] text-[#192239] font- font-extrabold mt-[20px]"
          />
          <Para
            text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing."
            className="text-[20px] font-pap  text-[#6C7D93] w-[571px] leading-[36px] mb-[25px] mt-[25px]"
          />
          <Button
            text="get free quoto"
            className="text-[18px] font-semibold bg-[#FF7628] capitalize text-white py-[20px] px-[40px] rounded-full"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
