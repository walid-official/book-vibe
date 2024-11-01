import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../Utilities/storeBook";

const BookDetails = () => {
  const bookDetail = useLoaderData();
  const { BookId } = useParams();

  const id = parseInt(BookId);
  console.log({ id, BookId, bookDetail });

  const bookFind = bookDetail.find((book) => book.bookId === id);
  const { bookId, image, author, bookName, category, rating, review } =
    bookFind;

  const handleReadBookList = () => {
    addToStoredReadList(id);
  };

  const handleWishBookList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="w-11/12 mx-auto">
      
      <div className="md:flex justify-between items-center py-20 gap-8">
        <div className="h-[500px] w-full">
          <img className="w-[100%] h-full object-cover" src={image} alt="" />
        </div>
        <div className="">
          <h2 className="font-bold text-3xl">{bookName}</h2>
          <p className="py-4">By: {author}</p>
          <p className="py-4">{review}</p>
          <div className="flex gap-4">
            <button onClick={() => handleReadBookList(bookId)} className="btn">
              Mark as Read
            </button>
            <button
              onClick={() => handleWishBookList(bookId)}
              className="btn bg-[#50B1C9] hover:bg-[#50B1C9] text-white"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
