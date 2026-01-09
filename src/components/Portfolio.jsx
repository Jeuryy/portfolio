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
import shoptime from "../assets/img/shoptime.jpeg";
import quickai from "../assets/img/quickai.png";
import fortunazord from "../assets/img/fortunazord.png";
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
    }, [entry, inView, portfolio])

    return (
        <section id="projects" data-observer ref={ref}>
        <p className="project-title">MY PROJECTS</p>
        <div className="project-row">
            <Project img={fortunazord} name="FortunazoRD- Increibles Sorteos desde la REP. DOM."
                link="https://www.fortunazord.com/" color="#c29836"/>
            <Project img={quickai} name="QuickAI - Powered by AI"
                link="https://quickai-rose.vercel.app/" color="#5144e4"/>
            <Project img={shoptime} name="Virtual Store - Shoptime"
                link="https://shoptime-nine.vercel.app" color="#9dcc9c"/>
            <Project img={notes} name="Notes App"
                link="https://jeuryy.github.io/notes-app/" color="#1249ee"/>
            <Project img={medic} name="Medical Center"
                link="https://github.com/Jeuryy/medic-system" color="#09954b"/>
            <Project img={showapi} name="TV shows API"
                link="https://jeuryy.github.io/shows-api/" color="#1ca275"/>
            <Project img={tenzies} name="Tenzies Game"
                link="https://jeuryy.github.io/tenzies-app/" color="#133042"/>
            <Project img={encriptor} name="Text Encryptor/Decryptor"
                link="https://jeuryy.github.io/Encriptador/" color="#860000"/>
            <Project img={eggstore} name="POS Egg Store"
                link="https://github.com/Jeuryy/tiendaHuevos" color="#fcab15fc"/>
            <Project img={meme} name="Meme Generator"
                link="https://jeuryy.github.io/meme-generator/" color="#750092fc"/>
        </div>
    </section>
    )
}