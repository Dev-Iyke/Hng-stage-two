import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Jewelry = (props:any) => {
  const jewelries =  props.jewelries
    return ( 
      <div className="jewelry-list">
        {jewelries.map((Jewelry: any) => {
/*           const jewelStyle = {
            backgroundImage: `url(${Jewelry.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px', 
          }; */
          return (
            <div className="jewelry" key={Jewelry.id}>
              <div className="jewel">
                <FontAwesomeIcon className='jewel-cart' icon={faCartShopping} />
              </div>
              <div className="jewel-details">
                <h4>{Jewelry.name}</h4>
                <p>
                  <span className="price">${Jewelry.price}</span>
                  <span className="rating">{Jewelry.rating}<FontAwesomeIcon className='rating-icon' icon={faStar} /></span>
                </p>
              </div>
            </div>
          );
        })}     
      </div>
     );
     
}


 
export default Jewelry;