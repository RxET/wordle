import { useState, useCallback } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import EndgameBanner from '../Banner';
import KeyboardDisplay from '../KeyboardDisplay';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  const handleResetAnswer = useCallback((() => {
    setGuesses([]);
    setAnswer(sample(WORDS))
  }), [])

  const handleGuessSubmission = (newGuess) => setGuesses((prev) => [...prev, newGuess]);
  const guessArray = new Array(NUM_OF_GUESSES_ALLOWED).fill(undefined)
  const winner = guesses[guesses.length-1] === answer
    
  return (
    <>
      <GuessInput handleGuessSubmission={handleGuessSubmission} currentGuesses={guesses} winner={winner}/>
      <EndgameBanner guessesArray={guesses} answer={answer} winner={winner} resetAnswer={handleResetAnswer}/>
      <div className='guessResults'>
        {guessArray.map((rowId, index) => {
          return (
            <Guess 
              key={`guess-component-${index}`} 
              rowId={rowId} 
              guess={guesses[index]}
              answer={answer}
            />)
          })
        }
      </div>
      <KeyboardDisplay currentGuesses={guesses} answer={answer}/>
    </>
  );
}

export default Game;
