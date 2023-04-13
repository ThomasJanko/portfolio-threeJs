import React from 'react'
import { motion }  from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import Tilt from 'react-tilt'
import { fadeIn } from '../utils/motion'

const Hero = () => {
  return (
    <>
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Je suis <span className='text-[#915eff]'>Thomas</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je suis un développeur web full-stack <br className='sm:block hidden' />
            En tant que développeur web full-stack, j'ai acquis une grande expérience dans la création de sites web et d'applications mobiles, en utilisant les dernières technologies et les meilleures pratiques du secteur.
            </p>
        </div>
      </div>
      
      <div className='w-full h-full pt-32'>
        <ComputersCanvas />
      </div>

      

       

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.dev
                animate={{y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
                 />
            </div>
          </a>
          
        </div>
        
    </section>

    <Tilt className="w-1/3 mx-auto">
      <motion.div variants={fadeIn("down", "spring", 0.5, 4.75)}>
        <div options={{max: 25, scale:1 ,speed: 100}}>
          <a href="../../public/CV.pdf" download="CV_JANKOWSKI_Thomas.pdf" >
            <img className='rounded-md mx-auto' src="../../public/CV.PNG" alt="JANKOWSKI Thomas" />
          </a>
        </div>
      </motion.div>
    </Tilt>
    
    </>
  )
}

export default Hero