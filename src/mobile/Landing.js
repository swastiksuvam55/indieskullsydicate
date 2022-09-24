import iSSlogo from "../assets/logo.png";
import "./App.css";
import { useState } from "react";
import roadmapLogo from "../assets/roadmap.png";
import syndicate from "../assets/thesyndicate.png";
import ship from "../assets/ship-icon.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import mint from "../assets/mint.png";

function LandingMobile(props) {
    const [visible, setVisible] = useState(false);
    const [showMint, setshowMint] = useState(true);

    const animate = () => {
        var character = window?.document?.getElementById("character");
        var character2 = window?.document?.getElementById("character2");
        character.classList.add("left-animation");
        character2.classList.add("right-animation");
        setTimeout(() => {
            setshowMint(true);
        }, 800);
    };

    setTimeout(() => setVisible(true), 650);
    return (
        <div className="App relative">
            <div id="bg-container" className="flex flex-col h-screen">
                <div className="py-8 mx-4">
                    {/* <Animated
            animationIn="slideInDown"
            animationOut="slideOutUp"
            isVisible={visible}
          > */}
                    <div className="flex justify-between items-center">
                        <img src={iSSlogo} className="h-20"></img>


                        {socialMedia()}
                    </div>
                    {/* </Animated> */}
                </div>
                {mintSoon()}
                <div className="flex justify-center items-end w-full">


                    {roadmapStorybtn()}
                </div>
            </div>
        </div>
    );

    function mintSoon() {
        return (
            <div className="flex flex-col flex-grow items-center justify-center w-full justify-center">
                {showMint && (
                    <div className="flex flex-row flex-grow justify-center items-center">
                        <h1 className="text-white font-alphaEcho text-4xl">
                            Mint Date<br></br>Will be <br /> announced soon
                        </h1>
                    </div>
                )}
            </div>
        );
    }

    function roadmapStorybtn() {
        return (
            <div className="flex items-center justify-evenly w-full my-16">
                <img src={mint} className="w-28 cursor-pointer" />
                <img
                    src={syndicate}
                    className="w-20 cursor-pointer"
                    onClick={() => props.changeScreen("story")}
                >

                </img>

                <img
                    src={roadmapLogo}
                    className="w-20 cursor-pointer"
                    onClick={() => props.changeScreen("roadmap")}
                ></img>
            </div>
        );
    }

    function socialMedia() {
        return (
            <div className="flex items-center justify-evenly">
                <img src={ship} className="w-10 m-4 cursor-pointer"></img>

                <img src={twitter} className="w-10 m-4 cursor-pointer"></img>

                <img src={discord} className="w-10 m-4 cursor-pointer"></img>
            </div>
        );
    }
}

export default LandingMobile;
