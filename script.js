const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(title, author));
}

addBookToLibrary("Dumbo", "My Brain")
addBookToLibrary("Mumbo", "My Brain")
addBookToLibrary("Wumbo", "My Brain")
addBookToLibrary("Wumbology", "My Brain")
console.log(myLibrary);