import "./contact.css"
import SubTitle from "../../components/subTitle/subTitle"

function Contact() {
    return (
        <section className="contact d-flex flex-column align-items-center px-5 mt-5">
            <div className="subtitle w-100 text-center mb-3">
                <SubTitle
                    content="🌐 Meios de contato"
                />
            </div>
            <h1>Conexões</h1>
            <div className="contact-icon w-100 d-md-flex justify-content-center align-items-center gap-5 h-100 ms-md-3">
                <div className="d-flex mt-3 mt-md-0 flex-column align-items-center">
                    <i className="bi bi-envelope"></i>
                    <h2>E-mail</h2>
                    <p>vinii.d3v@gmail.com</p>
                </div>
                <div className="d-flex mt-3 mt-md-0 flex-column align-items-center">
                    <i className="devicon-linkedin-plain mb-3"></i>
                    <h2>Linkedin</h2>
                    <p>viniciussfigueiredo</p>
                </div>
                <div className="d-flex mt-3 mt-md-0 flex-column align-items-center">
                    <i className="devicon-github-original mb-3"></i>
                    <h2>Github</h2>
                    <p>@ViniciussFigueiredo</p>
                </div>
            </div>
        </section>
    )
}

export default Contact