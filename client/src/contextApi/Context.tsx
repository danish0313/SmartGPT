import React, { createContext, useState, ReactNode, useEffect } from "react";
import { dummyUserData, dummyChats } from "../assets/assets";

// Define the context type
interface AppContextType {
  theme: string;
  UserChats: any;
  UserData: any;
  RecentChats: any;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setUserLogin: React.Dispatch<React.SetStateAction<string>>;
  setUserChats: React.Dispatch<React.SetStateAction<any>>;
}

// Initialize context with undefined to allow for type safety
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface ContextProps {
  children: ReactNode;
}

export default function Context({ children }: ContextProps) {
  const [theme, setTheme] = useState<string>("light");
  const [userLogin, setUserLogin] = useState<string>("");
  const [UserData, setUserdata] = useState<any>(null);
  const [UserChats, setUserChats] = useState<any>([]);
  const [RecentChats, setRecentChats] = useState<any>([]);

  const setUserData = async () => {
    setUserdata(dummyUserData);
  };

  const setRecentChat = async () => {
    setRecentChats(dummyChats);
  };

  const setUserChat = async () => {
    setUserChats(dummyChats[0]);
  };

  useEffect(() => {
    setUserData();
    setUserChat();
    setRecentChat();
  }, []);

  const value = {
    theme,
    UserData,
    UserChats,
    RecentChats,
    setTheme,
    setUserLogin,
    setUserChats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
