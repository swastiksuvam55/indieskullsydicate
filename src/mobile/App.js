import "./AppMobile.css";
import skull from "../assets/Group 763.png";
import man from "../assets/Group 762.png";
import { Animated } from "react-animated-css";
import { useState } from "react";

function AppMobile(props) {
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
      <div id="bg-container-splash" className="flex flex-col h-screen">
        <div className="font-sans flex flex-col flex-grow items-center p-8 justify-end">
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={visible}
          >
            <a
              className="text-white text-2xl drop-shadow-lg font-papyrus cursor-pointer"
              // onClick={props.changeScreen}
              onClick={animate}
            >
              Click on me to know me
            </a>
          </Animated>
        </div>
        <div className="flex justify-center items-end translate-x-16">
          <div className="flex items-end parent" onClick={props.changeScreen}>
            <img
              src={man}
              alt="Man"
              id="character"
              className="h-86 -translate-x-4"
            />
            <img src={skull} id="character2" className="h-96 -translate-x-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMobile;
