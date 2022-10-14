import "./App.css";
import ComponentHeader from "./components/Address/ComponentHeader";
import ComponentEdit from "./components/Address/ComponentEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentTable from "./components/Address/ComponentTable";
import ComponentDetail from "./components/Address/ComponentDetail";
import ComponentAdd from "./components/Address/ComponentAdd";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <button onClick={() => dispatch(increment())}>tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
      <h1>nilai saat ini {counter.value}</h1> */}
      <Router>
        <ComponentHeader />
        <Switch>
          <Route exact path="/">
            <ComponentTable />
          </Route>
          <Route path="/tableuser">
            <ComponentTable />
          </Route>
          <Route path="/adduser">
            <ComponentAdd />
          </Route>
          <Route path="/edituser/:id">
            <ComponentEdit />
          </Route>
          <Route path="/detailuser/:id">
            <ComponentDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
