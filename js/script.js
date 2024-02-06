const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const addBtn = document.getElementById("add-book-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const main = document.getElementById("main");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const titleCase = (str) => {
  str = str.toLowerCase();
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

let addNewBook = (event) => {
  event.preventDefault();

  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill in all the fields");
    return;
  }

  const titleInput = titleCase(title.value);
  const authorInput = titleCase(author.value);

  const book = new Book(titleInput, authorInput, pages.value);

  clearInputs();
  closeModal();
  appendNewBook(book);
};

let appendNewBook = (book) => {
  const article = document.createElement("article");
  article.classList.add("book");

  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = book.title;

  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = book.author;

  div.appendChild(h2);
  div.appendChild(author);

  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = book.pages;

  article.appendChild(div);
  article.appendChild(pages);

  main.appendChild(article);
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
