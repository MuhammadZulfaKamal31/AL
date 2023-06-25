import React from 'react'
import data from '../static/data.json'

const Hero = ({ hero }) => {
    return (
        <div className=" w-full h-screen md:pb-20 pb-16" ref={hero}>
            <div className=" bg-[#f2f2f2] section-wrapper lg:pt-[110px] pt-20">
                <div className=" w-full h-full flex justify-center items-center border-neutral-950 border-[3px] shadow-[7px_9px_0_0] shadow-neutral-950">
                    <div className=" h-full flex items-center justify-center flex-col lg:w-full w-full lg:py-0 py-16">
                        {data.animation.map((animate) => {
                            return (
                                <div className={`  w-full border-t-2 border-neutral-950  relative`} key={animate.id}>
                                    <h1
                                        className={` md:text-[80px] text-[50px] font-Geologica font-semibold leading-none tracking-tight `}>
                                        {animate.text}
                                    </h1>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero