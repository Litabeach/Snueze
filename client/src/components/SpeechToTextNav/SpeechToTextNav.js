import { useRef, useState } from "react";
import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./speechnav.css"
import ReactTooltip from 'react-tooltip';

function SpeechToTextNav() {

  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.location.replace("http://localhost:3000/" + website.split(" ").join(""));
        // window.location.replace("https://snueze.herokuapp.com/" + website.split(" ").join(""));
      },
    },

  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container-nav">
        Browser does not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });

  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();


  };
  return (
    <div className="microphone-wrapper-nav">
      <span data-tip="Click me to navigate with speech. Say 'open community' to try it out!">
        <div className="mircophone-container-nav">
          <div
            className="microphone-icon-container-nav"
            ref={microphoneRef}
            onClick={handleListing}
          >
            <img src="img/microphone.png" className="microphone-icon-nav" />
          </div>
          {isListening && (
            <img src="img/stopbutton.png" className="microphone-stop-nav" onClick={stopHandle} />
          )}
        </div>
      <ReactTooltip />
      </span>
    </div>
  );
}
export default SpeechToTextNav;