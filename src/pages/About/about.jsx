import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import montagne from '../../assets/montagne.jpg'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div className="container">
      <Header />
      <Banner imageUrl={montagne} title="Chez vous, partout et ailleurs" />
      <Footer />
    </div>
  )
}

export default About
