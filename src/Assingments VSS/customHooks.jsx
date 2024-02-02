import { useEffect, useState } from "react";

const useSpeechRecognition = () => {
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Initialize Speech recognition
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();

    // Setting Language
    recognition.lang = "en-US";

    // Enabling continuous listening
    recognition.interimResults = true;

    recognition.onstart = () => {
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
      alert(
        "Boss! You're not allowed to use this feature. Please allow voice permission"
      );
    };

    setSpeechRecognition(recognition);

    // Cleanup on unmount
    return () => {
      if (speechRecognition) {
        speechRecognition.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (speechRecognition) {
      speechRecognition.start();
    }
  };

  return { startListening, isListening, message };
};

export default useSpeechRecognition;