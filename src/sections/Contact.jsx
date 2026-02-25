import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'
import Particles from '../components/Particles'

const Contact = () => {
    const [formData, setFormData] = useState({name:"", email:"", message:""})
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            console.log("Form Submitted:", formData)
            await emailjs.send ('service_3u1x77m', 'template_d83qfv8', {
                from_name: formData.name,
                to_name: "Elijah",
                from_email: formData.email,
                to_email: "twainemarquez@gmail.com",
                message: formData.message,
            }, "pV0vOAmODTMH8Sdq2"
        )
            setIsLoading(false)
            showAlertMessage("Success", "Message sent successfully!")
            setFormData({name:"", email:"", message:""})

        } catch (error) {
            setIsLoading(false)
            console.error(error)
            showAlertMessage("Danger", "Something went wrong!")
        }   
        // service_3u1x77m
        // template_d83qfv8
    }

  return (
    <section id="contact" className='relative flex-items-center c-space section-spacing'>
        <Particles className='absolute inset-0 z-0' quantity={100} ease={80} color={'#ffffff'} refresh/>
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className='flex flex-col items-center justify-center max-w-md mx-auto border-border-white/10 rounded-2xl bg-primary'>
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className='text-heading'>Let's Talk</h2>
                <p className='font-normal text-neutral-400'>Whether you're looking to build a new website, improve your existing platform, or bring a unique idea to life, I'm here to help you make it happen.</p>
            </div>
            <form className='w-full' action="" onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label htmlFor="name" className='field-label'>Full Name</label>
                    <input type="text" id='name' name='name' className='field-input field-input-focus' placeholder='John Doe' required autoComplete='name' value={formData.name} onChange={handleChange} />
                </div> 

                <div className='mb-5'>
                    <label htmlFor="email" className='field-label'>Email</label>
                    <input type="email" id='email' name='email' className='field-input field-input-focus' placeholder='john.doe@example.com' required autoComplete='email' value={formData.email} onChange={handleChange} />
                </div>

                <div className='mb-5'>
                    <label htmlFor="message" className='field-label'>Message</label>
                    <textarea id='message' name='message' className='field-input field-input-focus' placeholder='Your message here...' required autoComplete='message' rows="4" value={formData.message} onChange={handleChange} />
                </div>
                <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                    {!isLoading ? "Send" : "Sending..."}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact