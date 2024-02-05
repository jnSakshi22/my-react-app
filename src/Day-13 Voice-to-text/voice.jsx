import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VoiceToText = () => {
  const [speech, setSpeech] = useState(null);
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Init Speech recognition
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();

    // Setting Language
    recognition.lang = "en-US";

    // Enabling continous listening
    recognition.interimResults = true;

    recognition.onstart = () => {
      //Logic to write whenever user is speaking
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          transcript += event.results[i][0].transcript;
        } else {
          transcript += event.results[i][0].transcript + " ";
        }
      }
      setMessage(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (err) => {
      console.log("Error: ", err);

      toast(
        "Boss! You're not allowed to use this feature. Please allow voice permission",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    };

    setSpeech(recognition);
  }, []);

  const onListen = () => {
    speech.start();
  };

  return (
    <>
      <button onClick={onListen}>
        {isListening ? "It is listening" : "Start listening"}
      </button>
      <p>{message}</p>
    </>
  );
};

export default VoiceToText;
