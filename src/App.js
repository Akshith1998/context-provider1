import { createContext, useState } from "react";
import { Header } from "./Header";
import "./styles.css";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("akki");

  return (
    <UserContext.Provider value={{ user }}>
      <Header />
    </UserContext.Provider>
  );
}
