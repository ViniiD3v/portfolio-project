import "./about.css"
import SubTitle from "../../components/subTitle/subTitle"
import Caracter from "../../assets/caracter-vn-transparent.png"


function About() {
    return (
        <section className="border-main d-flex justify-content-center">
            <div className="main-about p-md-5 mt-5 d-md-flex align-items-center justify-content-md-between">
                <div className="about-image px-md-5 w-md-25">
                    <img src={Caracter} alt="" />
                </div>
                <div className="about-content px-md-5 w-md-75">
                    <SubTitle
                        content="🧐 Sobre mim"
                    />
                    <h1 className="pt-2">Vinicius Santos Figueiredo</h1>
                    <p className="about-text pt-4">Me chamo Vinicius Santos Figueiredo, tenho 18 anos e sou natural de São Paulo e
                    atualmente estou cursando Análise e Desenvolvimento de Sistemas.  Desenvolvo aplicações web há 2 anos, 
                    utilizando JavaScript, TypeScript e React no front-end, e Golang no back-end, criando soluções completas
                    e bem estruturadas.
                    Atualmente, venho explorando React Native para levar minha experiência com desenvolvimento web ao universo mobile, 
                    buscando criar aplicações com a mesma fluidez, qualidade e atenção aos detalhes que aplico em projetos para a web. 
                    A cada novo projeto ou tecnologia, vejo uma oportunidade de me aprofundar mais no que faço e evoluir como desenvolvedor.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About