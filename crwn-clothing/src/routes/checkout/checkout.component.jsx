import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const purchaseTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Prince</div>
        <div>Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="purchase-total">Total: ${purchaseTotal}</div>
    </div>
  );
}

export default Checkout;
