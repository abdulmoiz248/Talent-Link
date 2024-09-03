'use client'
import React from 'react'
import CustomButton from './Button'

export default function Switch({type}:{
    type:string
}) {
    const onClick = () => {
        console.log('Sign Up Button Clicked')
    }
  return (
    <div>
       {type==='recuriter'?(
           <div className='flex align-middle items-center justify-center h-screen flex-col bg-[#0E1C26]'>
       <div className='p-12 border-5 rounded border-[#294861] bg-[#2A454B] max-w-[450px]'>
       <center>
          <h1 className='text-2xl text-white p-5 font-bold'>Hello Recuriter</h1>
          <p className="text-base text-white leading-relaxed mb-3">
    At Talent Link, we help recruiters find top talent quickly and easily. Our platform connects you with skilled candidates across industries, streamlining your hiring process. Sign up to post jobs, manage applications, and discover the best talent today!
</p>


         <CustomButton
            text={`${type==='recuriter'?"Looking for jobs? Click here":"Want to Hire Employees? Click here"}`}

            className='w-3/4 max-w-xs'
            onClick={onClick} 

          />
        </center>
        
       
        </div>
       </div>
       ):(
        <div className='flex align-middle items-center justify-center h-screen flex-col bg-[#0E1C26]'>
        <div className='p-12 border-5 rounded border-[#294861] bg-[#2A454B]'>
                Hi
         </div>
        </div>
       )}
    </div>
  )
}
