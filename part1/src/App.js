import "./App.css";
import Mensaje from "./Mensaje.js";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};
function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="En un curso" />
      <Mensaje color="yellow" message="De React la nueva rama Master" />
      <Mensaje color="yellow" message="De React la nueva rama Master" />

      <Description />
    </div>
  );
}

export default App;
