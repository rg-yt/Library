const table = document.querySelector(".table");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const addButton = document.querySelector(".add");
const form = document.querySelector("form");
const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(title, author));
}

function showBooks() {
    
    for (var book of myLibrary) {
        var row = document.createElement("tr");
        var title = document.createElement("td");
        var author = document.createElement("td");
        author.textContent = book.author;
        title.textContent = book.title;
        table.appendChild(row)
        row.appendChild(title);
        row.appendChild(author);
    }
}

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    if (title.value && author.value) {
        addBookToLibrary(title.value, author.value);
        while (table.childNodes.length !== 2) {
            table.removeChild(table.lastChild);
        } 
    }
    while (table.childNodes.length !== 2) {
        table.removeChild(table.lastChild);
    } 
    showBooks();
    form.reset();
});


addBookToLibrary("Dumbo", "My Brain")
addBookToLibrary("Mumbo", "Boogie")
addBookToLibrary("Wumbo", "Gorgo")
addBookToLibrary("Wumbology", "Patrick")
showBooks()