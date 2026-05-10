import {WRONG_GUESS_COST} from "../constants/constants.ts";

function InputContainer({callback, guessList}: {callback: (guess: string) => void, guessList: string[]}) {

    const handleAction = (formData: FormData) => {
        const value = formData.get('guess');

        if (!value) {
            console.error('input value \'guess\' was null');
            return;
        }

        callback(value.toString());
    }
    return (
        <div className={'flex flex-col gap-1 w-full p-4'}>
            <div>
                <form action={(formData) => handleAction(formData)}>
                    <div className={'flex justify-between'}>
                        <input type={'text'} name={'guess'} required placeholder={'Guess...'} className={'bg-transparent w-6/7 border-2 rounded-lg p-3 border-gray-200 outline-none focus:border-primary'}/>
                        <button type={'submit'} className={'bg-primary rounded-lg text-white w-1/9 cursor-pointer'}>↵</button>
                    </div>
                </form>
            </div>
            <div className={'flex flex-wrap gap-3 mt-2'}>
                {guessList.map(guess => <div className={'bg-red-200 text-warning pl-4 pr-4 pt-1 pb-1 text-center rounded-2xl'}>• {guess} <p className={'inline text-warning font-thin '}>-{WRONG_GUESS_COST}</p></div>)}
            </div>
        </div>
    );
}

export default InputContainer;