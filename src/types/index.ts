export interface hintCategory {
    l1: string,
    l2: string,
    l3: string
}

export interface actor {
    id: string,
    name: string,
    gender: string,
    nationality: string,
    birthYear: number,
    careerFact: string,
    hints: {
        films: hintCategory,
        character: hintCategory,
        career: hintCategory,
    }
}