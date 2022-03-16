import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import "./index.css";

class App extends Component {
  state = {
    characters: [],
  };
  changeColor = () => {
    const arrrayofColors = [
      "black",
      "purple",
      "pink",
      "gray",
      "green",
      "yellow",
      "red",
    ];
    let color = Math.floor(Math.random() * arrrayofColors.length);
    let body = document.getElementById("body");
    body.style.backgroundColor = arrrayofColors[color];
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <button onClick={this.changeColor}>Marco</button>
        <div className="container">
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
