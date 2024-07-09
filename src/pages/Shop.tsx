import Jewelry from "../components/Jewelry";

const jewelries = [
  {id: 1, name: 'Alber Diamond Ring', price: '500,000', rating: 4.5, imageUrl: '/images/jewel-1'},
  {id: 2, name: 'Emerald Doubles cut ', price: '400,000', rating: 4.2, imageUrl: '/images/jewel-1'},
  {id: 3, name: 'Alber Diamond Ring', price: '320,000', rating: 4.1, imageUrl: '/images/jewel-1'},
  {id: 4, name: 'BT Diamond Earring', price: '550,000', rating: 4.8, imageUrl: '/images/jewel-1'},
  {id: 5, name: 'Alber Diamond Ring', price: '280,000', rating: 3.9, imageUrl: '/images/jewel-1'},
  {id: 6, name: 'Margan & Paige Charm', price: '400,000', rating: 4.3, imageUrl: "'/images/jewel-1'"},
]

const Shop = () => {
    return ( 
        <div className="shop">
            <div className="filter">
              <div className="category">
                <h2>Products By Category</h2>
                <ul>
                  <li className="all">All</li>
                  <li>Rings</li>
                  <li>Earrings</li>
                  <li>Chains</li>
                  <li>Necklace</li>
                  <li>Bracelets</li>
                </ul>
              </div>
              <div className="price">
                <h2>Price</h2>
                <input type="range" name="price" id="price" min={10} max={500}/>
              </div>
            </div>
            <div className="jewelries">
              <Jewelry jewelries={jewelries} />
            </div>
        </div>
     );
}
 
export default Shop;