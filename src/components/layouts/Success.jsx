import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import sucOne from "/src/assets/sucOne.png";
import { FaStar } from "react-icons/fa";

const Success = () => {
  return (
    <div className="py-[150px]">
      <Container>
        <Flex className="rounded-[20px] bg-[#F8F6FE] px-[50px] py-[70px] justify-between">
          <div className="">
            <p className="font-medium text-[25px] text-[#6A4DF4] mb-[15px]">
              Our Success
            </p>
            <h3 className="font-semibold text-[35px] text-[#151515] w-[387px]">
              West cost Brand makers-Global Edge
            </h3>
          </div>
          <Flex className="gap-x-[110px] items-start">
            <div className="">
              <h3 className="text-[50px] text-[#151515] font-bold">200+</h3>
              <p className="text-xl text-[#737373] font-medium my-5">
                Customer Satisfied
              </p>
              <Image imgSrc={sucOne} />
            </div>
            <div className="">
              <h3 className="text-[50px] text-[#151515] font-bold">4.5</h3>
              <p className="text-xl text-[#737373] font-medium my-5">
                200+ Avg rating
              </p>
              <Flex>
                <FaStar className="text-[#FFAC4A] text-base" />
                <FaStar className="text-[#FFAC4A] text-base" />
                <FaStar className="text-[#FFAC4A] text-base" />
                <FaStar className="text-[#FFAC4A] text-base" />
                <FaStar className="text-[#FFAC4A] text-base" />
              </Flex>
            </div>
            <div className="">
              <h3 className="text-[50px] text-[#151515] font-bold">351+</h3>
              <p className="text-xl text-[#737373] font-medium my-5">
                Project Delivered
              </p>
              <a
                href=""
                className="text-[#6A4DF4] underline font-medium text-xl"
              >
                See Works
              </a>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Success;
