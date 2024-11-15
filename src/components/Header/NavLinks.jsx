import { NavLink } from 'react-router-dom'
import styles from '../Header/navLinks.module.scss'

const NavLinks = () => {
  return (
    <nav className={styles.navlinks}>
      <ul>
        <li>
          <NavLink
            to="/Kasa"
            className={({ isActive }) => (isActive ? styles.active : '')}
            end
          >
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            à propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks
