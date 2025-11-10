import { FiMail } from "react-icons/fi";
import './Footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Footer(){
    const date = new Date().getFullYear()
    return (
        <div className="footer-container">
            <div>
                <p> All Rights Reserved {date} © Jeury Pierre Dide</p>
            </div>
            <div className="icons">
                <a href='https://www.facebook.com/jeury.dide.794/?locale=es_ES' target='_blank' rel='noreferrer'>
                    <FaFacebook className='facebook icon'/></a>
                <a  href='https://www.linkedin.com/in/jeury-pierre-dide/' target='_blank' rel='noreferrer'>
                    <FaLinkedin className='linkedin icon'/></a>
                <a href='https://www.instagram.com/jeury_pd/' target='_blank' rel='noreferrer'>
                    <FaInstagram className='instagram icon' /></a>
                <a href='https://github.com/Jeuryy' target='_blank' rel='noreferrer'>
                    <FaGithub className='github icon' /></a>
                <a href="mailto:jeury.pierre@gmail.com?subject=Mensaje%20desde%20portafolio" target="_blank" rel='noreferrer'>
                    <FiMail className='gmail icon'/></a>
                <a href='https://twitter.com/jeury102002' target='_blank' rel='noreferrer'>
                    <FaTwitter className='twitter icon' /></a>
            </div>
        </div>
    )
}