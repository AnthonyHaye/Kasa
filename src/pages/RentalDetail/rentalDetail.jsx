import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Error from '../Error/error'
import RentalCarousel from '../../components/RentalCarousel/RentalCarousel'
import Tag from '../../components/Tag/Tag'
import StarRating from '../../components/StarRating/StarRating'
import Dropdown from '../../components/Dropdown/Dropdown'
import '../RentalDetail/rentalDetail.scss'

const RentalDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const rental = location.state?.rental

  console.log('Données reçues par RentalDetail:', rental)

  // Si le logement n'existe pas dans `state`, afficher une page d'erreur
  if (!rental || rental.id !== id) {
    return <Error />
  }

  return (
    <div className="container">
      <Header />
      <RentalCarousel imageRental={rental.pictures} />
      <div className="main">

        <div className="rentalInfo">

          <div className="rentalHeader">
            <div className="rentalAppartement">
              <h1>{rental.title}</h1>
              <h2>{rental.location}</h2>
            </div>
            <div className="rentalTags">
              {rental.tags.map((tag, index) => (
                <Tag key={index} name={tag} />
              ))}
            </div>
          </div>   

          <div className="rentalRatingHost">
            {/* parseInt convertit une chaine de caractère ici en décimal */}
            <StarRating rating={parseInt(rental.rating, 10)} />
            <div className="hostInfo">
              <div className="hostName">{rental.host.name}</div>
              <img
                src={rental.host.picture}
                alt={`Hébergeur: ${rental.host.name}`}
                className="hostPicture"
              />
            </div>
          </div>
        </div>
        <div className="rentalDescriptionEquipments">
          <Dropdown title="Description" content={rental.description} items={rental.equipments} />
          <Dropdown title="Equipements" items={rental.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RentalDetail
