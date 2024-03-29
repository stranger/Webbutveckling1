import "./App.css";

import Landing from "./pages/Landing/Landing";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar></Navbar>
      {/* ska lära mig om routing senare */}
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
