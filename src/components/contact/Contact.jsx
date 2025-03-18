import React, { useRef, useState } from 'react';
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const message = formRef.current.message.value;

    if (!name || !email) {
      setError(true);
      return;
    }

    emailjs.sendForm('service_5i1u9dg', 'template_k2iwlcd', formRef.current, {
      publicKey: 'GULnndQ6chCMSJAr7',
    })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div ref={ref} className="contactform" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>shahkaran281@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Los Angeles, California</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 213 643 9959</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form onSubmit={sendEmail} ref={formRef} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={6} required placeholder='Message' name="message"></textarea>
          <button type="submit">Submit</button>
          {error && <span className="error">Error sending message</span>}
          {success && <span className="success">Message sent successfully!</span>}
        </motion.form>
      </div>
    </motion.div>
  );
}
