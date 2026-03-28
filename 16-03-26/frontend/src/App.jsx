import Add from "./example/Add";
import Hello from "./components/Hello";
import Home from "./components/Home";
import Calculator from "./example/Calculator";
import NumberAdd from "./example/Number";

function App() {
  return (
    <div>
      <Home />
      <Add />
      <Hello name={"Ananya"} age={20} />
      <Add />
      <Calculator /> 
      <NumberAdd />
    </div>
  );
}

export default App;