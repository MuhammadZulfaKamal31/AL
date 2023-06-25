import React from 'react'
import data from '../static/data.json'
import { BsArrowUpRight } from 'react-icons/bs'

const Portofolio = ({ portofolio }) => {
    return (

        <div className=" w-full lg:h-screen h-full md:pb-20 pb-10" ref={portofolio}>
            <div className="bg-[#f2f2f2] section-wrapper pt-16">
                <div className=" flex flex-col gap-y-10 w-full h-full  overflow-x-auto">
                    <div className=" underline text-xl font-bold relative after:absolute after:text-neutral-900 after:content-['PROJECTS.'] after:bottom-[3px] after:text-3xl lg:after:text-5xl tracking-tight">
                        <h1 className=" text-gray-400 text-3xl lg:text-5xl font-extrabold   ">PROJECTS.</h1>
                    </div>
                    <div className=" w-full h-full items-center md:gap-x-10 md:overscroll-auto grid md:grid-flow-col grid-flow-row max-w-full gap-y-7 px-2 lg:px-0">
                        {data.card.map((e) => {
                            return (
                                <div
                                    className=" lg:w-96 lg:h-96 h-72 rounded-xl bg-[#faf7f7] border-2 border-gray-500 flex flex-col shadow-gray-500 shadow-[7px_8px_1px_0]  overflow-hidden"
                                    key={e.id}>
                                    <div className=" w-full h-[8%] bg-neutral-950 flex justify-end items-center px-3 gap-x-2">
                                        <div className=" w-4 h-4 rounded-full bg-violet-700"></div>
                                        <div className=" w-4 h-4 rounded-full bg-red-600"></div>
                                        <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
                                    </div>
                                    <div className=" h-[50%] lg:h-[60%] w-full overflow-hidden object-cover group cursor-pointer relative ">
                                        <img
                                            src={e.img}
                                            alt=""
                                            className=" w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300 object-top"
                                        />
                                        <div className=" w-full h-full  absolute from-black to-transparent"></div>
                                    </div>
                                    <div className=" h-[30%] w-full px-2 pt-2 flex flex-col gap-y-3">
                                        <h1 className=" md:text-4xl text-2xl drop-shadow text-neutral-900 font-bold font-Geologica">
                                            {e.desc}
                                        </h1>
                                        <div className=" flex justify-start items-center w-full gap-x-3">
                                            <a
                                                href={e.link}
                                                target="blank"
                                                className=" cursor-pointer px-2 py-[3px] bg-[#faf7f7] shadow-neutral-900 shadow-[3px_4px_0_0] border border-neutral-950 font-semibold flex items-center justify-center gap-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0] transition-all ease-in-out duration-200 translate-x-[1px]">
                                                Live site
                                                <BsArrowUpRight className=" w-4 h-4" />
                                            </a>
                                            <a
                                                href={e.git}
                                                target="blank"
                                                className=" cursor-pointer px-2 py-[3px] bg-[#faf7f7] shadow-neutral-900 shadow-[3px_4px_0_0] border border-neutral-950 font-semibold flex items-center justify-center gap-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0] transition-all ease-in-out duration-200 translate-x-[1px]">
                                                Git Pages
                                                <BsArrowUpRight className=" w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio