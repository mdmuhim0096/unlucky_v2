import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className={`${styles.paddingX} fixed w-full flex items-center py-5 top-0 z-20 bg-primary`} id='navbar'>
                <div className={`w-full flex justify-between items-center max-w-7xl mx-auto`}>
                    <Link to={"/"} className={`flex items-center gap-2 text-white`} onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>

                        <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                        <p className='text-white text-[18px] font-bold cursur-pointer'>Muhim | <span>CS</span></p>
                    </Link>
                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {
                            navLinks.map(link => {
                                return (<li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursur-pointer`} onClick={() =>
                                    setActive(link.title)}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>)
                            })
                        }
                    </ul>

                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursur-pointer' onClick={() => setToggle(!toggle)} />

                        <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                            <ul className='list-none sm:flex flex justify-end items-start flex-col gap-4'>
                                {
                                    navLinks.map(link => {
                                        return (<li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursur-pointer`} onClick={() =>{
                                            setToggle(!toggle);
                                            setActive(link.title)}}>
                                            <a href={`#${link.id}`}>{link.title}</a>
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;