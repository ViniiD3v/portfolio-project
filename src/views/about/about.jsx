import "./about.css"
import SubTitle from "../../components/subTitle/subTitle"
import Perfil from "../../assets/home-images/perfil.png"


function About() {
    return (
        <section className="border-main d-flex justify-content-center">
            <div className="main-about d-xl-flex align-items-center justify-content-md-between p-md-5 mt-5">
                <div className="about-image d-flex justify-content-center w-md-25 px-md-5 mb-5 mb-md-0">
                    <img src={Perfil} alt="" />
                </div>
                <div className="about-content d-flex flex-column d-flex flex-column mt-md-5 mt-lg-0 px-5">
                    <div className="pe-md-5">
                        <div className="subtitle">
                            <SubTitle
                                content="👨‍💻 Sobre mim"
                            />
                        </div>
                        <h1 className="pt-2">Vinicius Santos Figueiredo</h1>
                        <p className="about-text pt-4">Sou Desenvolvedor Fullstack, tenho 18 anos, sou natural de São Paulo e estudante de 
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