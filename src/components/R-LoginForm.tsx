'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import CustomButton from '../components/Button';
import Loading from '../components/Loading';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  let [userName,setUserName] =useState('');
  let [password, setPassword] = useState('');
  let [loading,setloading]=useState(false);
  let router = useRouter();

  let onClick=async(e:Event)=>{
    e.preventDefault();
     if(userName==='' && password===''){
      toast.error('All Fields are required');
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
        userName:userName,
        password:password
      }
      let response = await axios.post('/api/Login',user);
      toast.success('Logged in successfully');
      router.push('/profile');

     }catch(e){
       toast.error('Error while processing request');
     }finally{
       setloading(false);
     }


   
  };
  return (
    <div className='flex align-middle items-center justify-center h-screen flex-col bg-[#0E1C26]'>
      <Toaster />
      <div className='p-12 border-5 rounded border-[#294861] bg-[#2A454B]'>
        <center>
          <h1 className='text-2xl text-white p-5 font-bold'>Login</h1>
        </center>
        {loading?<Loading></Loading>:
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
            onChange={(e)=>{setUserName(e.target.value);}}
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
            onChange={(e)=>{setPassword(e.target.value);}}
          />
        </div>

        <div className='flex justify-center mt-4'>
          <CustomButton
            text='Login'
            className='w-3/4 max-w-xs' 
            onClick={onClick}
          />
        </div>
      </form>
        }

       {loading?<h1 className='font-bold py-3 underline hover:text-[#0E1C26] hover:font-bold'>Logging In...</h1>: 
      <div>
         <Link href='/recruiter/sign-up' className='text-wrap text-white mt-4 block text-center'>
          Not Registered?  <h4 className='underline hover:text-[#0E1C26] hover:font-bold'>Sign Up</h4>
        </Link>
        <br/>
        <Link href='/forgotpass' className='text-wrap text-white mt-4 block text-center'>
          Forgot Password?  <h4 className='underline hover:text-[#0E1C26] hover:font-bold'>Reset Password</h4>
        </Link>
      </div>
        
        }

      </div>
    </div>
  );
}
