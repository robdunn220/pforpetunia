import './App.css';
import NavBar from "./components/NavBar";
import bgimage from './components/DSC_0001.JPG'

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={bgimage} className='bg-image' alt=""/>
    </div>
  );
}

export default App;
