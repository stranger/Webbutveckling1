import "./App.css";
import Landing from "./pages/Landing/Landing";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div id="app">
      <header className="header">
        <Navbar></Navbar>
      </header>
      <main className="main">
        <Landing></Landing>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
