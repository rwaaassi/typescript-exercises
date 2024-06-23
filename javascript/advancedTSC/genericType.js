"use strict";
// 3
class LibraryImpl {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
    listAvailableItems() {
        return this.items.filter(item => item.isAvailable);
    }
}
// 4
// Book instance
let bookLibrary = new LibraryImpl();
const newBook = {
    id: 1,
    title: "The Idiot",
    isAvailable: true,
    author: "Elif Batuman",
    pages: 370
};
const book2 = {
    id: 2,
    title: "Bable",
    isAvailable: false,
    author: "R.F Kuang",
    pages: 600,
};
bookLibrary.addItem(newBook);
bookLibrary.addItem(book2);
const retrievedBook = bookLibrary.getItemById(1);
const availableBooks = bookLibrary.listAvailableItems();
console.log(retrievedBook);
console.log(availableBooks);
// DVD instance
let DVDLibrary = new LibraryImpl();
const newDVD = {
    id: 1,
    title: "drive my car",
    isAvailable: false,
    director: "",
    duration: 188
};
const DVD2 = {
    id: 2,
    title: "past lives",
    isAvailable: true,
    director: "",
    duration: 93
};
DVDLibrary.addItem(newDVD);
DVDLibrary.addItem(DVD2);
const retrievedDVD = DVDLibrary.getItemById(1);
const availableDVDs = DVDLibrary.listAvailableItems();
console.log(retrievedDVD);
console.log(availableDVDs);
