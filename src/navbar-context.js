import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navbarButtonText, setNavbarButtonText] = useState("SIGN IN");

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
