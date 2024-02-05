import useSpeechRecognition from "./useSpeechRecoginition";

const VoiceToText = () => {
  const { startListening, isListening, message } = useSpeechRecognition();

  return (
    <>
      <button onClick={startListening}>
        {isListening ? "It is listening" : "Start listening"}
      </button>
      <p>{message}</p>
    </>
  );
};

export default VoiceToText;
