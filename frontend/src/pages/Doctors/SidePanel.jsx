import React,{useContext} from 'react'
import convertTime from '../../utils/convertTime'
import { BASE_URL } from '../../config'
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext'
const SidePanel = ({doctorId,ticketPrice,timeSlots}) => {

  const { token } = useContext(AuthContext);

  const bookingHandler=async()=>{
    try {
      console.log('Token:', token);
      const res=await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
        method:'POST',
        headers:{
          Authorization:`Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const data=await res.json()

      if(!res.ok){
        throw new Error(data.message+ 'Please try again')
      }

      if(data.session.url){
        window.location.href=data.session.url
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">Rs {ticketPrice}</span>

      </div>
        <div className='m-[30px]'>
            <p className='text_para mt-0 font-semibold text-headingColor'>
                Available time slots:
            </p>

            <ul className='mt-3'>
              {timeSlots?.map((item,index)=>(
                 <li key={index} className='flex items-center justify-between mb-2'>
                 <p className='text-[15px] leading-6 text-textColor font-semibold'>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p> 
                 <p className='text-[15px] leading-6 text-textColor font-semibold'>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p> 
             </li>
              ))}
                
               
            </ul>
        </div>
        <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SidePanel
