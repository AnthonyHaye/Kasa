import PropTypes from "prop-types";
import './rentalCard.scss'

const RentalCard = ({ title, image, action}) =>{
        return(
                <div
                className="rentalCard"
                style={{background: `url(${image})` }}
                onClick={action}>
                        <h2>{title}</h2>
                </div>

        )
}
       
RentalCard.propTypes={
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
};

export default RentalCard