import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const colorsStore = ['red', 'green', 'blue']
const useMagicColor = () => {
  const [color, setColor] = useState('transparent')
  const colorRef = useRef('transparent')
  useEffect(() => {
    const timeOut = setInterval(() => {
      // console.log('color First ', color);
      console.log('Change color :', colorRef.current);
      const newColor = colorsStore[Math.floor(Math.random() * 3)]
      setColor(newColor)
      colorRef.current = newColor
    }, 1000)
    return () => {
      clearInterval(timeOut)
    }
  }, [])
  return {
    colorRef
  }
}

export default useMagicColor