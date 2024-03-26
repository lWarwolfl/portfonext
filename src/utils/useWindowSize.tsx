import React from 'react'

export default function useWindowSize(size: number = 550) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    setValue(window.innerWidth <= size)

    const handleResize = () => {
      setValue(window.innerWidth <= size)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [size])

  return value
}
