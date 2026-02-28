import { checkGuess } from '../../game-helpers'

function GuessGrid({rowId, guess, answer}) {
    const guessArr = guess ? [...guess] : new Array(5).fill('')
    const statusColor = guess ? checkGuess(guess, answer) : null;

    return (
        <p key={`row-${rowId}-p`} className='guess'>
            {guessArr.map((letter, index) => {
                return (<span key={`row-${rowId}-cell-${index}`} className={`cell ${ statusColor && statusColor[index].status}`}>
                    {letter}
                </span>)
            })}
        </p>
    )
}

export default GuessGrid;