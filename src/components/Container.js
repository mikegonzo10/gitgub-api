import React from 'react'
import UserContent from './UserContent'
import UserInput from './UserInput'

export default function Container({theme, changeTheme,userRef,setUser, userData, dateSplit, months,icon,name}) {
    // console.log(userData.avatar_url)
  return (
    <div className='container'>
        <UserInput
        name = {name}
        icon = {icon}
        userRef = {userRef}
        setUser = {setUser}
        dateSplit = {dateSplit}
        months = {months}
        changeTheme = {changeTheme}/>
        
        <UserContent 
        image = {userData.avatar_url}
        userData = {userData}
        changeTheme = {changeTheme}
        userRef = {userRef}
        setUser = {setUser}/>
        
    </div>
  )
}
