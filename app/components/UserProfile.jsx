import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/navigation"
import {signout,useSession} from "next-auth/react"
function UserProfile({userInfo}) {
  console.log(userInfo)
  const router = useRouter()
  const onLogoutClick=()=>{
    signout()
    router.push('/')
  }
  const {data:session} = useSession()


  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage}
            alt='userImage'
            width={80}
            height={80}
        />
        <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>
        <button className='bg-gray-200 font-semibold mt-5  p-2 px-3 round-full'>Share</button>
        {session?.user?.email=== userInfo.email ?
        <button className='bg-gray-200 font-semibold mt-5  p-2 px-3 round-full'>Logout</button>:null  }
    </div>
  )
}

export default UserProfile