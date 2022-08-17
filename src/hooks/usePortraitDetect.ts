import {useEffect, useState} from 'react'

export const usePortraitDetect = () => {
    const isClient = typeof window !== 'undefined'

    if (!isClient) {
        return false
    }

    const portrait = window.matchMedia("(orientation: portrait)");
    const [isPortrait, setIsPortrait] = useState<boolean>(false)
    const changeHandler = (event: MediaQueryListEvent) => setIsPortrait(!event.matches)

    useEffect(() => {
        portrait.addEventListener("change", changeHandler)
        return () =>  portrait.removeEventListener("change", changeHandler)
    }, [])

    return isPortrait
}
