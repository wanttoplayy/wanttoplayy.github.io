import About from "./component/About";
import Contact from "./component/Contact";
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import Project from "./component/Project";
import Skill from "./component/Skill";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
