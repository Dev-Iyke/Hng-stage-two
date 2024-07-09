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
                  <div className="cart-img"><img src="/images/jewel-1.png" alt="jewel" /></div>
                  <div className="item-info">
                    <p>Ring</p>
                    <h3>Alber Diamond Ring</h3>
                  </div>
                </div>
                <div className="figures">
                  <p><input type='number' value={1} /></p>
                  <p>$25,000</p>
                  <p><FontAwesomeIcon icon={faTrashCan} /></p>
                </div>
              </div>
              <div className='cart-items'>
                <div className="item-details">
                  <div className="cart-img"><img src="/images/jewel-2.png" alt="jewel" /></div>
                  <div className="item-info">
                    <p>Ring</p>
                    <h3>Alber Diamond Ring</h3>
                  </div>
                </div>
                <div className="figures">
                  <p><input type='number' value={1} /></p>
                  <p>$25,000</p>
                  <p><FontAwesomeIcon icon={faTrashCan} /></p>
                </div>
              </div>
              <div className='cart-items'>
                <div className="item-details">
                  <div className="cart-img"><img src="/images/jewel-3.png" alt="jewel" /></div>
                  <div className="item-info">
                    <p>Necklace</p>
                    <h3>Parker Mini </h3>
                  </div>
                </div>
                <div className="figures">
                  <p><input type='number' value={1} /></p>
                  <p>$25,000</p>
                  <p><FontAwesomeIcon icon={faTrashCan} /></p>
                </div>
              </div>
              <div className='cart-items'>
                <div className="item-details">
                  <div className="cart-img"><img src="/images/jewel-4.png" alt="jewel" /></div>
                  <div className="item-info">
                    <p>Ring</p>
                    <h3>Crystal Diamond</h3>
                  </div>
                </div>
                <div className="figures">
                  <p><input type='number' value={1} /></p>
                  <p>$25,000</p>
                  <p><FontAwesomeIcon icon={faTrashCan} /></p>
                </div>
              </div>
            </div>
            
            <div className="right">
              <div className="total">
                <div>
                  <p>Subtotal</p>
                  <h4>$100,000</h4>
                </div>
                <div>
                  <p>Tax</p>
                  <h4>$0</h4>
                </div>
                <div>
                  <p>Shipping</p>
                  <h4>$10</h4>
                </div>
                <div>
                  <p>Subtotal</p>
                  <h3>$100,010</h3>
                </div>
              </div>
              <div className="check-btn">
                <button>Checkout</button>
                <button>Continue Shopping</button>
              </div>
              <p>Upon clicking Checkout I confirm, I have read and knowledge all the terms and police</p>
            </div>
        </div>
     );
}
 
export default Cart;