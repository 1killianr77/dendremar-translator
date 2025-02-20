export class Sentence {
    constructor(
        public mood: string = "",
        public subject: string = "",
        public subjectAdjective: string = "",
        public isSubjectPlural: boolean = false,
        public directObject: string = "",
        public directObjectAdjective: string = "",
        public isDOPlural: boolean = false,
        public indirectObject: string = "",
        public indirectObjectAdjective: string = "",
        public isIOPlural: boolean = false,
        public verb: string = "",
        public adverb: string = "",
        public preposition: string = "",
        public interrogative: string = "",
        public temporal: string = "",
        public isNegative: string = "false",
    ) {}
}