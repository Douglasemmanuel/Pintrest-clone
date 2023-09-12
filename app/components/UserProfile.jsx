import React from 'react'

function UserProfile({userInfo}) {
  return (
    <div>
        <Image src={userInfo.userImage}
            alt='userImage'
            width={80}
            height={80}
        />
    </div>
  )
}

export default UserProfile