import type {ReactNode} from "react";

type TextSectionProps = {
    children: ReactNode
}

function TextSection({children} : TextSectionProps) {
    return (
        <span className={'text-base'}>
            {children}
        </span>
    );
}

export default TextSection;