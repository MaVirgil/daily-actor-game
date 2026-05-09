type FactContainerProps = {
    label: string,
    value: string,
    bold?: boolean,
    italic?: boolean
}

function FactContainer({label, value, bold = false, italic = false}: FactContainerProps) {
    return (
        <div className={'flex gap-1'}>
            <p className={'align-text-bottom w-28 text-sm shrink-0 font-medium uppercase text-gray-400'}>{label}</p>
            <p className={`${bold ? 'font-semibold' : ''} ${italic ? 'italic' : ''}`}>{value}</p>
        </div>
    );
}

export default FactContainer;