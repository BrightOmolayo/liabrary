const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
//dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});

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