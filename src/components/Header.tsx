import { useState } from "react";
import Button from "./Button";

const Header = ({ fixed }: { fixed: Boolean }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header
      className={
        "fixed top-0 left-0 w-full py-[.7rem] px-[2.2rem] z-[1] text-white " +
        (fixed ? "bg-mainback shadow-lg" : "")
      }
    >
      <div className="flex justify-between items-center mx-auto max-w-[74rem] p-[.6rem]">
        <a>
          <img className="max-w-[80px]" src="/logo.png" />
        </a>
        <div className="flex items-center space-x-[.6rem]">
          <button
            className="flex md:hidden flex-col space-y-[3px] py-[.4em] px-[.7em]"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="bg-blue1 w-4 h-0.5" />
            <div className="bg-blue1 w-4 h-0.5" />
            <div className="bg-blue1 w-4 h-0.5" />
          </button>
          <div className="hidden md:flex items-center space-x-[.6rem]">
            <Button>Dapp</Button>
            <Button>Home</Button>
          </div>
        </div>
        {openMenu && (
          <div className="flex md:hidden flex-col items-center py-10 space-y-5 absolute top-full left-[0px] w-screen bg-mobilemenu border border-black rounded-[1.2em] z-[3]">
            <Button>Dapp</Button>
            <Button>Home</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
