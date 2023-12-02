import React from "react";
import Section from "../Section";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Para from "../Paragraph";
import Heading from "../Heading";
import Menu from "../Menu";
import Logo from "../../Images/subLogo.png";
import Blogimage from "../../Images/Blog.png";

const Blog = () => {
  return (
    <Section className="py-[80px] bg-[#F2F7FD]">
      <Container>
        <div className="mb-[50px]">
          <Image src={Logo} className="mx-auto" />
          <Heading
            text="Our Latest Blog"
            className="my-[20px] text-center text-[48px] text-[#413F45] font-extrabold"
            as="h4"
          />
          <Para
            text="We provide digital experience services to startups and small businesses."
            className="text-[18px] text-[#6C7D93] font-roboto max-w-[412px] text-center mx-auto"
          />{" "}
        </div>
        <Flex className="justify-between">
          <div className="w-[369px] z-10  bg-white rounded-[30px] ">
            <Image src={Blogimage} />
            <div className="ml-[30px] pb-[30px]">
              <Para
                text="How to Be Ahead of Stock Changes"
                className="w-[232px] text-[#413F45] text-[24px] font-medium font-workSans mt-[30px]"
              />
              <Para
                text="By John  - 5 Comments"
                className="text-[18px] text-[#474747] font-nun mt-[15px] mb-[30px]"
              />
              <Para
                text="Read more"
                className="ml-[16px] text-[18px] text-[#202427] font-bold relative
              after:w-[33px] after:h-[33px] after:rounded-[50%]
            after:bg-[#FF7628] after:left-[-16px] after:top-[-6px] after:contents-['']
            after:absolute after:-z-50"
              />
            </div>
          </div>

          <div className="w-[369px] z-10  bg-white rounded-[30px] ">
            <Image src={Blogimage} />
            <div className="ml-[30px] pb-[30px]">
              <Para
                text="Online Reputation And Management"
                className="w-[232px] text-[#413F45] text-[24px] font-medium font-workSans mt-[30px]"
              />
              <Para
                text="By Amin  - 10 Comments    "
                className="text-[18px] text-[#474747] font-nun mt-[15px] mb-[30px]"
              />
              <Para
                text="Read more"
                className="ml-[16px] text-[18px] text-[#202427] font-bold relative
              after:w-[33px] after:h-[33px] after:rounded-[50%]
            after:bg-[#FF7628] after:left-[-16px] after:top-[-6px] after:contents-['']
            after:absolute after:-z-50"
              />
            </div>
          </div>
          <div className="w-[369px] z-10  bg-white rounded-[30px] ">
            <Image src={Blogimage} />
            <div className="ml-[30px] pb-[30px]">
              <Para
                text="Tips To Move Your Project More Forward"
                className="w-[272px] text-[#413F45] text-[24px] font-medium font-workSans mt-[30px]"
              />
              <Para
                text="By Insider  - 15 Comments"
                className="text-[18px] text-[#474747] font-nun mt-[15px] mb-[30px]"
              />
              <Para
                text="Read more"
                className="ml-[16px] text-[18px] text-[#202427] font-bold relative
              after:w-[33px] after:h-[33px] after:rounded-[50%]
            after:bg-[#FF7628] after:left-[-16px] after:top-[-6px] after:contents-['']
            after:absolute after:-z-50"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Blog;
