import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce">
        <p>This is children props.</p>
      </Greet>
      <Greet name="Clark">
        <p>This is paragraph for Clark.</p>
        <button>Action</button>
      </Greet>
      <Greet name="Diana" />
    </div>
  );
}

export default App;
