import React, { useState, useEffect } from "react";
import skull from "./assets/right_new_1.png";
import man from "./assets/left_new.png";
import constants from "./utils/constants";

export default function CheckWhiteList() {
  const [isMobile, setIsMobile] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const [wlState, setWlState] = useState("");

  useEffect(() => {
    if (window.innerWidth > 500) {
      setIsMobile(false);
    } else setIsMobile(true);
  }, []);

  async function requestAccount(showError) {
    const alertMessage = showError ?? false;
    if (window.ethereum) {
      if (walletAddress !== "") {
        // checkWl(walltetAddressSmall);
        if (alertMessage) alert("Wallet already connected");
        return walletAddress;
      }

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        return accounts[0];
      } catch (error) {
        alert(error);
        return "";
      }
    } else {
      alert("Metamask not detected");
      return "";
    }
  }

  const animate = () => {
    const character = window?.document?.getElementById("character");
    const character2 = window?.document?.getElementById("character2");
    character?.classList?.remove("trans-left");
    character2?.classList?.remove("trans-right");
    character.classList.add("left-right-animation");
    character2.classList.add("right-left-animation");
  };

  //   const removeAnimation = () => {
  //     const character = window?.document?.getElementById("character");
  //     const character2 = window?.document?.getElementById("character2");
  //     character?.classList?.remove("trans-left");
  //     character2?.classList?.remove("trans-right");
  //     character?.classList?.remove("left-animation");
  //     character2?.classList?.remove("right-animation");
  //     character?.classList?.add("right-animation1");
  //     character2?.classList?.add("left-animation1");
  //   };

  const checkWl = async () => {
    let isWhiteList = false;
    let isSkullList = false;

    const walleteAddress = await requestAccount();
    animate();
    setTimeout(() => {
      constants.whiteList.forEach((item) => {
        if (item.toLowerCase() === walleteAddress.toLowerCase()) {
          isWhiteList = true;
        }
      });
      constants.SkullLists.forEach((item) => {
        if (item.toLowerCase() === walleteAddress.toLowerCase()) {
          isSkullList = true;
        }
      });
      console.log("is whitelist", isWhiteList);
      console.log("is skullListed", isSkullList);
      if (isWhiteList && isSkullList) {
        alert(
          "You are in both whitelist and skulllist, please contact the team"
        );
      } else if (isWhiteList) {
        setWlState("wl");
      } else if (isSkullList) {
        setWlState("sl");
      } else {
        setWlState("none");
      }
    }, 3000);
  };

  return (
    <div>
      {!isMobile ? (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center main-web relative">
          <div className="m-auto flex absolute bottom-0">
            <img
              src={man}
              alt="Man"
              id="character"
              className="h-[73vh] trans-left"
              onClick={checkWl}
            />

            <img
              src={skull}
              onClick={checkWl}
              id="character2"
              className="h-[73vh] trans-right z-10"
            />
          </div>
          {wlState !== "" && (
            <div className="m-auto h-[73vh] justify-center items-center flex flex-col absolute bottom-0 ">
              {wlState === "wl" && (
                <p className="font-alphaEcho text-green-600 text-4xl">
                  You are in <br /> White list
                </p>
              )}
              {wlState === "sl" && (
                <p className="font-alphaEcho text-white text-4xl">
                  You are in <br /> Skull list
                </p>
              )}
              {wlState === "none" && (
                <p className="font-alphaEcho text-red-600 text-4xl">
                  You aren't in <br /> white/skull list
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          className="w-[100vw] h-[100vh] flex flex-col justify-center items-center relative"
          id="bg-container-mobile"
        >
          <div className="m-auto flex absolute bottom-0 ">
            <img
              src={man}
              alt="Man"
              id="character"
              className="w-[40vw] trans-left"
              onClick={checkWl}
            />

            <img
              src={skull}
              onClick={checkWl}
              id="character2"
              className="w-[40vw] trans-right z-10"
            />
          </div>
          {wlState !== "" && (
            <div className="m-auto absolute bottom-[10%] z-[10]">
              {wlState === "wl" && (
                <p className="font-alphaEcho text-green-600 text-xl">
                  You are in <br /> White list
                </p>
              )}
              {wlState === "sl" && (
                <p className="font-alphaEcho text-white text-xl">
                  You are in <br /> Skull list
                </p>
              )}
              {wlState === "none" && (
                <p className="font-alphaEcho text-red-600 text-xl">
                  You aren't in <br /> white/skull list
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
