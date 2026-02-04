import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import banner from "/src/assets/banner.png";

const Banner = () => {
  return (
    <div className="mt-7.5 ">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <h1 className="text-[75px] text-[#151515] font-bold leading-[120%] w-[636px]">
              We Help brands with high quality services
            </h1>
            <p className="text-base text-[#737373] leading-6.5 w-130 pt-5 pb-7.5">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form, by injected
              humour, or randomised words which don't look.
            </p>
            <Button btnText={"Get Started"} />
          </div>
          <Image imgSrc={banner} className={"ml-15"} />
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
