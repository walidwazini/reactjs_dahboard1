import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('light')
    const [themeSetting, setThemeSetting] = useState(false)

    const setColor = colorValue => {
        // console.log(ev)
        setCurrentColor(colorValue)
        localStorage.setItem('colorMode', colorValue)
        setThemeSetting(false)
    }

    const setMode = ev => {
        console.log(ev.target.value)
        setCurrentMode(ev.target.value)
        localStorage.setItem('themeMode',ev.target.value)
    }

    const handleClick = (element) => {
        setIsClicked({ ...initialState, [element]: true })
    }

    return (
        <StateContext.Provider
            value={{
                initialState,
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                setColor, setMode,
                themeSetting, setThemeSetting
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)