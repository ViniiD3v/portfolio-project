import "./main.css"
import SubTitle from "../../components/subTitle/subTitle"
import Caracter from "../../assets/caracter-vn-2.png"

function Main() {
    return (
        <section className="d-md-flex  justify-content-center">
            <div className="main-container px-5 d-md-flex justify-content-between">
                <div className="title d-line w-md-50 gap-3">
                    <div className="subtitle">
                        <SubTitle
                            content="👋 Saudações!"
                        />
                    </div>
                    <h1>Vinicius <br />Figueiredo</h1>
                    <p className="pt-3">Fullstack developer · Mobile developer</p>
                    <div className="social-midias d-flex pt-3 gap-3">
                        <a target="_blank" href="https://www.linkedin.com/in/viniid3v"><i class="bi bi-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/ViniiD3v"><i class="bi bi-github"></i></a>
                        <a target="_blank" href="https://drive.google.com/file/d/1T3SUIWveiqTGLxgUhddcjXKlzpz4Tn1O/view?usp=sharing"><i class="bi bi-file-earmark-text-fill"></i></a>
                    </div>
                </div>
                <div className="caracter d-flex justify-content-center align-items-center w-md-50">
                    <img src={Caracter} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main