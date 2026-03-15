import "./main.css"
import Perfil from "../../assets/home-images/perfil.png"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Main() {

     const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Fullstack developer'],
            typeSpeed: 75,
            backSpeed: 0,
            loop: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <section className="d-flex justify-content-center align-items-center vh-100 mt-3">
            <div className="main-container d-flex flex-column align-items-center px-lg-5 h-100">
                <div className="title d-flex flex-column justify-content-center align-items-center h-100 text-center">
                    <img src={Perfil} className="img-fluid mb-5" alt="..."></img>
                    <p className="">Hello World! Meu nome é Vinicius Santos Figueiredo e sou</p>
                    <h1><span ref={el} /></h1>
                    <div className="social-midias d-flex pt-lg-3 gap-3">
                        <a target="_blank" href="https://www.linkedin.com/in/viniciussfigueiredo"><i class="bi bi-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/ViniciussFigueiredo"><i class="bi bi-github"></i></a>
                        <a target="_blank" href="https://drive.google.com/file/d/1T3SUIWveiqTGLxgUhddcjXKlzpz4Tn1O/view?usp=sharing"><i class="bi bi-file-earmark-text-fill"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main