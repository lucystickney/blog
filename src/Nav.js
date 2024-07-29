import logo from './images/3.png';
import projects from './images/6.png';
import notebook from './images/5.png';

function Nav() {
    return (
    <nav className="Nav">
        <div className="main-logo">
            <button><img src={logo} alt="main page" className="main-logo"/></button>
        </div>
        <div className="projects">
            <button className="projects-button">
                <img src={projects} alt="projects" className="project-name"/>
                <img src={notebook} alt="project logo" className="project-logo"/>
            </button>
        </div>
    </nav>
    );
    // logo button
    // projects button
    // image
}

export default Nav;