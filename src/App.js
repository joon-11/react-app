import "./App.css";
import { useState } from "react";

function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}
function App() {
  const [mode, setMode] = useState("Welcome");
  const topics = [
    { id: 1, title: "html", body: "asdadadad" },
    { id: 2, title: "css", body: "asdada" },
    { id: 3, title: "js", body: "d" },
  ];
  let content = null;
  if (mode === "Welcome") {
    content = <Article title="welcome" body="hello, web"></Article>;
  } else if (mode === "READ") {
    content = <Article title="READ" body="hello, web"></Article>;
  }
  console.log(content);
  return (
    <div>
      <Header title="web" onChangeMode={() => setMode("Welcome")}></Header>
      <Nav topics={topics} onChangeMode={(id) => setMode("READ")}></Nav>
      {content}
    </div>
  );
}

export default App;
