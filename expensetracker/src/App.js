import "./App.css";
import { WelcomeElement } from "./Components/Welcome.jsx";
import {Info} from "./Components/Info.jsx"

function App() {
  return (
    <div className="App">
      <WelcomeElement />
      <Info /> 
    </div>
  );
}

export default App;
