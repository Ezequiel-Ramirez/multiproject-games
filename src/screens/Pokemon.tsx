import React, { useState } from "react";

const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran♀",
    "nidorina",
    "nidoqueen",
    "nidoran♂",
    "nidorino",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
    pokemon: HTMLInputElement;
};

const Pokemon = () => {
    const [hasWon, toogleWon] = useState(false);

    const handleSubmit = (e: React.FormEvent<Form>) => {
        e.preventDefault();
        const { pokemon } = e.currentTarget;
        if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
            toogleWon(true);
            alert("You won!");
        } else {
            alert("You lost!");
        }

        pokemon.value = "";
    };

    return (
        <div>
            <img
                height={512}
                width={512}
                style={{
                    imageRendering: "pixelated",
                    filter: hasWon ? "" : " brightness(0) invert(1)",
                }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    MATCH + 1
                }.png`}
            />
            {hasWon ? (
                <button
                    onClick={() => location.reload()}
                    style={{ width: "100%" }}
                >
                    Play again
                </button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input autoFocus type="text" name="pokemon" />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Pokemon;
