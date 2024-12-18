import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import coteRocheuse from '../../assets/coteRocheuse.jpg'
import Footer from '../../components/Footer/Footer'
import RentalCard from '../../components/Card/rentalCard'

const Home = () => {
  const [logements, setLogements] = useState([])
  const Navigate = useNavigate()

  //Fonction pour charger les données depuis le fichier logement.json

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/data/logements.json`,
        )
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données')
        }
        const data = await response.json()
        setLogements(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleClick = (rental) => {
    Navigate(`/rental/${rental.id}`, { state: { rental } })
  }

  return (
    <div className="container homePage">
      <Header />
      <Banner imageUrl={coteRocheuse} title="Chez vous, partout et ailleurs" />
      <div className="main">
        <section
          className="rentalCardContainer"
          aria-label="Liste des logements"
        >
          {logements.length > 0 ? (
            logements.map((rental) => (
              <RentalCard
                key={rental.id}
                title={rental.title}
                image={rental.cover}
                action={() => handleClick(rental)}
              />
            ))
          ) : (
            <p>Chargement des données...</p>
          )}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
