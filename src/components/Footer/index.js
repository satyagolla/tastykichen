import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

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
        <a
          className="anchor-link"
          href="https://in.pinterest.com/"
          target="_blank"
          rel="noreferrer"
          testid="pintrest-social-icon"
        >
          <FaPinterestSquare className="logo-icon" />
        </a>
        <a
          className="anchor-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          testid="instagram-social-icon"
        >
          <FaInstagram className="logo-icon" />
        </a>
        <a
          className="anchor-link"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          testid="twitter-social-icon"
        >
          <FaTwitter className="logo-icon" />
        </a>
        <a
          className="anchor-link"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          testid="facebook-social-icon"
        >
          <FaFacebookSquare className="logo-icon" />
        </a>
      </div>
    </div>
  )
}
