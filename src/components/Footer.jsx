import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" w-full lg:h-fit bg-[#f2f2f2] flex flex-col items-center justify-center gap-y-3 py-4">
            <div className=" w-full flex gap-x-4 items-center justify-center">
                <a
                    className="  w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950 cursor-pointer"
                    href="https://www.instagram.com/kamalmuhammadzulfa/?hl=id_"
                    target="blank">
                    <FaInstagramSquare className=" w-full h-full text-neutral-950" />
                </a>
                <div className=" w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950"
                    href="https://www.facebook.com/muhammadzulfa.kamal.3"
                    target="blank"                >
                    <AiFillFacebook className=" w-full h-full text-neutral-950 cursor-pointer" />
                </div>
                <a
                    className=" w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950"
                    href="https://github.com/MuhammadZulfaKamal31"
                    target="blank">
                    <FaGithubSquare className=" w-full h-full text-neutral-950 cursor-pointer" />
                </a>
                <a
                    className=" w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950"
                    href="https://www.linkedin.com/in/muhammadzulfakamal/"
                    target="blank">
                    <AiFillLinkedin className=" w-full h-full text-neutral-950 cursor-pointer" />
                </a>
            </div>
            <div className=" lg:w-[50%] lg:px-0 px-5">
                <p className=" lg:text-sm text-xs font-semibold text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci non officia nam dolorem placeat? Quia
                    voluptas atque ullam esse enim laborum,
                </p>
            </div>
            <div className=" w-full flex items-center justify-center">
                <div className=" relative after:absolute after:text-neutral-950 after:bottom-[2px] after:content-['AL'] after:text-4xl border-r-2 border-neutral-950 px-2">
                    <h1 className=" font-bold text-4xl text-violet-700 ">AL</h1>
                </div>
                <div className=" flex items-center justify-center px-2">
                    <span className=" text-neutral-900 font-bold text-lg">Muhammad Zulfa Kamal</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
