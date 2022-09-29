import React from 'react'
import HTML from '../asset/html.png';
import CSS from '../asset/css.png';
import JavaScript from '../asset/javascript.png';
import ReactImg from '../asset/react.png';
import Node from '../asset/node.png';
import FireBase from '../asset/firebase.png';
import AWS from '../asset/aws.png';
import GitHub from '../asset/github.png';
import Tailwind from '../asset/tailwind.png';
import Mongo from '../asset/mongo.png';

const Skill = () => {
    return (
        <div className='bg-[#0a192f] w-full h-screen text-gray-300' name='skills'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Skills</p>
                    <p className='py-4'>These are technoligies I worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={HTML} alt="" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={CSS} alt="" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={GitHub} alt="" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Node} alt="" />
                        <p className='my-4'>NODE JS</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Skill