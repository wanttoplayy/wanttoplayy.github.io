import React, { useState } from 'react'
// import Logo from '../asset/Logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            {/* <div>
           
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
            </div> */}

            {/* menu */}
            {/* ตัวเลือนใช้ react-scoll */}
            <ul className='hidden md:flex'>
                <li>  <Link to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li><Link to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li><Link to="experince" smooth={true} duration={500}>
                    Experince
                </Link></li>
                <li><Link to="project" smooth={true} duration={500}>
                    Project
                </Link></li>
                <li><Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-4 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="experince" smooth={true} duration={500}>
                    Experince
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="project" smooth={true} duration={500}>
                    Project
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* social Icon */}
            <div className='hidden :flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.facebook.com/best.wasin/">
                            Linkedin<FaLinkedin size={30} />
                        </a>

                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/wanttoplayy">
                            Github<FaGithub size={30} />
                        </a>

                    </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e63946]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="mailto: bestwasin1617@gmail.com">
                            Email<HiOutlineMail size={30} />
                        </a>

                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6d6875]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Resume<BsFillPersonLinesFill size={30} />
                        </a>

                    </li> */}
                </ul>
            </div>
        </div >
    )
}

export default NavBar