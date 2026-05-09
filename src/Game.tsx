import PointSection from "./components/PointSection.tsx";
import {useState} from "react";
import {TOTAL_POINTS} from "./constants/constants.ts";
import {getActorForDate} from "./lib/gameUtils.ts";
import {actors} from "./data/actors.ts";
import InitialHint from "./components/InitialHint.tsx";

function Game({date}: {date: Date}) {

    const actor = getActorForDate(actors, date)

    const [currentPoints, setCurrentPoints] = useState(TOTAL_POINTS);

    console.log(`debug: actor is: ${actor.name}`);

    const handleGuess = () => {
        setCurrentPoints(prevState => Math.max(prevState - 1, 0));
    }

    return (
        <div className={'w-full'}>
            {(currentPoints === 0) && <p>You've lost!</p>}
            <PointSection remainingPoints={currentPoints}/>
            <InitialHint actor={actor} />
            <button onClick={handleGuess}>Guess</button>
        </div>
    );
}

export default Game;