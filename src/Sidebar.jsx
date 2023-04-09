import React, { useEffect } from 'react';
import da5lya from './images/OIP.jfif';
import health from './images/h.jpg';
import { IoIosArrowUp } from 'react-icons/io';
import $ from 'jquery';

function Sidebar({ isOpen , isWidth }) {

    // for handel switch between accordions

    useEffect(() => {
        let timeOut = setTimeout(() => {
            $('.accordion .accordion-item .accordion-header').click(function() {
                $(this).toggleClass('acc');
                $(this).parent().siblings().children('.accordion-header').removeClass('acc');
                $(this).siblings().slideDown(300);
                $(this).parent().siblings().children('.accordion-body').slideUp(300);
            })
        }, 100);

        return(() => {
            clearTimeout(timeOut)
        })
    }, [])



    return (
        <>
            <aside className='p-4' 
                style={{right: 
                        isOpen && !isWidth ? '0px' : 
                        isOpen && isWidth ? '0px' : 
                        !isOpen && isWidth ? '-280px' : 
                        !isOpen && !isWidth ? '0px' : '-280px'
                    }}>
                <div className="logos mb-4 d-flex justify-content-between align-items-center gap-4">
                    <img loading="lazy" src={health} className='first-img' style={{width: '90px' , height: '75px'}} alt="health" />
                    <img loading="lazy" src={da5lya} style={{width: '90px' , height: '75px'}} alt="da5lya" />
                </div>
                <div className="menu">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header acc d-flex justify-content-between align-items-center" >
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    المواليـد
                                </button>
                                <IoIosArrowUp />
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body py-1">
                                    <h6>تسجيل واقعة ميلاد</h6>
                                    <h6>تسجيل ساقط قيد ميلاد</h6>
                                    <h6>تسجيل ميلاد (معثور عليه)</h6>
                                    <h6>تسجيل ميلاد (ساقط قيد معثور عليه)</h6>
                                    <h6>استعلام - تعديل واقعة الميلاد</h6>
                                    <h6>طلب تعديل واقعة ميلاد</h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" >
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    الوفيــات
                                </button>
                                <IoIosArrowUp />
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body py-1">
                                    <h6>تسجيل واقعة وفاة</h6>
                                    <h6>استعلام - تعديل واقعة الوفاة</h6>
                                    <h6>طلب تعديل واقعة وفاة</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar