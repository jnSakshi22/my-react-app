import ClipLoader from "react-spinners/ClipLoader";
import { LoadingContainer } from "./LoaderView.Styles";

const LoaderView = () => {
  return (
    <LoadingContainer>
      <ClipLoader />
    </LoadingContainer>
  );
};

export default LoaderView;
