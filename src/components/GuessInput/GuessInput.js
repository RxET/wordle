import { useState, useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({handleGuessSubmission, currentGuesses, winner}) {
    const [value, setValue] = useState('')
    
    const guessFormatter = (guess) => guess.toString().toUpperCase()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            window.alert("that's all your guesses!")
            return;
        }
        if (value.length === 5) {
            handleGuessSubmission(guessFormatter(value))
            setValue('')
        }
    }

    return(
        <>
            <form
                onSubmit={(e) => handleSubmit(e)}
            >
                <label htmlFor='guess-input'>Enter guess:</label>
                <br/>
                <input
                    required
                    disabled={winner}
                    id='guess-input'
                    pattern="[aA-zZ]{5,5}"
                    title="Guesses must be 5 letters long"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setValue(e.target.value)
                        }
                    }}
                /> 
            </form>
        </>
    )
}

export default GuessInput;