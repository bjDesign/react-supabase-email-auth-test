import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {

  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}!</h2>
      <div>
        <p 
          onClick={handleSignout} 
          className='hover:cursor-pointer border inline-block px-4 py-3 mt-4'>
            Sign Out
        </p>
      </div>
    </div>
  )
}
