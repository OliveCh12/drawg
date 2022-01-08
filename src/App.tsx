import React, { useState, useRef } from "react";
import { produce } from "immer";
import { AnimatePresence } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";

import html2canvas from "html2canvas";

import Header from "./components/Header";
import Empty from "./components/Empty";
import Item from "./components/Item";
import "./App.scss";

function App() {
  const [exos, setExos]: any = useState([]);

  const AppElement = useRef<HTMLDivElement>(null);

  const DownloadLink = useRef<HTMLAnchorElement>(null);

  // Take a screenshot of a specific area of the DOM.
  async function screenshotDOM() {
    const element: any = await document.querySelector(".exos");
    const elementFooter: any = await document.querySelectorAll(".exo__footer");

    await elementFooter.forEach((element: any) => {
      element.style = "display: none";
    });

    await html2canvas(element, {
      windowWidth: element.offsetWidth,
      windowHeight: 1080,
      foreignObjectRendering: false,
    })?.then(function (canvas) {
      document.body.appendChild(canvas);

      // DownloadLink.current?.setAttribute("href", canvas.toDataURL("image/png"));
    });
  }

  // Handle input to get a simple string
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ): void {
    let field = event.target.name;

    setExos((currentExos: any) =>
      produce(currentExos, (v: any) => {
        v[index][field] = event.target.value;
      })
    );
  }

  // Add new exercice to the list
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

  interface elementProps {
    title: string;
    cardType: string;
    type: string;
    level: string;
    rythme: string;
    note: string;
    sections: [];
  }

  // Add new section to exercice
  function handleAddSection(newSection: any, index: number) {
    let current: Array<any> = [...exos];

    let { sections } = current[index];

    // sections = Object.assign([], current)
    sections.push(newSection)

    console.log(sections)

    setExos(current);
  }

  //Remove section from exercice
  function handleRemoveSection(sectionIndex: any, index: number) {
    let current = [...exos];
    current[index].sections.splice(sectionIndex, 1);
    setExos(current);
  }

  function getProps({ active }: any) {
    console.log(active);
  }

  return (
    <div className="App" id="App" ref={AppElement}>
      <Header total={exos.length} />
      {exos.length <= 0 ? (
        <Empty />
      ) : (
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
                removeSection={(sectionIndex: React.SyntheticEvent) =>
                  handleRemoveSection(sectionIndex, index)
                }
                removeExercice={() => removeExercice(index)}
                isActive={true}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      <div className="controls">
        <button className="button button--new" onClick={addExercice}>
          <MdOutlineLibraryAdd scale={1.2} />
        </button>
        <button className="button button--default" onClick={screenshotDOM}>
          Save as JPG
        </button>
        <a
          className="button button--default"
          ref={DownloadLink}
          onClick={screenshotDOM}
          download={true}
        >
          Download
        </a>
      </div>

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
