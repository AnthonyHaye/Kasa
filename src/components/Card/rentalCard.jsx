import PropTypes from "prop-types";
import './rentalCard.scss'

const RentalCard = ({ title, image, action}) =>{
        return(
                <button
      className="rentalCard"
      onClick={action}
      aria-label={`Voir les détails pour ${title}`}
    >
      <img src={image} alt={title} className="rentalCard__image" />
      <h2 className="rentalCard__title">{title}</h2>
    </button>

        )
}
       
RentalCard.propTypes={
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
};

export default RentalCard