import Logo from '../Header/Logo'
import Kasa_footerlogo from '../../assets/kasa_logo_footer.svg'
import '../Footer/footer.scss'

const Footer = () => {
  return (
    <footer>
      <Logo url={Kasa_footerlogo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
