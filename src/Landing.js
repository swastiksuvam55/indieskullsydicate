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
import mint from "./assets/mint.png";

function Landing(props) {
  const [visible, setVisible] = useState(false);
  setTimeout(() => setVisible(true), 650);
  return (
    <div className="App relative">
      <div id="bg-container" className="flex flex-col h-screen">
        <div className="py-8 mx-32">
          <Animated
            animationIn="slideInDown"
            animationOut="slideOutUp"
            isVisible={visible}
          >
            <div className="flex justify-between items-center">
              <img src={iSSlogo} className="h-24"></img>

              <a
                href=""
                className="text-white text-2xl drop-shadow-lg font-alphaEcho"
              >
                Connect Wallet
              </a>
            </div>
          </Animated>
        </div>
        <div className="absolute bottom-[4%] left-[2%]">
          {" "}
          {roadmapStorybtn()}
        </div>
        <div className="absolute bottom-[8%] right-[2%]"> {socialMedia()}</div>
        <div className="flex justify-center items-end flex-grow w-full px-8">
          <div className="w-[80%]"> {mintSoon()}</div>
        </div>
      </div>
    </div>
  );

  function mintSoon() {
    return (
      <div className="flex items-end w-full">
        <img src={man} alt="Man" className="h-192"></img>

        <div className="flex flex-row flex-grow justify-center h-192 items-center">
          <h1 className="text-white font-alphaEcho text-4xl">
            Mint Date<br></br>Will be announced soon
          </h1>
        </div>

        <img src={skull} className="h-240"></img>
      </div>
    );
  }

  function roadmapStorybtn() {
    return (
      <div className="flex flex-col items-center h-[360px] justify-evenly">
        <img src={mint} className="w-20 cursor-pointer" />
        <img
          src={syndicate}
          className="w-28 cursor-pointer"
          onClick={() => props.changeScreen("story")}
        ></img>

        <img
          src={roadmapLogo}
          className="w-28  cursor-pointer"
          onClick={() => props.changeScreen("roadmap")}
        ></img>
      </div>
    );
  }

  function socialMedia() {
    return (
      <div className="flex flex-col items-center h-[240px] justify-evenly">
        <img src={ship} className="w-12 m-4 cursor-pointer"></img>

        <img src={twitter} className="w-12 m-4 cursor-pointer"></img>

        <img src={discord} className="w-12 m-4 cursor-pointer"></img>
      </div>
    );
  }
}

export default Landing;
