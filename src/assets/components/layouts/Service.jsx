import Flex from "../Flex";
import Container from "../Container";
import Section from "../Section";
import Image from "../Image";
import Para from "../Paragraph";
import Button from "../Button";
import Heading from "../Heading";
import React from "react";
import Logo from "../../Images/subLogo.png";
import LogoOne from "../../Images/serviceOne.png";
import LogoTwo from "../../Images/serviceTwo.png";
import LogoThree from "../../Images/serviceThree.png";

const Service = () => {
  return (
    <Section className="pt-[60px] py-[100px]">
      <Container>
        <div className="text-center mx-auto w-[317px] mb-[50px]">
          <Image src={Logo} className="mx-auto" />
          <Heading as="h3" text="Our Services" className="my-[15px]" />
          <Para
            text="We have been providing great flooring solutions service."
            className="text-center"
            type={true}
          />
        </div>
        <Flex className="justify-between">
          <div className="max-w-[370px] text-center box-border py-[50px] capitalize px-[45px] bg-[#EBF7E9] flex flex-col gap-y-[20px] rounded-[20px] z-20">
            <Image src={LogoOne} className="mx-auto" />
            <Para
              text="Marketing Strategy"
              className="text-[30px] text-[#202427] font-semibold"
            />
            <Para
              text="Social Media has changed the way we interact & do business while creating"
              type={true}
              className=""
            />
            <Button
              text="Read more"
              className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-[#FF7628] after:right-[167px] after:bottom-[-7px] after:-z-10"
            />
          </div>
          <div className="max-w-[370px] text-center box-border py-[50px] px-[28px] bg-[#D8EAFF] flex flex-col gap-y-[20px] rounded-[20px] z-20">
            <Image src={LogoTwo} className="mx-auto" />
            <Para
              text="Social Marketing"
              className="text-[30px] text-[#202427] font-semibold"
            />
            <Para
              text="Social Media has changed the way we interact & do business while creating a new avenue."
              type={true}
              className=""
            />
            <Button
              text="Read more"
              className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-[#FF7628] after:left-[96px] after:bottom-[-7px] after:-z-10"
            />
          </div>
          <div className="max-w-[370px] text-center box-border py-[50px] px-[28px] bg-[#EBF7E9] flex flex-col rounded-[20px] z-20">
            <Image src={LogoThree} className="mx-auto mb-[15px]" />
            <Para
              text="Content Marketing"
              className="text-[30px] text-[#202427] font-semibold"
            />
            <Para
              text="Content Marketing is the other fold of online advertisement. If you are looking to build "
              type={true}
              className="max-w-[278px] mt-[5px] mb-[9px]"
            />
            <Button
              text="Read more"
              className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-[#FF7628] after:left-[78px] after:bottom-[-7px] after:-z-10"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Service;
