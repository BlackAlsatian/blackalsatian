import { useState, createContext } from 'react'

export const PageStyleContext = createContext()
PageStyleContext.displayName = 'PageStyle'

const Provider = ({ children, element }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [pageStyle, setPageStyle] = useState('default')

    return (
        <PageStyleContext.Provider
            value={{
                isOpen,
                handleBurgerMenuClick: () => setIsOpen(!isOpen),
                handleMenuItemClick: () => setIsOpen(false),
                setPageStyle,
                pageStyle,
            }}
            element={element}
        >
            {children}
        </PageStyleContext.Provider>
    )
}

const PageStyleProvider = ({ element }) => <Provider>{element}</Provider>

export default PageStyleProvider
