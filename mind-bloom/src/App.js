import ButtonMain from "./ButtonMain";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Welcome to Mind Bloom!
        </p>
        <ButtonMain text={'Home'}/>
      </header>
    </div>
  );
}

export default App;
