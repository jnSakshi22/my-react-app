import { useLottie } from "lottie-react";
import loadingAnim from "./Loading-anime.json";

const LoadingCircle = () => {
  const options = {
    animationData: loadingAnim,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LoadingCircle;
