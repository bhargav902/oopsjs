/*function Book(){
    console.log('book initalized...');

}
const book1= new Book();
const book2= new Book();*/
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    this.getSummnery = function(){
        return "${this.title} was written by ${this.author} in ${this.year}";
    }
}
const book1= new Book('book one', 'bhargav', '2015');
const book2= new Book('book two', 'raju','2016');
console.log(book1);







 