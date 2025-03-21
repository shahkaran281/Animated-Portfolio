import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 5,
        title: "Unified Data Management System",
        img: "/Unified-Data.png",
        stack: "Python, SQL, NoSQL",
        link: "https://github.com/shahkaran281/Unified-Data-Management-System",
        desc: "Developed a custom SQL and NoSQL database system in Python, featuring command parsing and execution. Optimized query processing, reducing execution time by 25%, and enhanced search efficiency by 20% through improved data handling and error management.",
    },
    {
        id: 7,
        title: "SmartScene Navigator",
        img: "SmartScene-Navigator.png",
        stack: "Python, OpenCV, SceneDetect, Pygame",
        link: "https://github.com/shahkaran281/SmartScene-Navigator",
        desc: "SmartScene Navigator is an interactive video player that automatically detects and organizes scenes, shots, and subshots in a video. It extracts a hierarchical table of contents and allows users to jump between different segments seamlessly. The player provides synchronized video and audio playback, making navigation intuitive and efficient.",
        youtube: 'https://youtu.be/7ZWW_gZ76U8',
    },
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
        img: "/Dietary-Assessment-result.png",
        stack: "Python, TensorFlow, MobileNetV2, OpenCV",
        desc: "Developed an image-based calorie estimation model using Transfer Learning (MobileNetV2) with 92% accuracy. Enabled users to classify and retrieve nutritional values from mobile photos, improving dietary tracking efficiency.",
        link: "https://github.com/shahkaran281/Dietary-Assessment-Deep-Learning"
    },
    {
        id: 3,
        title: "Android Event Discovery Application",
        img: "/Andriod-Event-Discovery.png",
        stack: "Java, Android Studio, Google Maps API, Picasso, Glide, Volley, Material Design, JSON",
        desc: "Built an Android application for event discovery with real-time location-based services using Google Maps API. Integrated social media sharing for seamless event promotion across platforms.",
        youtube: "https://youtu.be/EFJGehD2KmE"
    },
    {
        id: 4,
        title: "Mobile Event Information Retrieval System",
        img: "/Angular-Event-Retrieval.png",
        stack: "Angular 8, NodeJS, HTML, CSS, JavaScript, TypeScript, Bootstrap, AXIOS, REST API",
        desc: "Developed a mobile-first event discovery website with dynamic search and Google Maps integration. Enhanced user interactions with Autocomplete and cookie storage for personalized sessions. Hosted on AWS for scalability.",
    },

];
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 className='title'>{item.title}</h2>
                        <p className="stack"><strong>Stack:</strong> {item.stack}</p>

                        <p>{item.desc}</p>

                        {/* Buttons container for "See More" and "Watch Demo" */}
                        <div className="buttonContainer">
                            {/* Show "See More" only if NOT ID 3, 4, or 6 */}
                            {!(item.id === 3 || item.id === 4 || item.id === 6) && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button>See More</button>
                                </a>
                            )}

                            {/* Show "Watch Demo" button only if YouTube link exists */}
                            {item.youtube && (
                                <a href={item.youtube} target="_blank" rel="noopener noreferrer">
                                    <button className="youtubeButton">Watch Demo</button>
                                </a>
                            )}
                        </div>

                        {/* Show restriction message for IDs 3, 4, and 6 */}
                        {(item.id === 3 || item.id === 4 || item.id === 6) && (
                            <span className="restrictedMessage">NOT permitted to distribute or publicly display any code of this project</span>
                        )}
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
