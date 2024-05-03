// Sample book data (can be fetched from a database or server)
const books = [
    { title: "Book 1", author: "Author 1", genre: "Genre 1", description: "Description 1" },
    { title: "Book 2", author: "Author 2", genre: "Genre 2", description: "Description 2" },
    { title: "Book 3", author: "Author 3", genre: "Genre 3", description: "Description 3" }
];

// Function to display books on the books page
function displayBooks() {
    const booksList = document.getElementById("books");
    booksList.innerHTML = ""; // Clear previous entries

    books.forEach(book => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" onclick="displayBookDetails('${book.title}')">${book.title}</a>`;
        booksList.appendChild(listItem);
    });
}

// Function to display details of a specific book
function displayBookDetails(title) {
    const book = books.find(book => book.title === title);
    if (book) {
        alert(`Title: ${book.title}\nAuthor: ${book.author}\nGenre: ${book.genre}\nDescription: ${book.description}`);
    } else {
        alert("Book not found!");
    }
}

// Call displayBooks() when the page loads
window.onload = displayBooks;
