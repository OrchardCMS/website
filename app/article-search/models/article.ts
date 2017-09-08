export class Article {

    /**
     * Allows an object to be passed into the constructor
     */
    constructor(obj?: any) {
        this.title = (obj && obj.id) || null;
        this.description = (obj && obj.id) || null;
        this.link = (obj && obj.id) || null;
        this.pubdate = (obj && obj.id) || null;
    }

    title: string;
    description: string;
    link: string;
    pubdate: string;
}