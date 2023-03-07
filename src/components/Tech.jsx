import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-12'>
      {technologies.map((tech) => (
        <div key={tech.name} className='w-28 h-28'>
          <BallCanvas icon={tech.icon} />
          <div className='text-center mt-2 justify-center'>{tech.name}</div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")