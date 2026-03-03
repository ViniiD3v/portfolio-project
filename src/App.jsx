import './Global.css'
import NavBar from './views/navbar/NavBar.jsx'
import Main from './views/main/main.jsx'
import About from './views/about/about.jsx'
import Projects from './views/projects/projects.jsx'
import { Skills } from './views/skills/skills.jsx'
import Baseboard from './views/baseboard/baseboard.jsx'

function App() {
  return (
    <div className=''>
      <NavBar />
      <section id="home">
        <Main />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Baseboard />
      </section>
    </div>
  )
}

export default App
