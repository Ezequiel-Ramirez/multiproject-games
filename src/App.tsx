import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Memotest from "./screens/Memotest/Memotest";
import Pokemon from "./screens/Pokemon/Pokemon";
import WordsPerMinute from "./screens/WordsPerMinute/WordsPerMinute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memotest" element={<Memotest />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/wpm" element={<WordsPerMinute />} />
        </Routes>
    );
}

export default App;
