import React from 'react';
import logoa from '../assets/logo.png'
import NavButton from '../utils/NavButton';
import { Link } from 'react-router-dom';
const Nav = ({des}) => {
    
    return (
        <div className='border-b border-[#e0e0e0] max-w-[1440px] px-20 py-4 mx-auto'>
            <div className='flex justify-between items-center'>
                <Link to={"/"} className='cursor-pointer'>
                <img src={logoa} alt="logo" />
                </Link>
                <NavButton des={des}></NavButton>
            </div>
        </div>
    );
};

export default Nav;