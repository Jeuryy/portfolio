import './Contact.css'
import { useEffect, useState, useRef } from "react";
import * as React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){
    const contact = document.getElementById("contact5");
    const form = useRef();
    const [emailData, setEmailData] = useState({
        user_name: "",
        user_email: "",
        user_subject: "",
        user_message: ""
    });
    const success = () => toast.success("Message sent!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const error = () => toast.error("Message not sent!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            contact.classList.add("active")
        } else {
            entry !== undefined && contact.classList.remove("active")
        }
    }, [inView]);

    const handleForm = e => {
        const {name, value} = e.target;
        setEmailData(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
        //console.log(value)
    }

    const handleCancel = e => {
        e.preventDefault();
        setEmailData({
            user_name: "",
            user_email: "",
            user_subject: "",
            user_message: ""
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_atl8jid', 'template_b0wu5gj', form.current, 'cgWZZykWCEJfH7f5R')
            .then((result) => {
                console.log(result.text);
                success();
                setTimeout(() => {
                    setEmailData({ 
                        user_name: "",
                        user_email: "",
                        user_subject: "",
                        user_message: ""
                    })
                },1000)
            }, (error) => {
                console.log(error.text);
                error();
            });
    
    };

    return(
        <section id="contact" data-observer ref={ref}>
            <div className="contact-container">
                <div className="contact-left" data-aos="fade-right">
                    <h3 className="contact-title">Contact me</h3>
                </div>
                <div className="contact-right" data-aos="fade-right">
                    <div className="form-container">
                        <form ref={form} id="form" onSubmit={handleSubmit}>
                            <input type="text" name="user_name" placeholder="Full name" value={emailData.user_name}
                            className="input" data-type="user_name" required onChange={handleForm}/>
                            <input type="email" name="user_email" placeholder="Email"  value={emailData.user_email}
                            className="input" data-type="user_email" required onChange={handleForm}/>
                            <input type="text" name="user_subject" placeholder="Subject" value={emailData.user_subject}
                            className="input" data-type="user_subject" onChange={handleForm}/>
                            <textarea name="user_message" id="message" cols="30" rows="1" placeholder="Message" value={emailData.user_message} 
                            className="input" data-type="user_message" required onChange={handleForm}></textarea>
                            <div className="buttons">
                                <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                                <button type="submit" className="btn-send">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />
        </section>
    )
} 