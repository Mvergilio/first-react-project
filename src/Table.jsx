import React, { Component } from "react";

const TABLE_HEAD = () => {
  return (
    <thead>
      <th>Nome</th>
      <th>Job</th>
    </thead>
  );
};
const TABLE_BODY = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TABLE_HEAD />
      <TABLE_BODY
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};
export default Table;
