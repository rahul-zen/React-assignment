import { Store } from "./store";
import { Provider } from "react-redux";
import { Home } from "./components/Home";

function App() {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
}

export default App;
