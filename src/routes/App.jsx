import { AppProvider } from "../context/AppContext";
import RouterLogin from "./RouterLogin";

function App() {
  return (
    <AppProvider>
      <RouterLogin />
    </AppProvider>
  );
}

export default App;
