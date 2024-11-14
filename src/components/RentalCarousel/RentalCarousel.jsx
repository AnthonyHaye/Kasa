/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../RentalCarousel/rentalCarousel.scss'

const RentalCarousel = ({ imageRental }) => {
  console.log('Images reçues par RentalCarousel:', imageRental)
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageRental.length - 1 : prevIndex - 1,
    )
  }
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageRental.length - 1 ? 0 : prevIndex + 1,
    )
  }
  return (
    <div className="rentalCarousel">
      {imageRental.length > 1 && (
        <>
          <button className="carouselBtn prev" onClick={goToPrevious}>
            <FaChevronLeft />
          </button>
          <button className="carouselBtn next" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </>
      )}
      {imageRental.length > 0 ? (
        <>
          <img
            src={imageRental[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
          <div className="carouselIndex">
            {currentIndex + 1} / {imageRental.length}
          </div>
        </>
      ) : (
        <div>Aucune image disponible</div>
      )}
    </div>
  )
}
RentalCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default RentalCarousel
