import { createContext, useContext } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("ENCODED_TOKEN_2");

  return (
    <TokenContext.Provider value={{ encodedToken }}>
      {children}
    </TokenContext.Provider>
  );
};

const useToken = () => useContext(TokenContext);

export { TokenProvider, useToken };
