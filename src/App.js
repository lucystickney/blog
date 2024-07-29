import './App.css';
import ProjectButton from './ProjectButton';
import button1 from './images/button1.png';
import button2 from './images/button2.png';

function App() {
  return (
    <div className="App">
      <div className="header-section">
        
      </div>
      <div className="projects-section">
          
        <ProjectButton link="" image={button1} className="projects-button"/>
        <ProjectButton link="#" image={button2} />

      </div>
    </div>
  );
}

export default App;
