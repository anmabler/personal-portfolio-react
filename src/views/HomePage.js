import React from 'react'
import HomeContent from '../components/HomeContent'

// This is where I would fetch stuff from API and send as props to components or save as state variable.
export default function Home() {
  return (
    <div className='mx-auto p-10 bg-lavender-o shadow-2xl'>
      <HomeContent />
    </div>
  )
}
