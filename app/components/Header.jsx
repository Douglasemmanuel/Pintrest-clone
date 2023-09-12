"use client"
import React, { useEffect } from 'react'
import pintrest from "../assets/pintreslogo.jpg"
import Image from 'next/image'
import {HiSearch , HiBell , HiChat} from "react-icons/hi"
import { useSession, signIn, signOut } from "next-auth/react"
import { getFirestore , doc , getDoc  , setDoc} from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import app from  "../shared/firebaseconfig"
function Header() {
    const { data: session } = useSession()
    const router = useRouter()
    const db = getFirestore(app);
    useEffect(()=>{
            saveUserInfo()
    },[session])
    const saveUserInfo = async ()=>{
        if(session?.user){
            await setDoc(doc(db,"user",session.user.email),{
                userName:session.user.name,
                email :session.user.email,
                userImage:session.user.image,
            });
        }
    }
    console.log('session', session)
  return (
    <div className='flex gap-3 md:gap-2    items-center p-6'>
        {/* <Image src={pintrest} width={20} height={40} /> */}
        <Image  src={pintrest} width={50} height={50}  alt='pintrest-logo'    className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white p-2  px-4 rounded-full'>Home</button>
        <button  className='font-semibold p-2  px-4 rounded-full'>Create</button>
        <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden  md:flex'>
            <HiSearch className='text-[25px] text-gray-500  '/>
            <input type='text' placeholder='search' className='bg-transparent outline-none'/>
           
        </div>
        <HiSearch className='text-[35px] text-gray-500  md:hidden'/>
        <HiBell  className='text-[35px] text-gray-500'/>
            <HiChat  className='text-[35px] text-gray-500'/>
            {session?.user ? 
            <Image src={session?.user?.image} alt="user-image" width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' onClick={()=> router.push('/'+ session.user.image)}/>
            :<button className='font-semibold p-2  px-4 rounded-full' onClick={() => signIn()}>Login</button>}
            {/* <button className='font-semibold p-2  px-4 rounded-full' onClick={() => signIn()}>Login</button> */}
    </div>
    // <div></div>
  )
}

export default Header