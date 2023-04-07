import React, { useEffect } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import $ from 'jquery';
import circleGreen from './images/circle.png';
import circleDark from './images/dark.png';
import circleOrange from './images/arrowOrange.png';

function Data() {


    // useEffect(() => {
    //     $('.rs-stack-item input').attr('placeholder' , 'الفترة من : الى');
    //     $('.rs-stack-item span').attr('aria-placeholder' , 'الفترة من : الى');
    //     $('.rs-stack-item span').text('الفترة من : الى');
    // })


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
            <section className='p-5'>
                <div className="row gy-3 d-flex align-items-center justify-content-lg-start justify-content-center mb-5">
                    <div className="col-xl-4 col-lg-6 text-center">
                        <DateRangePicker />
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="row gx-1 d-flex justify-content-center align-items-center tabs mx-auto">
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

                <div className="row gx-5 gy-4 d-flex justify-content-md-start justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="count bg-white rounded-4 px-2 py-5 d-flex justify-content-center align-items-center">
                            <div className="img-count">
                                <img src={circleGreen} className='ms-2' style={{width: '75px' , height: '75px'}} alt="circle-green" />
                            </div>
                            <div className="info text-center">
                                <h2 className='mb-2 fw-bold fs-1' style={{fontWeight: '700'}}>10,918</h2>
                                <h6 className='mb-0 text-black-50' style={{fontWeight: '500'}} >عدد المواليد المدخلين</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="count bg-white rounded-4 px-2 py-5 d-flex justify-content-center align-items-center">
                            <div className="img-count">
                                <img src={circleDark} className='ms-2' style={{width: '75px' , height: '75px'}} alt="circle-green" />
                            </div>
                            <div className="info text-center">
                                <h2 className='mb-2 fw-bold fs-1' style={{fontWeight: '700'}}>20</h2>
                                <h6 className='mb-0 text-black-50' style={{fontWeight: '500'}} >عدد الوفيات المدخلين</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="count bg-white rounded-4 px-2 py-5 d-flex justify-content-center align-items-center">
                            <div className="img-count">
                                <img src={circleOrange} className='ms-2' style={{width: '75px' , height: '75px'}} alt="circle-green" />
                            </div>
                            <div className="info text-center">
                                <h2 className='mb-2 fw-bold fs-1' style={{fontWeight: '700'}}>400</h2>
                                <h6 className='mb-0 text-black-50' style={{fontWeight: '500'}} >طلبات تعديل مقدمة</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Data