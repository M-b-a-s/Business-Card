import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import { FaEnvelope} from "react-icons/fa"


const Buttons = () => {
  return (
    <div className="btn">
      <button className="btns btn-1"><FaEnvelope className="btn-icon"/> Email</button>
      <button className="btns btn-2"><a href="https://www.linkedin.com/in/ikwukala-mbas-ifechimenim-967020209/">
      <FontAwesomeIcon icon={faLinkedin}LinkedIn className="btn-icon"/>LinkedIn</a></button>
    </div>
  )
}

export default Buttons