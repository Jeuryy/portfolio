import './School.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function School(props){
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);
    return (
        <div className="education" title={props.alt} data-aos="fade-down">
            <div className="img-container">
            <span><img className="img" src={props.img} alt={props.alt}/></span>
            </div>
            <hr/>
            <p className="p-name">{props.name}</p>
            <p className="date">{props.date}</p>
        </div>
    )
}