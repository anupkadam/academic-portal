import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
