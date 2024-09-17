import './App.css';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce">
        <p>This is children props.</p>
      </Greet>
      <Greet name="Clark">
        <p>This is paragraph for Clark.</p>
        <button>Action</button>
      </Greet>
      <Greet name="Diana" /> */}

      {/* <FunctionClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      <UserGreeting />
    </div>
  );
}

export default App;
