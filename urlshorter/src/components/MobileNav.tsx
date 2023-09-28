import { navLinks } from "../config";

const MobileNav = ({ mobileNav, handleMobileNavClose }: { mobileNav: boolean, handleMobileNavClose:unknown }) => {
    return (
        <div className={`${mobileNav ? "hidden" : "block"} transition-all duration-300 absolute z-50 top-20 w-[90%]`}>
            <nav className="mx-auto flex-col rounded-md p-5 flex items-center bg-dark-violet md:hidden justify-between">
                <ul className="flex flex-col text-center gap-5">
                    {navLinks.map((nav, index) => (
                        <li onClick={() => handleMobileNavClose} key={index}>
                            <a
                                className="font-medium text-white transition-all duration-300 hover:text-black"
                                href=""
                            >
                                {nav}
                            </a>
                        </li>
                    ))}
                </ul>
                <hr className="border-t border-gray my-3 w-full" />
                <div className="flex items-center flex-col flex-grow gap-3">
                    <a className="inline-block text-white" href="">
                        Login
                    </a>
                    <a
                        className="inline-block w-full flex-grow bg-cyan hover:opacity-80 transition-all duration-200 text-white py-2 px-8 rounded-3xl"
                        href=""
                    >
                        Sign Up
                    </a>
                </div>
            </nav>
        </div>
    )
}
export default MobileNav;