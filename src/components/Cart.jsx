function Cart({books, onRemove}) {
  function handleClick(book) {
    onRemove(book)
  }
  const cartBooks = books.map((book, index) => {
    return (
      <div key={book.name} className='flex'>
        <li 
            data-testid={`cart-item-${book.genre}-${index}`}
            className='font-semibold'
        >{book.name}</li> 
        <button 
              aria-label={`Remove ${book} from cart`}
              data-testid={`cart-remove-button-${book.genre}-${index}`}
              className='font-semibold text-red-500 mr-4 ml-auto' 
              onClick={() => handleClick(book)}
        >Remove</button>
      </div>
    );
  });
  return(
    <>
      <div 
          data-testid="cart" 
          className='block justify-center border border-black mt-14 mx-6 w-64 h-22/25'
      >
        <h2 className='text-center font-semibold text-2xl'>Cart</h2>
        <ul className='font-semibold mt-5 list-disc pl-8'>
          {cartBooks}
        </ul>
      </div>
    </>
  )
}

export default Cart;