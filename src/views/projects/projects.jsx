import "./projects.css"
import SubTitle from "../../components/subTitle/subTitle"
import Card from "../../components/cardProject/card"
import TruffApp from "../../assets/projects-images/trufApp.jfif"
import Convert from "../../assets/projects-images/convert.jfif"
import Refund from "../../assets/projects-images/refund.jfif"

function Projects() {
    return (
        <section className="main-projects p-md-5 mt-5">
            <div className="project-title w-100 justify-content-start px-5">
                <div className="subtitle">
                    <SubTitle
                        content="🔗 Portfólio"
                    />
                </div>

                <h1>Trabalhos e projetos</h1>
            </div>
            <div className="projects-content w-100  d-flex justify-content-center justify-content-xl-between flex-wrap px-xl-5 mt-lg-3 ">
                <Card
                    name="TrufApp"
                    paragraph="O projeto foi criado para ajudar uma pessoa a organizar e calcular suas vendas de trufas. Com o TrufApp, dá para registrar o cliente, a quantidade vendida e o valor total é calculado automaticamente. O sistema também guarda tudo para acompanhar os ganhos do dia, do mês e do ano."
                    image={TruffApp}
                    repository="https://github.com/ViniiD3v/Convert"
                    link="https://viniid3v.github.io/Convert/">
                    <div className="card-icon d-flex gap-1">
                        <i class="devicon-react-original"></i>
                        <i class="devicon-typescript-plain"></i>
                        <i class="devicon-mongodb-plain"></i>
                        <i class="devicon-bootstrap-plain"></i>
                    </div>
                </Card>
                <Card
                    name="Refund"
                    paragraph="O Refund é um sistema simples de solicitação de reembolso, onde o usuário pode cadastrar despesas preenchendo nome, valor e categoria. Toda a lógica foi construída com JavaScript puro, junto com HTML e CSS, sem o uso de frameworks ou bibliotecas externas durante meus estudos na plataforma da RocketSeat."
                    image={Refund}
                    repository="https://github.com/ViniiD3v/Refund"
                    link="https://viniid3v.github.io/Refund/"
                    className="mt-5">
                    <div className="card-icon d-flex gap-1">
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                    </div>

                </Card>
                <Card
                    name="Convert"
                    paragraph="Convert é um projeto criado durante os estudos na Rocketseat com o objetivo de converter valores do Real (BRL) para Dólar (USD), Euro (EUR) e Libra (GBP). A aplicação utiliza taxas de câmbio fixas e foi desenvolvida para praticar lógica de programação e para desenvolver um contato com a criação de interfaces."
                    image={Convert}
                    repository="https://github.com/ViniiD3v/Convert"
                    link="https://viniid3v.github.io/Convert/">
                    <div className="card-icon d-flex gap-1">
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                    </div>

                </Card>

            </div>
        </section>
    )
}

export default Projects