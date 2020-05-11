class Book{
    constructure(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;

    }
    getSummery(){
        return '${this.title} was written by ${this.author} in ${tis.year}';

    }

}
class Magazine extends Book{
    constructure(title,authore,year,month){
        super(title,author,year);
        this.month=month;

    }

}
const mag1=new Magazine('mag one', 'bhargav','2018', 'jan');
console.log(mag1);





