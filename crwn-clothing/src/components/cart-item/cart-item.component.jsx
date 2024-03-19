/* eslint-disable react/prop-types */
import {
  CartItemContainer,
  ItemImg,
  ItemDetails,
  Name,
  Price,
} from './cart-item.styles';

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <ItemImg src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
