import React from 'react'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'Holdhand | O nas'
  }, [])

  return <div>About</div>
}

export default About
