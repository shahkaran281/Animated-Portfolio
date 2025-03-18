import React from 'react'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>My Portfolio</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/karan---shah/" target='_blank'><img src="/linkedin.png" alt="" /></a>
          <a href="https://github.com/shahkaran281" target='_blank'><img src="/github.png" alt="" /></a>
          <a
            className="from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="https://drive.google.com/file/d/1G2h6qmQhscg2400SM1uvB1EMFzB_E4Wr/view?usp=sharing"
            target="_blank"
          >
            <img src='/resume-icon.png' />
            {/* <strong>Resume</strong> */}
          </a>
        </div>
      </div>
    </div>
  )
}
