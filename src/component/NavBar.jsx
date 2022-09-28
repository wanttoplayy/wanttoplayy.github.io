import React, { useState } from 'react'
import Logo from '../asset/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                {/* เดี๋ยวบรรทัดนี้ต้องมาเปลี่ยนLogo */}
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
            </div>

            {/* menu */}

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-4 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Project</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social Icon */}
            <div className='hidden'></div>
        </div >
    )
}

export default NavBar