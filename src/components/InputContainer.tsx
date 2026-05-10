import {MAX_SHOWN_SEARCH_SUGGESTIONS, WRONG_GUESS_COST} from "../constants/constants.ts";
import {type ChangeEvent, useState} from "react";

function InputContainer({callback, guessList, actorNames}: {
    callback: (guess: string) => void,
    guessList: string[],
    actorNames: string[]
}) {

    const [value, setValue] = useState('');
    const [searchItems, setSearchItems] = useState<string[]>([]);

    const handleAction = (formData: FormData) => {

        const inputValue = formData.get('guess');

        if (!inputValue) {
            console.error('input inputValue \'guess\' was null');
            return;
        }

        //clear input field
        setValue('');
        setSearchItems([]);

        callback(inputValue.toString());
    }

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setValue(e.target.value);

        setSearchItems(
            e.target.value.length >= 2 ?
                actorNames.filter(
                    actorName => actorName.toLowerCase().includes(e.target.value.toLowerCase())
                ).slice(0, MAX_SHOWN_SEARCH_SUGGESTIONS) : []
        );
    }

    const handleSearchSuggestionClick = (suggestion: string) => {
        setValue(suggestion);

        //clear search suggestions
        setSearchItems([]);
    }

    return (
        <div className={'flex flex-col w-full p-4'}>

            <form action={(formData) => handleAction(formData)}>
                <div className={'flex justify-between'}>
                    <input
                        type={'text'}
                        name={'guess'}
                        required
                        placeholder={'Guess...'}
                        onChange={event => handleSearchInputChange(event)}
                        value={value}
                        className={
                            `w-6/7
                            border-2
                            rounded-t-lg
                            ${searchItems.length <= 0 ? 'rounded-b-lg' : ''}
                            p-3
                            border-gray-200
                            outline-none
                            focus:border-primary`
                        }
                    />
                    <button type={'submit'} className={'bg-primary rounded-lg text-white w-1/9 cursor-pointer'}>↵</button>
                </div>
            </form>

            {searchItems.length > 0 &&
                <div className={'p-2 border-2 border-t-0  rounded-b-lg w-6/7 border-gray-200'}>
                    {searchItems.map(
                        (item) =>
                            <p onClick={() => handleSearchSuggestionClick(item)} className={'cursor-pointer hover:font-bold'} key={item}>
                                {item}
                            </p>
                    )}
                </div>
            }

            <div className={'flex flex-wrap gap-3 mt-2'}>
                {guessList.map(
                        (guess, index) =>
                            <div key={index} className={'bg-red-200 text-warning pl-4 pr-4 pt-1 pb-1 text-center rounded-2xl'}>
                                • {guess}<p className={'inline text-warning font-thin '}>-{WRONG_GUESS_COST}</p>
                            </div>
                )}
            </div>
        </div>
    );
}

export default InputContainer;