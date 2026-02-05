import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/whybg.png";

const Why = () => {
  return (
    <div className="py-[150px]">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <h3 className="text-[45px] font-bold text-[#151515] w-[400px]">
              Why You Should Choose Agenc
            </h3>
            <p className="text-base text-[#737373] leading-[26px] pt-5 mb-[85px] w-[508px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <Image imgSrc={logo} />
        </Flex>
      </Container>
    </div>
  );
};

export default Why;
