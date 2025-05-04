import "./projects.css"
import SubTitle from "../../components/subTitle/subTitle"
import Card from "../../components/cardProject/card"

function Projects() {
    return (
        <section className="main-projects p-md-5 mt-5">
            <div className="project-title w-100 d-flex justify-content-start">
                <SubTitle
                    content="🔗 Portfólio"
                />
                <h1>Trabalhos e projetos</h1>
            </div>
            <div className="projects-content mt-5 w-100 justify-content-between d-flex">
                <Card
                    name="Projeto 1"
                    paragraph="Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."
                    tech1="React JS"
                    tech2="Typescript"
                />
                <Card
                    name="Projeto 1"
                    paragraph="dasdasdascasdaseadad"
                    tech1="ReactJS"
                />
                <Card
                    name="Projeto 1"
                    paragraph="dasdasdascasdaseadad"
                    tech1="ReactJS"
                />
                <Card
                    name="Projeto 1"
                    paragraph="dasdasdascasdaseadad"
                    tech1="ReactJS"
                />
            </div>
        </section>
    )
}

export default Projects