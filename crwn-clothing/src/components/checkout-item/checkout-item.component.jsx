/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span
          role="button"
          className="change-checkout-number"
          onClick={removeItemHandler}
        >
          &lang;
        </span>
        {quantity}
        <span
          role="button"
          className="change-checkout-number"
          onClick={addItemHandler}
        >
          &rang;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" role="button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
}

export default CheckoutItem;
