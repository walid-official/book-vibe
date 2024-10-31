const Book = ({ book }) => {
  console.log(book);
  const { image, author, bookName,category,rating} = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-[300px]">
          <img className="h-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <div className="card-actions justify-start">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
            </div>
            <h2 className="font-bold text-2xl py-4">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border"></div>
          <div className="flex justify-between py-2">
            <div className="">
            <h2>{category}</h2>
            </div>
            <div className="">
             <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
