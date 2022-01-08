import React, { useState, useEffect, useCallback } from "react";

interface Props {
  onChange: any;
  addSection: any;
}

const AddSection = (props: Props) => {
  const [state, setState] = useState({});

  // If User press enter key, useCallback into Listener
  const handleUserKeyPress = useCallback(
    (event: any) => {
      const { key } = event;

      if (key === "Enter") {
        props.addSection(state);
      }
    },
    [state]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [state]);

  function handleInputChange(event: any) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }

  return (
    <div className="exo__inputs">
      <input
        name="name"
        type="text"
        placeholder="Name*"
        onChange={handleInputChange}
        required
      />
      <input
        name="repeat"
        type="number"
        min={0}
        placeholder="Repeat*"
        onChange={handleInputChange}
        required
      />

      <input
        name="time"
        type="number"
        min={0}
        placeholder="30 min"
        onChange={handleInputChange}
        required
      />
      <input
        name="comment"
        type="text"
        placeholder="Comment"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="button button--add"
        onClick={() => props.addSection(state)}
      >
        Add Section
      </button>
    </div>
  );
};

export default AddSection;
