import React from "react";
import thanks from "../assets/thank-you.png";
import { GrFormClose } from "react-icons/gr";

const Modal = ({ open, onClose, senderName }) => {
    return (
        <div
            //untuk mengatur tampilan modal kelihatan atau gak
            onClick={onClose}
            className={` ${open ? "visible bg-black/80" : "invisible"
                } fixed inset-0 flex justify-center items-center transition-colors z-50 shadow-xl`}>
            <div
                className={`lg:w-[30%] lg:h-[40%] md:w-[60%] md:h-[75%] w-[90%] h-[30%] rounded-md mt-7 flex flex-col items-center justify-center gap-y-5 relative bg-[#f2f2f2] shadow-violet-700 border-[3px] border-neutral-900 shadow-[7px_8px_0_0]`}>
                <button className=" w-8 h-8 absolute top-0 right-0" onClick={onClose}>
                    <GrFormClose className=" w-full h-full" />
                </button>
                <img src={thanks} alt="thank_you" className=" w-32 h-32" />
                <h1 className=" text-lg text-center">
                    Thank you <span className=" font-bold">{senderName}</span> for your valuable feedback.{" "}
                </h1>
            </div>
        </div>
    );
};

export default Modal;
