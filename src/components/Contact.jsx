import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  const formRef = useRef()
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)

    emailjs.send(
      'service_wy41tiq',
      'template_y18jt6o',
        {
          from_name: form.name,
          to_name: 'Thomas',
          from_email: form.email,
          to_email: 'thomas78125@gmail.com',
          message: form.message
        },
        'yLxSJ8A4tAdfoQ3GZ'
      )
      .then(() => {
        setloading(false)
        alert('Merci ! Je reviendrai vers vous dès que possible !')
        setform({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setloading(false)
        console.log(error)
        alert("Erreur lors de l'envoie")
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 rounded-2xl p-8'>
          <p className={styles.sectionSubText}>Get in touch </p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Votre nom</span>
              <input 
                type="text" 
                name='name' 
                value={form.name} 
                onChange={handleChange} 
                placeholder="Quel est votre nom ?" 
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Votre email</span>
              <input 
                type="email" 
                name='email' 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Quel est votre email ?" 
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Votre message</span>
              <textarea rows='7'
                type="text" 
                name='message' 
                value={form.message} 
                onChange={handleChange} 
                placeholder="Que voulez-vous me dire ?" 
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
              />
            </label>

            <button type='submit' className='bg-tertiary py-3 px-8 outline-none font-bold shadow-md text-white w-fit shadow-primary rounded-xl' >
              {loading ? '...' : 'Envoyer'}
            </button>

          </form>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>

    </div>
  )
}

export default SectionWrapper (Contact, "contact")