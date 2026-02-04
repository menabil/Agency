import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import serOne from "/src/assets/serOne.png";
import serTwo from "/src/assets/serTwo.png";
import serThr from "/src/assets/serThr.png";
import serFor from "/src/assets/serFor.png";
import serFiv from "/src/assets/serFiv.png";
import serSix from "/src/assets/serSix.png";

const Service = () => {
  return (
    <div className="mb-26">
      <Container>
        <div className="text-center mb-[50px]">
          <h3 className="text-[#151515] text-[45px] font-bold">
            Our Provided Services
          </h3>
          <p className="mt-5 text-[#737373] text-base leading-[26px] w-[610px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
        </div>
        <Flex className={"gap-x-6"}>
          <div className="text-center px-[49px] py-[47px] rounded-[20px] hover:shadow-serShdow duration-400">
            <Image imgSrc={serOne} />
            <h5 className="text-[25px] text-[#151515] font-bold pt-10 pb-5">
              Web Design
            </h5>
            <p className="text-base text-[#737373] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
          </div>
          <div className="text-center px-[49px] py-[47px] rounded-[20px] hover:shadow-serShdow duration-400">
            <Image imgSrc={serTwo} />
            <h5 className="text-[25px] text-[#151515] font-bold pt-10 pb-5">
              UI/UX Design
            </h5>
            <p className="text-base text-[#737373] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
          </div>
          <div className="text-center px-[49px] py-[47px] rounded-[20px] hover:shadow-serShdow duration-400">
            <Image imgSrc={serThr} />
            <h5 className="text-[25px] text-[#151515] font-bold pt-10 pb-5">
              Web Development
            </h5>
            <p className="text-base text-[#737373] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
          </div>
        </Flex>
        <Flex className={"gap-x-6 mt-6"}>
          <div className="text-center px-[49px] py-[47px] rounded-[20px] hover:shadow-serShdow duration-400">
            <Image imgSrc={serFor} />
            <h5 className="text-[25px] text-[#151515] font-bold pt-10 pb-5">
              Motion Graphics
            </h5>
            <p className="text-base text-[#737373] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
          </div>
          <div className="text-center px-[49px] py-[47px] rounded-[20px] hover:shadow-serShdow duration-400">
            <Image imgSrc={serFiv} />
            <h5 className="text-[25px] text-[#151515] font-bold pt-10 pb-5">
              3D Animation
            </h5>
            <p className="text-base text-[#737373] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
          </div>
          <div className="text-center px-[49px] py-[47px] rounded-[20px] hover:shadow-serShdow duration-400">
            <Image imgSrc={serSix} />
            <h5 className="text-[25px] text-[#151515] font-bold pt-10 pb-5">
              Digital Marketing
            </h5>
            <p className="text-base text-[#737373] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
