import "./card.css"

function Card(props) {
    return (
        <div className="card-container mt-0 mt-lg-5 px-4 py-5 d-flex flex-column justify-content-center ">
            <img className="img-fluid d-flex justify-content-center mt-5 mt-lg-0" src={props.image} alt="Project" />
            <div className="mt-3">
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.paragraph}</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <div>{props.children}</div>
                </div>
            </div>
            <div className="tech-line mt-3">
                <div className="button-white">
                    <button type="button" className="btn ">
                        <a target="_blank" href={props.link}><i className="bi bi-globe2 me-2"></i>Acessar projeto </a>
                    </button>
                </div>
                <div className="button-grey">
                    <button type="button" className="btn ">
                        <a target="_blank" href={props.repository}><i className="bi bi-github me-2"></i>Acessar repositório</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card