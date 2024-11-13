import PropTypes from 'prop-types'
import '../Banner/banner.scss'

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {title && <h1>{title}</h1>}
    </div>
  )
}

Banner.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
}

export default Banner
