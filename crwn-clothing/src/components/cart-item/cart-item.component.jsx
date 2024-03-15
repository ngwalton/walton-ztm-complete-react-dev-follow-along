/* eslint-disable react/prop-types */
import './cart-item.styles.scss';

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`images of ${name}`} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>{quantity}</span>
        <span>{`Price: $${price * quantity}`}</span>
      </div>
    </div>
  );
}

export default CartItem;
