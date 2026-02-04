import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <div>
      <Container>
        <Flex className={"py-12.5 justify-between"}>
          <Image imgSrc={logo} className={"cursor-pointer"} />
          <ul className="flex items-center gap-x-16 ">
            <li className="text-[#737373] hover:text-[#6A4DF4] duration-300 cursor-pointer hover:font-bold text-[18px]">
              Home
            </li>
            <li className="text-[#737373] hover:text-[#6A4DF4] duration-300 cursor-pointer hover:font-bold text-[18px]">
              About
            </li>
            <li className="text-[#737373] hover:text-[#6A4DF4] duration-300 cursor-pointer hover:font-bold text-[18px]">
              Service
            </li>
            <li className="text-[#737373] hover:text-[#6A4DF4] duration-300 cursor-pointer hover:font-bold text-[18px]">
              Careers
            </li>
            <li className="text-[#737373] hover:text-[#6A4DF4] duration-300 cursor-pointer hover:font-bold text-[18px]">
              Contact
            </li>
          </ul>
          <Button btnText={"Contact"} />
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
