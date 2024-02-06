const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const addBtn = document.getElementById("add-book-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let addNewBook = (event) => {
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill in all the fields");
    return;
  }
  const book = new Book(title.value, author.value, pages.value);
  library.push(book);
  clearInputs();
  closeModal();
  console.log(library);
};

let clearInputs = () => {
  title.value = "";
  author.value = "";
  pages.value = "";
};

let closeModal = () => {
  modal.style.display = "none";
};

let openModal = () => {
  modal.style.display = "flex";
};

addBtn.addEventListener("click", addNewBook);

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);
