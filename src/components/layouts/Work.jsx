import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import wOne from "/src/assets/wOne.png";
import wTwo from "/src/assets/wTwo.png";
import wThr from "/src/assets/wThr.png";
import wFor from "/src/assets/wFor.png";
import wFiv from "/src/assets/wFiv.png";
import wSix from "/src/assets/wSix.png";

const Work = () => {
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
          <Flex className="justify-around mt-[30px] mb-[50px]">
            <p className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300">
              All
            </p>
            <p className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300">
              Mobile Design
            </p>
            <p className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300">
              Web design
            </p>
            <p className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300">
              Branding
            </p>
            <p className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300">
              Illustration
            </p>
            <p className="cursor-pointer text-[#A1A1A1] hover:text-[#6A4DF4] text-xl font-medium hover:font-semibold duration-300">
              Digital Marketing
            </p>
          </Flex>
          <Flex className={"gap-6 flex-wrap"}>
            <div className="overflow-hidden rounded-[20px] shadow-serShdow">
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
            <div className="overflow-hidden rounded-[20px] shadow-serShdow">
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
            <div className="overflow-hidden rounded-[20px] shadow-serShdow">
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
            <div className="overflow-hidden rounded-[20px] shadow-serShdow">
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
            <div className="overflow-hidden rounded-[20px] shadow-serShdow">
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
            <div className="overflow-hidden rounded-[20px] shadow-serShdow">
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
