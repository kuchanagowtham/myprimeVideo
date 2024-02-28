import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movieData} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <div>
      <Slider {...settings}>
        {movieData.map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
