import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import Counter from "./components/Counter"
import Array from "./components/Arrays"
import Fetching from "./components/Fetching"

function App() {
  return (
    <div className="App">
      <Title title="My new title from props and useState"/>
      <Counter/>
      <Array/>
      <Fetching/>
    </div>
  );
}

export default App;
