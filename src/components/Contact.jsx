import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "./Modal";
import { yupSchema } from "../utils/yupSchema";
import data from "../static/data.json";

const Contact = ({ contact }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [sender, setSender] = useState("");
    //cara makainya handleSubmit(valuenya)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(yupSchema()),
    });

    const sendFeedBack = (data) => {
        setLoading(true);
        setSender(data.firstname);
        try {
            emailjs
                .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TAMPLATE_ID, data, import.meta.env.VITE_PUBLIC_KEY)
                .then(() => {
                    reset();
                    setLoading(false);
                    setOpen(true);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full h-full lg:h-screen text-[#f2f2f2] " ref={contact}>
            <div className="section-wrapper bg-neutral-900 pt-16">
                <div className=" w-full h-full flex items-center justify-center flex-col lg:gap-y-5 gap-y-1">
                    <div className=" flex items-center justify-center gap-x-2 lg:pt-0 pt-8 ">
                        <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['Contact']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
                            <h1 className=" text-violet-600 text-3xl lg:text-5xl">Contact</h1>
                        </div>
                        <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['Me.']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
                            <h1 className=" text-violet-600 text-3xl lg:text-5xl">Me.</h1>
                        </div>
                    </div>
                    <div className=" w-full h-full flex items-center lg:flex-row flex-col justify-center lg:px-16">
                        <form
                            className=" w-full h-full flex flex-col lg:w-[60%] px-3 py-5 text-[#f2f2f2] lg:gap-y-6 gap-y-5 items-center justify-center"
                            onSubmit={handleSubmit(sendFeedBack)}>
                            <div className=" w-full flex h-fit gap-x-3 items-center">
                                {data.feedback.slice(0, 2).map((e) => {
                                    return (
                                        <div className=" w-full" key={e.id}>
                                            <label className=" text-[#f2f2f2] font-semibold" htmlFor={e.value}>
                                                {e.value === "firstname" ? "First Name" : "Last Name"}
                                            </label>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name={e.value}
                                                id={e.value}
                                                placeholder={`Enter your ${e.value === "firstname" ? "first name" : "last name"}`}
                                                className={` input ${errors.lastname
                                                    ? "border-red-600 shadow-red-600 focus:shadow-red-600"
                                                    : "border-[#f2f2f2] shadow-[#f2f2f2] focus:shadow-[#f2f2f2]"
                                                    } lg:placeholder:text-base placeholder:text-[13px]`}
                                                {...register(`${e.value}`)}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            {data.feedback.slice(2).map((e) => {
                                return (
                                    <div className=" w-full" key={e.id}>
                                        <label className=" text-[#f2f2f2] font-semibold" htmlFor={e.value}>
                                            {e.value === "email" ? "Email" : "Subject"}
                                        </label>
                                        <input
                                            autoComplete="off"
                                            type={e.value}
                                            name={e.value}
                                            id={e.value}
                                            placeholder={`Enter your ${e.value}`}
                                            className={` input ${errors.email
                                                ? "border-red-600 shadow-red-600 focus:shadow-red-600"
                                                : "border-[#f2f2f2] shadow-[#f2f2f2] focus:shadow-[#f2f2f2]"
                                                } lg:placeholder:text-base placeholder:text-[13px]`}
                                            {...register(`${e.value}`)}
                                        />
                                    </div>
                                );
                            })}

                            <div className=" w-full">
                                <label className=" text-[#f2f2f2] font-semibold" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder="Enter your message"
                                    {...register("message")}
                                    className={` w-full lg:h-32 h-24 border ${errors.message
                                        ? " border-red-600 shadow-red-600 focus:shadow-red-600 "
                                        : "border-[#f2f2f2] shadow-[#f2f2f2] focus:shadow-[#f2f2f2]"
                                        }  outline-none px-2 bg-neutral-900  shadow-[3px_4px_0_0] focus:translate-y-1 focus:translate-x-[1px] focus:shadow-[1px_2px_0_0] transition-all ease-in-out duration-100`}
                                />
                            </div>
                            <button
                                disabled={loading}
                                className={` w-full lg:h-10 border border-[#f2f2f2] outline-none px-2 ${loading
                                    ? " bg-violet-500 translate-y-1 translate-x-[1px] shadow-[1px_2px_0_0] "
                                    : " bg-violet-700  hover:translate-y-1 hover:translate-x-[1px] hover:shadow-[1px_2px_0_0] group hover:bg-violet-600"
                                    }  shadow-[#f2f2f2] shadow-[3px_4px_0_0] transition-all ease-in-out duration-200 font-bold text-lg  flex items-center justify-center gap-x-2 `}
                                onClick={handleSubmit(sendFeedBack)}>
                                {loading ? (
                                    <PulseLoader color="#f2f2f2" size={10} />
                                ) : (
                                    <>
                                        Send Your Feedback
                                        <FaArrowRight className="group-hover:rotate-180 transition-all ease-in-out duration-300" />
                                    </>
                                )}
                            </button>
                        </form>
                        <Modal open={open} onClose={() => setOpen(false)} senderName={sender} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
