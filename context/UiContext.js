import { createContext, useContext, useState } from "react"

const UiContext = createContext()

export const useUiContext = () => {
  return useContext(UiContext)
}

export const UiProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <UiContext.Provider value={{
      showLoginModal,
      setShowLoginModal
    }}>
      {children}
    </UiContext.Provider>
  )
}