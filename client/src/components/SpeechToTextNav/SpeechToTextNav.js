import { useRef, useState } from "react";
import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./speechnav.css"
import microPhoneIcon from "../../images/microphone.png";



function SpeechToTextNav() {

  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.location.replace("http://localhost:3000/" + website.split(" ").join(""));
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
  // const handleReset = () => {
  //   stopHandle();
  //   resetTranscript();
  // };
  return (
    <div className="microphone-wrapper-nav">
      <div className="mircophone-container-nav">
        <div
          className="microphone-icon-container-nav"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={microPhoneIcon} className="microphone-icon-nav" />
        </div>
        {/* <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div> */}
        {/* {isListening && (
          <button className="microphone-stop-nav btn" onClick={stopHandle}>
            Stop
          </button>
        )} */}
      </div>

        {/* {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )
      } */}
    </div>
  );
}
export default SpeechToTextNav;