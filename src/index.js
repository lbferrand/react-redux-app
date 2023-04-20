import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { data } from './data';
import Book from "./component/Book";



// //parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// //arguments
// someFunc('job', 'developer');

const BookList = () => {
  return (
    <div className="component">
      {/* <EventExamples /> */}
      <section className="booklist">
        {data.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />
        })}      
      </section>
    </div> 
  );
};

// (e) => event
// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log('handle form input') ;
//   };
//   const handleButtonClick = () => {
//     alert('handle button click');
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('form submitted') ;
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Form</h2>
//         <input type="text" name="example" onChange={handleFormInput} style={{margin: '1rem 0' }}/>
//       <button type="submit">Submit</button>
//       <div>
//         <button onClick={handleButtonClick} type="button">Click Me</button>
//       </div>
//       </form>
      
//     </section>
//   )
// };



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
