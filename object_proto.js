const bookProtos={
    getSummery:function(){
        return '${this.title} was written by ${this.author} in ${this.year}';

    },
    getAge: function(){
        const years= new Date().getFullYear()-this.year;
        return '${this.title} is ${years} years old ';
    }
}
/*const book1=Object.create(bookProtos);
book1.title='book one';
book1.author='bhargav';
book1.year='2017';*/

const book1=Object.create(bookProtos, {
    title:{value :'book one'},
    author:{value:'bhagav'},
    year:{value:'2014'}
});


console.log(book1);