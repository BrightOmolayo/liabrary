const myLibrary = [];

function Book(name,author,status,year,pages) {
  this.name = name;
  this.auhtor = author;
  this.year = year;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  // do stuff here
  let input = document.getElementsByClassName("input").value
  myLibrary.push(input)
}


//loop through my array
function loop(myLibrary){
  for (let i = 0; 1 < myLibrary.length; 1++) {
    return  myLibrary={i};
    
  }
}
