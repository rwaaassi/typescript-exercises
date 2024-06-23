// 1
interface Item {
    id: number,
    title: string,
    isAvailable: boolean
}

interface Book extends Item {
author : string,
pages: number
}

interface DVD extends Item {
    director: string,
    duration: number
}

// 2
interface Library <T> {
    addItem(item:T) : void;
    getItemById(id:number) : T | undefined;
    listAvailableItems() : T[]
}

// 3
class LibraryImpl<T extends Item> implements Library<T> {
items: T[] = [];
addItem(item: T): void {
    this.items.push(item)
}
getItemById(id: number): T | undefined {
    return this.items.find(item => item.id === id)
}
listAvailableItems(): T[] {
    return this.items.filter(item => item.isAvailable)
}
}

// 4
// Book instance
let bookLibrary: LibraryImpl<Book> = new LibraryImpl<Book>();

const newBook: Book = {
    id: 1,
    title: "The Idiot",
    isAvailable: true,
    author: "Elif Batuman",
    pages: 370
};
const book2: Book = {
  id: 2,
  title: "Bable",
  isAvailable: false,
  author: "R.F Kuang",
  pages: 600,
};

bookLibrary.addItem(newBook);
bookLibrary.addItem(book2)

const retrievedBook = bookLibrary.getItemById(1);

const availableBooks = bookLibrary.listAvailableItems();

console.log(retrievedBook); 
console.log(availableBooks); 

// DVD instance
let DVDLibrary : LibraryImpl<DVD> = new LibraryImpl<DVD> ()

const newDVD : DVD = {
    id: 1,
    title: "drive my car",
    isAvailable: false,
    director: "",
    duration: 188
}
const DVD2 : DVD = {
     id: 2,
    title: "past lives",
    isAvailable: true,
    director: "",
    duration: 93
}
DVDLibrary.addItem(newDVD)
DVDLibrary.addItem(DVD2)

const retrievedDVD = DVDLibrary.getItemById(1)
const availableDVDs = DVDLibrary.listAvailableItems()
console.log(retrievedDVD);
console.log(availableDVDs);
