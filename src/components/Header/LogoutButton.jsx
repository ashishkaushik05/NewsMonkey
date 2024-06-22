import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).then(() => {
          navigate("/")
        })
    }
    
  return (
    <Button
    className='inline-bock px-6 py-2 duration-200 hover:bg-red-200 text-ms rounded-full font-bold text-red-50 tracking-[0.12px] text-center'
    onClick={logoutHandler}
    color="red_50"
    variant="outline"
    >Logout</Button>
  )
}

export default LogoutBtn