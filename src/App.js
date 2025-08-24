import "./App.css";
import Contact from "./Components/Contact";
import Cover from "./Components/Cover";
import Education from "./Components/Education";
import Hobbies from "./Components/Hobbies";
import Skills from "./Components/Skills";
import Summary from "./Components/Summary";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Cover />
      <Summary />
      <Skills />
      <Work />
      <Education />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
