function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
 fetchBooks();
});
  
function fetchBooks(){
return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

/*async function fetchBooks(){
  const resp = await fetch('https://anapioficeandfire.com/api/books');
  const json = await resp.json();
  return renderBooks(json);
}*/