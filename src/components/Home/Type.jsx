import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <div className="type-container" style={{ 
            color: "#7500fa",
            fontSize: "1.6em",
            fontWeight: "600",
            position: "relative",
            zIndex: 2,
            minHeight: "3em"
        }}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("MERN Stack Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Passionate Blockchain Enthusiast")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Committed Open Source Contributor")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Effective Problem Solver")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                }}
                options={{
                    loop: true,
                    cursor: "|",
                    delay: 50,
                }}
            />
        </div>
    );
};

export default Type;