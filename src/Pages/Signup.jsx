import React from 'react'
import {AiOutlineMail, AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
          <h1 className='text-2xl font-bold'> Sign Up </h1>
          <form> 
            <div className='py-4'> 
              <label> Email </label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'> 
                <input className='w-full p-2 bg-primary border-input rounded-2xl' type='email'/>
                <AiOutlineMail className='absolute right-2 top-3'/>
              </div>
            </div>
            <div className='my-4'> 
              <label> Password </label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'> 
                <input className='w-full p-2 bg-primary border-input rounded-2xl' type='password' />
                <AiFillLock className='absolute right-2 top-3'/>
              </div>
            </div>
            <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl '> Sign Up </button>
          </form>
          <p> Already have an account? <Link to='/signin' className='text-green-700 font-bold'> Sign In </Link>  </p>
        </div> 
    </div>
    </div>
  )
}

export default Signup