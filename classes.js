class Book{
    constructure(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;

    }
    getSummery(){
        return '${this.title} was written by ${this.author} in ${tis.year}';

    }
    getAge(){
        const years = new Date().getFullYear()-this.year;
        return '${this.title} is ${years} years old';

    }
    revise(newYear){
        this.year=newYear;
        this.revised= true;
    }

    static topBookStores(){
        return 'bhafrgav & nibba'
    }
}

const book1=new Book('book one', 'bhargav', '2020');

console.log(book1);
console.log(Book.topBookStores());




