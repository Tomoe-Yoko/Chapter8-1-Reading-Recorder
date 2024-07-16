import React from "react";
import Link from "next/link";
import BookDetails from "./BookDetails";

// Bookの型定義を再利用
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
interface LinkedBookDetailsProps {
  index: number;
  book: Book;
}

const LinkedBookDetails: React.FC<LinkedBookDetailsProps> = ({
  index,
  book,
}) => {
  //BookDetailsコンポーネントにリンクを付与
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  );
};

export default LinkedBookDetails;
