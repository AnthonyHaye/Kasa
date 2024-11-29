import PropTypes from 'prop-types'
import '../Banner/banner.scss'

const Banner = ({ imageUrl, title }) => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="banner"
    >
      {title && <h1>{title}</h1>}
    </section>
  )
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Banner
