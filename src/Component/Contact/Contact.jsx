import React, { useRef , useState} from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();
    const [done, setDone]=useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_punnofq', 'template_3ajbqlc', form.current, 'viEbcroP4Wrw7ecJM')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact</span>
                <div className="s-blur blur"
                style={{background:"#abf1ff94"}}
                ></div>
            </div>
        </div>
        {/* rightside */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='message'/>
                <input type="submit" value="send" className="button " />
                <span>{done && "Thanks for Contacting me"}</span>
                <div className="c-blur blur" 
                style={{background:"var(--purpul)"}}
                ></div>
            </form>
        </div>
    </div>
    )
}

export default Contact;