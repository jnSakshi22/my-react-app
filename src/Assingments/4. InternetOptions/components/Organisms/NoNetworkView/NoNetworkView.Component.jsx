import Lottie from "lottie-react";
import NoInternetAnimation from "../../../assets/animations/No-internet.json";
import {
  NoNetworkViewContainer,
  NoNetworkViewElement,
} from "./NoNetworkView.Styles";

const NoNetworkView = () => {
  return (
    <NoNetworkViewContainer>
      <NoNetworkViewElement>
        <Lottie animationData={NoInternetAnimation} loop={true} />
        <p>No Internet Available 🙄</p>
      </NoNetworkViewElement>
    </NoNetworkViewContainer>
  );
};

export default NoNetworkView;
