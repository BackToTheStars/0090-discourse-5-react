/*

1. Создать сетку ходов c помощью Flex Bootstrap.
2. Создать бокс с текстом.

 */

import React, { useState } from 'react';
import './App.css';
import { Editor } from 'primereact/editor';


function App() {

  const [editorText, setEditorText] = useState({'text': text});

  const [showPic, setShowPic] = useState(false);
  const showPics = () => {
    setShowPic(!showPic);
  }

  const [showHeader, setShowHeader] = useState(false);
  const showHeaders = () => {
    setShowHeader(!showHeader);
  }
  const [showEditor, setShowEditor] = useState(false);
  const showEditorSwitch = () => {
    setShowEditor(!showEditor);
  }

  return (

    <div className="container-fluid">

      <div id="todo">
        <br />
        {/*space for Header component*/}
        <p className="done">1. Add functionality to highlight text in the box</p>
        <p>2. Add scroll to the box text</p>
        <p>3. Add box drag left/right, up/down</p>
        <p>4. Add box resize functionality</p>
        <p>5. Add button to hide/show text editor for highlighting</p>
        <p>6. Connect Mongo Atlas or Firebase database backend</p>
      </div>
      <br />

      <div className="row">

        <div className="col-2">
        </div>

        <div className="col-4">
          <div className="card" style={{width: 18 + 'rem;'}}>
            { showPic && <img className="card-img-top" src="https://static01.nyt.com/images/2020/06/23/science/00SCI-MARS-HELICOPTER1/00SCI-MARS-HELICOPTER1-superJumbo.jpg?quality=90&auto=webp" alt="Card image cap" /> }
              <div className="card-body">
                { showHeader &&
                  <>
                    <h5 className="card-title">Mars Is About to Have Its ‘Wright Brothers Moment’</h5>
                    <h6 className="card-subtitle mb-2 text-muted">As part of its next Mars mission, NASA is sending an experimental helicopter to fly through the red planet’s thin atmosphere.</h6>
                    <br />
                  </>
                }
                {/*<div className="card-text">{editorText.text}</div>*/}
                <div className="card-text large-text"
                     dangerouslySetInnerHTML={{ __html: editorText.text }} />
                <a href="#" className="btn btn-primary btn-sm mt-2 mr-2" onClick={showEditorSwitch}>Highlight</a>
                <a href="#" className="btn btn-primary btn-sm mt-2 mr-2" onClick={showPics}>Hide/Show pic</a>
                <a href="#" className="btn btn-primary btn-sm mt-2 mr-2" onClick={showHeaders}>Hide/Show headers</a>
              </div>
          </div>
        </div>

        <div className="col-1">
        </div>

        <div className="col-4">
          {showEditor &&
            <>
              <Editor style={{height: '520px'}} value={editorText.text}
                      onTextChange={(e) => setEditorText({text: e.htmlValue})}/>
              <button className="btn btn-primary btn-sm mt-2" onClick={showEditorSwitch}>Done</button>
            </>
          }
        </div>

        <div className="col-1">
        </div>

      </div>
    </div>

  );
}


const text = 'NASA is about to take to the air on another planet.\n' +
  '\n' +
  'As part of its next mission to Mars, leaving Earth this summer, the space agency will attempt to do something that has never been done before: fly a helicopter through the rarefied atmosphere of Mars.\n' +
  '\n' +
  'If it works, the small helicopter, named Ingenuity, will open a new way for future robotic explorers to get a bird’s-eye view of Mars and other worlds in the solar system.\n' +
  '\n' +
  '“This is very analogous to the Wright brothers moment, but on another planet,” said MiMi Aung, the project manager of the Mars helicopter at NASA’s Jet Propulsion Laboratory over the past six years.\n' +
  '\n' +
  'Flying on Mars is not a trivial endeavor. There is not much air there to push against to generate lift. At the surface of Mars, the atmosphere is just 1/100th as dense as Earth’s. The lesser gravity — one-third of what you feel here — helps with getting airborne. But taking off from the surface of Mars is the equivalent of flying at an altitude of 100,000 feet on Earth. No terrestrial helicopter has ever flown that high,'

const text2 =
  'and that’s more than twice the altitude that jetliners typically fly at.\n' +
  '\n' +
  'The copter will hitch a ride to the red planet with Perseverance, which is to be the fifth robotic rover NASA has sent there. The mission is scheduled to launch on July 20, one of three missions headed to Mars this year.\n' +
  '\n' +
  'At a news conference last week previewing the Perseverance mission, Jim Bridenstine, the NASA administrator, made a point to highlight Ingenuity. “I’ll tell you, the thing that has me the most excited as an NASA administrator is getting ready to watch a helicopter fly on another world,” he said.';

export default App;
