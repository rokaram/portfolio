import { useCallback } from 'react'

export const useAnim = () => {
    const startAnim = useCallback((htmlEl, animName) => {
        htmlEl.classList.remove(animName, 'animated')
        setTimeout(() => htmlEl.classList.add(animName, 'animated'), 0)
    })

    return { startAnim }
}