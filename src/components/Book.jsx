function Book({book, index, onButtonClick, action}) {
  function handleClick(book) {
    onButtonClick(book)
  }
  return(
    <>
      <div className='inline-block border border-black w-32 h-32 px-2.5 my-3.5 mx-6'>
        <h2 className='table-cell align-middle text-center font-semibold text-2xl w-32 h-20'>{book.name}</h2>
        <button 
              aria-label={`${action} ${book.name}`}
              data-testid={`action-button-${book.genre}-${index}`}
              className='font-semibold border border-black mx-2.5 w-4/5 h-fit' 
              onClick={() => handleClick(book)}
        >{action}</button>
      </div>
    </>
  )
}

export default Book;