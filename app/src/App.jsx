import "./App.css";
import Question from "./question";
import { useState } from "react";
import data from "./data";
import boximg from "./images/illustration-box-desktop.svg";
import womanimg from "./images/illustration-woman-online-desktop.svg";
import patternimg from "./images/bg-pattern-desktop.svg";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <body>
      <main>
        <div className="container">
          <section className="images">
            <img className="img1" src={boximg} alt="" />
            <img className="img2" src={womanimg} alt="" />
            <img className="img3" src={patternimg} alt="" />
          </section>
          <section className="faq">
            <h1>FAQ</h1>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Shantanu Sutar</a>.
        </div>
      </footer>
    </body>
  );
}

export default App;
