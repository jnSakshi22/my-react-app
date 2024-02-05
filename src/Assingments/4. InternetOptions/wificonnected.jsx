import { useLottie } from "lottie-react";
import wificonnected from "./assets/animations/Internet.json";

const WifiConnected = () => {
  const styles = {
    checkAnimation: {
      position: "absolute",
      width: "100%",
      height: "50%",
      marginTop: "20%",
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
