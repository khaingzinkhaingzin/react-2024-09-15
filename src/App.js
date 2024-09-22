import './App.css';
import EventBind from './components/EventBind';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet'
import Inline from './components/Inline';
import LifeCycleA from './components/LifeCycleA';
import NameList from './components/NameList';
import ParentComp from './components/ParentComp';
import ParentComponent from './components/ParentComponent';
import PureComp from './components/PureComp';
import StyleSheet from './components/StyleSheet';
import Table from './components/Table';
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

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <StyleSheet primary={true} /> */}

      {/* <Inline /> */}

      {/* <Form /> */}

      {/* <LifeCycleA /> */}

      {/* <FragmentDemo /> */}

      {/* <Table /> */}

      <ParentComp />
    </div>
  );
}

export default App;
