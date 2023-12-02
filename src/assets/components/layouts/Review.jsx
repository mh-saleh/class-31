import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import Button from "../Button";
import Section from "../Section";
import Image from "../Image";
import Para from "../Paragraph";
import Heading from "../Heading";
import SubLogo from "../../Images/subLogo.png";
import ImageOne from "../../Images/review.png";

const Review = () => {
  return (
    <Section className="py-[100px]">
      <Container>
        <Flex className="justify-between">
          <div className="">
            <Image src={SubLogo} />
            <Heading
              text="Client Review"
              as="h3"
              className="mb-[20px] mt-[16px]"
            />
            <Para
              type={true}
              text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient. "
              className="w-[331px]"
            />
            <Flex className="w-[160px] mt-[10px]">
              <div className="bg-[#FF7628] w-[42px] h-[42px] text-center box-border rounded-full pt-[5px]">
                <i class="fa-solid fa-angle-right text-white text-[30px]  "></i>
              </div>
              <div className="bg-[#FF7628] ml-[15px] w-[42px] h-[42px] text-center box-border rounded-full pt-[5px]">
                <i class="fa-solid fa-angle-left text-white text-[30px]"></i>
              </div>
            </Flex>
          </div>
          {/* dfadaf */}
          <div className="w-[370px] pt-[25px] pl-[40px] bg-[#D8EAFF] rounded-[20px]">
            <Para
              text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
              type={true}
              className="max-w-[270px] mb-[10px]"
            />

            <Flex className="">
              <Image src={ImageOne} className="mr-[20px]" />
              <div>
                <Para
                  text="Jane Cooper"
                  className="text-[#202427] text-[24px] font-semibold mt-[25px]"
                />
                <Para
                  text="Fashion Designer"
                  className="text-[#202427] text-[18px] font-semibold mt-[10px]"
                />
              </div>
            </Flex>
          </div>
          <div className="w-[370px] pt-[25px] pl-[40px] bg-[#fff] shadow-reviewShadow rounded-[20px]">
            <Para
              text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
              type={true}
              className="max-w-[270px] mb-[10px]"
            />

            <Flex className="">
              <Image src={ImageOne} className="mr-[20px]" />
              <div>
                <Para
                  text="Eleanor Pena"
                  className="text-[#202427] text-[24px] font-semibold mt-[25px]"
                />
                <Para
                  text="Architecture"
                  className="text-[#202427] text-[18px] font-semibold  mt-[10px]"
                />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Review;
