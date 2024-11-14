import PropTypes from 'prop-types'
import { FaStar, FaRegStar } from 'react-icons/fa'
import '../StarRating/starRating.scss'

const StarRating = ({ rating, maxRating = 5 }) => {
  //Détermine le nombre d'étoiles pleines par rapport à la note rating
  const fullStars = Math.floor(rating)
  const emptyStars = maxRating - fullStars

  return (
    <div className="rating">
      {/* Affiche les étoiles pleines
                        Création du tableau d'étoiles pleines selon ce qui est récupéré de rental.rating */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {/* affichage des étoiles vides */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  )
}
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
}

export default StarRating
