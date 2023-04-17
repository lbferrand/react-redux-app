import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src='./images/book1.jpg' alt="Things We Never Got Over"/>;
const Title = () => {
  return <h2>Things We Never Got Over</h2>
};
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}}>Lucy Score</h4>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
