import './App.css';
import Heroimg from './components/Heroimg';
import Navbar from './components/Navbar';
import Stats from './components/stats';
import Specialty from './components/Specialty';
import Feedback from './components2/Feedback';


function App() {
  return (
    <div>
      <Navbar title="LCD"></Navbar>
      <Heroimg></Heroimg>
      <Stats></Stats>
      <Specialty></Specialty>
      <Feedback></Feedback>
    </div>
  );
  
}

export default App;
