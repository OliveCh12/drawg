import React, { useState } from "react";
import "./App.scss";

import Grid from "./components/Grid";

function App() {
  const [exos, setExos] = useState([
    {
      title: "Spantin",
      time: 30,
      sections: [
        { name: "Photos", repeat: 3, comment: "This is a comment", time: 90 },
      ],
    },
    {
      title: "Piloche",
      time: 80,
      sections: [
        { name: "Depoch", repeat: 3, comment: "This is a comment", time: 90 },
      ],
    },
  ]);

  // Handle input to ge ta simple string
  function handleInputChange(event: any) {
    const value = event.target.value;
    // const currentExos = [...exos]

    console.log(event.target.name)


    // console.log(currentExos[index]);
    // setState({ ...state, [event.target.name]: value });
  }

  function addSection(index: number) {
    const newSection = [...exos];
    newSection[index].sections.push({
      name: "",
      repeat: 0,
      comment: "",
      time: 0,
    });
    setExos(newSection);
  }

  function removeSection(index: number) {
    console.log(index);
  }

  function addExercice(event: any) {
    setExos([
      ...exos,
      {
        title: "",
        time: 0,
        sections: [{ name: "", repeat: 0, comment: "", time: 0 }],
      },
    ]);

    console.log(exos);
  }

  function removeExercice(index: number) {
    setExos(exos.slice(index, 1));
  }

  return (
    <div className="App">
      <div className="exos">
        {exos.map((exo: any, index: number) => (
          <div className="exo" key={index}>
            <span>⏱️ {exo.time} min</span>
            <span className="exo__index">Exo {index + 1}</span>
            <button onClick={() => removeExercice(index)}>Remove</button>
            <input
              className="exo__title"
              type="text"
              name="title"
              placeholder="Titre"
              value={exo.title}
              onChange={handleInputChange}
            />
            <Grid />
            {exos[index].sections.map((section: any, index: number) => (
              <>
                <div className="exo__inputs">
                  <input
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    value={section.name}
                    placeholder="Name"
                  />
                  <input
                    name="repeat"
                    onChange={handleInputChange}
                    type="number"
                    value={section.repeat}
                    placeholder="Nombre"
                  />
                  <input
                    name="comment"
                    onChange={handleInputChange}
                    type="text"
                    value={section.comment}
                    placeholder="Commentaire"
                  />
                  <input name="time" onChange={handleInputChange} type="time" />
                </div>

                <button
                  className="exo__button exo__button--add"
                  onClick={() => addSection(index)}
                >
                  +
                </button>
              </>
            ))}
          </div>
        ))}
      </div>
      <button onClick={addExercice}>Add</button>
    </div>
  );
}

export default App;
