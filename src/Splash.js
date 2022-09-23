import man from "./assets/black-man.png";
import "./App.css";
import logo from "./assets/Layer 3.png";
import { Animated } from "react-animated-css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <div id="bg-container-splash" className="flex flex-col h-screen">
        <div
          className={`flex justify-center flex-grow w-full ${
            !visible ? "items-center" : "items-end"
          }`}
        >
          <Animated
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={!visible}
            style={!visible ? null : { display: "none" }}
          >
            <img
              src={logo}
              alt="Man"
              className="h-48"
              onClick={() => {
                setVisible(true);
              }}
            ></img>
          </Animated>
          <Animated
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={visible}
            style={visible ? null : { display: "none" }}
          >
            <img
              src={man}
              alt="Man"
              className="h-172"
              onClick={() => navigate("/app")}
            ></img>
          </Animated>
        </div>
      </div>
    </div>
  );
}

export default Splash;
