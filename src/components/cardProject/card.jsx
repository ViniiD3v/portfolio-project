import "./card.css"

function Card(props) {
    return (
        <div className="card-container px-4 py-5 d-inline justify-content-center">
            <img className="img-fluid" src={props.image} alt="Project" />
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
                <button type="button" className="btn ">
                    <a href=""><i className="bi bi-globe2 me-2"></i>Acessar projeto </a>
                </button>
                <button type="button" className="btn ">
                    <a href=""><i className="bi bi-github me-2"></i>Acessar repositório</a>
                </button>
            </div>
        </div>
    )
}

export default Card