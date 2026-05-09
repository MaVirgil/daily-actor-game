import PointSection from "./components/PointSection.tsx";
import {useState} from "react";
import {TOTAL_POINTS} from "./constants/constants.ts";

function Game() {

    // const todaysActor = getActorForDay(actors, new Date());

    const [currentPoints, setCurrentPoints] = useState(TOTAL_POINTS);

    const handleGuess = () => {
        setCurrentPoints(prevState => Math.max(prevState - 1, 0));
    }

    return (
        <div className={'w-full'}>
            {(currentPoints === 0) && <p>You've lost!</p>}
            <PointSection remainingPoints={currentPoints}/>
            <button onClick={handleGuess}>Guess</button>
        </div>
    );
}

export default Game;