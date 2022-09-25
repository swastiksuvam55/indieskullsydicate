import man from "../assets/black-man.png";
import "./AppMobile.css";
import logo from "../assets/Layer 3.png";
import { Animated } from "react-animated-css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SplashMobile(props) {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    return (
        <div className="App">
            <div id="bg-container-splash" className="flex flex-col h-screen">
                <div
                    className={`flex justify-center flex-grow w-full ${
                        !visible ? "items-center" : `items-end`
                    }`}
                >
                    <Animated
                        animationIn="slideInUp"
                        animationOut="slideOutDown"
                        className={'justify-center flex'}
                        isVisible={!visible}
                        style={!visible ? null : { display: "none" }}
                    >
                        <img
                            src={logo}
                            alt="Man"
                            className="w-1/2"
                            onClick={props.changeScreen}
                        ></img>
                    </Animated>
                   
                </div>
            </div>
        </div>
    );
}

export default SplashMobile;
