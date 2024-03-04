import { useEffect } from 'react'
import { useLenis } from './lenis'

export function useScroll(callback: () => void) {
  const lenis = useLenis().lenis

  useEffect(() => {
    if (!lenis) return
    lenis.on('scroll', callback)

    return () => {
      lenis.off('scroll', callback)
    }
  }, [lenis, callback])
}
