import React from 'react'
import linkedin from '../images/LI-In-Bug.png'
import github from '../images/github-mark.png'

export default function ContactPage() {
  return (
    <div className='flex mx-auto'>
      <div className='pt-4 w-3/12 m-2'><a href="https://www.linkedin.com/in/martina-blixt-eriksson/"><img src={linkedin} alt="LinkedIn" /></a></div>
      <div className="w-3/12 m-2 "><a href="https://github.com/anmabler"><img src={github} alt="GitHub" /></a></div>
      <div></div>
    </div>
  )
}
