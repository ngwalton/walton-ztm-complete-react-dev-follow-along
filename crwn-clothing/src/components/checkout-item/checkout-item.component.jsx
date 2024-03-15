/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { cartItems, setCartItems } = useContext(CartContext);

  const updateItem = (increment) => {
    return () =>
      setCartItems(
        cartItems.map((cartItem0) =>
          cartItem0.id === cartItem.id
            ? { ...cartItem0, quantity: cartItem0.quantity + increment }
            : cartItem0
        )
      );
  };

  const pluseOne = updateItem(1);
  const minusOne = updateItem(-1);

  const deleteItemFromCart = () => {
    setCartItems(cartItems.filter((cartItem0) => cartItem0.id !== cartItem.id));
  };

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <div>
        <span
          role="button"
          className="change-checkout-number"
          onClick={minusOne}
        >
          &lang;
        </span>
        {quantity}
        <span
          role="button"
          className="change-checkout-number"
          onClick={pluseOne}
        >
          &rang;
        </span>
      </div>
      <div>{price}</div>
      <div
        className="delete-checkout-item"
        role="button"
        onClick={deleteItemFromCart}
      >
        &times;
      </div>
    </div>
  );
}

export default CheckoutItem;
