import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../RentalCarousel/rentalCarousel.scss'

const RentalCarousel = ({ imageRental }) => {
  
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
          <button
            className="carouselBtn prev"
            onClick={goToPrevious}
            aria-label="Afficher l'image précédente"
          >
            <FaChevronLeft />
          </button>
          <button
            className="carouselBtn next"
            onClick={goToNext}
            aria-label="Afficher l'image suivante"
          >
            <FaChevronRight />
          </button>
        </>
      )}
      {imageRental.length > 0 ? (
        <>
          <img
            src={imageRental[currentIndex]}
            alt={`de la location ${currentIndex + 1} sur ${imageRental.length}`}
          />
          <div className="carouselIndex">
            {currentIndex + 1} / {imageRental.length}
          </div>
        </>
      ) : (
        <p className="rentalCarousel__empty">Aucune image disponible</p>
      )}
    </div>
  )
}
RentalCarousel.propTypes = {
  imageRental: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default RentalCarousel
