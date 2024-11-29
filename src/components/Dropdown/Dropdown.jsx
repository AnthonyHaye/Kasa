import { useState } from 'react'
import PropTypes from 'prop-types'
import '../Dropdown/dropdown.scss'
import { IoIosArrowUp } from 'react-icons/io'

const Dropdown = ({ title, children }) => {
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
      {/* affiche les enfants seulement si le menu est ouvert */}
      <div
        id="dropdown-content"
        className={`dropdownContent ${isOpen ? 'active' : ''}`}
        role="region"
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Dropdown
