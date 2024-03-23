import "./App.css";
import Landing from "./pages/landing/landing";
import Navbar from "./layout/navbar/navbar";

function App() {
  return (
    <div id="app">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Landing></Landing>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
