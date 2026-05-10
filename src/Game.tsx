import PointSection from "./components/PointSection.tsx";
import {useState} from "react";
import {TOTAL_POINTS, WRONG_GUESS_COST} from "./constants/constants.ts";
import {getActorForDate} from "./lib/gameUtils.ts";
import {actors} from "./data/actors.ts";
import InitialHint from "./components/InitialHint.tsx";
import InputContainer from "./components/InputContainer.tsx";

function Game({date}: {date: Date}) {

    const actor = getActorForDate(actors, date)

    const [currentPoints, setCurrentPoints] = useState(TOTAL_POINTS);

    const [guessList, setGuessList] = useState<string[]>([]);

    console.log(`debug: actor is: ${actor.name}`);

    const handleGuess = (guess: string) => {

        //check if answer is correct

        //if incorrect, subtract points
        setCurrentPoints(prevState => Math.max(prevState - WRONG_GUESS_COST, 0));

        //update wrongGuesses list;
        console.log(guess);
        setGuessList(prevState => [...prevState, guess]);
    }

    return (
        <div className={'w-full'}>
            {(currentPoints === 0) && <p>You've lost!</p>}
            <PointSection remainingPoints={currentPoints}/>
            <InitialHint actor={actor} />
            <InputContainer callback={handleGuess} guessList={guessList}/>
        </div>
    );
}

export default Game;