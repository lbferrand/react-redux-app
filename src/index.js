import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/71ODaT072wL._AC_UL320_.jpg" alt="Things We Never Got Over"/>;
const Title = () => {
  return <h2>Things We Never Got Over</h2>
};
const Author = () => <h4>Lucy Score</h4>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
