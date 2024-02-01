import WifiConnected from "./wificonnected";
import WifiNotConnected from "./wifinotConnected";
import useInternetOptions from "./useInternetOptions";

const InternetOptions = () => {
  const { internet } = useInternetOptions();

  return (
    <>
      {internet ? (
        <>
          <h4>You are Online</h4>
          <WifiConnected style={{ width: "20px", height: "20px" }} />
        </>
      ) : (
        <>
          <h4>You are Offline</h4>
          <WifiNotConnected />
        </>
      )}
    </>
  );
};

export default InternetOptions;
