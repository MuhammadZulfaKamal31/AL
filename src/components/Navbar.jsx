import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import SideBar from "./SideBar";
import { useScroll } from "../utils/useScroll";
import resume from "../assets/CV_Muhammad Zulfa Kamal_ .pdf";


// eslint-disable-next-line react/prop-types
const Navbar = ({ hero, contact, portofolio, about }) => {
    const [open, setOpen] = useState(false);
    const { scrollY, scrollDirection } = useScroll();

    // Scroll to section
    const scrollSection = (elementRef) => {
        window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
    };

    // open sidebar
    const handleOpenSidebar = () => {
        setOpen(!open);
    };

    return (
        <header
            className={` w-full lg:h-20 h-16 fixed z-50 ${open ? "px-2" : "px-2"} ${scrollDirection === "down" || scrollY === 0 || open === true
                ? " visible transition-all duration-500"
                : "  -translate-y-full"
                } lg:px-28 text-neutral-900 border-b-[3px] border-neutral-900 bg-[#f2f2f2] transition duration-300 ease-in-out`}>
            <nav
                className={`${open ? " border-b-[3px] border-neutral-950" : ""
                    } w-full h-full  flex justify-between items-center lg:px-16 px-9 transition duration-300 ease-in-out`}>
                <div className=" relative after:content-['AL'] after:absolute after:bottom-[3px] after:lg:text-5xl after:text-[30px] after:font-semibold border-[3px] border-neutral-950 shadow-[3px_4px_0_0] shadow-violet-700  lg:hover:shadow-[1px_1px_0_0] transition-all  ease-out duration-150 hover:translate-y-1 lg:hover:translate-x-[1px] cursor-pointer px-3 lg:px-0">
                    <h1 className=" lg:text-5xl text-[30px] text-violet-600 font-bold">AL</h1>
                </div>
                <div className=" lg:flex justify-center items-center gap-x-7 text-xl font-bold transition-all ease-in-out duration-300 hidden h-full border-r-[3px] border-l-[3px] border-neutral-950">
                    <span className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full">
                        <h2 className="nav relative" onClick={() => scrollSection(hero)}>
                            Home
                        </h2>
                    </span>
                    <span
                        className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full"
                        onClick={() => scrollSection(about)}>
                        <h2 className="nav relative">About</h2>
                    </span>
                    <span
                        className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full"
                        onClick={() => scrollSection(portofolio)}>
                        <h2 className="nav relative">Project</h2>
                    </span>
                    <span
                        className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full"
                        onClick={() => scrollSection(contact)}>
                        <h2 className="nav relative">Contact</h2>
                    </span>
                </div>
                <a
                    className=" w-36 h-10 border border-black bg-violet-600 shadow-[3px_4px__1px_1px] shadow-black hover:translate-y-1 hover:translate-x-[1px] hover:bg-violet-500 hover:shadow-[1px_1px_0_0] transition-all  ease-out duration-150 hidden lg:flex justify-center items-center text-neutral-900 font-bold cursor-pointer"
                    href={resume}
                    download="Resume_Bintang_Aldian"
                    rel="noreferrer"
                    target="_blank">
                    Hire me!
                </a>
                <span className={`${open ? "w-10 h-10" : "w-9 h-9"}  lg:hidden`} onClick={handleOpenSidebar}>
                    {!open ? (
                        <GiHamburgerMenu className=" w-full h-full text-neutral-950" />
                    ) : (
                        <RxCross2 className=" w-full h-full text-neutral-950" />
                    )}
                </span>
                <SideBar
                    open={open}
                    hero={hero}
                    contact={contact}
                    portofolio={portofolio}
                    about={about}
                    scrollSection={scrollSection}
                    handleClose={handleOpenSidebar}
                />
            </nav>
        </header>
    );
};

export default Navbar;
