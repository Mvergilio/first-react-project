import React, { Component } from "react";
import Table from "./Table";
import "./index.css";
function changeColor() {
  let color = prompt();
  let body = document.getElementById("body");
  body.style.backgroundColor = color;
}
const removeCharacter = (index) => {
  const { characters } = this.state;

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index;
    }),
  });
};

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <button onClick={changeColor}>Marco</button>
        <div className="container">
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </div>
    );
  }
}

export default App;
