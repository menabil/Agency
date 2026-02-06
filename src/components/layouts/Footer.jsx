import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/flogo.png";

const Footer = () => {
  return (
    <div className="pt-[150px] pb-[50px]">
      <Container>
        <Flex
          className={
            "items-start justify-between pb-[50px] border-b-2 border-[#E8E8E8] mb-5"
          }
        >
          <div className="">
            <Image imgSrc={logo} />
            <p className="text-base text-[#7B7B7B] leading-[26px] w-[356px] mt-[30px]">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
          </div>
          <div className="">
            <h5 className="text-xl text-[#151515] font-semibold mb-10">
              About
            </h5>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              About Us
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              Features
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">News</p>
            <p className="text-[#7B7B7B] text-base cursor-pointer">Careers</p>
          </div>
          <div className="">
            <h5 className="text-xl text-[#151515] font-semibold mb-10">
              Company
            </h5>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              Our Team
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              Partner With Us
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">FAQ</p>
            <p className="text-[#7B7B7B] text-base cursor-pointer">Blog</p>
          </div>
          <div className="">
            <h5 className="text-xl text-[#151515] font-semibold mb-10">
              Support
            </h5>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              About
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              Support Center
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              Feedback
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              Contact Us
            </p>
            <p className="text-[#7B7B7B] text-base cursor-pointer">
              Accesbility
            </p>
          </div>
          <div className="">
            <h5 className="text-xl text-[#151515] font-semibold mb-10">
              Get in touch
            </h5>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              info@gmail.com
            </p>
            <p className="text-[#7B7B7B] text-base mb-5 cursor-pointer">
              +88 0121 0212
            </p>
          </div>
        </Flex>
        <p className="text-base text-[#D0D0D0] text-center">
          All credit goes to @agence.com
        </p>
      </Container>
    </div>
  );
};

export default Footer;
