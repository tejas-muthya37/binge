import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("ENCODED_TOKEN_2");
  const [navbarButtonText, setNavbarButtonText] = useState(
    encodedToken === null ? "SIGN IN" : "SIGN OUT"
  );

  return (
    <NavbarContext.Provider
      value={{
        navbarButtonText,
        setNavbarButtonText,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbar = () => useContext(NavbarContext);

export { NavbarProvider, useNavbar };
