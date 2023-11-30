import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import '../Footer/footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-contact">
      <ul>
        <li>
          <a href="https://www.facebook.com/j">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lashess.bel/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <p>&copy; 2023 Juan González. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer