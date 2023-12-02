import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import Section from "../Section";
import Image from "../Image";
import Para from "../Paragraph";
import Button from "../Button";
import Heading from "../Heading";
import ImageOne from "../../Images/creativeOne.png";
import subLogo from "../../Images/subLogo.png";

const Creative = () => {
  return (
    <Section className="py-[100px]">
      <Container>
        <div className="mb-[50px]">
          <Image src={subLogo} className="mx-auto " />
          <Heading
            text="Our creative process."
            as="h3"
            className="my-[20px] text-center"
          />
          <Para
            text="We provide digital experience services to startups and small businesses."
            className="text-[18px] text-[#6C7D93] font-roboto max-w-[412px] text-center mx-auto"
          />
        </div>
        <Flex className="justify-between">
          <div className="max-w-[465px] bg-[#EBF7E9] z-10 pr-[85px] pl-[25px] pb-[20px] rounded-[20px] max-h-[207px] mt-[60px]">
            <Para
              text="Step-1"
              className="text-[#202427] relative text-[18px] font-bold after:w-[33px] after:h-[33px] after:rounded-[50%] after:bg-[#FF7628] after:content-[''] after:-z-50 after:absolute after:left-[-13px] after:top-[-6px] mt-[28px] ml-[12px]"
            />
            <Para
              text="Global SEO Research"
              className="my-[20px] text-[#202427] text-[30px] font-semibold"
            />
            <Para
              text="Practical tools and features make it easier to build and manage your site.
"
              className="max-w-[365px] text-[18px] text-[#6C7D93] font-roboto "
            />
          </div>
          <Image src={ImageOne} className="" />
        </Flex>
        <Flex className="justify-between">
          <Image src={ImageOne} />
          <div className="max-w-[465px] bg-[#D8EAFF] z-10 pr-[70px] pl-[25px] pb-[20px] rounded-[20px] max-h-[207px] mt-[60px]">
            <Para
              text="Step-2"
              className="text-[#202427] relative text-[18px] font-bold after:w-[33px] after:h-[33px] after:rounded-[50%] after:bg-[#FF7628] after:content-[''] after:-z-50 after:absolute after:left-[-13px] after:top-[-6px] mt-[28px] ml-[12px]"
            />
            <Para
              text="Social media integration"
              className="my-[20px] text-[#202427] text-[30px] font-semibold"
            />
            <Para
              text="Practical tools and features make it easier to build and manage your site.
"
              className="max-w-[365px] text-[18px] text-[#6C7D93] font-roboto "
            />
          </div>
        </Flex>
        <Flex className="justify-between">
          <div className="max-w-[465px] bg-[#FBF1EC] z-10 pr-[40px] pl-[25px] pb-[20px] rounded-[20px] max-h-[207px] mt-[60px]">
            <Para
              text="Step-3"
              className="text-[#202427] relative text-[18px] font-bold after:w-[33px] after:h-[33px] after:rounded-[50%] after:bg-[#FF7628] after:content-[''] after:-z-50 after:absolute after:left-[-13px] after:top-[-6px] mt-[28px] ml-[12px]"
            />
            <Para
              text="Launching the Application"
              className="my-[20px] text-[#202427] text-[30px] font-semibold"
            />
            <Para
              text="Practical tools and features make it easier to build and manage your site.
"
              className="max-w-[365px] text-[18px] text-[#6C7D93] font-roboto "
            />
          </div>
          <Image src={ImageOne} />
        </Flex>
      </Container>
    </Section>
  );
};

export default Creative;
