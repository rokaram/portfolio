import { useState, useCallback, useEffect } from 'react'
const storageName = 'lang'

export const useLang = () => {
    const [lang, setLang] = useState(localStorage.getItem(storageName) || 'ru')

    const changeLang = useCallback(lg => {
        setLang(lg)  
    }, [])

    useEffect(() => {
        localStorage.setItem(storageName, lang)
    }, [lang])

    return { lang, changeLang }
}