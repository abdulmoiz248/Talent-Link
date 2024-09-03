'use client'
import Link from 'next/link';
import React, {  useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';


import axios from 'axios';
import Loading from '@/components/Loading';
import CustomButton from '@/components/Button';

export default function InputForm() {


  let [userName,setuserName]=useState('');
  let [email,setemail]=useState('');
  let [password,setpassword]=useState('');
  let [loading,setloading]=useState(false);
  let router=useRouter();
 
  const  onClick=async(e:Event)=>{
     e.preventDefault();
     if(userName==='' && email==='' && password===''){
      toast.error('All Fields are required');
       return;
     }
     if( email==='' ){
      toast.error('Please enter a valid email');
       return;
     }
     if( password===''){
      toast.error('Please enter a password');
       return;
     }
     if(userName===''){
      toast.error('Please enter User Name');
       return;
     }


     try{
         setloading(true);
         let user={
           userName,
           email,
           password
         }
        let response= await axios.post("/api/recruiter/sign-up",user)
        toast.success('Registration Successful');
        router.push('./Login');
     }catch(error:any){
        toast.error(error.message);
       
     }finally{
      setloading(false);
     }
     
      
  }

  return (
  
      <div className='flex align-middle items-center justify-center h-screen flex-col bg-[#0E1C26]'>
       <div className='p-12 border-5 rounded border-[#294861] bg-[#2A454B]'>
        <center>
          <h1 className='text-2xl text-white p-5 font-bold'>Sign Up</h1>
          <Toaster></Toaster>
        </center>
      {loading? <Loading></Loading>:
        <form className='flex flex-col'>
        <div className='flex flex-col m-3'>
          <label htmlFor='userName' className='text-white mb-1'>
            User Name
          </label>
          <input
            id='userName'
            type='text'
            placeholder='Username'
            required
            className='p-2 border-2 border-black rounded w-full outline-none'
            onChange={(e)=>{setuserName(e.target.value)}}
          />
        </div>

        <div className='flex flex-col m-3'>
          <label htmlFor='email' className='text-white mb-1'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email'
            required
            className='p-2 border-2 border-black rounded w-full outline-none'
            onChange={(e)=>{setemail(e.target.value)}}
          />
        </div>

        <div className='flex flex-col m-3'>
          <label htmlFor='password' className='text-white mb-1'>
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            required
            className='p-2 border-2 border-black rounded w-full outline-none'
            onChange={(e)=>{setpassword(e.target.value)}}
          />
        </div>

        <div className='flex justify-center mt-4'>
          <CustomButton
            text='Sign Up'
            className='w-3/4 max-w-xs'
            onClick={onClick} 

          />
        </div>
      </form>
}
       {loading?<center> <h1 className=' font-bold py-3  underline hover:text-[#0E1C26] hover:font-bold '>Signing in </h1></center>:<Link href='/Login' className='text-wrap text-white mt-4 block text-center'>
          Already Registered?  <h4 className='underline hover:text-[#0E1C26] hover:font-bold'>Log In</h4>
        </Link>} 
      </div>
    </div>
    
   
   );
}
