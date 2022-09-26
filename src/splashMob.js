import man from "./assets/black-man.png";
import "./App.css";
import logo from "./assets/Layer 3.png";
import { Animated } from "react-animated-css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./assets/logo_images/1.png";
import img2 from "./assets/logo_images/2.png";
import img3 from "./assets/logo_images/3.png";
import img4 from "./assets/logo_images/4.png";
import img5 from "./assets/logo_images/4.png";
import img6 from "./assets/logo_images/6.png";
import img7 from "./assets/logo_images/7.png";
import img8 from "./assets/logo_images/8.png";
import img9 from "./assets/logo_images/9.png";
import img10 from "./assets/logo_images/10.png";
import img11 from "./assets/logo_images/11.png";
import img12 from "./assets/logo_images/12.png";
import img13 from "./assets/logo_images/13.png";
import img14 from "./assets/logo_images/14.png";
import img15 from "./assets/logo_images/16.png";
import img16 from "./assets/logo_images/16.png";
import img17 from "./assets/logo_images/18.png";
import img18 from "./assets/logo_images/18.png";
import img19 from "./assets/logo_images/19.png";
import img20 from "./assets/logo_images/20.png";
import arrow1 from "./assets/aroow1.png";
import arrow2 from "./assets/arrow2.png";

function SplashMob(props) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [showArrow, setshowArrow] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const getImageByIndex = (index) => {
    switch (index) {
      case 1:
      case 0:
        return [img1, "100%"];
      case 2:
        return [img2, "100%"];
      case 3:
        return [img3, "100%"];
      case 4:
        return [img4, "100%"];
      case 5:
        return [img5, "100%"];
      case 6:
        return [img6, "100%"];
      case 7:
        return [img7, "100%"];
      case 8:
        return [img8, "100%"];
      case 9:
        return [img9, "100%"];
      case 10:
        return [img10, "100%"];
      case 11:
        return [img11, "100%"];
      case 12:
        return [img12, "100%"];
      case 13:
        return [img13, "100%"];
      case 14:
        return [img14, "100%"];
      case 15:
        return [img15, "100%"];
      case 16:
        return [img16, "100%"];
      case 17:
        return [img17, "100%"];
      case 18:
        return [img18, "90%"];
      case 19:
        return [img19, "70%"];
      case 20:
        return [img20, "20%"];
      default:
        return [img1, "100%"];
    }
  };

  useEffect(() => {
    const video = document.getElementById("splash-bg");
    if (props.isMobile) {
      setVisible(true);
      return;
    }
    if (isBottom) {
      // video.classList.add("splash-bg");
      video.play();
    } else {
      // video.classList.remove("splash-bg");
      video.pause();
    }
    video.onended = () => {
      // alert("video ended");
      props.changeScreen();
    };
  }, [isBottom]);

  useEffect(() => {
    window.onscroll = (e) => {
      // check user scroll to bottom of the page
      console.log(
        e?.target?.scrollingElement?.scrollHeight -
          e?.target?.scrollingElement?.scrollTop,
        window.innerHeight
      );
      if (
        e?.target?.scrollingElement?.scrollHeight -
          e?.target?.scrollingElement?.scrollTop <=
        window.innerHeight + 1
      ) {
        console.log("bottom");
        // document.body.style.overflow = "hidden";
        setIsBottom(true);
      } else setIsBottom(false);

      let y = e?.target?.scrollingElement?.scrollTop;

      const label = Math.min(Math.floor(y / 30) + 1, 20);
      console.log(label);

      if (label > 1) {
        setshowArrow(false);
      } else if (label === 1) {
        setshowArrow(true);
      }
      let character = window?.document?.getElementById("splash-logo");
      let background_container = window?.document?.getElementById(
        "bg-container-splash"
      );
      background_container.style.opacity = 1 - label / 30;
      character.src = getImageByIndex(label)[0];
      character.style.opacity = getImageByIndex(label)[1];
    };
    let state = true;
    setInterval(() => {
      let character = window?.document?.getElementById("arrow");
      // console.log(character?.src);
      if (character === null || character === undefined) return;
      if (state) {
        character.src = arrow1;
      } else {
        character.src = arrow2;
      }
      state = !state;
    }, 300);
  }, []);

  return (
    <div className="App h-[200vh] relative">
      <div id="bg-container-splash" className="flex flex-col h-screen z-40">
        {showArrow && (
          <img
            src={arrow1}
            id="arrow"
            className="h-[30px] w-[26px] sticky top-[95%] right-[50%] left-[50%]"
          />
        )}
        <div
          className={`flex justify-center flex-grow w-full overflow-y-auto ${
            !visible ? "items-center" : "items-end"
          }`}
        >
          <div
            id="defaultModal"
            tabIndex="-1"
            className={`overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex ${
              props.isMobile ? "top-[40%]" : "top-0"
            } `}
            aria-modal="true"
            role="dialog"
          >
            {!isBottom && (
              <img
                src={img1}
                alt="Man"
                id="splash-logo"
                className="max-h-[90vh] m-auto w-[70vw]"
                onClick={props.changeScreen}
                // onClick={() => {
                //   setVisible(true);
                // }}
              />
            )}
          </div>
          <Animated
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={visible}
            style={visible ? null : { display: "none" }}
          >
            <img
              src={man}
              alt="Man"
              className="w-[90vw]"
              // onClick={() => navigate("/app")}
              onClick={props.changeScreen}
            ></img>
          </Animated>
        </div>
      </div>
      {/* {!props.isMobile && (
        <video
          src={syndicateVideo}
          id="splash-bg"
          muted
          className="m-auto z-10"
        />
      )} */}
    </div>
  );
}

export default SplashMob;
