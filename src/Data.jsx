import React, { useEffect } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import $ from 'jquery';
import circleGreen from './images/green.png';
import circleDark from './images/gray.png';
import circleOrange from './images/orange.png';
import { FaBars } from 'react-icons/fa';
import Female from './Components/Female';
import Male from './Components/Male';


function Data({ isOpen , handelClick , isWidth }) {

    // handel active tab when click

    useEffect(() => {
        let timeOut = setTimeout(() => {
            $('.tabs .col-4').click(function(){
                $(this).toggleClass('tab-active');
                $(this).siblings().removeClass('tab-active');
            })
        }, 100);

        return(() => {
            clearTimeout(timeOut)
        })
    }, [])


    return (
        <>
            <section className='p-5 position-relative'>

                {/* handel display sidebar icon & handel open or close */}
                {isWidth ? 
                    <div className="spec-icon" style={{right: isOpen ? '280px' : '0px'}} onClick={handelClick}>
                        <FaBars />
                    </div>
                    :
                    ''
                }
                
                <div className="row gy-3 d-flex align-items-center justify-content-lg-start justify-content-center mb-5">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 text-lg-end text-md-center text-sm-end text-center">
                        <div className="date-range-spec">
                            <DateRangePicker
                                placeholder='الفترة : 1/7/2022 ← 7/7/2022'
                                // block
                                defaultChecked='7/7/2022 -'
                                showOneCalendar
                                placement='bottomEnd'
                                preventOverflow
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6">
                        <div className="tabs row gx-1 d-flex justify-content-center align-items-center ms-lg-auto me-lg-0 ms-auto me-auto">
                            <div className="col-4 tab-active">
                                <h6 className='all'>الكل</h6>
                            </div>
                            <div className="col-4">
                                <h6 className='unAuth'>غير موثق</h6>
                            </div>
                            <div className="col-4">
                                <h6 className='auth'>موثق</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-5 gy-4 d-flex justify-content-md-start justify-content-center align-items-center mb-5">
                    <div className="col-xl-4 col-md-6 col-sm-9">
                        <div className="count bg-white rounded-5 p-4 d-flex justify-content-center align-items-center">
                            <div className="img-count">
                                <img loading="lazy" src={circleGreen} className='ms-2' style={{width: '75px' , height: '75px'}} alt="circle-green" />
                            </div>
                            <div className="info text-center">
                                <h2 className='mb-2 text-black fw-bold'>10,918</h2>
                                <h6 className='mb-0 text-muted' style={{fontWeight: '600'}} >عدد المواليد المدخلين</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-9">
                        <div className="count bg-white rounded-5 p-4 d-flex justify-content-center align-items-center">
                            <div className="img-count">
                                <img loading="lazy" src={circleDark} className='ms-2' style={{width: '60px' , height: '60px'}} alt="circle-green" />
                            </div>
                            <div className="info text-center">
                                <h2 className='mb-2 text-black fw-bold'>20</h2>
                                <h6 className='mb-0 text-muted' style={{fontWeight: '600'}} >عدد الوفيات المدخلين</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-9">
                        <div className="count bg-white rounded-5 p-4 d-flex justify-content-center align-items-center">
                            <div className="img-count">
                                <img loading="lazy" src={circleOrange} className='ms-2' style={{width: '60px' , height: '60px'}} alt="circle-green" />
                            </div>
                            <div className="info text-center">
                                <h2 className='mb-2 text-black fw-bold'>400</h2>
                                <h6 className='mb-0 text-muted' style={{fontWeight: '600'}} >طلبات تعديل مقدمة</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 d-flex justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-6 spec-before">
                        <div className="birth bg-white rounded-5 px-2 py-4 text-center ms-lg-auto me-lg-0 mx-auto">
                            <h4 className='mb-5 text-black'>النسبة بين الذكور والإناث للمواليد</h4>
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <div className="female">
                                        <h5 className='mb-3' style={{fontWeight: '500' , color: 'var(--secondColor)'}}>اناث</h5>
                                        <Female color={'#EB4F9C'} />
                                        <h4 className='text-black mb-0' style={{fontWeight: '700'}}>88%</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="male">
                                        <h5 className='mb-3' style={{fontWeight: '500' , color: 'var(--secondColor)'}}>ذكور</h5>
                                        <Male color={'#3498ff'} />
                                        <h4 className='text-black mb-0' style={{fontWeight: '700'}}>12%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="death bg-white rounded-5 px-2 py-4 text-center me-lg-auto ms-lg-0 mx-auto">
                            <h4 className='mb-5 text-black'>النسبة بين الذكور والإناث للوفيـات</h4>
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <div className="female">
                                        <h5 className='mb-3' style={{fontWeight: '500' , color: 'var(--secondColor)'}}>اناث</h5>
                                        <Female color={'var(--secondColor)'} />
                                        <h4 className='text-black mb-0' style={{fontWeight: '700'}}>88%</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="male">
                                        <h5 className='mb-3' style={{fontWeight: '500' , color: 'var(--secondColor)'}}>ذكور</h5>
                                        <Male color={'var(--secondColor)'} />
                                        <h4 className='text-black mb-0' style={{fontWeight: '700'}}>12%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Data