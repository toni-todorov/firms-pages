import { createContext, useContext, useCallback, useState, useEffect } from 'react'

const FirmContext = createContext()

export function useContextFirm() {
    return useContext(FirmContext)
}

const FirmContextInitializar = ({ children }) => {
    const [firms, setFirms] = useState()

    const getPartiallyFirmInfo = useCallback(async () => {
        const response = await fetch('/api/partialFirmInfo', {
            method: 'GET',
        })

        const data = await response.json()
        setFirms(data)
    }, [])

    useEffect(() => {
        getPartiallyFirmInfo()
    }, [getPartiallyFirmInfo])

    return <FirmContext.Provider value={{ firms }}>{children}</FirmContext.Provider>
}

export default FirmContextInitializar
