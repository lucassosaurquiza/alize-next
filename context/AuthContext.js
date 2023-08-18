import { createContext, useState } from "react"
// import { login } from "../api/auth"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [authError, setError] = useState(null)

  const startRegisterWhitEmailandPassword = (values) => {
    setLoading(true)
    // login(values)
    //   .then(({ data }) => setUser(data))
    //   .catch((err) => {
    //     console.log(err.response)
    //     setUser(null)
    //     setError(err.response.data)
    //   })
    //   .finally(()=> setLoading(false))
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      authError,
      startRegisterWhitEmailandPassword
    }}>
      {children}
    </AuthContext.Provider>
  )
}