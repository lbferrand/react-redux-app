import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Lucy Score",
    title: "Things We Never Got Over",
    img: "./images/book1.jpg",
    describe:
      " Naomi wasn’t just running away from her wedding. She was riding to the rescue of her estranged twin to Knockemout, Virginia, a rough-around-the-edges town where disputes are settled the old-fashioned way…with fists and beer.",
    id: 1,
  },
  {
    author: "Charlie Donlea",
    title: "Twenty Years Later",
    img: "./images/book2.jpg",
    describe: "Avery Mason, host of American Events, knows the subjects that grab a TV audience’s attention. Her latest story—a murder mystery laced with kinky sex, tragedy, and betrayal—is guaranteed to be ratings gold. New DNA technology has allowed the New York medical examiner’s office to make its first successful identification of a 9/11 victim in years. The twist: the victim, Victoria Ford, had been accused of the gruesome murder of her married lover. In a chilling last phone call to her sister, Victoria begged her to prove her innocence.",
    id: 2,
  },
  {
    author: "Mary Stone",
    title: "Shadow's Secret",
    img: "./images/book3.jpg",
    describe: "Following the incident that brought justice to her parents’ killers but ended her career, former FBI Special Agent Rebecca West needs a fresh start. Hoping to find peace, she decides to spend a few months in the sleepy beach town of Shadow Island, where she spent idyllic summers as a kid.",
    id: 3,
  },
  {
    author: "Lisa Jackson",
    title: "The girl who survived",
    img: "./images/book4.jpg",
    describe: "All her life, she’s been the girl who survived. Orphaned at age seven after a horrific killing spree at her family’s Oregon cabin, Kara McIntyre is still searching for some kind of normal. But now, twenty years later, the past has come thundering back. Her brother, Jonas, who was convicted of the murders has unexpectedly been released from prison. The press is in a frenzy again. And suddenly, Kara is receiving cryptic messages from her big sister, Marlie—who hasn’t been seen or heard from since that deadly Christmas Eve when she hid little Kara in a closet with a haunting, life-saving command: Don’t make a sound. ",
    id: 4,
  },

  {
    author: "Valerie Keogh",
    title: "The Widow",
    img: "./images/book5.jpg",
    describe: "Grieving or guilty? When Allison’s wealthy and charming husband Peter is found dead, she appears distraught, devastated….delighted? Because all built on a bed of lies. And as the truth regarding Peter’s life and death are revealed, Allison must try to keep her own dark past buried. Because if Peter was keeping secrets, then his widow is too…",
    id: 5,
  },

  {
    author: "Keri Beevis",
    title: "The Summer House",
    img: "./images/book6.jpg",
    describe: "Mead House was once our childhood home. Despite my fears, I always knew we would have to return to face the demons of our past. Back to the place where it happened, to where, as carefree teenagers, we lost our elder sister in the most brutal of circumstances. As executors of our grandmother’s will, my twin brother, Ollie, and I needed to empty the house for resale. What I didn’t expect to discover was my sister’s secret journal that contained her most private thoughts and shocking dark secrets. Now I am questioning everything that I saw that night. Did I get it wrong, who I saw? Did my evidence send an innocent man, my then boyfriend's brother, to jail for the last 17 years? I know I have no choice. If I want to find answers, I will have to go back to that fateful night my sister died. When she made her last visit to the summer house.",
    id: 6,
  },

  {
    author: "L.H. Stacey",
    title: "The Weekend",
    img: "./images/book7.jpg",
    describe: "That Lake. This house. His friends. They all know what happened to my boy. I know they do. And you... you have to help me find the truth... A weekend to remember… Ten years ago, deeply in love, I would have done anything for Thomas Kirkwood. But on the night of our graduation, fuelled by drink and drugs, Thomas’s lifeless body was found floating in the Kirkwood family lake. That weekend changed everything, and I swore I would never return to Kirkwood manor.",
    id: 7,
  },

  {
    author: "Dianna Rostad",
    title: "You Belong Here Now",
    img: "./images/book8.jpg",
    describe: "MONTANA 1925: Three brave kids from New York City board the orphan train headed west. An Irish boy who lost his family to Spanish flu, a tiny girl who won't talk, and a volatile young man from Hell's Kitchen. Across the land, they are paraded on platforms to work-worn folks and journey countless miles, racing the sun westward.",
    id: 8,
  },

  {
    author: "Nicole Trope",
    title: "The Family Across the Street",
    img: "./images/book9.jpg",
    describe: "Everybody wants to live on Hogarth Street, the pretty, tree-lined avenue with its white houses. The new family, the Wests, are a perfect fit. Katherine and John seem so in love and their gorgeous five-year-old twins race screeching around their beautiful emerald-green lawn.",
    id: 9,
  },
];

// //parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// //arguments
// someFunc('job', 'developer');

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, describe, id } = book;
        return <Book img={img} title={title} author={author} describe={describe} key={id} />
      })}
    </section>
  );
};

const Book = ({ img, title, author, describe }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{describe}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
