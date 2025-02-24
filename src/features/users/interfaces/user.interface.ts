import { StatusActiveEnum } from "../../../constants/app.constant";


export interface User {
    id: string;
    fullName: string;
    avatar: string;
    email: string;
    gender: string;
    status: StatusActiveEnum;
    createdAt: Date;
    updatedAt: Date;
}