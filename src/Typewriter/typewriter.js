import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: ["Hello 👋, I am Abhishek Kumar Mishra"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
    
  );
}

export default TypeWriter;
