import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#"><FontAwesomeIcon icon={faFacebook} className="links" size='2x'/></a>
        <a href="https://github.com/M-b-a-s"><FontAwesomeIcon icon={faGithub} className="links" size='2x'/></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} className="links" size='2x'/></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} className="links" size='2x'/></a>
      </footer>
        
    </div>
  )
}

export default Footer