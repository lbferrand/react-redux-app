import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

const book1 = {
  author: 'Lucy Score',
  title: 'Things We Never Got Over',
  img: './images/book1.jpg',
}

const book2 = {
  author: 'Charlie Donlea',
  title: 'Twenty Years Later',
  img: './images/book2.jpg',
};

const book3 = {
  author: 'Mary Stone',
  title: "Shadow's Secret",
  img: './images/book3.jpg',
};

const book4 = {
  author: 'Lisa Jackson',
  title: "The girl who survived",
  img: './images/book4.jpg',
};

const book5 = {
  author: 'Valerie Keogh',
  title: "The Widow",
  img: './images/book5.jpg',
}

const book6 = {
  author: 'Keri Beevis',
  title: "The Summer House",
  img: './images/book6.jpg',
}

const book7 = {
  author: 'L.H. Stacey',
  title: 'The Weekend',
  img: './images/book7.jpg',
}
// //parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// //arguments
// someFunc('job', 'developer');

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img}/>
      <Book author={author} title={title} img={img}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  
  return (
    <article className="book">
      <img src={props.img} alt={props.title}/>
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>

    </article>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
