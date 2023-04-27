import React from 'react'
import Header from '../components/Header';
import MoviesContainer from '../components/MoviesContainer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
      <div className='h-screen'>
          <Header />
          <Outlet />
    </div>
  )
}

export default Home