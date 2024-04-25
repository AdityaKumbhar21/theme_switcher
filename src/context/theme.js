import { createContext, useContext } from "react";



// Creating context 

export const themeContext = createContext({
    theme: "light",   //theme that is to be set
    darkTheme: () => {},  
    lightTheme: () => {}
})

export const ThemeProvider = themeContext.Provider // initializing the Provider

export default function useTheme(){ 
    return useContext(themeContext)  // useTheme hook to consume the context
}