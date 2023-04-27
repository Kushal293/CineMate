import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';

const MoviesContainer = () => {

    const [ movies, setMovies ] = useState([]);
    const [ pageNum , setPageNum] = useState(2);

    useEffect(() => {
        getMovies();
     }, [pageNum]);

    const getMovies = async () => {
        const data = await fetch("http://www.omdbapi.com/?apikey=1fd57ed5&s=comedy&page=" + pageNum);

        const json = await data.json();
      console.log(json);
      setMovies(json?.Search);
    }

  return (
    <div className='bg-black min-h-full text-white flex items-center justify-center flex-col p-10 gap-10'>
      <div className='grid grid-cols-4 gap-16'>
        {
          movies.length === 0 ? (
            <Shimmer />
          ) : 
            movies.map((movie, index) => (
            <MovieCard {...movie} key={index} />
          ))
        }
      </div>
      <div className='flex items-center gap-5'>
        {
        pageNum <= 1 ? <button className='bg-[#222222] px-4 py-2 border' disabled>prev</button>
          :
          <button className='bg-[#222222] px-4 py-2 border' onClick={ () => setPageNum(pageNum-1) }>prev</button>
          }
          <button className='bg-[#222222] px-4 py-2 border' onClick={() => setPageNum(pageNum+1)}>next</button>
      </div>
    </div>
  )
}

export default MoviesContainer