import { render, screen, fireEvent } from '@testing-library/react';
import Shop from './Shop';

describe('Shop', () => {
  beforeEach(() => {
    render(<Shop />);
  });

  it('renders Shop Grid and Cart', () => {
    const shop = screen.getByTestId('shop-grid');
    const cart = screen.getByTestId('cart');
    expect(shop).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });
  
  it('adds and removes item from cart using shop button', async() => {
    const actionButton = screen.getByTestId('action-button-Fantasy-0');
    expect(actionButton).toBeInTheDocument();
    fireEvent.click(actionButton);
    expect(screen.getByTestId('cart-item-Fantasy-0')).toBeInTheDocument();
    fireEvent.click(actionButton);
    expect(screen.queryByTestId('cart-item-Fantasy-0')).toBeNull();
  });
  
  it('adds item to cart using shop button and removes it using cart button', async() => {
    const actionButton = screen.getByTestId('action-button-Fantasy-0');
    expect(actionButton).toBeInTheDocument();
    fireEvent.click(actionButton);
    expect(screen.getByTestId('cart-item-Fantasy-0')).toBeInTheDocument();
    const cartRemoveButton = screen.getByTestId('cart-remove-button-Fantasy-0');
    expect(cartRemoveButton).toBeInTheDocument();
    fireEvent.click(cartRemoveButton);
    expect(screen.queryByTestId('cart-item-Fantasy-0')).toBeNull();
  });
})
