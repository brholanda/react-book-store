
import BookGrid from "./BookGrid";

function BookGenreGrid({bookList, cartBooks, onAddRemove}) {
  const groupedMap = bookList.reduce(
    (entryMap, book) => entryMap.set(book.genre, [...entryMap.get(book.genre) || [], book]),
    new Map()
  );

  let genreList = Array.from(groupedMap)

  genreList = genreList.map(genre => {
    return(
      <BookGrid 
                  key={genre[0]} 
                  genre={genre[0]} 
                  bookList={genre[1]} 
                  cartBooks={cartBooks}
                  onButtonClick={onAddRemove}
      ></BookGrid>
    )
  })

  return(
    <div data-testid="shop-grid">
      {genreList}
    </div>
  );
}

export default BookGenreGrid;