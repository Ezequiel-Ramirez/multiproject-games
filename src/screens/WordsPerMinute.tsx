import React, { useState, useEffect } from "react";
//Words with 6 letters and no special characters and differents starting letters

const WORDS = [
    "abacus",
    "abdomen",
    "abdominal",
    "abide",
    "ability",
    "abnormal",
    "abolish",
    "abortion",
    "abound",
    "about",
    "above",
    "abroad",
    "absence",
    "absent",
    "absolute",
    "absorb",
];

const WordsPerMinute = () => {
    const [characterCount, setCharacterCount] = useState(0);
    const [buffer, setBuffer] = useState("");
    const [word, setWord] = useState(
        () => WORDS[(Math.random() * WORDS.length) | 0]
    );
    const [time, setTime] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (buffer === word) {
            setCharacterCount((characterCount) => characterCount + word.length);
            setWord(WORDS[(Math.random() * WORDS.length) | 0]);
        }
        setBuffer("");
    };

    useEffect(() => {
        if (time !== 0) {
            const timeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [time]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                textAlign: "center",
            }}
        >
            <h1>Words Per Minute</h1>
            <p>Start typing to begin the test</p>
            {Boolean(time) && <h2 style={{ fontSize: "48px" }}>Word: {word}</h2>}
            <h3>Character typed: {characterCount}</h3>
            <h3>Remaining Time: {time}</h3>
            {
              time ? (
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoFocus
                    value={buffer}
                    onChange={(e) => setBuffer(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
              ) : (
                <button onClick={() => setTime(60)}>Play</button>
              )
            }
        </div>
    );
};

export default WordsPerMinute;
