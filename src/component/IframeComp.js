import React, { useEffect } from 'react';

const IFrameComponent = () => {
  useEffect(() => {
    console.log("hello");
    const output = document.querySelector(".output");

    //Here the window is waiting for a message from the parent window
    //The onMessage function is fired when a message is recieved
    window.addEventListener("message", onMessage, false);
    function onMessage(e) {
      output.innerHTML = e.data;
      e.ports[0].postMessage("Message back from the React");
    }
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return <p className="output">iFrame body</p>;
};

export default IFrameComponent;
