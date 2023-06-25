import resume from "../assets/CV_Muhammad Zulfa Kamal_ .pdf";

const SideBar = ({ open, hero, contact, portofolio, about, scrollSection, handleClose }) => {
    return (
        <div
            className={`absolute left-0 -z-[1] border-b-4 border-gray-500  bg-[#f2f2f2] w-full flex justify-center items-center px-3 ${open ? "top-0 h-[80vh]" : " invisible"
                }`}>
            <div className=" w-full h-[70%] shadow-neutral-950 shadow-[4px_6px_0_0] border-2 border-neutral-950">
                <div className=" w-full h-full flex flex-col text-neutral-950 px-4 py-4 gap-y-8">
                    <div
                        className=" w-full text-center border-b-2 border-neutral-950"
                        onClick={() => {
                            scrollSection(hero);
                            handleClose(false);
                        }}>
                        <h1 className=" font-bold text-3xl">Home</h1>
                    </div>
                    <div
                        className=" w-full text-center border-b-2 border-neutral-950"
                        onClick={() => {
                            scrollSection(about);
                            handleClose(false);
                        }}>
                        <h1 className=" font-bold text-3xl">About</h1>
                    </div>
                    <div
                        className=" w-full text-center border-b-2 border-neutral-950"
                        onClick={() => {
                            scrollSection(portofolio);
                            handleClose(false);
                        }}>
                        <h1 className=" font-bold text-3xl">Projects</h1>
                    </div>
                    <div
                        className=" w-full text-center border-b-2 border-neutral-950"
                        onClick={() => {
                            scrollSection(contact);
                            handleClose(false);
                        }}>
                        <h1 className=" font-bold text-3xl">Contact</h1>
                    </div>
                    <div className=" w-full h-fit flex items-center justify-center">
                        <a
                            className={`${open ? "visible" : "invisible"
                                }  px-9 py-[4px] border border-black bg-violet-600 shadow-[3px_4px__1px_1px] shadow-black hover:translate-y-1 hover:translate-x-[1px] hover:bg-violet-500 hover:shadow-[1px_1px_0_0]  text-neutral-900 font-bold cursor-pointer flex`}
                            href={resume}
                            download="Resume_Bintang_Aldian">
                            Hire me!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
