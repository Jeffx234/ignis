import React, { useRef, useEffect } from 'react'

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
}

const ScrollReveal = ({ children, style }: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    async function animate() {
      if (ref.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(ref.current, {
          duration: 1000,
          delay: 100,
          distance: '0px',
          origin: 'bottom',
          easing: 'ease-in-out',
          scale: 1,
          reset: false,
        })
      }
    }

    animate()
  }, [ref])

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  )
}

export default ScrollReveal
