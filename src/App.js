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
        <p className="done">2. Add scroll to the box text</p>
        <p>3. Add box drag left/right, up/down</p>
        <p>4. Add box resize functionality</p>
        <p className="done">5. Add button to hide/show text editor for highlighting</p>
        <p>6. Connect Mongo Atlas or Firebase database backend</p>
        <p>7. Demonstrate div to div frame-and-line connection></p>
      </div>
      <br />

      <div className="row">

        <div className="col-2">
        </div>

        <div className="col-4">


          <div className="card" style={{width: 18 + 'rem;'}}>
            { showPic && <img className="card-img-top" src="https://static01.nyt.com/images/2020/06/23/science/00SCI-MARS-HELICOPTER1/00SCI-MARS-HELICOPTER1-superJumbo.jpg?quality=90&auto=webp" alt="Card image cap" /> }
              <div className="card-body mod-padding">
                { showHeader &&
                  <>
                    <h5 className="card-title">Mars Is About to Have Its ‘Wright Brothers Moment’</h5>
                    <h6 className="card-subtitle mb-2 text-muted">As part of its next Mars mission, NASA is sending an experimental helicopter to fly through the red planet’s thin atmosphere.</h6>
                    <br />
                  </>
                }
                {/*<div className="card-text">{editorText.text}</div>*/}
                <div className="card-text large-text scroll"
                     dangerouslySetInnerHTML={{ __html: editorText.text }} />
                <a href="#" className="btn btn-primary btn-sm mt-2 mr-2" onClick={showEditorSwitch}>Highlight</a>
                <a href="#" className="btn btn-primary btn-sm mt-2 mr-2" onClick={showPics}>Hide/Show pic</a>
                <a href="#" className="btn btn-primary btn-sm mt-2 mr-2" onClick={showHeaders}>Hide/Show headers</a>
              </div>
          </div>


          <br />
          <hr />
          <p>Now we need to experiment with border-and-line connection:</p>
          <div id="div1"></div>
          <div id="div2"></div>
          <svg id="line" width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="red"/></svg>
        {/*

         offsetHeight	- Returns the height of an element, including padding, border and scrollbar
         offsetWidth	- Returns the width  of an element, including padding, border and scrollbar
         offsetLeft	  - Returns the horizontal offset position of an element
         offsetTop	  - Returns the vertical offset position of an element

        */}



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
  'Flying on Mars is not a trivial endeavor. There is not much air there to push against to generate lift. At the surface of Mars, the atmosphere is just 1/100th as dense as Earth’s. The lesser gravity — one-third of what you feel here — helps with getting airborne. But taking off from the surface of Mars is the equivalent of flying at an altitude of 100,000 feet on Earth. No terrestrial helicopter has ever flown that high, and that’s more than twice the altitude that jetliners typically fly at.\n' +
  '\n' +
  'The copter will hitch a ride to the red planet with Perseverance, which is to be the fifth robotic rover NASA has sent there. The mission is scheduled to launch on July 20, one of three missions headed to Mars this year.\n' +
  '\n' +
  'At a news conference last week previewing the Perseverance mission, Jim Bridenstine, the NASA administrator, made a point to highlight Ingenuity. “I’ll tell you, the thing that has me the most excited as an NASA administrator is getting ready to watch a helicopter fly on another world,” he said.\n' +
  '\n' +
  'Until 1997, all of the spacecraft sent to the surface of Mars had been stationary landers. But in 1997, the Pathfinder mission included something that was revolutionary for NASA: a wheeled robot. That rover, Sojourner, was roughly the size of a short filing cabinet. That success was followed by two golf cart-size rovers, Spirit and Opportunity, arriving on Mars in 2004 and then Curiosity, about the size of a car, in 2012.\n' +
  '\n' +
  'For a robotic explorer on another planet, the ability to move around offers great advantages.\n' +
  '\n' +
  'Planetary scientists are no longer stuck staring at one spot. A rover can drive across the landscape, stopping for closer looks at intriguing rocks. That freedom was key to gaining the current understanding of early Mars, that the planet, now cold and dry, was once wet and possessed at least some environments that were potentially habitable for life.\n' +
  '\n' +
  'Ingenuity is in essence the aerial counterpart of Sojourner, a demonstration of a novel technology that might be used more extensively on later missions. The body of Ingenuity is about the size of a softball with four spindly legs sticking out. Two sets of blades, each about 4 feet from tip to tip, spin in opposite directions. It weighs just 4 pounds and stands about one and a half feet high.\n' +
  '\n' +
  'Bob Balaram, the chief engineer for the helicopter, started working with some colleagues on the idea back in the 1990s.\n' +
  '\n' +
  '“It didn’t really go anywhere,” Dr. Balaram said. “We did run some small tests, but then it sat on the shelf till about six, seven years back.”\n' +
  '\n' +
  'He said Charles Elachi, then the director of the Jet Propulsion Laboratory, became interested and provided money for further study. “And that got us going,” Dr. Balaram said.\n' +
  '\n' +
  'Doing something that had never been done before was an engineering challenge that appealed to Ms. Aung, who joined as the project manager in the middle of 2014.\n' +
  '\n' +
  '“About 20 years ago, it couldn’t have been possible, really, because of the math,” said Ms. Aung who was a deputy manager of the Jet Propulsion Laboratory’s autonomous systems division before joining the Mars project.\n' +
  '\n' +
  'But a number of advances, such as miniaturization of electronics, batteries that stored more energy and materials that could be shaped into lightweight blades, had finally made the dream of Mars flying machines into a technological possibility, Ms. Aung said.\n' +
  '\n' +
  'Turning the possibility into a working helicopter took years of trial and error.\n' +
  '\n' +
  'By the end of 2014, the engineers had built a small prototype. The little helicopter was placed in a chamber where most of the air was sucked out, replicating the density of the Martian atmosphere. Because they had yet to write the software for the helicopter to fly itself, a member of the team tried to guide its motion with a joystick, like a hobbyist flying a drone.\n' +
  '\n' +
  'As the blades spun, the helicopter rose up. It immediately veered out of control.\n' +
  '\n' +
  'They had lift but no control.\n' +
  '\n' +
  '“It did kind of what we had to do at that point, which was say we can actually get off the ground,” said Havard Grip, the engineer who led work on aerodynamics and achieving controlled flight. “So in that way, it was a success. But it also was clear that there was a lot more work to be done here on understanding how this thing behaves.”\n' +
  '\n' +
  'Dr. Balaram and Dr. Grip said one problem was that the blades bounced up and down as they spun at 2,000 to 3,000 revolutions a minute. On Earth, the pressure of the air pushing against the blades minimizes the bouncing. But in the thin Martian atmosphere, the bouncing created an instability that made it hard to control the motion of the helicopter.\n' +
  '\n' +
  'The solution turned out to be making the blades slightly stiffer, but that added some weight.\n' +
  '\n' +
  '“Arriving at a suitable design for that was, I think, one of the biggest issues early on,” Dr. Grip said. Eventually, they found a solution.\n' +
  '\n' +
  '“It’s quite astounding when you lift one of these blades, if you hold it in your hand, you think you’re going to lift something substantial, and it’s as light as air and, at the same time, extremely stiff.”\n' +
  '\n' +
  'The engineering involved a series of compromises needed to fit within the constraints of size, weight and battery power.\n' +
  '\n' +
  'Dr. Grip at the same time spearheaded the development of computer algorithms that would be able to steer and adjust the flight of the helicopter quickly enough to automatically respond to shifting atmospheric conditions on Mars.\n' +
  '\n' +
  'In May 2016, the next prototype was ready. In the same chamber simulating the diaphanous Martian atmosphere, the helicopter rose, then hovered steadily and softly landed. For the first time, a helicopter prototype had flown under control in conditions that simulated the Martian atmosphere, although it was still connected to an external power source and computer.\n' +
  '\n' +
  'The complete design, with the batteries, a Qualcomm Snapdragon processor that is the same as those in cellphones, communication systems and sensors all integrated, was ready in January 2018. To mimic the weaker gravitational pull of Mars, a pulley pulled upward to counteract part of Earth’s gravity. The density of air in the chamber was pumped down again. But this time, instead of leaving wisps of Earth air, a bit of carbon dioxide — the main constituent of Martian air — was pumped in.\n' +
  '\n' +
  'The helicopter rose and flew.\n' +
  '\n' +
  'Half a year later, NASA gave the go-ahead for adding the helicopter to NASA’s next Mars rover mission, Perseverance.\n' +
  '\n' +
  'Ingenuity is now attached to the belly of Perseverance, which is undergoing final preparations for launch from Cape Canaveral, Fla.\n' +
  '\n' +
  'In the meantime, Ms. Aung and her team are rehearsing what they will be doing once Ingenuity is on Mars. With the Jet Propulsion Laboratory largely shutdown because of the coronavirus pandemic, all that work has been done via teleconferences, with all of the team members working at home.\n' +
  '\n' +
  'About two months after Perseverance lands on Mars in February, the tests of Ingenuity will begin. The rover will find a suitably flat spot, drop the helicopter onto the ground, then drive away at least 100 yards away. “The helicopter never returns to the rover,” Ms. Aung said.\n' +
  '\n' +
  'Over 30 days, the helicopter will make up to five flights. Much of the time will be sitting around waiting for solar panels to recharge the batteries.\n' +
  '\n' +
  'The first is to go up about a few feet and hover for up to 30 seconds, then land. Subsequent flights will be longer, higher, farther. On the fifth flight, if everything works, Ingenuity will go up about 15 feet, fly out 500 feet and then return back to where it started. It has two cameras: a downward-facing, black-and-white one for keeping track of where it is; and a color one for oblique views of the landscape. The flight will last a minute and a half.\n' +
  '\n' +
  'Once the flights are done, Ingenuity will be left at its final landing site, and Perseverance will drive off for the rest of its mission.\n' +
  '\n' +
  'Ms. Aung said that the technology could be adapted to a bigger craft, up to about 30 pounds in weight instead of four. That might be large enough to carry a couple of pounds of cameras and other instruments.\n' +
  '\n' +
  'Already, NASA has plans for sending Dragonfly, a nuclear-powered rotorcraft to Titan, the largest moon of Saturn. But Titan has a thick atmosphere, so flying there does not pose the same technological challenges as Mars.\n' +
  '\n' +
  'Even if future helicopters are headed to Mars, they will almost certainly never be a viable mode of transportation for astronauts there.\n' +
  '\n' +
  '“You wouldn’t envision extending it to where you can fly humans like you can on Earth,” Ms. Aung said. “There just isn’t enough atmosphere.”';


const text2 =
  'and that’s more than twice the altitude that jetliners typically fly at.\n' +
  '\n' +
  'The copter will hitch a ride to the red planet with Perseverance, which is to be the fifth robotic rover NASA has sent there. The mission is scheduled to launch on July 20, one of three missions headed to Mars this year.\n' +
  '\n' +
  'At a news conference last week previewing the Perseverance mission, Jim Bridenstine, the NASA administrator, made a point to highlight Ingenuity. “I’ll tell you, the thing that has me the most excited as an NASA administrator is getting ready to watch a helicopter fly on another world,” he said.';

export default App;
