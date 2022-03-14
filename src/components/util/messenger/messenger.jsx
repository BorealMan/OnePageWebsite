import React, {useState} from 'react'
import emailjs, { send } from 'emailjs-com'
import './messenger.css'

const sendStatus = {
    Open: "Open",
    InProgress: "InProgress",
    Success: "Success",
    Failed: "Failed"
}

function Messenger() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageSendStatus, setMessageSendStatus] = useState(sendStatus.Open) // Acts as message lock

    const USER_ID = 'user_7iocaheN7py1MfrFVRPmY'
    const SERVICE_ID = 'service_o35y2et'
    const TEMPLATE_ID = 'template_b1zy7q7'

    async function handleSubmit(e) {
        e.preventDefault()
        if (name === "" || email === "" || message === "") return // Check that input isn't blank
        if (messageSendStatus !== sendStatus.Open) return   // Check that the message lock is open
        setMessageSendStatus(sendStatus.InProgress) //  locks message lock
        // Send Message
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text)
            if (result.text === "OK") {
                setMessageSendStatus(sendStatus.Success) // Feed back if sucessfully
            } else {
                setMessageSendStatus(sendStatus.Failed) // Feed back on failure
            }
        })
        // Reset Form
        setName("")
        setEmail("")
        setMessage("")
        // Waiting For Feedback before opening message lock
        await Delay(5000)
        setMessageSendStatus(sendStatus.Open)
    }

    async function Delay(milliseconds) {
        return new Promise(res => setTimeout(res, milliseconds))
    }


    function setButtonFeedBackText() {
        if (messageSendStatus === sendStatus.Open) {
            return "Send"
        } else if (messageSendStatus === sendStatus.InProgress) {
            return "Sending..."
        } else if (messageSendStatus === sendStatus.Success) {
            return "Success!"
        } else {
            return "Failed"
        }
    }

    return (
    <div className='messenger'>
        <form name='send-email' className='messenger-form' onSubmit={e => handleSubmit(e)}>
            <input 
            placeholder='Name' 
            value={name} 
            className='messenger-name-input'
            type='text'
            name='from_name'
            required={true}
            onChange={e => setName(e.target.value)}
            />
            <input 
            type='email'
            placeholder='Email' 
            value={email} 
            name='from_email'
            required={true}
            className='messenger-name-input'
            onChange={e => setEmail(e.target.value)}
            />
            <textarea 
            placeholder='Enter Message...'
            className='messenger-textarea' 
            value={message}
            name='message'
            onChange={(e) => setMessage(e.target.value)}
            autoSave='false'
            autoComplete='false'
            required={true}
            />
            <button className='messenger-send-button'>{setButtonFeedBackText()}</button>
        </form>
    </div>
  )
}

export default Messenger