import React, { useState, createContext } from 'react'

export const OffCanvasMenuContext = createContext()

const Provider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <OffCanvasMenuContext.Provider
            value={{
                isOpen,
                handleBurgerMenuClick: () => setIsOpen(!isOpen),
                handleMenuItemClick: () => setIsOpen(false),
            }}
        >
            {children}
        </OffCanvasMenuContext.Provider>
    )
}

const OffCanvasMenuProvider = ({ element }) => <Provider>{element}</Provider>

export default OffCanvasMenuProvider
