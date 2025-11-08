import './Education.css'
import { useEffect } from "react";
import School from './School'
import politecnico from '../assets/img/politecnico.png'
import itsc from '../assets/img/itsc.png'
import alura from '../assets/img/alura.png'
import ufhec from '../assets/img/ufhec.png'
import { useInView } from 'react-intersection-observer';

export default function Education(){
    const education = document.getElementById("education3");

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });
    
    useEffect(() => {
        if (inView) {
            education.classList.add("active")
        } else {
            entry !== undefined && education.classList.remove("active")
        }
    }, [inView])
    return (
        <section id="educations" data-observer ref={ref}>
        <p className="title">Education</p>
        <div className="row">
            <School name="Electrónica Digital y Micro-computación" date="2017 - 2019" img={politecnico} alt="Politecnico Las Americas"/>
            <School name="Senior Technician in Software Development" date="2020 - 2024" img={itsc} alt="ITSC"/>
            <School name="Front End Jr. Developer" date="2022 - 2023" img={alura} alt="Alura - Oracle Next Education"/>
            <School name="Software Engineer" date="2024 - Present" img={ufhec} alt="UFHEC"/>
        </div>
    </section>
    )
}