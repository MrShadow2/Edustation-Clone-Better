import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {postSecondaryData} from '../assets/data'
function Slider() {
  return (
    <div className='s-container mar'>
        <Swiper
        modules={[Pagination,Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
            slidesPerView={2}
            spaceBetween={40}
            slidesPerGroup={1}
            loop={true}
        >
            {postSecondaryData.map((slide,i)=>(
                <SwiperSlide>
                   <div className='s-card' key={i}>
                          <div className='s-img'>
                          <img className='ss-img' src={slide.img} alt={slide.alt} />
                            </div>
                            <div className='s-title'>
                                <h3>{slide.title}</h3>
                            </div>
                            <div className='s-desc'>
                                <p>{slide.desc}</p>
                            </div>
                    </div>

                        
                   
                </SwiperSlide>
            ))

            }
            
        </Swiper>
    </div>
  )
}

export default Slider