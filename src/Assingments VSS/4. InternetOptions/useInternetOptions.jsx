import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInternetOptions = () => {
  const [internet, setInternet] = useState(true);

  useEffect(() => {
    const handleStatusChange = () => {
      const isOnline = window.navigator.onLine;
      setInternet(isOnline);

      if (isOnline) {
        toast("Hey!! You are online. Please continue browsing...", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast(
          "Hey!! You are offline. Please check your Internet Connections..",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    };

    const intervalID = setInterval(handleStatusChange, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return { internet };
};

export default useInternetOptions;
