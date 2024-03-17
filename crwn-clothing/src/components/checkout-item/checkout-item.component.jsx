/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteItemHandler = () => deleteItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <div>
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
      <div>{price}</div>
      <div
        className="delete-checkout-item"
        role="button"
        onClick={deleteItemHandler}
      >
        &times;
      </div>
    </div>
  );
}

export default CheckoutItem;
