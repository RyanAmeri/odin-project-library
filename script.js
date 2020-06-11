function Book(title, author, numPages, isRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead? "is read": "not read yet"}`;
    }
}

const book1 = new Book('Title1', 'Author1', 295, false);
console.log(book1.info());