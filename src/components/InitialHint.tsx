import type {Actor} from "../types";
import FactContainer from "./FactContainer.tsx";

function InitialHint( {actor} : {actor: Actor}) {
    return (
        <div className={'flex flex-col gap-1 w-full p-4 border-b-2 border-b-gray-200 border-dashed'}>
            <FactContainer label={'Gender'} value={actor.gender} bold={true}/>
            <FactContainer label={'Nationality'} value={actor.nationality} bold={true} />
            <FactContainer label={'Born'} value={actor.birthYear.toString()} bold={true} />
            <FactContainer label={'Fun fact'} value={actor.careerFact} italic={true} />
        </div>
    );
}

export default InitialHint;