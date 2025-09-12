import React, { createContext, useState, ReactNode } from "react";

// Define the context type
interface AppContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Initialize context with undefined to allow for type safety
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface ContextProps {
  children: ReactNode;
}

export default function Context({ children }: ContextProps) {
  const [theme, setTheme] = useState<string>("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
