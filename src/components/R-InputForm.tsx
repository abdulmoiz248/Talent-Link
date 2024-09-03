'use client'
import Link from 'next/link';
import React, {  useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import Loading from '@/components/Loading';
import CustomButton from '@/components/Button';
import { rSignUpSchema, usernameValidation } from '@/schema/aSignUpScehma';
import { useDebounceCallback } from 'usehooks-ts'

export default function InputForm() {


  let [userName,setuserName]=useState('');
  const debounced = useDebounceCallback(setuserName, 500);
    let [email,setemail]=useState('');
  let [password,setpassword]=useState('');
  let [company,setCompany]=useState('');
  let [errorMessage,setErrorMessage]=useState('');
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
     if(company===''){
      toast.error('Please enter Company Name');
       return;
     }


     try{
         setloading(true);
         let user={
           userName,
           email,
           password,
           company
         }
        let validSchema=rSignUpSchema.safeParse(user);
        if(!validSchema.success){
          toast.error('Invalid Form Data');
          return;
        }
        let response= await axios.post("/api/recruiter/sign-up",user)
        toast.success('Registration Successful');
        router.push('./api/recruiter/login');
     }catch(error:any){
        toast.error(error.message);
       
     }finally{
      setloading(false);
     }
     
      
  }

  const hasErrorShown = useRef(false);

  useEffect(()=>{
       if(userName=='')
        return;
       const validateUserName=async()=>{
         if(userName.length<3){
        
           if(!hasErrorShown.current) { 
             toast.error('User Name should be at least 3 characters long');
             hasErrorShown.current=true;
            
            }
            return;
         }
         
         
        hasErrorShown.current=false;
        const verifyZod=usernameValidation.safeParse(userName);
        if(!verifyZod.success){
          if(!hasErrorShown.current){
             toast.error('User Name is not valid');
             hasErrorShown.current=true;
             return;
  
          } 
          return;
        }  

        try {
        //  C:\Users\Abdul Moiz\OneDrive\Desktop\Code files\Final\talentlink\src\app\api\recruiter\validate-user-name.ts
        let response = await axios.get(`/api/recruiter/validate-user-name?userName=${userName}`)
          if(!response.data.success){
             toast.error(response.data.message);
          }
          toast.success(response.data.message);
          return;
        } catch (error:any) {
           console.log(error);
        }

         }



       validateUserName();
  },[userName])

  return (
  
      <div className='flex align-middle items-center justify-center h-screen flex-col mt-20'>
       <div className='p-12 border-5 rounded border-[#294861] bg-[#2A454B] '>
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
            onChange={(e)=>{debounced(e.target.value)}}
          />
        </div>

        {errorMessage && 
              <div>
                <div className='text-red-500 text-sm'>{errorMessage}</div>
              </div>

          }
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
          <label htmlFor='company' className='text-white mb-1'>
          Company
          </label>
          <input
            id='company'
            type='text'
            placeholder='company'
            required
            className='p-2 border-2 border-black rounded w-full outline-none'
            onChange={(e)=>{setCompany(e.target.value)}}
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
       {loading?<center> <h1 className=' font-bold py-3  underline hover:text-[#0E1C26] hover:font-bold '>Signing in </h1></center>:<Link href='./login' className='text-wrap text-white mt-4 block text-center'>
          Already Registered?  <h4 className='underline hover:text-[#0E1C26] hover:font-bold'>Log In</h4>
        </Link>} 
      </div>
    </div>
    
   
   );
}
