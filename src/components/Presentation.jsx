import './Presentation.css'
import profile from '../assets/img/logo.png'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';

export default function Presentation(){
    const home = document.getElementById("home1");

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            home.classList.add("active")
        } else {
            entry !== undefined && home.classList.remove("active")
        }
    }, [inView])
    return (
        <section className="container" id='home' data-aos="fade-down" data-observer ref={ref}>
            <div className="presentation">
                <div className="greeting">
                    <p>Hi, I'm</p>
                    <h2 className="name">Jeury!</h2>
                </div>
                <div className="photo-container">
                    <img src={profile} alt="Mi profile"/>
                </div>
                <div className="description">
                    <p className="software"> Software</p>
                    <p className="developer">Developer</p>
                </div>
            </div>
            <div className="projects">
                <a href="#projects" className="glow">See Projects</a>
            </div>
        </section>
    )
}