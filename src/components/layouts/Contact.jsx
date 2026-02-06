import Container from "../Container";
import Flex from "../Flex";

const Contact = () => {
  return (
    <div className="bg-[#F3F3F3] py-[150px]">
      <Container>
        <Flex className={"justify-around"}>
          <div className="">
            <h3 className="text-[45px] font-bold text-[#151515] w-[450px] mb-5">
              We Do design, Code & Development
            </h3>
            <p className="text-base leading-[26px] text-[#7B7B7B] w-[520px]">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority. <br /> <br />
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>
          <div className="shadow-serShdow rounded-[20px] py-[61px] px-[43px]">
            <h4 className="text-center mb-7.5 text-3xl font-bold text-[#151515]">
              Get a free quote now
            </h4>
            <label className="text-base text-[#151515] font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-2 mt-3 mb-5 border-[#E8E8E8] outline-none block rounded-[10px] px-[23px] py-[19px] w-[450px] "
            />
            <label className="text-base text-[#151515] font-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 mt-3 mb-5 border-[#E8E8E8] outline-none block rounded-[10px] px-[23px] py-[19px] w-[450px] "
            />
            <label className="text-base text-[#151515] font-medium">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-2 mt-3 mb-7.5 border-[#E8E8E8] outline-none block rounded-[10px] px-[23px] py-[19px] w-[450px] "
            />
            <button className=" text-center py-[19px] font-semibold text-xl bg-[#6A4DF4] rounded-[10px] text-white w-[450px] cursor-pointer">
              Get Pricing Now
            </button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Contact;
