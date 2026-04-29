import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import KNavbar from './components/navbar';
import Banner from './components/banner';
import Skills from './components/skills' ;
import Projects from './components/projects';
import ProjectCard from './components/projectcards';
import KContacts from "./components/contacts" ;
import KNewsletter from './components/newsletter';

import './components/style.css'; 
import { Contact } from './components/contacts';
import KFooter from './components/footer';

function App() {
  return (
    <div className="App main-container">

      <KNavbar></KNavbar> 
      <Banner></Banner> 
      <Skills></Skills>
      <Projects></Projects>
      <KContacts></KContacts>
      <KNewsletter></KNewsletter>
      <KFooter></KFooter>
      

    </div>
  );
}

export default App;