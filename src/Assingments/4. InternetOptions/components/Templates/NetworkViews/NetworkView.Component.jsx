import useIsOnline from "../../../Hooks/useOnline";
import NoNetworkView from "../../Organisms/NoNetworkView/NoNetworkView.Component";

const NetworkView = ({ children }) => {
  const isOnline = useIsOnline();

  return isOnline ? children : <NoNetworkView />;
};

export default NetworkView;
