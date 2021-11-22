import React, { useState } from "react";
import { produce } from "immer";
import { AnimatePresence } from "framer-motion";

import Item from "./components/Item";
import "./App.scss";

function App() {
  const [exos, setExos] = useState([
    {
      title: "Spantin",
      type: "",
      cardType: "Exos",
      level: "2",
      rythme: "S",
      note: "",
      sections: [
        {
          name: "Photos",
          repeat: 3,
          comment: "Dessiner un parapluie",
          time: 90,
        },
        {
          name: "Photos",
          repeat: 3,
          comment: "Aménager le calendrier",
          time: 30,
        },
      ],
    },
    {
      title: "Piloche",
      cardType: "Cours",
      type: "",
      level: "2",
      rythme: "S",
      note: "",
      sections: [{ name: "Depoch", repeat: 3, time: 90 }],
    },
  ]);

  // Handle input to ge ta simple string
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ): void {
    let field = event.target.name;

    setExos((currentExos) =>
      produce(currentExos, (v: any) => {
        v[index][field] = event.target.value;
      })
    );
  }


  // Add Exercice
  function addExercice() {
    if (exos.length >= 10) {
      alert("You can only have tree exercices");
    } else {
      setExos([
        ...exos,
        {
          title: "",
          cardType: "",
          type: "",
          level: "",
          rythme: "",
          note: "",
          sections: [],
        },
      ]);
    }
  }

  // Remove Exercice at index
  function removeExercice(index: number) {
    setExos(exos.slice(0, index).concat(exos.slice(index + 1, exos.length)));
  }

  // Add new section to exercice
  function handleAddSection(data: any, index: number) {
    Object.preventExtensions(exos);
    let current = [...exos];
    current[index].sections.push(data);
    setExos(current);
  }

  //Remove section from exercice
  function handleRemoveSection(index: number) {
    let current = [...exos]
    current[index].sections.slice(0, 1);

    console.log(current)

    setExos(current)
  }
  return (
    <div className="App">
      <div className="exos">
        <AnimatePresence>
          {exos.map((exo: any, index: number) => (
            <Item
              key={index}
              index={index}
              title={exo.title}
              cardType={exo.cardType}
              time={exo.time}
              sections={exo.sections}
              handleChange={(e: any) => handleInputChange(e, index)}
              handleSection={(data: any) => handleAddSection(data, index)}
              removeSection={(indexSection: number) => handleRemoveSection(index)}
              removeExercice={() => removeExercice(index)}
            />
          ))}
        </AnimatePresence>
      </div>
      <button className="button button--new" onClick={addExercice}>
        +
      </button>

      <pre
        style={{
          width: 400,
          margin: "auto",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <code>{JSON.stringify(exos, null, 2)}</code>
      </pre>
    </div>
  );
}

export default App;
