/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { useCallback, useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { cartItems, setCartItems, addItemToCart } = useContext(CartContext);

  const deleteItemFromCart = useCallback(() => {
    setCartItems(cartItems.filter((cartItem0) => cartItem0.id !== cartItem.id));
  }, [cartItem.id, cartItems, setCartItems]);

  useEffect(() => {
    if (quantity === 0) {
      deleteItemFromCart();
    }
  }, [quantity, deleteItemFromCart]);

  const minusOne = () =>
    setCartItems(
      cartItems.map((cartItem0) =>
        cartItem0.id === cartItem.id
          ? { ...cartItem0, quantity: cartItem0.quantity - 1 }
          : cartItem0
      )
    );

  const addItemHandler = () => addItemToCart(cartItem);

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
          onClick={addItemHandler}
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
