import "./skills.css"
import SubTitle from "../../components/subTitle/subTitle"


export function Skills() {
    return (
        <section className="skills-main d-md-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <div className="subtitle w-100 text-center">
                    <SubTitle
                        content="🎓 Skills · Experiências"
                    />
                </div>
                <h1 className="mb-5">Tecnologias e habilidades</h1>

                <div className="techs mt-5">
                    <div className="w-100 d-flex justify-content-center">
                        <p>Techs que uso no dia a dia</p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <i class="devicon-react-original"></i>
                        <i class="devicon-nodejs-plain"></i>
                        <i class="devicon-typescript-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-mysql-original"></i>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-bootstrap-plain"></i>
                        <i class="devicon-git-plain"></i>
                    </div>
                </div>

                <div className="techs mt-5">
                    <p>Outras techs com que já realizei projetos</p>
                    <div className="d-flex justify-content-center gap-3">
                        <i class="devicon-mongodb-plain"></i>
                        <i class="devicon-sass-original"></i>
                        <i class="devicon-vuejs-plain"></i>
                        <i class="devicon-express-original"></i>
                        <i class="devicon-tailwindcss-original"></i>
                        <i class="devicon-mongoose-original"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}