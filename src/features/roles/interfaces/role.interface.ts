import { StatusActiveEnum } from "../../../constants/app.constant";


export interface Roles {
    id: string;
    title: string;
    description: string;
    status: StatusActiveEnum;
    createdAt: Date;
    updatedAt: Date;
}