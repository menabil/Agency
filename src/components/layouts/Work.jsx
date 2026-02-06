import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import wOne from "/src/assets/wOne.png";
import wTwo from "/src/assets/wTwo.png";
import wThr from "/src/assets/wThr.png";
import wFor from "/src/assets/wFor.png";
import wFiv from "/src/assets/wFiv.png";
import wSix from "/src/assets/wSix.png";
import mixitup from "mixitup";
import { useEffect, useRef } from "react";

const Work = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    }
  });

  return (
    <div className="py-[150px] bg-[#F3F3F3]">
      <Container>
        <div className="text-center">
          <h3 className="text-[#151515] text-[45px] font-bold">
            Our Recent Work
          </h3>
          <p className="mt-5 text-[#737373] text-base leading-[26px] w-[620px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
          <Flex className="justify-around mt-[30px] mb-[50px] controls">
            <button
              data-filter="all"
              className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300"
            >
              All
            </button>
            <button
              data-filter=".md"
              className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300"
            >
              Mobile Design
            </button>
            <button
              data-filter=".wd"
              className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300"
            >
              Web design
            </button>
            <button
              data-filter=".br"
              className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300"
            >
              Branding
            </button>
            <button
              data-filter=".ill"
              className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300"
            >
              Illustration
            </button>
            <button
              data-filter=".dm"
              className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300"
            >
              Digital Marketing
            </button>
          </Flex>
          <Flex className={"gap-6 flex-wrap container"} ref={containerRef}>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow mix ill">
              <Image imgSrc={wOne} />
              <div className=" px-[42px] py-[30px]">
                <p className="text-[#151515] font-bold text-xl mb-2.5">
                  Task Management App
                </p>
                <p className="w-[340px] text-base text-[#737373]">
                  This is a task management application that can help you be
                  more
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow mix br">
              <Image imgSrc={wTwo} />
              <div className=" px-[42px] py-[30px]">
                <p className="text-[#151515] font-bold text-xl mb-2.5">
                  Saas Landing Page Design
                </p>
                <p className="w-[340px] text-base text-[#737373]">
                  This is a task management application that can help you be
                  more
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow mix dm">
              <Image imgSrc={wThr} />
              <div className=" px-[42px] py-[30px]">
                <p className="text-[#151515] font-bold text-xl mb-2.5">
                  App Design
                </p>
                <p className="w-[340px] text-base text-[#737373]">
                  This is a task management application that can help you be
                  more
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow mix ill">
              <Image imgSrc={wFor} />
              <div className=" px-[42px] py-[30px]">
                <p className="text-[#151515] font-bold text-xl mb-2.5">
                  Landing Page Design
                </p>
                <p className="w-[340px] text-base text-[#737373]">
                  This is a task management application that can help you be
                  more
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow mix wd">
              <Image imgSrc={wFiv} />
              <div className=" px-[42px] py-[30px]">
                <p className="text-[#151515] font-bold text-xl mb-2.5">
                  Dashboard Design
                </p>
                <p className="w-[340px] text-base text-[#737373]">
                  This is a task management application that can help you be
                  more
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow mix md">
              <Image imgSrc={wSix} />
              <div className=" px-[42px] py-[30px]">
                <p className="text-[#151515] font-bold text-xl mb-2.5">
                  Web App Design
                </p>
                <p className="w-[340px] text-base text-[#737373]">
                  This is a task management application that can help you be
                  more
                </p>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Work;
