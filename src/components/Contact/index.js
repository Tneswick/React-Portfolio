import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    // get value and the name from the input that triggered the event
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'fullName') {
      setFullName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // prevent page reload
    e.preventDefault();

    if (!validateEmail(email) || !fullName || !message) {
      setErrorMessage('All fields must be populated and you must enter a valid email address')
      // break out of function to prevent spamming
      return;
    }

    setFullName('');
    setEmail('');
    setMessage('');
    setErrorMessage("Thank you for contacting me, I'll get back to you as soon as possible");
  }
  
  return (
    <>
      <h2 className='contact-header'>Contact</h2>
      {/* <form className='contact-form d-grid'>
        <input
          value={fullName}
          name='fullName'
          onChange={handleInputChange}
          type='text'
          placeholder=' First and Last Name'
        />
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder=' Email'
        />
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder=' Type a small message here'
          rows={6}
          cols={50}
        ></textarea>
        <button className='btn contact-submit-btn' type='button' onClick={handleFormSubmit}>Submit</button>
      </form> */}
      <div className='contact-form d-grid'>
        <a className='contacts' href='mailto: nezboppin@gmail.com'>nezboppin@gmail.com</a>
        <a className='contacts' href='https://bit.ly/3BC7J0P'>LinkedIn</a>
      </div>
      {errorMessage && (
        <div>
          <p className='error-message'>{errorMessage}</p>
        </div>
      )}
    </>
  )
}

export default Contact;