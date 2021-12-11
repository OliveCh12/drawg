import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  repeat: number;
  comment: string;
  time: number;
  removeSection: any;
  sectionIndex: number;
}

const ItemSection = (props: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <motion.div
      onClick={() => setIsSelected(!isSelected)}
      className={`exo__section ${isSelected ? "exo__section--active" : ""}`}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <span className="exo__section-name">
        {props.name}{" "}
        <strong>
          {props.repeat}×{props.time}min
        </strong>
      </span>
      <span className="exo__section-comment">{props.comment}</span>
      {isSelected && (
        <button
          className="exo__section-remove"
          onClick={() => props.removeSection(props.sectionIndex)}
        >
          -
        </button>
      )}
    </motion.div>
  );
};

export default ItemSection;
