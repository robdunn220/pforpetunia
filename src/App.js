import './App.css';
import NavBar from "./components/NavBar";
import bgimage from './BackgroundImage.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={bgimage} className='bg-image' alt=""/>
    </div>
  );
}

export default App;
