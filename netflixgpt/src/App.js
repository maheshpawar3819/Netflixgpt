import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import appstore from "./Utils/appstore";
function App() {
  return (
    <div className="App">
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
