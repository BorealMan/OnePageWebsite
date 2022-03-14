import './App.css';
import ContactPage from './components/pages/contactpage/contactPage';
import Homepage from './components/pages/homepage/homepage';
import ProjectsPage from './components/pages/projectspage/projectspage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
