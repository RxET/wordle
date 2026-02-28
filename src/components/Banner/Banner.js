import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function EndgameBanner({guessesArray, answer, winner, resetAnswer}) {
    const bannerClass = winner ? 'happy' : 'sad'

    if (guessesArray.length !== NUM_OF_GUESSES_ALLOWED && !winner) {
        return null;
    }


    return (
        <div className={`${bannerClass} banner`}>
            { winner ? (<p>
                <strong>Congratulations!</strong> Got it in
                <strong>{' '}{guessesArray.length} guesses</strong>.
            </p>) : (
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            )}
            <button onClick={() => resetAnswer()}>reset</button>
        </div>
    )    
}

export default EndgameBanner