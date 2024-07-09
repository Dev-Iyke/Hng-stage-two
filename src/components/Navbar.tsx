import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return ( 
    <header>
      <div className="navbar">
        <button id='menu'><input type="checkbox" /></button>
        <h1>Lustra</h1>
        <nav>
          <p><Link to="/" className='shop-link'>Shop</Link></p>
          <ul>
            <li><Link to="#fav"><FontAwesomeIcon className='fav' icon={faHeart} /></Link></li>
            <li><Link to="/cart"><FontAwesomeIcon className='cart-icon' icon={faCartShopping} /></Link></li>
            <li><Link to="/profile"><img src="/images/Avatar.png" alt="profile" /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
     );
}
 
export default Navbar;