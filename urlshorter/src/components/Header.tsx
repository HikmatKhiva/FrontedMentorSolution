import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../config";
import { CloseSvg, OpenSvg } from "./AnimationSvg";
import MobileNav from "./MobileNav";
const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(true);
  const handleMobileNav = () => setMobileNav(!mobileNav);
  const handleMobileNavClose = () => setMobileNav(false);
  return (
    <header className="py-5 font-poppins relative">
      <div className="container mx-auto justify-between md:justify-start flex items-start">
        <a href="">
          <img src={logo} alt="brand" />
        </a>
        <nav className="flex-grow md:flex hidden items-center relative justify-between">
          <ul className="flex gap-5 ml-8">
            {navLinks.map((nav, index) => (
              <li key={index}>
                <a
                  className="font-medium text-gray-violet transition-all duration-300 hover:text-black"
                  href=""
                >
                  {nav}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a className="inline-block" href="">
              Login
            </a>
            <a
              className="inline-block bg-cyan hover:opacity-80 transition-all duration-200 text-white py-2 px-4 rounded-3xl"
              href=""
            >
              Sign Up
            </a>
          </div>
        </nav>
        <MobileNav mobileNav={mobileNav} handleMobileNavClose={handleMobileNavClose} />
        <button onClick={handleMobileNav} className="md:hidden ">
          {mobileNav ? <OpenSvg /> : <CloseSvg />}
        </button>
      </div>
    </header>
  );
};
export default Header;