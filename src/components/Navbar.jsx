import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user, logout} = UserAuth( )
    const [nav, setNav] = useState(false)
    const navigate = useNavigate
    const handleNav = () => {
        setNav(!nav)
    }

      const handleSignOut = async () => {
    try{
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold '>
        <Link to='/'>
            <h1 className='text-2xl'> Cryptomaniac </h1> 
        </Link>

        <div className='hidden md:block'> 
            <ThemeToggle/>
        </div>
        
        {user?.email ? (
            <div className='hidden md:block'>
                <Link to='/account' className='p-4'>Account </Link>
                <button onClick={handleSignOut}> Sign out</button>
                 </div>
        ) : (
        <div className='hidden md:block'> 
            <Link to='/signin'  className='p-4 hover:text-accent'>Sign In</Link>
            <Link to='/signup' className='bg-button text-btnText px-5 py-2 rounded-2xl shadow-lg hover:shadow-2xl' >Sign Up</Link>
        </div>)}

         {/* menu icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'> 
           {nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={23}/>}
        </div>

        {/* menu menu */}


        <div className={nav ?  'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
    }> 
            <ul onClick={handleNav}  className='w-full p-4 '> 
                <li className='border-b py-6'> <Link to='/'> Home </Link> </li>
                 <li className='border-b py-6'> <Link to='/account'> Account </Link> </li>
                 <li className='border-b py-6'>  <ThemeToggle/> </li> 
            </ul>

            <div  className='flex flex-col w-full p-4'> 
                {user?.email ? (
            <div>
                <Link to='/account' className='p-4'>Account </Link>
                <button onClick={handleSignOut}> Sign out</button>
                 </div>
        ) : (
        <div className='md:hidden '> 
            <Link to='/signin'  className='p-4 hover:text-accent'>Sign In</Link>
            <Link to='/signup' className='bg-button text-btnText px-5 py-2 rounded-2xl shadow-lg hover:shadow-2xl' >Sign Up</Link>
        </div>)}
            </div>
        </div>
        
    </div>
  )
}

export default Navbar