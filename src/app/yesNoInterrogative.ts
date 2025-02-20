export class YesNoInterrogative {
    constructor(
        public negation: boolean = false,
        public verb: string = "",
        public subjectAdjective: string = "",
        public subject: string = "",
        public directObjectAdjective: string = "",
        public directObject: string = "",
        public preposition: string = "",
        public indirectObjectAdjective: string = "",
        public indirectObject: string = "",
        public temporal: string = "",
    ) {}
}