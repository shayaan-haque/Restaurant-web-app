import userContext from "../utils/Usercontext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <h2>This website is made by {user.email}</h2>
    </div>
  );
};

export default Footer;
