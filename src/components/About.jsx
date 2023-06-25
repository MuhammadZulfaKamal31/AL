import React from 'react'
import { SiReactquery, SiQuarkus, SiPostgresql, SiJavascript } from "react-icons/si";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import profile from '../assets/4X6 ZULFA.jpg';
import { FaReact, FaJava } from "react-icons/fa"

const About = ({ about }) => {
    return (
        <div className=' w-full h-full lg:h-screen md:pb-20 pb-16' ref={about}>
            <div className=' section-wrapper bg-neutral-900 flex flex-col gap-y-4 lg:gap-y-10 lg:pt-16'>
                <div className=' flex items-center justify-center gap-x-2 lg:pt-0 pt-8'>
                    <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['About']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
                        <h1 className=" text-violet-600 text-3xl lg:text-5xl">About</h1>
                    </div>
                    <div className=' text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-["Me."] after:bottom-[3px] after:text-3xl lg:after:text-5xl'>
                        <h1 className=' text-violet-600 text-3xl lg:text-5xl'>Me.</h1>
                    </div>
                </div >
                <div className=' w-full h-full flex items-center px-2'>
                    <div className=" w-full h-fit flex items-start lg:flex-row flex-col gap-y-7 lg:gap-y-0 ">


                        <div className=" w-full h-full flex justify-center items-center">
                            <div className=' lg:w-[298px] lg:h-80 h-[220px] w-[220px] p-2 border-2 border-violet-700 shadow-violet-700 shadow-[5px_7px_0_0]' >
                                <img src={profile} alt="profile_image" className=" w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className=" w-full h-full text-[#f2f2f2] flex items-center lg:pr-16 lg:text-justify lg:text-base text-xs border-2 border-[#f2f2f2] shadow-[#f2f2f2] shadow-[5px_7px_0_0] lg:border-none lg:shadow-none px-5 text-center py-4 lg:px-0 lg:py-0 flex-col gap-y-3">
                            <h1>
                                Hello, I'm <span className=" text-violet-700">Muhammad Zulfa Kamal</span> an experienced and dedicated fullstack
                                developer. I specialize in creating exceptional websites with innovative user experiences. With
                                expertise Javascript languages and java, I handle both front-end and back-end development
                                proficiently. I excel at solving complex coding challenges and staying updated with the latest industry
                                trends. My designs are visually captivating and provide intuitive browsing experiences. Collaboration is
                                crucial to my work. Continuous learning and self-improvement drive me to adapt quickly and exceed client
                                expectations.
                            </h1>
                            <div className=" flex flex-col items-start justify-start w-full gap-y-3">
                                <h1 className=" md:text-3xl text-xl font-bold text-[#f2f2f2]">My Skills</h1>
                                <div className="  flex-wrap gap-x-6 gap-y-5 grid grid-cols-3 lg:grid-flow-col-dense lg:grid-rows-2 items-center justify-center">
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <FaReact className=" w-10 h-10" />
                                        <span>ReactJs</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <SiQuarkus className=" w-10 h-10" />
                                        <span>Quarkus</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <SiReactquery className=" w-10 h-10" />
                                        <span>RQuery</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <IoLogoJavascript className=" w-10 h-10" />
                                        <span>Javascript</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <IoLogoNodejs className=" w-10 h-10" />
                                        <span>NodeJs</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <SiPostgresql className=" w-10 h-10" />
                                        <span>Postgres</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <FaJava className=" w-10 h-10" />
                                        <span>Java</span>
                                    </div>
                                    <div className=" w-full h-full shadow-[#f2f2f2] shadow-[2px_3px_0_0] flex flex-col items-center justify-center px-1">
                                        <SiJavascript className=" w-10 h-10 " />
                                        <span>ExpressJS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default About