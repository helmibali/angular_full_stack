import { Article } from "./article.model";
import { User } from "./user.model";

export class Comment {
    id:number;
    text:string;
    article : Article;
    user : User;
}