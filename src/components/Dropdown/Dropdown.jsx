import { useState } from 'react'
import PropTypes from 'prop-types'
import '../Dropdown/dropdown.scss'
import { IoIosArrowUp } from 'react-icons/io'

const Dropdown = ({ title, content, items }) => {
  // état du dropdown
  const [isOpen, setIsopen] = useState(false)

  //Pour déclencher l'ouverture
  const toggleDropdown = () => {
    setIsopen(!isOpen)
  }

  //Gestion des évènements au clavier
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown()
    }
  }

  return (
    <div className="dropdown">
      <button
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className="dropdownBtn"
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
        tabIndex="0"
      >
        {title}
        <span className={`arrow ${isOpen ? 'rotated' : ''}`}>
          <IoIosArrowUp />
        </span>
      </button>
      <div className={`dropdownContent ${isOpen ? 'active' : ''}`}>
        {content && <p>{content}</p>}
        {items && (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="dropdownItem">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
}

export default Dropdown
