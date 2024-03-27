import "./App.css";

import Landing from "./pages/Landing/Landing";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar></Navbar>
      <main>
        {/* ska lära mig om routing senare */}
        <Landing></Landing>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
