import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './redux/slices/cartSlice';

const App = () => {
  // const products = useSelector((state)=>state.cart.product);
  const {cart, products, totalPrice} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  //Handling changes
  const handleChange = (e) => {
    const name = e.target.options[e.target.selectedIndex].text;
    const price = parseInt(e.target.value);
    const itemObj = { name, price };

    dispatch(addToCart(itemObj));
  }

  //Remove cart item from cart
  const deleteCartItem = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      Redux TOOLKIT
      <h1>Products</h1>
      <select onChange={(e) => handleChange(e)}>
        {products.map((product, index)=>{
          return(
            <option value={product.price} key={index} >
              {product.name} : {product.price}
            </option>
          )
        })}
      </select>
      <hr />
      <h2>Cart</h2>
      {cart.map((cart)=>{
        return(
          <div style={{display: 'flex', gap: 15, marginBottom: 10}}>
            <li>{cart.name}</li>
            <button onClick={deleteCartItem}>delete</button>
          </div>
        )
      })}
      <hr />
      <h2>Total</h2>
      <p>Rs: {totalPrice}</p>
    </div>
  )
}

export default App