import Book from "./Book"

function BookGrid({genre, bookList, cartBooks, onButtonClick}) {
  const books = bookList.map((book, index) => {
    let action = 'Add'
    if (cartBooks.includes(book)) {
      action = 'Remove'
    }
    return(
      <Book 
              key={book.name} 
              index={index}
              book={book} 
              onButtonClick={onButtonClick} 
              action={action}
      ></Book>
    )
  })

  return(
    <div className='block max-w-530-px'>
      <h2 className='font-semibold mt-2 ml-6 text-left text-2xl'>{genre}</h2>
      {books}
    </div>
  );
}

export default BookGrid;