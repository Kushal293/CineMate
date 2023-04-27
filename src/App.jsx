import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesContainer from './components/MoviesContainer';
import MovieInfo from './components/MovieInfo';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <MoviesContainer />
      },
      {
        path: "watch/:movieId",
        element: <MovieInfo />
      },
    ],
  },
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
