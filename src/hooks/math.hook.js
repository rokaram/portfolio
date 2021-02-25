import { useCallback } from 'react'

export const useMath = () => {
    const rand = useCallback((min, max) => Math.round(Math.random() * (max - min) + min), [])
    return { rand }
}