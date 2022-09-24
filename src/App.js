import logo from "./logo.svg";
import "./App.css";
import skull from "./assets/Group 763.png";
import man from "./assets/Group 762.png";
import iSSlogo from "./assets/logo.png";
import { Animated } from "react-animated-css";
import { useState } from "react";

function App(props) {
  const [visible, setVisible] = useState(false);
  setTimeout(() => setVisible(true), 650);

  const animate = () => {
    // var character = window?.document?.getElementById("character");
    // var character2 = window?.document?.getElementById("character2");
    // character.classList.add("left-animation");
    // character2.classList.add("right-animation");
    // setTimeout(() => {
    //   props.changeScreen();
    // }, 800);
  };

  return (
    <div className="App">
      <div id="bg-container" className="flex flex-col h-screen">
        {/* <div className='my-8 mx-32'>
        <Animated animationIn="slideInDown" animationOut="slideOutUp" isVisible={visible}>
            <div className='flex justify-between items-center'>
              <img src={iSSlogo} className='h-24'></img>
              <a href='' className='text-white text-2xl drop-shadow-lg font-alphaEcho'>Connect Wallet</a>
            </div>
            </Animated>
        </div> */}
        <div className="flex justify-center items-end flex-grow translate-x-16">
          <div className="flex items-end parent"  onClick={props.changeScreen}>
            <img
              src={man}
              alt="Man"
              id="character"
              className="h-192 translate-x-44"
            />
            <img
              src={skull}
              id="character2"
              className="h-240 -translate-x-44"
            />

            <div className="h-192 font-sans -translate-x-32">
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                isVisible={visible}
              >
                <a
                  className="text-white text-2xl drop-shadow-lg font-papyrus cursor-pointer"

                  onClick={animate}
                >
                  Click on me to know me
                </a>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
