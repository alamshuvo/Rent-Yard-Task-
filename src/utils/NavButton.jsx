import React from 'react';

const NavButton = ({des}) => {
    return (
        <div>
            <button className='border border-[#e0e0e0] px-[24px] py-3 rounded-[12px] font-fustat'>{des}</button>
        </div>
    );
};

export default NavButton;