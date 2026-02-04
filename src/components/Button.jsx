const Button = ({ btnText, className }) => {
  return (
    <button
      className={`${className} py-4 px-10 rounded-[10px] bg-[#6A4DF4] text-white text-xl font-semibold cursor-pointer`}
    >
      {btnText}
    </button>
  );
};

export default Button;
