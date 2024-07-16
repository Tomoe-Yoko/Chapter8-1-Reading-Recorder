import React from "react";
import Image from "next/image";

// Bookの型定義
interface Book {
  id: string;
  image: string;
  title: string;
  author: string;
  publisher: string;
  published: string;
  price: number;
}
// コンポーネントのプロパティの型定義
interface BookDetailsProps {
  index: number;
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ index, book }) => {
  return (
    <div className="flex w-full mb-4">
      <div>
        {/* //書籍の表示 */}
        <Image src={book.image} alt="" width={140} height={180} />
      </div>
      <div>
        <ul className="list-none text-black ml-4">
          <li>{index && index + "."}</li>
          <li>
            {book.title}({book.price}円)
          </li>
          <li>{book.author}</li>
          <li>{book.publisher}刊</li>
          <li>{book.published}発売</li>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
