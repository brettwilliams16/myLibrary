const mainSection = document.querySelector(".main-section");
const addButton = document.querySelector(".add-button");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

addButton.addEventListener('click', () =>{
    const card = document.createElement("div");
    card.classList.add("test");
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Title_Test";
    card.appendChild(title);
    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = "Author_Test";
    card.appendChild(author);
    const pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = "Pages_Test"
    card.appendChild(pages);

    const read = document.createElement("button");
    const remove = document.createElement("button");
    read.classList.add("read");
    read.textContent = "Read";
    remove.classList.add("delete");
    remove.innerHTML = `&#128465`;

    remove.addEventListener('click', ()=>{
        let removeParent = remove.parentElement;
        removeParent.parentElement.removeChild(removeParent);
    })



    card.appendChild(read);
    card.appendChild(remove);

    mainSection.appendChild(card);
});

