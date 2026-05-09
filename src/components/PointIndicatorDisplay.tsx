import {TOTAL_POINTS} from "../constants/constants.ts";

function PointIndicatorDisplay({remainingPoints} : {remainingPoints : number}) {
    const pointDisplayData : boolean[] = [];

    for (let i : number = TOTAL_POINTS; i >= 1; i--) {
        if (i > remainingPoints) {
            pointDisplayData.push(true);
        } else {
            pointDisplayData.push(false);
        }
    }

    return (
        <div className={'flex flex-col items-center gap-1'}>
            <div className={'flex justify-between gap-0.5'}>
                {pointDisplayData.map((isSpent : boolean, index : number) =>
                    <div key={index} className={`rounded-sm ${isSpent ? 'bg-warning' : 'bg-primary'} w-8 h-3`}></div>
                )}
            </div>
            <div>
                <p className={'text-gray-600 font-medium'}>{`${remainingPoints}/${TOTAL_POINTS} points remaining`}</p>
            </div>
        </div>
    );
}

export default PointIndicatorDisplay