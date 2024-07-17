import React from "react";
import { getAllReviews } from "./lib/getter";
import LinkedBookDetails from "./components/LinkedBookDetails";

//常に最新情報を取得
export const dynamic = "force-dynamic";

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

// reviewsの型定義
type Review = Book;

export default async function Home() {
  const reviews: Review[] = await getAllReviews();
  return (
    <>
      {/* 取得したレビュー情報をもとにリストを生成 */}
      {reviews.map((b: Review, i: number) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
