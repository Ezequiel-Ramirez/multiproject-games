import { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import './Memotest.css';

const IMAGES = [
    "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
    'https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor',
]
    .flatMap((image) => [`a|${image}`, `b|${image}`]) // duplicate images
    .sort(() => Math.random() - 0.5); // shuffle images

const IMAGESMOBILE = [
    "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
]
    .flatMap((image) => [`a|${image}`, `b|${image}`]) // duplicate images
    .sort(() => Math.random() - 0.5); // shuffle images

type confettiProps = {
    numberOfPieces: number;
    recycle: boolean;
    wind: number;
    gravity: number;
    initialVelocityY: number;
    colors: string[];
};

const Memotest = () => {
    const [gessed, setGessed] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [confetti, setConfetti] = useState<boolean>(false);
    const isDesktop = window.innerWidth > 768;
    const images = isDesktop ? IMAGES : IMAGESMOBILE;

    useEffect(() => {
        if (selected.length === 2) {
            if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
                setGessed((gessed) => gessed.concat(selected));
            }
            setTimeout(() => {
                setSelected([]);
            }, 1000);
        }
    }, [selected]);

    useEffect(() => {
        if (gessed.length === images.length) {
            setConfetti(true);
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    }, [gessed]);

    return (
        <div className='containerMemotest'>
            {confetti && (
                <ConfettiExplosion
                    particleCount={250}
                    width={1600}
                    duration={3000}
                    style={{
                        position: "absolute",
                        top: 50,
                        left: "50%",
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                    }}
                />
            )}
            <h1>Memotest</h1>
            <ul
                style={{
                    padding: isDesktop ? '10px 40px' : '10px 10px',
                    display: "grid",
                    gridTemplateColumns: isDesktop ? "repeat(auto-fill, minmax(128px, 1fr))" : "repeat(auto-fill, minmax(70px, 1fr))",
                    gap: isDesktop ? "24px" : "3px",
                }}
            >
                {images.map((image) => {
                    const [, url] = image.split("|");

                    return (
                        <li
                            onClick={() => {
                                selected.length < 2 &&
                                    setSelected((selected) =>
                                        selected.concat(image)
                                    );
                            }}
                            key={image}
                            style={{
                                padding: 12,
                                border: "1.5px solid #222121",
                                borderRadius: 12,
                                cursor: "pointer",
                            }}
                        >
                            {selected.includes(image) ||
                            gessed.includes(image) ? (
                                <img src={url} alt="icon" />
                            ) : (
                                <img
                                    alt="icon"
                                    src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Memotest;
