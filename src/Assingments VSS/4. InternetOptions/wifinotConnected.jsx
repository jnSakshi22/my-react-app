import { useLottie } from "lottie-react";
import wifinotconnected from "./wifinotConnected.json";

const WifiNotConnected = () => {
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
    animationData: wifinotconnected,
    loop: true,
    style: styles.checkAnimation,
  };
  const { View } = useLottie(options);

  return <>{View}</>;
};

export default WifiNotConnected;
