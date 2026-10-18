// task 1

const library = {
    name:"frontend library",
    books: [],

    addBook(title) {
        if(!title || !title.trim()) {
            return "Invalid book title";
        }
        this.books.push(title);
        return this.books.length;
    },
    removeLastBook() {
        if (this.books.length === 0) {
            return "Library is empty";
        }
        return this.books.pop();
    },
    getLastBook() {
        if (this.books.length === 0) {
            return "Library is empty";
        }
        return this.books[this.books.length - 1];
    },
    getSummary() {
        const count = this.books.length;
        const bookWord = count === 1 ? "book" : "books";
        return `${this.name} has ${count} ${bookWord}.`;
    },
};
console.log(library.addBook("JavaScript Basics"));
console.log(library.addBook("Clean Code"));

console.log(library.getLastBook());
console.log(library.removeLastBook());
console.log(library.getSummary());





