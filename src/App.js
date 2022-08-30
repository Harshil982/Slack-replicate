import './App.css';
import Companies from './Components/Companies/Companies';
import DeeperDive from './Components/Main/DeeperDive';
import PosterAndNavbar from './Components/Main/PosterAndNavbar';
import TeamsRely from './Components/Main/TeamsRely';

function App() {
  return (
    <div className="App">
      <PosterAndNavbar />
      <Companies />
      <TeamsRely />
      <DeeperDive />
    </div>
  );
}

export default App;
