import { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext();

export function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
