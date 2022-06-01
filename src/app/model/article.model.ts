import { Comment } from "./comment.model";

export class Article {
    id:number;
    title:string;
    text:string;
    dateCreation:Date;
    comments:Comment[];
}