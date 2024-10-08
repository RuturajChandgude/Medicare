import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = ({name,about,qualifications,experiences}) => {
  return (
    <div>
    <div>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex-items-center gap-2 mt-24'>About  
      <span className='text-irisBlueColor font-bold text-[24px] ml-2 leading-9 '>
        {name}
      </span> 
      </h3>
      <p className='text_para'>
      {/* I am Dr. Ruturaj Chandgude, a highly skilled surgeon specializing in cardiovascular, general surgery with over 10 years of experience. My approach focuses on providing personalized, compassionate care using the latest surgical techniques for optimal outcomes. I am committed to thorough consultations, tailored treatment plans, and continuous post-operative support to ensure the best results for my patients. Let's work together towards your health and well-being. */}
      {about}
      </p>
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>

            {qualifications?.map((item,index)=>
               <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
               <div>
                   <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                   {formateDate(item.startingDate)} -  {formateDate(item.endingDate)}
                   </span> 
                   <p className='text-[16px] leading-6 font-medium text-textColor'>
                       {item.degree}
                   </p>
               </div>
               <p className='text-[14px] leading-5 font-medium text-textColor'>{item.university}</p>
           </li>)} 
         
            {/* <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate("07-01-2010")} - {formateDate("07-10-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,New York</p>
            </li> */} 
        </ul>
    </div>
    
    <div className='mt-12'>
    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

    <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>

        {experiences?.map((item,index)=> <li key={index} className='p-4 rounded bg-[#fff9ea]'>
            
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate(item.startingDate)} - {formateDate(item.endingDate)}</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>{item.position}</p>
        
        <p className='text-[14px] leading-5 font-medium text-textColor'>{item.hospital}</p> 
    </li>)}
       

        {/* <li className='p-4 rounded bg-[#fff9ea]'>
            
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("07-04-2010")} - {formateDate("08-13-2014")}</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
            
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,New York</p> 
        </li> */}
    </ul>
    </div> 
    </div>
  )
}

export default DoctorAbout
