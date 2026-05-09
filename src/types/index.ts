export interface HintCategory {
    l1: string,
    l2: string,
    l3: string
}

export interface Actor {
    id: string,
    name: string,
    gender: string,
    nationality: string,
    birthYear: number,
    careerFact: string,
    hints: {
        films: HintCategory,
        character: HintCategory,
        career: HintCategory,
    }
}