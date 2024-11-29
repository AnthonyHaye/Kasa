import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import montagne from '../../assets/montagne.jpg'
import Footer from '../../components/Footer/Footer'
import Dropdown from '../../components/Dropdown/Dropdown'

const aboutDropdown = [
  {
    title: 'Fiabilité',
    paragraph:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    paragraph:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    paragraph:
      'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nous locataires, soit empreinte de respect et de bienveillance.',
  },
  {
    title: 'Sécurité',
    paragraph:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const About = () => {
  return (
    <div className="container aboutPage">
      <Header />
      <Banner imageUrl={montagne} title="Chez vous, partout et ailleurs" />
      <div className="main">
        <section className="aboutDropdown">
          {aboutDropdown.map((item, index) => (
            <Dropdown key={index} title={item.title}>
              {' '}
              {item.paragraph}
            </Dropdown>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About
