import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books,setBooks] = useState([]);
    // console.log(books);
    useEffect(() => {
        fetch('./BooksData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center font-bold text-4xl my-20">Books</h2>
            {/* <p>Books: {books.length}</p> */}
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map((book,index) => <Book key={index} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;