import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_LIGHT'

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

localStorage.setItem(CACHE_KEY, 'true')

const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleTheme: () => null })

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const handleSetup = useCallback(event=>{
    if(event && event.data && typeof event.data === "string" && event.data.startsWith("[iFrameSizer]message:")){
      const dataStr = event.data.substring("[iFrameSizer]message:".length);
      const data = JSON.parse(dataStr);
      console.log("data.isDark", data.isDark);
      setIsDark(()=>data.isDark);
    }
  }, []);
  useEffect(()=>{
    window.addEventListener("message", handleSetup);
    return () => {
      window.removeEventListener('message', handleSetup);
    };
  }, [handleSetup]);

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
