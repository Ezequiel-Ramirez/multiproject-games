import { Routes, Route } from "react-router-dom";
import Memotest from "./screens/Memotest/Memotest";
import Pokemon from "./screens/Pokemon/Pokemon";
import WordsPerMinute from "./screens/WordsPerMinute";

function App() {
    return (
        <Routes>
            <Route path="/memotest" element={<Memotest />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/wpm" element={<WordsPerMinute />} />
        </Routes>
    );
}

export default App;
