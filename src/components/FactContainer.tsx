type FactContainerProps = {
    label: string,
    value: string,
    bold?: boolean,
    italic?: boolean
}

function FactContainer({label, value, bold = false, italic = false}: FactContainerProps) {
    return (
        <div className={'flex items-baseline gap-1'}>
            <p className={'w-28 text-sm shrink-0 font-medium uppercase tracking-wide text-gray-400'}>{label}</p>
            <p className={`${bold ? 'font-semibold' : ''} ${italic ? 'italic' : ''}`}>{value}</p>
        </div>
    );
}

export default FactContainer;