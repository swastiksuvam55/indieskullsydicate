import skull from "./assets/right.png";
import man from "./assets/left.png";
// import man from "./assets/Group 762.png";
// import skull from "./assets/Group 763.png";
import iSSlogo from "./assets/logo.png";
import skull1 from "./assets/skull_images/1.png";
import skull2 from "./assets/skull_images/2.png";
import skull3 from "./assets/skull_images/3.png";
import skull4 from "./assets/skull_images/4.png";
import skull5 from "./assets/skull_images/5.png";
import skull6 from "./assets/skull_images/6.png";
import skull7 from "./assets/skull_images/7.png";
import skull8 from "./assets/skull_images/8.png";
import skull9 from "./assets/skull_images/9.png";
import skull10 from "./assets/skull_images/10.png";
import skull11 from "./assets/skull_images/11.png";
import skull12 from "./assets/skull_images/12.png";
import skull13 from "./assets/skull_images/13.png";

import "./App.css";

import { useState, useEffect } from "react";
import roadmapLogo from "./assets/roadmap.png";
import syndicate from "./assets/thesyndicate.png";
import ship from "./assets/ship-icon.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import mint from "./assets/mint_2.png";
import shipHover from "./assets/Group 26.png";
import discordHover from "./assets/Group 18.png";
import twitterHover from "./assets/Group 21.png";
import Snowfall from "react-snowfall";

function Landing(props) {
  const [visible, setVisible] = useState(true);
  const [showMint, setshowMint] = useState(false);
  const [showElements, setshowElements] = useState(false);
  const [showRoadMap, setShowRoadMap] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [screen, setScreen] = useState(0);

  const skullImage = [
    skull1,
    skull2,
    skull3,
    skull4,
    skull5,
    skull6,
    skull7,
    skull8,
    skull9,
    skull10,
    skull11,
    skull12,
    skull13,
  ];

  const roadMapContent = (
    <div className="absolute flex flex-row flex-grow justify-center h-[60vh] items-center fade-in w-[40%] max-w-[420px]">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-white font-alphaEcho text-4xl">Roadmap</h1>
        <div className="h-172 no-scrollbar overflow-scroll">
          <p className="font-aveny text-white text-clip mt-8 text-justify">
            Zoople has two bodies, his human half, and his phantom half - he
            also has more than one presence in each dimension, often meeting
            with himself during unpredictable time-shifts.
            <br></br>
            <br></br>His human half appears unscathed, although, it will show
            some weird characteristics depending on what dimension Zoople is
            present in and adapted to.
            <br></br>
            <br></br>His phantom half consists of all kinds of matter forming
            the shape of a skull.
            <br></br>
            <br></br>None of Zoople's bodies can feel nor communicate with
            either half, yet they manage to work together in tandem.
            <br></br>
            <br></br>The question is which side has more control over the other
            and what are their goals?
            <br></br>
            <br></br>No-one is really sure how Zoople came to exist, as even his
            existence in and of himself is contradictory and nonsensical; the
            combination of the living and the unexplainable seems like nothing
            more than a myth.
            <br></br>
            <br></br>In the absence of any definitive facts, theories on the
            origins of the 'Indie Skull Syndicate' (what all Zoople's
            collectively refer to themselves as, for some weird reason) are
            extremely popular and abundant, if you ever ask him.
            <br></br>
            <br></br>Some think they're the result of some wicked necromantic
            ritual gone wrong. Others say that they might be the creations of
            some transient deity. Or they will believe they have been sent
            somewhere as punishment.
            <br></br>
            <br></br>Regardless of where this mysterious wanderer came from and
            where he is, it doesn't change the fact that his mere existence is a
            wonder on its own.
            <br></br>
            <br></br>Zoople will regularly encounter himself. Some of the
            meetings end in friendship, others in aggression. The sad thing is,
            they don't last forever and no matter what happens - each limbo will
            be returned to their own dimension at any time to wait for another
            time shift, wander their world and hope their bodies will continue
            to get along.
            <br></br>
            <br></br>Chances of the same Zoople's meeting again? How long is a
            piece of string? More importantly, how many dimensions are there?
            All we know is if a Zoople did ever manage to meet himself more than
            once, if they don't kill each other... they might just end up
            getting onto something.
            <br></br>
            <br></br>Is this what the Indie Skull Syndicate is meant to do? Why
            do they call themselves this and what will they discover?
            <br></br>
            <br></br>There's only one way to find out and that is by joining the
            syndicate yourself and embarking on your journey with your own
            Zoople.
          </p>
        </div>
      </div>
    </div>
  );

  const storyContent = (
    <div className="absolute flex flex-col flex-grow justify-center h-[60vh] items-center fade-in w-[40%] max-w-[420px] fade-in">
      <h1 className="text-white font-alphaEcho text-4xl">Story</h1>
      <div className="h-172 no-scrollbar overflow-scroll">
        <p className="font-aveny text-white text-clip mt-8 text-justify">
          Zoople has two bodies, his human half, and his phantom half - he also
          has more than one presence in each dimension, often meeting with
          himself during unpredictable time-shifts.
          <br></br>
          <br></br>His human half appears unscathed, although, it will show some
          weird characteristics depending on what dimension Zoople is present in
          and adapted to.
          <br></br>
          <br></br>His phantom half consists of all kinds of matter forming the
          shape of a skull.
          <br></br>
          <br></br>None of Zoople's bodies can feel nor communicate with either
          half, yet they manage to work together in tandem.
          <br></br>
          <br></br>The question is which side has more control over the other
          and what are their goals?
          <br></br>
          <br></br>No-one is really sure how Zoople came to exist, as even his
          existence in and of himself is contradictory and nonsensical; the
          combination of the living and the unexplainable seems like nothing
          more than a myth.
          <br></br>
          <br></br>In the absence of any definitive facts, theories on the
          origins of the 'Indie Skull Syndicate' (what all Zoople's collectively
          refer to themselves as, for some weird reason) are extremely popular
          and abundant, if you ever ask him.
          <br></br>
          <br></br>Some think they're the result of some wicked necromantic
          ritual gone wrong. Others say that they might be the creations of some
          transient deity. Or they will believe they have been sent somewhere as
          punishment.
          <br></br>
          <br></br>Regardless of where this mysterious wanderer came from and
          where he is, it doesn't change the fact that his mere existence is a
          wonder on its own.
          <br></br>
          <br></br>Zoople will regularly encounter himself. Some of the meetings
          end in friendship, others in aggression. The sad thing is, they don't
          last forever and no matter what happens - each limbo will be returned
          to their own dimension at any time to wait for another time shift,
          wander their world and hope their bodies will continue to get along.
          <br></br>
          <br></br>Chances of the same Zoople's meeting again? How long is a
          piece of string? More importantly, how many dimensions are there? All
          we know is if a Zoople did ever manage to meet himself more than once,
          if they don't kill each other... they might just end up getting onto
          something.
          <br></br>
          <br></br>Is this what the Indie Skull Syndicate is meant to do? Why do
          they call themselves this and what will they discover?
          <br></br>
          <br></br>There's only one way to find out and that is by joining the
          syndicate yourself and embarking on your journey with your own Zoople.
        </p>
      </div>
    </div>
  );

  const animate = () => {
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    character?.classList?.remove("trans-left");
    character2?.classList?.remove("trans-right");
    character.classList.add("left-animation");
    character2.classList.add("right-animation");
    setTimeout(() => {
      setshowMint(true);
      setshowElements(true);
    }, 100);
  };

  const removeAnimation = () => {
    var character =
      window?.document?.getElementById("character") ??
      window?.document?.getElementById("character3") ??
      window?.document?.getElementById("character5");
    var character2 =
      window?.document?.getElementById("character2") ??
      window?.document?.getElementById("character4") ??
      window?.document?.getElementById("character6");
    character?.classList?.remove("trans-left");
    character2?.classList?.remove("trans-right");
    character?.classList?.remove("left-animation");
    character2?.classList?.remove("right-animation");
    character?.classList?.add("right-animation1");
    character2?.classList?.add("left-animation1");
  };

  const addAnimation = () => {
    var character =
      window?.document?.getElementById("character") ??
      window?.document?.getElementById("character3") ??
      window?.document?.getElementById("character5");
    var character2 =
      window?.document?.getElementById("character2") ??
      window?.document?.getElementById("character4") ??
      window?.document?.getElementById("character6");
    character?.classList?.remove("right-animation1");
    character2?.classList?.remove("left-animation1");
    character?.classList?.add("left-animation");
    character2?.classList?.add("right-animation");
  };

  const hideShowHalfSkull = (display) => {
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    character.style.display = display;
    character2.style.display = display;
  };

  const hideSkullFlow = (display) => {
    setTimeout(() => {
      const character = window?.document?.getElementById("skullflow");
      character.style.display = display;
      setVisible(false);
    }, 500);
  };

  useEffect(() => {
    hideShowHalfSkull("none");
    if (props.loadImage) {
      setTimeout(() => {
        console.log("skull images loaded");
        const skullFlow = window?.document?.getElementById("skullflow");
        skullImage.forEach((element, index) => {
          setTimeout(() => {
            skullFlow.src = element;
            if (index === skullImage.length - 1) {
              skullFlow.style.display = "none";
              hideShowHalfSkull("block");
              hideSkullFlow("none");
              // setVisible(true);
            }
          }, index * 150);
        });
      }, 100);
    }
  }, [props.loadImage]);

  useEffect(() => {
    setTimeout(() => {
      if (showElements) {
        window?.document
          ?.getElementById("roadmapStorybtn")
          ?.classList.add("roadmapStorybtn");
        window?.document
          ?.getElementById("social-media-animation")
          ?.classList.add("social-media-animation");
        window?.document
          ?.getElementById("nav-bar-animation")
          ?.classList.add("nav-bar-animation");
      }
    }, 100);
  }, [showElements]);

  const toggleScreen = (scr) => {
    if (scr === screen) return;

    if (scr === 0) {
      setShowRoadMap(false);
      setShowStory(false);
      setshowMint(true);
    } else if (scr === 1) {
      setshowMint(false);
      setShowStory(true);
      setShowRoadMap(false);
    } else if (scr === 2) {
      setShowRoadMap(true);
      setshowMint(false);
      setShowStory(false);
    }

    removeAnimation();
    console.log(scr);
    //0 - mint
    //1 - roadmap
    //2 - story
    setTimeout(() => {
      addAnimation();
      setScreen(scr);
    }, 400);
  };

  return (
    <div className="App relative">
      {/* <video
        autoPlay
        muted
        loop
        className="landing-page-bg"
        src={backGroundVideo}
      /> */}
      <div className="fixed-postion-div">
        <Snowfall snowflakeCount={300} radius={[0.5, 1]} wind={[1.5, 4]} />
      </div>
      <div
        id="bg-container"
        className="flex flex-col h-screen bg-container-white bg-container-image z-10"
      >
        <div className="mx-32" id="nav-bar-animation">
          <div className="flex justify-between items-center">
            {showElements ? (
              <img src={iSSlogo} className="h-24" />
            ) : (
              <div className="h-24" />
            )}

            <a
              // href=""
              className="text-white text-2xl drop-shadow-lg font-alphaEcho"
            >
              {showElements ? "Connect Wallet" : " "}
            </a>
          </div>
        </div>
        {showElements && (
          <div className="absolute bottom-[4%]"> {roadmapStorybtn()}</div>
        )}
        {showElements && (
          <div className="absolute bottom-[8%] right-[1px]">
            {socialMedia()}
          </div>
        )}
        <div className="flex justify-center items-end flex-grow w-full px-8 opacity-100">
          <div className="w-[80vw]">
            {mintSoon()}
            {/* {screen === 1 && theRoadMap()}
            {screen === 2 && theStory()} */}
          </div>
        </div>
      </div>
    </div>
  );

  function mintSoon() {
    return (
      <div className="flex items-end w-full justify-center parent relative">
        {screen === 1 && showStory ? storyContent : null}
        {screen === 2 && showRoadMap ? roadMapContent : null}
        {screen === 0 && showMint ? (
          <div className="absolute flex flex-row flex-grow justify-center h-[60vh] items-center fade-in">
            <h1 className="text-white font-alphaEcho text-4xl">
              Mint Date<br></br>Will be <br /> announced soon
            </h1>
          </div>
        ) : (
          <></>
        )}

        {visible && (
          <img
            src={skull1}
            alt="Man"
            id="skullflow"
            className="h-[80vh] z-50 opacity-100"
          />
        )}

        <>
          <img
            src={man}
            alt="Man"
            id="character"
            className="h-[80vh] trans-left"
            onClick={animate}
          />

          <img
            src={skull}
            onClick={animate}
            id="character2"
            className="h-[80vh] trans-right z-10"
          />
        </>
      </div>
    );
  }

  function roadmapStorybtn() {
    return (
      <div
        id="roadmapStorybtn"
        className="flex flex-col items-center h-[360px] justify-evenly opacity-10"
      >
        <img
          src={mint}
          className="w-20 cursor-pointer"
          onClick={() => toggleScreen(0)}
        />
        <img
          src={syndicate}
          className="w-28 cursor-pointer"
          // onClick={() => props.changeScreen("story")}
          onClick={() => toggleScreen(1)}
        />

        <img
          src={roadmapLogo}
          className="w-28  cursor-pointer"
          // onClick={() => props.changeScreen("roadmap")}
          onClick={() => toggleScreen(2)}
        />
      </div>
    );
  }

  function socialMedia() {
    return (
      <div
        id="social-media-animation"
        className="flex flex-col items-center h-[240px] justify-evenly opacity-10"
      >
        <div className="relative">
          <img src={ship} className="w-12 m-4 cursor-pointer" />

          <img
            src={shipHover}
            className="w-12 m-4 cursor-pointer absolute opacity-[0] hover:opacity-[1]"
            style={{ top: 0 }}
          />
        </div>

        <div className="relative">
          <img src={twitter} className="w-12 m-4 cursor-pointer" />
          <img
            src={twitterHover}
            className="w-12 m-4 cursor-pointer absolute opacity-[0] hover:opacity-[1]"
            style={{ top: 0 }}
            onClick={() =>
              window.open("https://twitter.com/iskullsyndicate", "_blank")
            }
          />
        </div>

        <div className="relative">
          <img src={discord} className="w-12 m-4 cursor-pointer"></img>

          <img
            src={discordHover}
            className="w-12 m-4 cursor-pointer absolute opacity-[0] hover:opacity-[1]"
            style={{ top: 0 }}
            onClick={() =>
              window.open("https://discord.com/invite/2MBQPKkP", "_blank")
            }
          />
        </div>
      </div>
    );
  }
}

export default Landing;
