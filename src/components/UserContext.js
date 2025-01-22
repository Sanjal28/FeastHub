// creating context which can be used globally

import { createContext } from "react";

export const UserContext = createContext({
  loggedInUser: "Default User",
});
