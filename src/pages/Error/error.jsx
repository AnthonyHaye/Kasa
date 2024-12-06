import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import '../Error/error.scss'

const Error = ({ code = 404, message = "Oups! La page que vous demandez n'existe pas." }) => {
  return (
    <div className="container errorPage">
      <Header />
      <div className="main">
        <section className="error_content">
          <h1>{code}</h1>
          <h2>{message}</h2>
          <Link to="/Kasa" aria-label="Retourner à l'accueil">
            Retourner sur la page d’accueil{' '}
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Error
