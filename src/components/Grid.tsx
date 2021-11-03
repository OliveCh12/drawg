import React from "react";

interface Props {}

const Grid = (props: Props) => {
  return (
    <div className="grid">
      <div className="grid__cell">
        <select name="" id="">
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
        </select>
      </div>
      <div className="grid__cell">
        <select name="" id="">
          <option value="cat">🐲</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
        </select>
      </div>
      <div className="grid__cell">
        <select name="" id="">
        <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="grid__cell">
        <select name="" id="">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="F">F</option>
          <option value="R">R</option>
        </select>
      </div>
    </div>
  );
};

export default Grid;
