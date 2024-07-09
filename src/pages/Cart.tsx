import '../styles/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
const Cart = () => {
    return ( 
        <div className="cart">
            <div className="left">
              <div className="head">
                <h2>Your Cart</h2>
                <p>4 Items in cart</p>
              </div>
              <div className='cart-items'>
                <div className="item-details">
                  <img src="" alt="" />
                  <div className="item-info">
                    <p>Ring</p>
                    <h3>Alber Diamond Ring</h3>
                  </div>
                </div>
                <div className="figures">
                <input type="num" />
                <p>$25,000</p>
                <p><FontAwesomeIcon icon={faTrashCan} /></p>
                </div>
            </div>
            </div>
            
            <div className="right"></div>
        </div>
     );
}
 
export default Cart;