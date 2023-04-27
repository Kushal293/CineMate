import React from 'react'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Shimmer = () => {
  return (
      <>
          {
              Array(10).fill("").map((_val, index) => (
                  <div className='h-[420px] w-[260px] bg-[#222222] rounded-2xl border border-[#333333] animate-pulse' key={index}></div>
              ))
          }
    </>
  )
}

export const ShimmerMovieInfo = () => {
    return (
        <div className='bg-black text-white min-h-[calc(100vh-72px)] flex justify-between'>
      <div className='flex items-start gap-20 px-16 py-10'>
        <div className='rounded-2xl w-[300px] h-[500px] overflow-hidden bg-[#222222] animate-pulse'></div>
                <div className='flex flex-col py-16 gap-5'> 
                    <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='flex gap-2 text-[#ccc] font-semibold'>
            <div className='h-7 w-[70px] bg-[#333333] rounded-xl animate-pulse'></div>
            &middot; <div className='h-7 w-[60px] bg-[#333333] rounded-xl animate-pulse'></div>
            &middot; <div className='h-7 w-[50px] bg-[#333333] rounded-xl animate-pulse'></div>
          </div>
          <div className='flex items-center gap-5 mt-10'>
            <button className='px-7 py-4 bg-[#222222] rounded-xl flex items-center gap-3'> <BookmarkAddOutlinedIcon /> Add to WatchList</button>
            <button className='p-4 bg-[#222222] rounded-full flex items-center justify-center'><FavoriteBorderOutlinedIcon /></button>
          </div>
          <p className='text-[#ccc] mt-5 font-medium'>
            {/* { movieData?.Plot } */}
          </p>
        </div>
      </div>
      <div className='bg-[#181818] w-[450px] px-8 flex items-center justify-start text-[#ccc] font-semibold'>
        <div className='flex flex-col gap-3'>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          <div className='h-7 w-[350px] bg-[#333333] rounded-xl animate-pulse'></div>
          </div>
        </div>
    </div>
    )
}

export default Shimmer