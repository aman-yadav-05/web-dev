console.log("javaScript connected.")

// class library{
//     constructor(booklist,user,Bookname){
//         this.booklist=booklist;
//         this.user=user;
//         this.Bookname=Bookname;
//     }
//     getBookList(){
//         return `books present in library:${this.booklist}`;
//     }
//     issueBook(bookname,user){
//         this.bookname=bookname;
//         this.user=user;
//         return `${this.bookname} is issued to ${this.user}.`;
//     }
//     returnBook(bookname){
//         this.Bookname=bookname;
//         return ` ${bookname} is returned to library by the user.`;
//     }
// }

// let user1= new library(`maths, physics, chemistry`,"aman","maths");

// console.log(user1.issueBook("maths","aman"));
// console.log(user1.returnBook("maths"));
// console.log(user1.getBookList());


// but we need to use foreach loop so that it ll give error according to the books available in the library. 
  
class UpdatedLibrary{
    constructor(booklist){
        this.booklist=booklist;
        this.issuedBooks={};
    }
    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname,user){
        if (this.issuedBooks[bookname]==undefined) {
            this.issuedBooks[bookname]=user;    
        } else {
            console.log("this book is already issued")
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}