import type {Actor} from "../types";

function InitialHint( {actor} : {actor: Actor}) {
    return (
        <div>
            <ul>
                <li>Gender: {actor.gender}</li>
                <li>Nationality: {actor.nationality}</li>
                <li>Born: {actor.birthYear}</li>
                <li>Fun fact: {actor.careerFact}</li>
            </ul>
        </div>
    );
}

export default InitialHint;