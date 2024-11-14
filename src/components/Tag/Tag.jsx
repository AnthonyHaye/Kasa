import PropTypes from 'prop-types'
import '../Tag/tag.scss'

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <p>{name}</p>
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Tag
