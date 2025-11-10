import { useEffect, useState} from 'react';
import './Header.css'
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FiMail } from "react-icons/fi";

export default function Header(props){

    const [responsive, setResponsive] = useState(false)

    function handleResponsive (){
        setResponsive(prevState => !prevState)
    }
    const styles = {
        color: responsive ? "#495bfe" : "#FFFFFF"
    }
    return (
        <header /*onClick={props.handleHash}*/>
                <IoCodeSlashOutline className='code'/>
                <nav id="nav" className={responsive ? "responsive" : ""}>
                    <ul id="links">
                        { props.nav }
                    </ul>
                </nav>

                <div id="nav-icon" style={styles} onClick={handleResponsive}>
                    <TiThMenu className='nav-icon-logo'/>
                </div>
                <div id="networks">
                    <a href="https://www.linkedin.com/in/jeury-pierre-dide/" target="_blank" rel='noreferrer'><FaLinkedin className='linkedin-header'/></a>
                    <a href="https://github.com/Jeuryy" target="_blank" rel='noreferrer'><FaGithub className='github-header'/></a>
                    <a href="mailto:jeury.pierre@gmail.com?subject=Mensaje%20desde%20portafolio" target="_blank" rel='noreferrer'><FiMail className='gmail-header'/></a>
                </div>
        </header>
    )
}