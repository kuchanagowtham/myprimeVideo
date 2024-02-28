// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="thumbnail-btn">
            <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="video-player-container">
            <button
              type="button"
              className="close-btn"
              data-testid="closeButton"
              onClick={() => close()}
            >
              {' '}
              <IoMdClose />
            </button>

            <div className="media">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
