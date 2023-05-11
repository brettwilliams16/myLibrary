const mainSection = document.querySelector(".main-section");
const addButton = document.querySelector(".add-button");
let titleInput = document.querySelector("input[name=title");
let authorInput = document.querySelector("input[name=author");
let pagesInput = document.querySelector("input[name=pages");

let myBooks = new Array();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

addButton.addEventListener("click", () => {
  if (
    titleInput.value == "" ||
    authorInput.value == "" ||
    pagesInput.value == ""
  ) {
    return;
  }
  const card = document.createElement("div");
  card.classList.add("book");
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = `Title: ${titleInput.value}`;
  let bookTitle = `${titleInput.value}`;
  console.log(bookTitle);
  titleInput.value = "";
  card.appendChild(title);

  const author = document.createElement("div");
  author.classList.add("author");
  author.innerText = `Author: ${authorInput.value}`;
  let bookAuthor = `${authorInput.value}`;
  authorInput.value = "";
  card.appendChild(author);

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.innerText = `# of pages: ${pagesInput.value}`;
  let bookPages = `${pagesInput.value}`;
  pagesInput.value = "";
  card.appendChild(pages);

  const bookRead = document.createElement("div");
  const bookReadInput = document.querySelector("input[name=bookRead]:checked");
  bookRead.classList.add("bookRead");
  bookRead.innerText = `Read: ${bookReadInput.value}`;
  let hasBookBeenRead = `${bookReadInput.value}`;
  card.appendChild(bookRead);

  const read = document.createElement("button");
  const remove = document.createElement("button");
  read.classList.add("read");
  read.textContent = "Read";
  remove.classList.add("delete");
  remove.innerHTML = `&#128465`;

  remove.addEventListener("click", () => {
    let removeParent = remove.parentElement;
    removeParent.parentElement.removeChild(removeParent);
  });

  read.addEventListener("click", () => {
    if (bookRead.innerText == "Read: Yes") {
      bookRead.innerText = "Read: No";
    } else {
      bookRead.innerText = "Read: Yes";
    }
  });

  let book = new Book(bookTitle, bookAuthor, bookPages, hasBookBeenRead);
  myBooks.push(book);

  card.appendChild(read);
  card.appendChild(remove);

  mainSection.appendChild(card);
});
