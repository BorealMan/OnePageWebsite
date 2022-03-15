import './App.css';
import ContactPage from './components/pages/contactpage/contactPage';
import Homepage from './components/pages/homepage/homepage';
import ProjectsPage from './components/pages/projectspage/projectspage';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Homepage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
