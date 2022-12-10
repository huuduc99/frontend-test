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
    const response = await authService.checkAuthorization('admin');
  }

  return (
    <AuthContext.Provider value={{checkAuthorization}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;