import PropTypes from 'prop-types'
import styles from '../Header/logo.module.scss'

const Logo = ({ url }) => {
  return <img className={styles.logo} src={url} alt="Kasa Logo" />
}
Logo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Logo
