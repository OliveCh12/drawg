import React from "react";

interface Props {
  handleChange: any;
}

const Grid = (props: Props) => {

  const [state, setstate] = React.useState("")


  return (
    <div className="grid">
      <div className="grid__cell">
        <select name="type" onChange={props.handleChange}>
          <option value="△">△</option>
          <option value="□">□</option>
          <option value="○">○</option>
          <option value="□/○">□/○</option>
          <option value="△/□">△/□</option>
        </select>
      </div>
      <div className={`grid__cell ${state === "" ? "grid__cell--empty" : null}`}>
        <select name="note" disabled={false} onChange={props.handleChange}>
          <option value="" className="empty"></option>
          <option value="🐲">🐲</option>
          <option value="✅">✅</option>
          <option value="❌">❌</option>
        </select>
      </div>
      <div className="grid__cell">
        <select name="level" onChange={props.handleChange}>
          <option value="0">0</option>
          <option value="|">|</option>
          <option value="||">||</option>
          <option value="|||">|||</option>
        </select>
      </div>
      <div className="grid__cell">
        <select name="rythme" onChange={props.handleChange}>
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
