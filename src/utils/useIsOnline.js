import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [offline, setoffline] = useState(false);

  const useIsOnlineHelper = () => {
    const online = () => {
      setoffline(false);
    };
    const offline = () => {
      setoffline(true);
    };

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  };

  useEffect(() => {
    useIsOnlineHelper();
  }, []);
  return offline;
};

export default useIsOnline;
