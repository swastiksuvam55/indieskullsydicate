import iSSlogo from "../assets/logo.png";
import "./App.css";
import { useState } from "react";
import roadmapLogo from "../assets/roadmap.png";
import syndicate from "../assets/thesyndicate.png";
import ship from "../assets/ship-icon.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import mint from "../assets/mint.png";

function RoadmapMobile(props) {
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
                <div className="flex flex-col flex-grow m-auto overflow-scroll w-full px-4">
                    <h1 className="text-white font-alphaEcho text-4xl">Roadmap</h1>

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
                <img src={mint} className="w-20 cursor-pointer" onClick={props.changeScreen("mint")} />
                <img
                    src={syndicate}
                    className="w-20 cursor-pointer"
                    onClick={() => props.changeScreen("story")}
                >

                </img>

                <img
                    src={roadmapLogo}
                    className="w-28 cursor-pointer"
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

export default RoadmapMobile;
