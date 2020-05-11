function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    
}
Book.prototype.getsummery=function(){
    return "${this.title} was written by ${this.author} in ${this.year}";
};

function Magazine(title,author,year,month){

    Book.call(this, title,author,year);

    this.month=month;

}
Magazine.prototype=Object.create(Book.prototype);
const mag1= new Magazine('mag oone', 'bhargav' , '2019', 'jan');
Magazine.prototype.constructure=Magazine;

console.log(mag1);