import React from 'react'
import './contactPage.css'
import Messenger from '../../util/messenger/messenger'

function ContactPage() {
  return (
    <div className='contact-page'>
        <h1 className='contact-page-title'>Contact</h1>
        <p className='contact-page-description'>Usually I respond within 24 hours.</p>
        <Messenger />
    </div>
  )
}

export default ContactPage