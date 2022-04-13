import './App.css';
import Navbar from './Components/Nav/Navbar';
import Showcase from './Components/Showcase/Showcase';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Barbers from './Components/Barbers/Barbers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <About />
      <Services />
      <Barbers />
    </div>
  );
}

export default App;
