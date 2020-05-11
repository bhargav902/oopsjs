function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    
}
Book.prototype.getsummery=function(){
    return "${this.title} was written by ${this.author} in ${this.year}";
};


Book.prototype.getAge=function(){
    const years=new Date().getFullYear()-this.year;
    return'${this.tite} is ${years} years old'
};

Book.prototype.revise  = function(newyear){
    this.year=newyear;
    this.revised = true;

}

const book1= new Book('book one', 'bhargav', '2015');
const book2= new Book('book two', 'raju','2016');
console.log(book1);
book2.revise('2018');
console.log(book2)