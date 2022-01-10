import React, { useState, useEffect, useCallback } from "react";

interface Props {
  onChange: any;
  addSection: any;
}

interface StateProps {
  name: string;
  repeat: number;
  time: number;
  comment: string;
}

const AddSection = (props: Props) => {
  // State of AddSection component.
  const [state, setState] = useState<StateProps | any>({
    name: "",
    repeat: "",
    time: "",
    comment: "",
  });


  // If User press enter key, useCallback into Listener
  const handleUserKeyPress = useCallback(
    (event: any) => {
      const { key } = event;

      if (key === "Enter") {
      event.preventDefault()

        props.addSection(state);
        // Clear state data
        const clearState = Object.fromEntries(
          Object.keys(state).map((key) => [key, ""])
        );
        setState(clearState);

        const firstInput: HTMLInputElement | null = document.querySelector("input[name='name']")

        firstInput?.focus()
        
      }
    },
    [state, props]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [state, handleUserKeyPress]);

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
        value={state["name"]}
        required
      />
      <input
        name="repeat"
        type="number"
        min={0}
        placeholder="Repeat*"
        onChange={handleInputChange}
        value={state["repeat"]}
        required
      />

      <input
        name="time"
        type="number"
        min={0}
        placeholder="30 min"
        onChange={handleInputChange}
        value={state["time"]}
        required
      />
      <input
        name="comment"
        type="text"
        placeholder="Comment"
        onChange={handleInputChange}
        value={state["comment"]}
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
