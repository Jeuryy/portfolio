import './Project.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project(props){
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);
    
    return (
        <div className="project" data-aos="fade-right" style={{border: `1px solid ${props.color}`}}>
            <div className="overlay"></div>
            <img src={props.img} alt={props.name}/>
            <div className="info" style={{backgroundColor: props.color}}>
                <a 
                    href={props.link} 
                    target="_blank" 
                    rel='noreferrer'>
                        {props.name}
                    </a>
            </div>
        </div>
    )
}