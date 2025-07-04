import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <form action="https://formspree.io/f/xqaqrgqb" method='POST'>
            <input type="text" name='username' placeholder='Enter your name' required/>
            <input type='e-mail' name='e-mail' placeholder='Enter your E-mail id' required/>
            <textarea name='message' placeholder='write message' required></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact