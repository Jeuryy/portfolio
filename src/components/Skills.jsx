import './Skill.css'

export default function Skills(props){
    return(
            <ul className="skill-list">
                <li className="skill-item">
                    <p className={`${props.name} skill-p`}>{<props.icon/>}<span className="skill-name">{props.name}</span></p>
                </li>
            </ul>
    )
}