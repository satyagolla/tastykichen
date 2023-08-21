import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'
import {Anchor} from './styledComponents'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="title-card">
        <img
          src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20275.png?updatedAt=1692162574648"
          alt="website-footer-logo"
          className="website-footer-logo"
        />
        <h1 className="footer-heading">Tasty Kitchen</h1>
      </div>
      <p className="footer-desc">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="logo-container">
        <Anchor href="https://in.pinterest.com/" target="_blank">
          <FaPinterestSquare
            className="logo-icon"
            testid="pinterest-social-icon"
          />
        </Anchor>
        <Anchor href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="logo-icon" testid="instagram-social-icon" />
        </Anchor>
        <Anchor href="https://twitter.com/" target="_blank">
          <FaTwitter className="logo-icon" testid="twitter-social-icon" />
        </Anchor>
        <Anchor href="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare
            className="logo-icon"
            testid="facebook-social-icon"
          />
        </Anchor>
      </div>
    </div>
  )
}
