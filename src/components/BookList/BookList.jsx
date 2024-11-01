import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../Utilities/storeBook";
import Book from "../Books/Book";

const BookList = () => {
  const bookList = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = bookList.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = bookList.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-3xl my-10 text-center">Books</h2>
      <details className="dropdown">
        <summary className="btn m-1">Sort By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Ratings</a>
          </li>
          <li>
            <a>Number of Page</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab className=" btn font-semibold text-xl bg-[#23BE0A] text-white">
            Read Books
          </Tab>
          <Tab className=" btn font-semibold text-xl bg-[#59C6D2] text-white">
            WishList Books
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {readList.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {wishList.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
