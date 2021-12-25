import React from "react";
import { motion } from "framer-motion";
import { GiSeaDragon } from "react-icons/gi";

interface Props {}

const Empty = (props: Props) => {
  return (
    <div className="app-empty">
      <motion.div
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
      >
        <GiSeaDragon className="app-empty__icon" />
      </motion.div>

      <p>Start by adding a new item clicking the button + down bellow</p>
    </div>
  );
};

export default Empty;
