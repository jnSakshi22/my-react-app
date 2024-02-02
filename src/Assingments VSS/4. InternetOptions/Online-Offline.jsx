import WifiConnected from "./wificonnected";
import WifiNotConnected from "./wifinotConnected";
import useInternetOptions from "./useInternetOptions";
import "./app.css";

const InternetOptions = () => {
  const { isOnline } = useInternetOptions();

  return (
    <>
      {isOnline ? (
        <>
          <div className="container">
            <h1>
              <strong>Hey!! You are Online...</strong>
            </h1>
            <WifiConnected />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <h1>
              <strong>Oops!! You are Offline...</strong>
            </h1>
            <WifiNotConnected />
          </div>
        </>
      )}
    </>
  );
};

export default InternetOptions;
