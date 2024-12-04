import { useContext } from "react";
import { UserContext } from "./App";

export const Header = () => {
  const user = useContext(UserContext);
  console.log(user);
  return <div></div>;
};
