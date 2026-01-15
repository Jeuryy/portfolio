import { useEffect } from "react";
import './About.css'
import cv from '../assets/docs/curriculum.pdf'
import Skills from './Skills'
import { FaHtml5, FaCss3, FaDatabase, FaGithub, FaBootstrap,
    FaNode, FaReact, FaGitAlt,
    FaFigma} from "react-icons/fa";
import { IoLogoJavascript, IoSettings } from "react-icons/io5";
import { SiCsharp, SiFirebase, SiMongodb, SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';

export default function About(){
    const aboutme = document.getElementById("aboutme2");
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            aboutme.classList.add("active")
        } else {
            entry !== undefined && aboutme.classList.remove("active")
        }
    }, [inView, aboutme, entry])

    return (
        <section id="aboutme" data-aos="fade-right" data-observer ref={ref}>
            <div className="aboutme">
                <p className="section-title">Hey there! I'm</p>
                <h2 className="myname">Jeury Pierre Dide</h2>
                <h3 className="about-software">Software Developer</h3>
                <p className="bio"> I was
                    born in Santo Domingo, DR, currently 21 years old. 
                    I'm a sport's lover and die-hard yankee fan, enjoy physical activities, also like 
                    sharing wih my family and the pals, and of course, enjoy a delicious food!
                </p>
                <p className="bio">
                In my daily basis I'm used to be someone very energetic and 
                creative so I'm just trying to bring all that to the world of software!
                </p>
                <div className="cv-container">
                    <a href={cv} target="_blank" className="button-52" 
                        id="cv" rel='noreferrer' title="See resume"
                    >
                        Resume
                    </a>
                </div>
            </div>
            <div className="skills-container" id="skills">
                <h3>SKILLS</h3>
                <div class="skill">
                    <Skills name="HTML" icon={FaHtml5}/>
                    <Skills name="CSS" icon={FaCss3}/>
                    <Skills name="Javascript" icon={IoLogoJavascript}/>
                    <Skills name="C#" icon={SiCsharp}/>
                    <Skills name="Typescript" icon={SiTypescript}/>
                    <Skills name="React" icon={FaReact}/>
                    <Skills name="Tailwind" icon={TbBrandTailwind}/>
                    <Skills name="Bootstrap" icon={FaBootstrap}/>
                    <Skills name="NextJS" icon={TbBrandNextjs}/>
                    <Skills name="NodeJS" icon={FaNode}/>
                    <Skills name="PostgreSQL" icon={SiPostgresql}/>
                    <Skills name="Prisma" icon={SiPrisma}/>
                    <Skills name="MongoDB" icon={SiMongodb}/>
                    <Skills name="SQL" icon={FaDatabase}/>
                    <Skills name="Firebase" icon={SiFirebase}/>
                    <Skills name="api REST" icon={IoSettings}/>
                    <Skills name="Git" icon={FaGitAlt}/>
                    <Skills name="Github" icon={FaGithub}/>
                    <Skills name="Figma" icon={FaFigma}/>
                </div>
            </div>
        </section>
    )
}