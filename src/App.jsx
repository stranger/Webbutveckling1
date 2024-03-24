import "./App.css";
import Landing from "./pages/landing/landing";
import Navbar from "./layout/navbar/navbar";

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
