import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
