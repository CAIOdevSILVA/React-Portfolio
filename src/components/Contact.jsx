import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from '../utils/motion'

//q7s0CjZcUeofhnVGY
//template_c4ujo6s
//service_x0b5w07

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const  { name, value }  = e.target;
    setForm({ ...form, [name]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_x0b5w07',
      'template_c4ujo6s',
      {
        from_name: form.name,
        to_name: "Caio Silva",
        from_email: form.email,
        to_email: "caiossantosp5563@gmail.com",
        message: form.message
      },
      'q7s0CjZcUeofhnVGY'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name:"",
        email:"",
        message:""
      })
    }, (error) => {
      setLoading(false)
      console.log(error)

      alert("Something went wrong.")
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Entre em Contato</p>
        <h3 className={`${styles.sectionHeadText}`}>Contato</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu Nome</span>
            <input 
              type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu nome?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu Email</span>
            <input 
              type="email" 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua Mensagem</span>
            <textarea  
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Oque você quer falar?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            onClick={()=> setLoading(true)}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl-flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")