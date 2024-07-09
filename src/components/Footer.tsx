import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
      <footer id="footer">
      <div className="footer">
        <div className="footer-info">
          <h2>Lustra</h2>
          <p>Discover elegance and timeless beauty with Lustra’s exquisite women’s jewelry collection.</p>
        </div>
        <div className="footer-links">
          <table>
            <thead>
              <th>PAGE</th>
              <th>RESOURCE</th>
            </thead>
            <tr>
              <td><a href="#">About Us</a></td>
              <td><a href="#">FAQ</a></td>            </tr>
            <tr>
              <td><a href="#">Categories</a></td>
              <td><a href="#">Reviews</a></td>            </tr>
            <tr>
              <td><a href="#">Shop</a></td>
              <td><a href="#">Blogs</a></td>            </tr>
            <tr>
              <td><a href="#">Contact Us</a></td>
              <td><a href="#">Return Policy</a></td>
            </tr>
          </table>
        </div>
        <div className="subscribe">
          <form action="mailto:obasiikechukwu761@gmail.com" method="post">
            <label htmlFor="email">Subscribe</label>
            <input type="text"placeholder="First name" />
            <input type="email"placeholder="Email address" />
            <button>Submit</button>
          </form>
        </div>
    </div>
    <div className="copyright">
      <p>&copy; Copyright 2024, All Rights Reserved by Lustra</p>
      <h3>Lustra</h3>
      <div className="ft-links">
        <a href="#"><FontAwesomeIcon className='ft-icon' icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon className='ft-icon' icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon className='ft-icon' icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon className='ft-icon' icon={faGithub} /></a>
      </div>
    </div>
    </footer>
     );
}
 
export default Footer;