import { createContext, ReactElement, useEffect } from "react";
import { JsxElement } from "typescript";
import authService from "../services/auth.service";

const AuthContext = createContext<any>(null);

interface Props {
  children: ReactElement | ReactElement[];
}

export const AuthProvider = ({ children }: Props) => {
  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    const user = localStorage.getItem('user');

    if (!!!user) {
      window.location.replace('/login');
    }
  }

  return (
    <AuthContext.Provider value={{checkAuthorization}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;