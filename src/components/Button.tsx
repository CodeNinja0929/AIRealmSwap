import React from "react";

interface ButtonProps {
  children?: React.ReactNode | string;
  className?: any;
  size?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, size, ...mainProps } = props;
  const padding =
    size === "tiny" ? " py-[.45rem] px-[.9rem]" : " py-[.9rem] px-[1.8rem]";
  return (
    <button
      className={
        "flex justify-center items-center w-[170px] bg-blue1 font-Jakarta capitalize transition duration-[.4s] border border-transparent hover:border-blue1 hover:text-[#0a1837] hover:bg-white hover:shadow-pink rounded-[50rem] font-medium " +
        className +
        padding
      }
      {...mainProps}
    >
      {children}
    </button>
  );
};

export default Button;
