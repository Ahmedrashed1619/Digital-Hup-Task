import React from 'react';
import { FiSearch } from 'react-icons/fi';
import gear from './images/gear.png';
// import setting from './images/setting.svg';

function Navbar() {
    return (
        <>
            <nav>
                <h2>الرئيسية</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="group-search">
                        <FiSearch />
                        <input type="search" className='form-control py-3' placeholder='إستعلام عن حالة مواليد أو وفاة' />
                    </div>
                    <img src={gear} style={{width: '80px' , height: '50px'}} alt="gear" />
                </div>
            </nav>
        </>
    )
}

export default Navbar