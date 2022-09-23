import skull from "./assets/Group 763.png";
import man from "./assets/Group 762.png";
import iSSlogo from "./assets/logo.png";
import { Animated } from "react-animated-css";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import roadmapLogo from "./assets/roadmap.png";
import syndicate from "./assets/thesyndicate.png";
import ship from "./assets/ship-icon.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";

function Landing() {
  const [visible, setVisible] = useState(false);
  setTimeout(() => setVisible(true), 650);
  return (
    <div className="App">
      <div id="bg-container" className="flex flex-col h-screen">
        <div className="py-8 mx-32">
          <Animated
            animationIn="slideInDown"
            animationOut="slideOutUp"
            isVisible={visible}
          >
            <div className="flex justify-between items-center">
              <Link to="/landing">
                {" "}
                <img src={iSSlogo} className="h-24"></img>
              </Link>
              <a
                href=""
                className="text-white text-2xl drop-shadow-lg font-alphaEcho"
              >
                Connect Wallet
              </a>
            </div>
          </Animated>
        </div>
        <div className="flex justify-between items-end flex-grow w-full px-8">
          <div>
            <Link to="/story">
              {" "}
              <img src={syndicate} className="w-36"></img>
            </Link>
            <Link to="/roadmap">
              {" "}
              <img src={roadmapLogo} className="w-36 my-32"></img>
            </Link>
          </div>
          <div className="flex items-end w-full">
            <img src={man} alt="Man" className="h-192"></img>

            <div className="flex flex-row flex-grow justify-center h-192 items-center">
              <h1 className="text-white font-alphaEcho text-4xl">
                Mint Date<br></br>Will be announced soon
              </h1>
            </div>

            <img src={skull} className="h-240"></img>
          </div>
          <div className="my-32">
            <Link to="/story">
              {" "}
              <img src={ship} className="w-16 m-4"></img>
            </Link>
            <Link to="/story">
              {" "}
              <img src={twitter} className="w-16 m-4"></img>
            </Link>
            <Link to="/roadmap">
              {" "}
              <img src={discord} className="w-16 m-4"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
