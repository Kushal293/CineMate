import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({Poster, Title, imdbID}) => {
  return (
    
      <div className='flex flex-col items-start justify-between h-[420px] bg-[#222222] rounded-2xl overflow-hidden border border-[#333333]'>
          <div className='h-[300px] w-[250px] bg-[#222222]'><img className='h-full w-full object-contain' src={ Poster } alt="thumbnail" /></div>
        <div className='relative flex items-start justify-start h-[120px] px-1 border-t-2 border-t-[#333333]'>
          <h3 className='bg-[#222222] border-t-0 p-4 w-[250px]'>{ Title }</h3>
        <Link to={ `watch/${ imdbID }` }>
          <button className='absolute bottom-3 right-3 px-4 py-2 bg-[#333333] hover:bg-[#ccc] hover:text-black rounded-xl transition-all'>
            Click Here
        </button>
        </Link>
          </div>
    </div>
    
  )
}

export default MovieCard