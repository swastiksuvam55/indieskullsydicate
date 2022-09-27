import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import { Animated } from "react-animated-css";
import Splash from "./Splash";
import LandingMobile from "./mobile/Landing";
import SplashMob from "./splashMob";

export default function Main() {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    console.log(screen);
    console.log(window.innerWidth);
  }, [screen]);
  return (
    <div>
      {window.innerWidth > 500 ? (
        <div className="relative">
          {/* <div className="absolute bottom-[4%] right-[2%]">{socialMedia()}</div> */}
          {screen === 0 && (
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={screen === 0}
            >
              <Splash
                isMobile={false}
                changeScreen={() => {
                  setScreen(2);
                }}
              />
            </Animated>
          )}

          {screen === 2 && (
            <Landing
              loadImage={screen === 2 ? true : false}
              changeScreen={(scr) => {
                if (scr === "story") {
                  setScreen(3);
                } else if (scr === "roadmap") {
                  setScreen(4);
                } else if (scr === "mint") {
                  setScreen(2);
                }
              }}
            />
          )}
        </div>
      ) : (
        <div>
          {screen === 0 && (
            <SplashMob
              isMobile={true}
              changeScreen={() => {
                setScreen(2);
              }}
            />
          )}
          {screen === 2 && (
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <LandingMobile
                changeScreen={(scr) => {
                  if (scr === "story") {
                    setScreen(3);
                  } else if (scr === "roadmap") {
                    setScreen(4);
                  } else if (scr === "mint") {
                    setScreen(2);
                  }
                }}
              />
            </Animated>
          )}
        </div>
      )}
    </div>
  );
}
