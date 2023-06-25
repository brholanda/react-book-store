import './Shop.css';
import { useState } from 'react';
import dataBase from "./data/data"
import BookGenreGrid from './components/BookGenreGrid';
import Cart from './components/Cart';

function Shop() {
  const { books } = dataBase;
  const [cartBooks, setCartBooks] = useState([]);
  function handleClick(book) {
    const nextCartBooks = cartBooks.slice();
    const index = nextCartBooks.indexOf(book);
    if (index > -1) {
      nextCartBooks.splice(index, 1);
    } else {
      nextCartBooks.push(book)
    }
    setCartBooks(nextCartBooks);
  }

  return (
    <div className='grid justify-center' role='main'>
      <h1 className='font-bold mx-auto mb-10 text-4xl'>Bookstore</h1>
      <div className='flex center'>
        <div>
          <BookGenreGrid 
                          bookList={books} 
                          cartBooks={cartBooks} 
                          onAddRemove={handleClick}
          ></BookGenreGrid>
        </div>
        <div>
          <Cart 
                books={cartBooks} 
                onRemove={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
