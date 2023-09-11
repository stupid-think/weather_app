import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const Slider = () => {
    return (
        <>
            <Swiper
                className=''
                loop={true}
                // autoplay={true}
                breakpoints={ {
                    0: {
                      slidesPerView: 3,
                      
                    },
              
                    740: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 6,
                    },
                  }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'>
                    <div className='flex justify-center items-center'>
                        <div className=' ss'><p className='my-3'>6 AM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'>
                    <div className='flex justify-center items-center'>
                        <div className=' '><p className='my-3'>9 AM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='sss p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'>
                    <div className='flex justify-center items-center'>
                        <div className=' '><p className='my-3'>12 AM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'>
                    <div className='flex justify-center items-center'>
                        <div className=' '><p className='my-3'>3 PM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'>
                    <div className='flex justify-center items-center'>
                        <div className=' '><p className='my-3'>6 PM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                    </div>
                </SwiperSlide >
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'> <div className='flex justify-center items-center'>
                    <div className=' '><p className='my-3'>9 PM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                </div>
                </SwiperSlide >
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl'> <div className='flex justify-center items-center'>
                    <div className=' '><p className='my-3'>12 PM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                </div>
                </SwiperSlide>
                <SwiperSlide className=' p-4 bg-black mt-3 mx-4 h-3/4 rounded-xl mb-5'> <div className='flex justify-center items-center'>
                    <div className=' '><p className='my-3'>3 AM</p><ThunderstormIcon className='mb-3' /> <p>4 &deg;c</p></div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;





