import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import userContext from "../utils/Usercontext";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const offline = useIsOnline();
  const { user } = useContext(userContext);
  return (
    <div className="flex justify-between">
      <div>
        <img
          className="h-16 w-32"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-1536x864.png"
          alt="Swiggy Logo"
        ></img>
      </div>
      <div className="flex flex-1 justify-center mt-5 space-x-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        Cart
        <Link to={"/instamart"}>Instamart</Link>
        {isLoggedIn ? (
          <button
            className="p-2 m-2 bg-pink-300 rounded-2xl"
            onClick={() => setisLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 m-2 bg-pink-300 rounded-2xl"
            onClick={() => setisLoggedIn(true)}
          >
            Login
          </button>
        )}
        <h1>{offline ? "🍎" : "🍏"}</h1>
        <h1>{user.name}</h1>
      </div>
    </div>
  );
};
export default Header;
