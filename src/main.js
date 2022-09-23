import React, { useState, useEffect } from "react";
import App from "./App";
import Landing from "./Landing";
import Roadmap from "./Roadmap";
import Splash from "./Splash";
import Story from "./Story";
import ship from "./assets/ship-icon.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";

export default function Main() {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    console.log(screen);
  }, [screen]);
  function socialMedia() {
    return (
      <div className="my-32 z-[9]">
        <img src={ship} className="w-16 m-4 cursor-pointer"></img>

        <img src={twitter} className="w-16 m-4 cursor-pointer"></img>

        <img src={discord} className="w-16 m-4 cursor-pointer"></img>
      </div>
    );
  }
  return (
    <div className="overflow-hidden relative">
      {/* <div className="absolute bottom-[4%] right-[2%]">{socialMedia()}</div> */}
      {screen === 0 && (
        <Splash
          changeScreen={() => {
            setScreen(2);
          }}
        />
      )}
      {screen === 1 && (
        <App
          changeScreen={() => {
            setScreen(2);
          }}
        />
      )}
      {screen === 2 && (
        <Landing
          changeScreen={(scr) => {
            if (scr === "story") {
              setScreen(3);
            } else if (scr === "roadmap") {
              setScreen(4);
            }
          }}
        />
      )}
      {screen === 3 && (
        <Story
          changeScreen={(scr) => {
            if (scr === "story") {
              setScreen(3);
            } else if (scr === "roadmap") {
              setScreen(4);
            } else if (scr === "") {
              setScreen(0);
            }
          }}
        />
      )}
      {screen === 4 && (
        <Roadmap
          changeScreen={(scr) => {
            if (scr === "story") {
              setScreen(3);
            } else if (scr === "roadmap") {
              setScreen(4);
            } else if (scr === "") {
              setScreen(0);
            }
          }}
        />
      )}
    </div>
  );
}
