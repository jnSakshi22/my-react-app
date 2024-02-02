import { useLottie } from "lottie-react";
import wifinotconnected from "./wifinotConnected.json";

const WifiNotConnected = () => {
  const styles = {
    checkAnimation: {
      position: "absolute",
      width: "100%",
      height: "50%",
      marginTop: "40%",
    },
  };
  const options = {
    animationData: wifinotconnected,
    loop: true,
    style: styles.checkAnimation,
  };
  const { View } = useLottie(options);

  return <>{View}</>;
};

export default WifiNotConnected;
