import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import reOne from "/src/assets/reOne.png";
import reTwo from "/src/assets/reTwo.png";
import reThr from "/src/assets/reThr.png";
import reFor from "/src/assets/reFor.png";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="mb-25">
      <Container>
        <div className="text-center">
          <h3 className="text-[#151515] text-[45px] font-bold">
            Some Client Reviews
          </h3>
          <p className="mt-5 text-[#737373] text-base leading-[26px] w-[620px] mb-[50px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
        </div>
        <Slider {...settings}>
          <div className="rounded-[20px] px-[58px] py-[54px] bg-amber-600">
            <Image imgSrc={reOne} />
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <Flex className={"text-[#F9BD2C] text-xl"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <Flex className={"mt-[30px] gap-x-5"}>
              <Image imgSrc={reTwo} />
              <div className="">
                <p className="text-xl text-[#232323] font-semibold leading-[120%]">
                  Awlad Hossain
                </p>
                <p className="text-base text-[#7B7B7B] ">UX Researcher</p>
              </div>
            </Flex>
          </div>
          <div className="rounded-[20px] px-[58px] py-[54px] bg-amber-600">
            <Image imgSrc={reOne} />
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <Flex className={"text-[#F9BD2C] text-xl"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <Flex className={"mt-[30px] gap-x-5"}>
              <Image imgSrc={reThr} />
              <div className="">
                <p className="text-xl text-[#232323] font-semibold leading-[120%]">
                  Rosa Farmer
                </p>
                <p className="text-base text-[#7B7B7B] ">UI Designer</p>
              </div>
            </Flex>
          </div>
          <div className="rounded-[20px] px-[58px] py-[54px] bg-amber-600">
            <Image imgSrc={reOne} />
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <Flex className={"text-[#F9BD2C] text-xl"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <Flex className={"mt-[30px] gap-x-5"}>
              <Image imgSrc={reFor} />
              <div className="">
                <p className="text-xl text-[#232323] font-semibold leading-[120%]">
                  Eric Drake
                </p>
                <p className="text-base text-[#7B7B7B] ">Digital Marketor</p>
              </div>
            </Flex>
          </div>
          <div className="rounded-[20px] px-[58px] py-[54px] bg-amber-600">
            <Image imgSrc={reOne} />
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <Flex className={"text-[#F9BD2C] text-xl"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <Flex className={"mt-[30px] gap-x-5"}>
              <Image imgSrc={reTwo} />
              <div className="">
                <p className="text-xl text-[#232323] font-semibold leading-[120%]">
                  Awlad Hossain
                </p>
                <p className="text-base text-[#7B7B7B] ">UX Researcher</p>
              </div>
            </Flex>
          </div>
          <div className="rounded-[20px] px-[58px] py-[54px] bg-amber-600">
            <Image imgSrc={reOne} />
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <Flex className={"text-[#F9BD2C] text-xl"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <Flex className={"mt-[30px] gap-x-5"}>
              <Image imgSrc={reThr} />
              <div className="">
                <p className="text-xl text-[#232323] font-semibold leading-[120%]">
                  Rosa Farmer
                </p>
                <p className="text-base text-[#7B7B7B] ">UI Designer</p>
              </div>
            </Flex>
          </div>
          <div className="rounded-[20px] px-[58px] py-[54px] bg-amber-600">
            <Image imgSrc={reOne} />
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <Flex className={"text-[#F9BD2C] text-xl"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <Flex className={"mt-[30px] gap-x-5"}>
              <Image imgSrc={reFor} />
              <div className="">
                <p className="text-xl text-[#232323] font-semibold leading-[120%]">
                  Eric Drake
                </p>
                <p className="text-base text-[#7B7B7B] ">Digital Marketor</p>
              </div>
            </Flex>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Review;
