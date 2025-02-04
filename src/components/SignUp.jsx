import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPasswordl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { session, signUpNewUser } = UserAuth();
    const navigate = useNavigate();

    console.log(session);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await signUpNewUser(email, password);

            if(result.success) {
                navigate('/dashboard')
            }
        } catch (err) {
            setError("an error occurred");
        } finally {
            setLoading(false);
        }
    }

  return (
    <div>
        <form onSubmit={handleSignUp} className='max-w-md m-auto pt-24'>
            <h2 className='font-bold pb-2'>
                Sign Up Today!
            </h2>
            <p>
                Already have an account? <Link to="/signin">Sign In here</Link> 
            </p>
            <div className='flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-3 mt-2 bg-black' type="email" />
                <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-3 mt-2 bg-black' type="password" />
                <button type='submit' disabled={loading} className='mt-4 w-full'>Sign Up</button>
                { error & <p className='text-red-600 text-center pt-4'>{error}</p>}
            </div>
        </form>
    </div>
  )
}
