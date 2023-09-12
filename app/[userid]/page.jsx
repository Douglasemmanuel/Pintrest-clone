"use client"
import React, { useEffect  , useState} from 'react'
import UserProfile from '../components/UserProfile'
import app from '../shared/firebaseconfig'
import { getFirestore , doc , getDoc  , setDoc} from 'firebase/firestore'
function Profile({params}) {
    const db=getFirestore(app);
    const [userInfo , setUserInfo] = useState();
    useEffect(()=>{
        console.log(params.userId.replace('%40','@'))
        if(params){
                getUserInfo(params.userId.replace('%40','@'))
                }
     },[params])
        const getUserInfo = async (email)=>{
        const docRef = doc(db,"user",email);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log('Document data:',docSnap.data())
            setUserInfo(docSnap.data())
        }else{
            console.log('No such document')
        }
    }
  return (
    <div>
        {userInfo ?
        <UserProfile  userInfo={userInfo}/>:null}
        
    </div>
  )
}

export default  Profile