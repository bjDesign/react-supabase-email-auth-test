import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPasswordl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { session, signUpNewUser } = UserAuth();
    console.log(session);
  return (
    <div>
        <form className='max-w-md m-auto pt-24'>
            <h2 className='font-bold pb-2'>
                Sign Up Today!
            </h2>
            <p>
                Already have an account? <Link to="/signin">Sign In here</Link> 
            </p>
            <div className='flex flex-col py-4'>
                <input placeholder='Email' className='p-3 mt-2 bg-black' type="email" />
                <input placeholder='Password' className='p-3 mt-2 bg-black' type="password" />
                <button type='submit' disabled={loading} className='mt-4 w-full'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}
