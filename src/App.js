import './App.scss';
import About from './Components/About';
import Header from './Components/Header/';
import Skills from './Components/Skills/';
import Works from './Components/Works/';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
