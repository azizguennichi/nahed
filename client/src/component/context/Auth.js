import React from 'react'
const MonContexte = React.createContext({
    isAuthenticated: false,
    setIsAuthenticated:value=>{}
})
export default MonContexte