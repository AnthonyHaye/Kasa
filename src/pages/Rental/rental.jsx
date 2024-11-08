import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Background from '../../assets/Background.jpg'
import Footer from '../../components/Footer/Footer'

const Rental = () => {
  return (
    <div className="container">
      <Header />
      <Banner imageUrl={Background} />
      <Footer />
    </div>
  )
}

export default Rental
