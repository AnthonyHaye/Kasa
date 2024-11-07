import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import coteRocheuse from '../../assets/coteRocheuse.jpg'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner imageUrl={coteRocheuse} 
      title="Chez vous, partout et ailleurs"/>
      <Footer />
    </div>
  )
}

export default Home
