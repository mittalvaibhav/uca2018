export class book {
    public title: string;
    public volume: number;
    public author: string;
    public description: string;
    public version: number;
    public price: number;
    public subjectCategory: string;
    public entryDate: any;

    constructor(title: string, author: string, entryDate?: any) {
        this.title = title;
        this.author = author;
        this.entryDate = entryDate;
    }
}