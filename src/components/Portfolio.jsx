import './Portfolio.css'
import { useEffect } from "react";
import Project from './Project'
import encriptor from '../assets/img/encriptador.png'
import notes from '../assets/img/notes.png'
import eggstore from "../assets/img/POS.PNG";
import meme from "../assets/img/meme.png";
import tenzies from "../assets/img/tenzies.png";
import showapi from "../assets/img/show-api.png";
import medic from "../assets/img/medyc-center.png";
import { useInView } from 'react-intersection-observer';

export default function Portfolio(){
    const portfolio = document.getElementById("projects4");

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            portfolio.classList.add("active")
        } else {
            entry !== undefined && portfolio.classList.remove("active")
        }
    }, [inView])

    return (
        <section id="projects" data-observer ref={ref}>
        <p className="project-title">MY PROJECTS</p>
        <div className="project-row">
            <Project img={encriptor} name="Text encryptor/decryptor"
                link="https://jeuryy.github.io/Encriptador/" color="#860000"/>
            <Project img={notes} name="Notes"
                link="https://jeuryy.github.io/notes-app/" color="#1249ee"/>
                <Project img={eggstore} name="POS Egg Store"
                link="https://github.com/Jeuryy/tiendaHuevos" color="#fcab15fc"/>
                <Project img={meme} name="Meme generator"
                link="https://jeuryy.github.io/meme-generator/" color="#750092fc"/>
                <Project img={tenzies} name="Tenzies game"
                link="https://jeuryy.github.io/tenzies-app/" color="#133042"/>
                <Project img={showapi} name="TV shows API"
                link="https://jeuryy.github.io/shows-api/" color="#1ca275"/>
                <Project img={medic} name="Medical Center"
                link="https://github.com/Jeuryy/medic-system" color="#09954b"/>
        </div>
    </section>
    )
}