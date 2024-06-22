import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import {useSelector} from 'react-redux'
import LogoutBtn from './Header/LogoutButton'

function TopStag() {
    const authStatus = useSelector((state) => state.auth.status)
  return (
    <header>
<div className='flex flex-row mx-5 space-y-6 justify-between items-center'>
  <h3 className='font-bold text-sm font-mono ml-2 mt-2 !text-red-50'>Stay updated with NewsLog!</h3>
  <h3 className='font-bold text-sm font-mono ml-2 mt-2 !text-red-50'>Fearless, Independant, Reader-Funded!</h3>
    {authStatus ?
      (<Link to="/login">
        <LogoutBtn />
          </Link>) : 
       (<div className='flex flex-row gap-3'>
        <Link to="/login">
        <Button 
          className='rounded-full text-white-A700 font-bold hover:variant-outline' 
          size="lg" 
          shape="round" 
          color="red_50">Login</Button>
          </Link>

          <Link to="/signup">
          <Button 
          className='rounded-full text-white-A700 font-bold hover:variant-outline' 
          size="lg" 
          shape="round" 
          color="red_50">Signup</Button>
          </Link>

        </div>)}
</div>
<div className="my-2 border-y-4 border-black w-full"></div>

{/* Logo */}
<div className='mr-4 flex flex-row items-start mt-8'>
    <Link to='/'>
      <img src='logo.png' className='w-[30%] mx-auto mb-0' alt="logo"/>
    </Link>
</div>

</header>
  )
}

export default TopStag
