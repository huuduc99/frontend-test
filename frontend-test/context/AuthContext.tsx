import { createContext, useEffect } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    const response = await authService.checkAuthorization('admin');
    console.log('response', response);
  }

  return (
    <AuthContext.Provider value={{ checkAuthorization }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;