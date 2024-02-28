// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const getMoviesByCategory = category =>
    moviesList.filter(movie => movie.categoryId === category)

  return (
    <div className="main-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider movieData={getMoviesByCategory('ACTION')} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider movieData={getMoviesByCategory('COMEDY')} />
      </div>
    </div>
  )
}
export default PrimeVideo
