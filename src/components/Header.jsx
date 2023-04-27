import { SearchOutlined } from '@mui/icons-material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white h-[4.50rem] px-16 text-lg flex justify-between items-center font-poppins border-b-2 border-[#333333] shadow-xl'>
      <div>CineMate</div>
      <div className='flex items-center bg-[#222222] border border-[#333333] rounded-3xl overflow-hidden text-sm'>
        <input className='bg-transparent px-5 py-2 border-none outline-none w-80' type="text" placeholder='genre...' />
        <span className='px-4 py-2 border-l-2 border-[#333333] hover:bg-[#333333] cursor-pointer'><SearchOutlined /></span>
      </div>
      <div className='bg-[#222222] rounded-full h-12 w-12 flex items-center justify-center hover:bg-[#333333] cursor-pointer'>
        <BookmarkBorderOutlinedIcon />
      </div>
    </div>
  )
}

export default Header