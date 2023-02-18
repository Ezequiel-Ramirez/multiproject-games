import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Pokemon.css";

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
//pokemonbackgroundforest
//nes.css
const Pokemon = () => {
    const [hasWon, toogleWon] = useState(false);
    const isDesktop = window.innerWidth > 768;

    const handleSubmit = (e: React.FormEvent<Form>) => {
        e.preventDefault();
        const { pokemon } = e.currentTarget;
        if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
            toogleWon(true);
            //Swal with timer and custom icon
            Swal.fire({
                title: "Correct!",
                text: "You are a Pokemon Master!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                showCancelButton: false,
                showCloseButton: false,
                allowOutsideClick: true,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: false,
            });
        } else {
            //Swal with timer and custom icon
            Swal.fire({
                title: "Wrong!",
                text: "Try again",
                icon: "error",
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
                showCancelButton: false,
                showCloseButton: false,
                allowOutsideClick: true,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: false,
            });
        }

        pokemon.value = "";
    };

    return (
        <div className="containerPokemon">
            <h1 style={{ fontSize: !isDesktop ? "1.5rem" : "3rem" }}>
                Guess the Pokemon
            </h1>
            <img
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
                <div
                    className="containerForm"
                    style={{ marginTop: !isDesktop ? "-59px" : "0px" }}
                >
                    <form onSubmit={handleSubmit}>
                        <input autoFocus type="text" name="pokemon" />
                        <button type="submit">Submit</button>
                    </form>
                    <button
                        className="buttonReload"
                        onClick={() => location.reload()}
                        style={{ width: "100%" }}
                    >
                        Change Pokemon
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pokemon;
