import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Error from '../Error/error'
import RentalCarousel from '../../components/RentalCarousel/RentalCarousel'

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
      <RentalCarousel imageRental={rental.pictures}/>
      <div className="rentalDetail">
        <h1>{rental.title}</h1>
        <img
          src={rental.cover}
          alt={rental.title}
          className="rentalDetail__image"
        />
        <p>{rental.description}</p>
      </div>
      <Footer />
    </div>
  )
}

export default RentalDetail
