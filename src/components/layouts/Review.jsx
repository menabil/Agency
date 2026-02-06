import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import reOne from "/src/assets/reOne.png";
import reTwo from "/src/assets/reTwo.png";
import reThr from "/src/assets/reThr.png";
import reFor from "/src/assets/reFor.png";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Review = () => {
  return (
    <div className="mb-25">
      <Container>
        <div className="text-center">
          <h3 className="text-[#151515] text-[45px] font-bold">
            Some Client Reviews
          </h3>
          <p className="mt-5 text-[#737373] text-base leading-[26px] w-[620px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          className="py-12.5!"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="rounded-[20px] px-[58px] py-[54px] bg-white swp">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] px-[58px] py-[54px] bg-white swp">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] px-[58px] py-[54px] bg-white swp">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] px-[58px] py-[54px] bg-white swp">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] px-[58px] py-[54px] bg-white swp">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] px-[58px] py-[54px] bg-white swp">
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
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Review;

// import Container from "../Container";
// import Flex from "../Flex";
// import Image from "../Image";
// import reOne from "/src/assets/reOne.png";
// import reTwo from "/src/assets/reTwo.png";
// import reThr from "/src/assets/reThr.png";
// import reFor from "/src/assets/reFor.png";
// import { FaStar } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const Review = () => {
//   return (
//     <div className="mb-25">
//       <Container>
//         <div className="text-center">
//           <h3 className="text-[#151515] text-[45px] font-bold">
//             Some Client Reviews
//           </h3>
//           <p className="mt-5 text-[#737373] text-base leading-[26px] w-[620px] mx-auto">
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form.
//           </p>
//         </div>

//         <Swiper
//           spaceBetween={50}
//           slidesPerView={3}
//           centeredSlides={true} // মাঝখানের স্লাইড ফোকাস করার জন্য
//           loop={true} // সিনট্যাক্স ফিক্স করা হয়েছে
//           modules={[Pagination]}
//           pagination={{ clickable: true }}
//           className="" // নিচে প্যাডিং দেওয়া হলো যাতে শ্যাডো কেটে না যায়
//         >
//           {/* Slide 1 */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div
//                 className={`rounded-[20px] px-[58px] py-[54px] bg-white swp transition-all duration-300 ${
//                   isActive ? "shadow-serShdow" : "shadow-none"
//                 }`}
//               >
//                 <Image imgSrc={reOne} />
//                 <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
//                   I had a good experience while using this app, what fascinated
//                   me was the live tracking feature There are many variations of
//                   passages of Lorem Ipsum available, but the majority.
//                 </p>
//                 <Flex className={"text-[#F9BD2C] text-xl"}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </Flex>
//                 <Flex className={"mt-[30px] gap-x-5"}>
//                   <Image imgSrc={reTwo} />
//                   <div className="">
//                     <p className="text-xl text-[#232323] font-semibold leading-[120%]">
//                       Awlad Hossain
//                     </p>
//                     <p className="text-base text-[#7B7B7B] ">UX Researcher</p>
//                   </div>
//                 </Flex>
//               </div>
//             )}
//           </SwiperSlide>

//           {/* Slide 2 */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div
//                 className={`rounded-[20px] px-[58px] py-[54px] bg-white swp transition-all duration-300 ${
//                   isActive ? "shadow-2xl scale-105" : "shadow-none opacity-60"
//                 }`}
//               >
//                 <Image imgSrc={reOne} />
//                 <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
//                   I had a good experience while using this app, what fascinated
//                   me was the live tracking feature There are many variations of
//                   passages of Lorem Ipsum available, but the majority.
//                 </p>
//                 <Flex className={"text-[#F9BD2C] text-xl"}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </Flex>
//                 <Flex className={"mt-[30px] gap-x-5"}>
//                   <Image imgSrc={reThr} />
//                   <div className="">
//                     <p className="text-xl text-[#232323] font-semibold leading-[120%]">
//                       Rosa Farmer
//                     </p>
//                     <p className="text-base text-[#7B7B7B] ">UI Designer</p>
//                   </div>
//                 </Flex>
//               </div>
//             )}
//           </SwiperSlide>

//           {/* Slide 3 */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div
//                 className={`rounded-[20px] px-[58px] py-[54px] bg-white swp transition-all duration-300 ${
//                   isActive ? "shadow-2xl scale-105" : "shadow-none opacity-60"
//                 }`}
//               >
//                 <Image imgSrc={reOne} />
//                 <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
//                   I had a good experience while using this app, what fascinated
//                   me was the live tracking feature There are many variations of
//                   passages of Lorem Ipsum available, but the majority.
//                 </p>
//                 <Flex className={"text-[#F9BD2C] text-xl"}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </Flex>
//                 <Flex className={"mt-[30px] gap-x-5"}>
//                   <Image imgSrc={reFor} />
//                   <div className="">
//                     <p className="text-xl text-[#232323] font-semibold leading-[120%]">
//                       Eric Drake
//                     </p>
//                     <p className="text-base text-[#7B7B7B] ">
//                       Digital Marketor
//                     </p>
//                   </div>
//                 </Flex>
//               </div>
//             )}
//           </SwiperSlide>

//           {/* Slide 4 (Repeat) */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div
//                 className={`rounded-[20px] px-[58px] py-[54px] bg-white swp transition-all duration-300 ${
//                   isActive ? "shadow-2xl scale-105" : "shadow-none opacity-60"
//                 }`}
//               >
//                 <Image imgSrc={reOne} />
//                 <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
//                   I had a good experience while using this app, what fascinated
//                   me was the live tracking feature There are many variations of
//                   passages of Lorem Ipsum available, but the majority.
//                 </p>
//                 <Flex className={"text-[#F9BD2C] text-xl"}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </Flex>
//                 <Flex className={"mt-[30px] gap-x-5"}>
//                   <Image imgSrc={reTwo} />
//                   <div className="">
//                     <p className="text-xl text-[#232323] font-semibold leading-[120%]">
//                       Awlad Hossain
//                     </p>
//                     <p className="text-base text-[#7B7B7B] ">UX Researcher</p>
//                   </div>
//                 </Flex>
//               </div>
//             )}
//           </SwiperSlide>

//           {/* Slide 5 (Repeat) */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div
//                 className={`rounded-[20px] px-[58px] py-[54px] bg-white swp transition-all duration-300 ${
//                   isActive ? "shadow-2xl scale-105" : "shadow-none opacity-60"
//                 }`}
//               >
//                 <Image imgSrc={reOne} />
//                 <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
//                   I had a good experience while using this app, what fascinated
//                   me was the live tracking feature There are many variations of
//                   passages of Lorem Ipsum available, but the majority.
//                 </p>
//                 <Flex className={"text-[#F9BD2C] text-xl"}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </Flex>
//                 <Flex className={"mt-[30px] gap-x-5"}>
//                   <Image imgSrc={reThr} />
//                   <div className="">
//                     <p className="text-xl text-[#232323] font-semibold leading-[120%]">
//                       Rosa Farmer
//                     </p>
//                     <p className="text-base text-[#7B7B7B] ">UI Designer</p>
//                   </div>
//                 </Flex>
//               </div>
//             )}
//           </SwiperSlide>

//           {/* Slide 6 (Repeat) */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div
//                 className={`rounded-[20px] px-[58px] py-[54px] bg-white swp transition-all duration-300 ${
//                   isActive ? "shadow-2xl scale-105" : "shadow-none opacity-60"
//                 }`}
//               >
//                 <Image imgSrc={reOne} />
//                 <p className="text-[#7B7B7B] text-base leading-[26px] w-[307px] my-5">
//                   I had a good experience while using this app, what fascinated
//                   me was the live tracking feature There are many variations of
//                   passages of Lorem Ipsum available, but the majority.
//                 </p>
//                 <Flex className={"text-[#F9BD2C] text-xl"}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </Flex>
//                 <Flex className={"mt-[30px] gap-x-5"}>
//                   <Image imgSrc={reFor} />
//                   <div className="">
//                     <p className="text-xl text-[#232323] font-semibold leading-[120%]">
//                       Eric Drake
//                     </p>
//                     <p className="text-base text-[#7B7B7B] ">
//                       Digital Marketor
//                     </p>
//                   </div>
//                 </Flex>
//               </div>
//             )}
//           </SwiperSlide>
//         </Swiper>
//       </Container>
//     </div>
//   );
// };

// export default Review;
