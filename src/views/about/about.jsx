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
                    <div className="pe-md-5">
                        <div className="subtitle">
                            <SubTitle
                                content="👨‍💻 Sobre mim"
                            />
                        </div>
                        <h1 className="pt-2">Vinicius Santos Figueiredo</h1>
                        <p className="about-text pt-4">Me chamo Vinicius Santos Figueiredo, tenho 18 anos, sou natural de São Paulo e estudante de 
                            Análise e Desenvolvimento de Sistemas na FIAP. Como Desenvolvedor Fullstack em formação, foco meus estudos no ecossistema 
                            JavaScript, TypeScript, React e Node.js, dedicando-me à criação de interfaces intuitivas, código limpo e soluções escaláveis. 
                            Utilizo ferramentas como Git e metodologias modernas para organizar meus projetos, sendo movido pelo aprendizado contínuo e pela 
                            busca por oportunidades que me permita evoluir tecnicamente e contribuir para projetos de impacto em times de alta performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About