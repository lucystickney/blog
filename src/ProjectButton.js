import './App.css';

function ProjectButton(props) {
    // button for each blog post
    console.log("making a project component");
    return (
        <a href={props.link} className="project-button">
            <img src={props.image} alt="blog post" className="project-button-img" />

        </a>
    );
}

export default ProjectButton;