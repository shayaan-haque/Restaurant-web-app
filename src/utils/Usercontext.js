import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy",
    email: "Dummydgp@gmail.com",
  },
});

export default userContext;
