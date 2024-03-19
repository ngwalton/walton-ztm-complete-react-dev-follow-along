import { useContext, useCallback } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const totalItems = useCallback(
    () => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
    [cartItems]
  );

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <CartIconContainer onClick={toggleIsCartOpen} role="button">
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{totalItems()}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
