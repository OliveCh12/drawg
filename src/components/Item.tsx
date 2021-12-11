import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Grid from "./Grid";
import ItemSection from "./Item/ItemSection";
import AddSection from "./Item/AddSection";

interface Props {
  index: number;
  time: number;
  title: string;
  cardType: string;
  sections: any;
  handleChange: any;
  handleSection: any;
  removeSection: any;
  removeExercice: any;
}

const Item = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  // Additione le temps de chaque section
  function renderTime(arr: any) {
    console.log(arr)
    return arr.reduce((acc: any, object: any) => acc + object.time, 0);
  }

  React.useEffect(() => {

  }, [props.sections]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ stiffness: 10, duration: 0.2 }}
      className="exo"
    >
      <div className="exo__body">
        <button
          className="button button--remove"
          onClick={props.removeExercice}
        >
          -
        </button>
        <div className="exo__header">
          <span className="exo__time">⏱️ {renderTime(props.sections)} min</span>
          <input
            className="exo__index"
            type="text"
            name="cardType"
            placeholder="Card Type"
            onChange={props.handleChange}
            value={props.cardType}
          />
        </div>

        <input
          className="exo__title"
          spellCheck={false}
          type="text"
          name="title"
          placeholder="Titre"
          value={props.title}
          onChange={props.handleChange}
        />
        <Grid handleChange={props.handleChange} />
        </div>
        <div className="exo__sections">
          <AnimatePresence>
            {props.sections.map((section: any, i: number) => (
              <ItemSection
                key={i}
                sectionIndex={i}
                name={section.name}
                repeat={section.repeat}
                comment={section.comment}
                time={section.time}
                removeSection={props.removeSection}
              />
            ))}
          </AnimatePresence>
        </div>
      <div className="exo__footer">
        <button
          className="button button--section"
          onClick={() => setIsActive(!isActive)}
        >
          Add new
        </button>
        <AnimatePresence>
          {isActive && (
            <AddSection
              onChange={props.handleChange}
              addSection={props.handleSection}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Item;
