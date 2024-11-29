import Logo from './Logo'
import NavLinks from './NavLinks'
import styles from '../Header/header.module.scss'
import kasaLogo from '../../assets/kasa_logo.svg'

const Header = () => {
  return (
    <header className={styles.header} aria-label="En-tête du site Kasa">
      <Logo url={kasaLogo} alt="Logo Kasa" />
      <nav aria-label="Navigation principale">
        <NavLinks />
      </nav>
    </header>
  )
}

export default Header
