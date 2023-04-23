import React, {useEffect, useState} from 'react'
import { BallCanvas, RoundedCard  } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'



const Tech = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change the threshold to the desired value
    };

    handleResize(); // Call the function on mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? 
  <div className='flex flex-row flex-wrap justify-center gap-12'>
  {technologies.map((tech) => (
    <div key={tech.name} className='w-28 h-28'>
      <RoundedCard icon={tech.icon} />
      <div className='text-center mt-2 justify-center'>{tech.name}</div>
    </div>
  ))}
</div>
   : 
   <div className='flex flex-row flex-wrap justify-center gap-12'>
      {technologies.map((tech) => (
        <div key={tech.name} className='w-28 h-28'>
          <BallCanvas icon={tech.icon} />
          <div className='text-center mt-2 justify-center'>{tech.name}</div>
        </div>
      ))}
    </div>;
  
}

export default SectionWrapper(Tech, "tech")