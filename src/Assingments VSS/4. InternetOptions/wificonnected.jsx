import { useLottie } from "lottie-react";
import wificonnected from "./wifi_connected.json";

const WifiConnected = () => {
  const styles = {
    checkAnimation: {
      position: "absolute",
      width: "150%",
      height: "115%",
      marginLeft: "-17%",
      marginTop: "-7%",
    },
  };
  const options = {
    animationData: wificonnected,
    loop: true,
    style: styles.checkAnimation,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default WifiConnected;