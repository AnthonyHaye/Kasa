import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import '../Error/error.scss'

const Error = () => {
  return (
    
      <div className="container">
        <Header />
        <div className="main">
          <div className="error_content">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
        </div>
      </div>
      
    
  )
}

export default Error
