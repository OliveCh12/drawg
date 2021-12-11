import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onChange: any;
  addSection: any;
}

const AddSection = (props: Props) => {
  const [state, setState] = useState({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }
  
  function handleSubmit(event: React.SyntheticEvent) {
    props.addSection(state)
    
  }

  return (
    <motion.div
      className="exo__inputs"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
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
        Add
      </button>
    </motion.div>
  );
};

export default AddSection;
