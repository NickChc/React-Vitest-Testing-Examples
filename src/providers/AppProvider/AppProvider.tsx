import { createContext, PropsWithChildren } from "react";
import { ThemeProvider } from "../ThemeProvider";

interface AppContextProps {}

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
