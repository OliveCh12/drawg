import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  repeat: number;
  comment: string;
  time: number;
  removeSection: any;
}

const ItemSection = (props: Props) => {
  return (
    <motion.div
      className="exo__section"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <span className="exo__section-name">
        {props.name} <strong>{props.repeat}×{props.time}min</strong>
      </span>
      <span className="exo__section-comment">{props.comment}</span>
      <span className="exo__section-time"> min</span>
      <button onClick={props.removeSection}>Remove</button>
    </motion.div>
  );
};

export default ItemSection;
