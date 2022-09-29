import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const HomePage = () => {


    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Vasin Suksuchit</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I'm a Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]' > ตรงนี้ยังนึกไม่ออกเดี๋ยวค่อยมา make</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Project
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 hover:train' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HomePage