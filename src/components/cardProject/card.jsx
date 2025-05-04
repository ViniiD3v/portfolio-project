import "./card.css"
import Tech from "../subTitle/subTitle"

function Card(props) {
    return (
        <div className="card-container px-4 py-5 d-inline justify-content-center">
            <h1>{props.name}</h1>
            <p>{props.paragraph}</p>
            <div className="tech-line mt-3">
                <div className="tech1"><span>{props.tech1}</span></div>
                <div className="tech2"><span>{props.tech2}</span></div>
            </div>
            <img className="mt-4 img-fluid" src={props.image} alt="Project" />
        </div>
    )
}

export default Card