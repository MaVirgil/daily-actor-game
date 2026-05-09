import TextSection from "./components/TextSection.tsx";
import {L1_HINT_COST, L2_HINT_COST, L3_HINT_COST, TOTAL_POINTS, WRONG_GUESS_COST} from "./constants/constants.ts";

function Tutorial() {

    return (
        <div>
            <h2 className={'text-2xl text-center font-medium'}>How to play:</h2>
            <TextSection>
                <p>
                    Guess the secret actor with as many remaining points as possible. Each wrong guess costs {WRONG_GUESS_COST} points.
                    Use hints to help you figure out the correct answer.
                    Hints in each category range from:
                </p>
                <ul>
                    <li>vague ({L1_HINT_COST} points)</li>
                    <li>medium ({L2_HINT_COST} points)</li>
                    <li>obvious ({L3_HINT_COST} points)</li>
                </ul>
                <p>
                    Hints must be unlocked in sequential order. You start with {TOTAL_POINTS} points, good luck!
                </p>
            </TextSection>
        </div>
    );
}

export default Tutorial;