import Logo from '../Header/Logo'
import Kasa_footerlogo from '../../assets/kasa_logo_footer.svg'
import '../Footer/footer.scss'

const Footer = () => {
  return (
    <footer aria-label="Pied de page du site Kasa" className="footer">
      <Logo url={Kasa_footerlogo} alt="Logo Kasa pour le footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
