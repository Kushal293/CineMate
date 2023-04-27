import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { ShimmerMovieInfo } from './Shimmer';

const MovieInfo = () => {
    const [ movieData, setMovieData ] = useState({});
    const {movieId} = useParams();
    console.log(movieId);
    useEffect(() => {
        getMovieDetails();
    }, [])

    const getMovieDetails = async () => {
        const data = await fetch("http://www.omdbapi.com/?apikey=1fd57ed5&plot=full&i=" + movieId);
        const json = await data.json();
        console.log(json);
        setMovieData(json);
    }
  return !movieData ? (<ShimmerMovieInfo />) : (
    <div className='bg-black text-white min-h-[calc(100vh-72px)] flex'>
      <div className='flex items-start gap-20 px-16 py-10'>
        <div className='rounded-2xl w-[300px] h-[500px] overflow-hidden'><img className='h-full w-full object-contain' src={ movieData?.Poster } alt="poster" /></div>
        <div className='flex flex-col py-16 gap-5'> 
          <h3 className='font-semibold text-4xl text-[#ccc]'>{ movieData?.Title }</h3>
          <div className='flex gap-2 text-[#ccc] font-semibold'>
            <span className='px-3 py-1 bg-[#222222] rounded-xl'>{ movieData?.Rated }</span>
            &middot; <span className='px-3 py-1 bg-[#222222] rounded-xl'>{ movieData?.Type }</span>
            &middot; <span className='px-3 py-1 bg-[#222222] rounded-xl'>{ movieData?.Runtime }</span>
          </div>
          <div className='flex items-center gap-5 mt-10'>
            <button className='px-7 py-4 bg-[#222222] rounded-xl flex items-center gap-3'> <BookmarkAddOutlinedIcon /> Add to WatchList</button>
            <button className='p-4 bg-[#222222] rounded-full flex items-center justify-center'><FavoriteBorderOutlinedIcon /></button>
          </div>
          <p className='text-[#ccc] mt-5 font-medium'>
            { movieData?.Plot }
          </p>
        </div>
      </div>
      <div className='bg-[#181818] w-[450px] px-8 flex items-center justify-start text-[#ccc] font-semibold'>
        <div className='flex flex-col gap-3'>
          <h3>Country: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Country }</span></h3>
          <h3>Langauge: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Language }</span></h3>
          <h3>Released: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Released }</span></h3>
          <h3>Genre: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Genre }</span></h3>
          <h3>Director: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Director }</span></h3>
          <h3>Actors: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Actors }</span></h3>
          <h3>Writers: <span className='ml-2 font-medium text-[gray] text-sm'>{ movieData?.Writer }</span></h3>
          </div>
        </div>
    </div>
  )
}

export default MovieInfo