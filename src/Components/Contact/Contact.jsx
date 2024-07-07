import React from 'react'
import "./Contact.css"
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'b8455b29-de35-4b09-8f55-058d6df8bbc2')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      alert('Thank you. Your message has been sent successfully.')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>sriprakhar777@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 96960 13164</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>UP, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="emial" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            {' '}
            Submit Now
          </button>
          {/* <span>{result}</span> */}
        </form>
      </div>
    </div>
  )
}

export default Contact
