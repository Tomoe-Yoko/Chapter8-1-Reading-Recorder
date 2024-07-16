import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inconsolata } from "next/font/google";

//googleFontを有効化
const fnt = Inconsolata({ subsets: ["latin"] });
//メタデータを定義
export const metadata: Metadata = {
  title: "Reading Recorder",
  description: "自分が読んだ本を残すためのアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="ja">
      <body className="text-4xl text-indigo-800 font-bold my-2">
        <h1>Reading Recorder</h1>
        {/* 共通メニュー準備 */}
        <ul className="flex bg-blue-600 mb-3 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/">
              Home
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/books">
              Search
            </Link>
          </li>
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a
              className="no-underline text-blue-300"
              href="https://wings.msn.to/"
              target="blank"
            >
              Support
            </a>
          </li>
        </ul>
        {/* ページのコンポーネントに反映する領域 */}
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
