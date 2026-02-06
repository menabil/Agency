import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/whybg.png";
import whyOne from "/src/assets/whyOne.png";
import whyTwo from "/src/assets/whyTwo.png";
import whyThr from "/src/assets/whyThr.png";

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
            <Flex className={" gap-x-20"}>
              <div className="">
                <Image imgSrc={whyOne} />
                <h5 className="text-[25px] text-[#151515] font-bold mt-5 mb-2.5">
                  Innovative Ideas
                </h5>
                <p className="text-base leading-[26px] text-[#737373] w-[340px]">
                  Because each project is different, we adapt to your business
                  model.
                </p>
              </div>
              <div className="mt-10">
                <Image imgSrc={whyTwo} />
                <h5 className="text-[25px] text-[#151515] font-bold mt-5 mb-2.5">
                  Dedicated Support
                </h5>
                <p className="text-base leading-[26px] text-[#737373] w-[340px]">
                  We provide 24/7 support for all our clients and serve them
                  professionally.
                </p>
              </div>
            </Flex>
            <div className="mt-5 ml-[190px]">
              <Image imgSrc={whyThr} />
              <h5 className="text-[25px] text-[#151515] font-bold mt-5 mb-2.5">
                Honest Pricing
              </h5>
              <p className="text-base leading-[26px] text-[#737373] w-[340px]">
                Pricing on projects are based on various analyzes and are cost
                effective.
              </p>
            </div>
          </div>
          <Image imgSrc={logo} className={"pl-[30px]"} />
        </Flex>
      </Container>
    </div>
  );
};

export default Why;
