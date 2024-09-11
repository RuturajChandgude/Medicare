import React from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
        640:{
            slidesPerView:1,
            spaceBetween:0,
        },
        768:{
            slidesPerView:2,
            spaceBetween:20,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30,
        },
      }}>
         <SwiperSlide >
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            Rajesh Patel
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div> 
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]"> 
                    "All doctors are very good "
                </p>
            </div>
         </SwiperSlide>

         <SwiperSlide >
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            Rahul Shah
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div> 
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]"> 
                    "They provide the best quality of medical services and treatment"
                </p>
            </div>
         </SwiperSlide>

         <SwiperSlide >
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            John Tate
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div> 
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]"> 
                    "I have taken medical services form them.They reat them so well and they are providing the best medical services"
                </p>
            </div>
         </SwiperSlide>

         <SwiperSlide >
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            Mohsin Khan
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div> 
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]"> 
                    "Dr.Chandgude helped me with my knee pain and suggested a treatment plan that has worked wonders. The clinic is modern and well-equipped. I had to reschedule once, and the office was very accommodating."
                </p>
            </div>
         </SwiperSlide>

         <SwiperSlide >
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            Pratik Sheth
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div> 
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]"> 
                    " The office is clean, and the staff is friendly. Dr.Samir explains every procedure thoroughly, and I always feel at ease during my visits."
                </p>
            </div>
         </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
