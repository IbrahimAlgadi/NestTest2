import {Photo} from "../../photos/interface/photo.interface";

export interface User {
    id?: number;
    email: string;
    password: string;
    photos: Photo[];
}