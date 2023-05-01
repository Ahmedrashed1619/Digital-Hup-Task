import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { TbSettings } from 'react-icons/tb';

function Navbar() {
    return (
        <>
            <nav>
                <h2 className='text-black'>الرئيسية</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="group-search">
                        <FiSearch />
                        <input type="search" className='form-control' placeholder='إستعلام عن حالة مواليد أو وفاة' />
                    </div>
                    <TbSettings style={{fontWeight: 'bold' , fontSize: '55px' , color: 'var(--secondColor)' , cursor: 'pointer'}} />
                </div>
            </nav>
        </>
    )
}

export default Navbar