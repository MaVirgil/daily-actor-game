import PointIndicatorDisplay from "./PointIndicatorDisplay.tsx";

function PointSection( {remainingPoints} : {remainingPoints: number}) {



    return (
        <div className={'flex flex-col gap-4 bg-gray-100 w-full p-4'}>
            <div className={'flex justify-center'}>
                <div className={'flex flex-col items-center'}>
                    <div className={'flex gap-1 text-gray-600'}>
                        <p>Daily</p>
                        <p>•</p>
                        <p>May 9</p>
                    </div>
                    <h3 className={'text-xl  text-center font-bold'}>Guess the actor</h3>
                </div>
            </div>
            <PointIndicatorDisplay remainingPoints={remainingPoints} />
        </div>
    );
}

export default PointSection;