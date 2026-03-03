import "./baseboard.css"

function Baseboard() {
    return (
        <section className="baseboard d-flex align-items-center w-100">
            <div className="content-baseboard w-100 d-flex px-5 me-md-5">
                <div className="w-100 d-flex justify-content-center justify-content-md-start align-items-center mt-2 h-100">
                    <span>Copyright © Vinicius Figueiredo · 2026</span>
                </div>
                <div className="contact w-100 d-none d-md-flex gap-3 me-5">
                    <a target="_blank" href="https://www.linkedin.com/in/viniid3v"><i class="devicon-linkedin-plain"></i></a>
                    <a target="_blank" href="https://github.com/ViniiD3v"><i class="devicon-github-original"></i></a>
                    <a target="_blank" href="https://drive.google.com/file/d/1T3SUIWveiqTGLxgUhddcjXKlzpz4Tn1O/view?usp=sharing"><i class="bi bi-file-earmark-text-fill"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Baseboard