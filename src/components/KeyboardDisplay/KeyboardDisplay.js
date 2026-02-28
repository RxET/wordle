import { useState, useEffect } from "react";
import { KEYBOARD_LETTERS } from "../../constants";
import { checkGuess } from "../../game-helpers";

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

function createStarter(alphabet) {
    const alphabetObjectStarter = {}
    for (let letter of alphabet) {
        alphabetObjectStarter[letter] = 'unplayed'
    }
    return alphabetObjectStarter;
}


function KeyboardDisplay({currentGuesses, answer}) {
    let guessedLetters = createStarter(alphabet);
    
    [...currentGuesses].map((guess) => {
        const guessedLettersCopy = structuredClone(guessedLetters);
        checkGuess(guess, answer).map(({letter, status}) => {
            if (guessedLettersCopy[letter] === 'unplayed') {
                guessedLettersCopy[letter] = status
            } else if (guessedLettersCopy[letter] !== status) {
                guessedLettersCopy[letter] = status
            }
        });
        guessedLetters = guessedLettersCopy
    })

    const guessedLetterStyle = (letter) => guessedLetters[letter];

    return (
        <>
        {KEYBOARD_LETTERS.map((row, index) => <div className="guess" key={`row-${index}`}>

            {[...row].map((letter) => {
                return (<span key={letter} className={`cell ${guessedLetterStyle(letter)}`}>{letter}</span>)
            })}
        </div>)}
        </>
    )
}

export default KeyboardDisplay;