import React, { useState, useEffect } from "react";
import "./WordsPerMinute.css";

const WordsPerMinute = () => {
    const [words, setWords] = useState<string[]>([]);
    const [characterCount, setCharacterCount] = useState(0);
    const [buffer, setBuffer] = useState("");
    const [word, setWord] = useState("");
    const [time, setTime] = useState(0);
    const [failTyping, setFailTyping] = useState(0);
    const isDesktop = window.innerWidth > 768;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (buffer === word) {
            setCharacterCount((characterCount) => characterCount + word.length);
            setWord(words[(Math.random() * words.length) | 0]);
        } else {
            setFailTyping(failTyping + 1);
        }
        setBuffer("");
    };

    const handlePlay = () => {
        setTime(60);
        setCharacterCount(0);
        setFailTyping(0);
        callApiToGetWords();
    };

    const callApiToGetWords = async () => {
        const response = await fetch(
            "https://random-word-api.herokuapp.com/word?number=60"
        );
        const data = await response.json();
        setWords(data);
        setWord(data[(Math.random() * data.length) | 0]);
    };

    useEffect(() => {
        if (time !== 0) {
            const timeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [time]);

    useEffect(() => {
        callApiToGetWords();
    }, []);

    return (
        <div className="containerWordsPerMinute">
            <h1>Words Per Minute</h1>
            <p>Start typing to begin the test</p>
            {Boolean(time) && (
                <h2
                    style={{
                        fontSize: "36px",
                        border: "1px solid red",
                        padding: "5px",
                    }}
                >
                    Word: <span style={{ fontSize: "48px" }}>{word}</span>
                </h2>
            )}
            <h3>Character typed: {characterCount}</h3>
            {failTyping > 0 && (
                <h3>
                    Fail typing:{" "}
                    <span style={{ color: "red" }}>{failTyping}</span>
                </h3>
            )}
            <h3 style={{ color: time < 10 ? "red" : "white" }}>
                Remaining Time: {time}
            </h3>
            {time ? (
                <form onSubmit={handleSubmit}>
                    <input
                        style={{ fontSize: isDesktop ? "1.5rem" : "0.8rem" }}
                        type="text"
                        autoFocus
                        value={buffer}
                        onChange={(e) => setBuffer(e.target.value)}
                    />
                    <button
                        type="submit"
                        style={{ fontSize: isDesktop ? "1.5rem" : "0.8rem" }}
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <button
                    onClick={handlePlay}
                    style={{ fontSize: isDesktop ? "1.5rem" : "0.8rem" }}
                >
                    Play
                </button>
            )}
        </div>
    );
};

export default WordsPerMinute;
