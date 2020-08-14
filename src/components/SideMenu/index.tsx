/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Container } from './styles'

const scrollThreshold = 300

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ]

  const className = classes.join(' ').trim()

  function toggleActiveMenu() {
    setIsActive(prevState => !prevState)
  }

  window.toggleActiveMenu = toggleActiveMenu

  return <Container className={className}>{children}</Container>
}

export default SideMenu
