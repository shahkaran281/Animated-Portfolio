import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Mortgage-Backed Securities Prepayment Prediction System",
        img: "/MBS-Page.png",
        stack: "Javascript, CSS, Python, Scikit-learn, Pickle, Matplotlib/Seaborn",
        link: "https://github.com/shahkaran281/Morgage-Backed-Securities-Prepayment-System",
        desc: "The Mortgage-Backed Securities Prepayment Prediction System uses machine learning to predict prepayment risk in MBS, helping investors make informed decisions based on loan data like credit scores and loan-to-value ratios.",
        youtube: "https://www.youtube.com/watch?v=bvC8TNrxdjg"
    },
    {
        id: 2,
        title: "Dietary Assessment Using Deep Learning",
        img: "/Dietary-Assessment.png",
        stack: "Python, TensorFlow, MobileNetV2, OpenCV",
        desc: "Developed an image-based calorie estimation model using Transfer Learning (MobileNetV2) with 92% accuracy. Enabled users to classify and retrieve nutritional values from mobile photos, improving dietary tracking efficiency.",
    },
    {
        id: 3,
        title: "Android Event Discovery Application",
        img: "/Event-Discovery.png",
        stack: "Java, Android Studio, Google Maps API, Picasso, Glide, Volley, Material Design, JSON",
        desc: "Built an Android application for event discovery with real-time location-based services using Google Maps API. Integrated social media sharing for seamless event promotion across platforms.",
    },
    {
        id: 4,
        title: "Mobile Event Information Retrieval System",
        img: "/Event-Retrieval.png",
        stack: "Angular 8, NodeJS, HTML, CSS, JavaScript, TypeScript, Bootstrap, AXIOS, REST API",
        desc: "Developed a mobile-first event discovery website with dynamic search and Google Maps integration. Enhanced user interactions with Autocomplete and cookie storage for personalized sessions. Hosted on AWS for scalability.",
    },
    {
        id: 5,
        title: "Unified Data Management System",
        img: "/Unified-Data.png",
        stack: "Python, SQL, NoSQL",
        desc: "Engineered custom SQL and NoSQL databases in Python, including command parsing and execution, reducing query execution time by 25%. Enhanced search efficiency by 20% through optimized data handling and error management.",
    },
    {
        id: 6,
        title: "Ticketmaster Event Booking System",
        img: "/Ticketmaster.png",
        stack: "Python, Flask, HTML, CSS, JavaScript, AJAX, JSON, REST API",
        desc: "Developed a dynamic Angular web app with a Node.js backend to retrieve event and venue information using the Ticketmaster API. Hosted on AWS to support real-time, scalable event booking services.",
    },
];

// const Single = ({ item }) => {

//     const ref = useRef();

//     const { scrollYProgress } = useScroll({ target: ref });

//     const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

//     const handleClick = () => {
//         window.location.href = item.link;
//     }

//     return (
//         <section>
//             <div className="container">
//                 <div className="wrapper">
//                     <div className="imageContainer" ref={ref}>
//                         <img src={item.img} alt="" />
//                     </div>
//                     <motion.div className="textContainer" style={{ y }}>
//                         <h2 className='title'>{item.title}</h2>

//                         <p>{item.desc}</p>
//                         {item.id !== 3 && <button onClick={handleClick}>See More</button>}
//                         {item.id === 3 && <span>NOT permitted to distribute or publically display any part of this project</span>}

//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const handleClick = () => {
        window.location.href = item.link;
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 className='title'>{item.title}</h2>
                        <p>{item.desc}</p>

                        {/* Buttons container for "See More" and "Watch Demo" */}
                        <div className="buttonContainer">
                            {item.id !== 3 && <button onClick={handleClick}>See More</button>}
                            {item.youtube && (
                                <a href={item.youtube} target="_blank" rel="noopener noreferrer">
                                    <button className="youtubeButton">Watch Demo</button>
                                </a>
                            )}
                        </div>

                        {item.id === 3 && <span>NOT permitted to distribute or publicly display any part of this project</span>}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};
