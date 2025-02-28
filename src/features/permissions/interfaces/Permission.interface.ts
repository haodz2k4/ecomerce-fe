import { UUID } from "../../../common/types/uuid.type";

export interface Permission {
    id: UUID;
    name: Permission;
    resource: string;
    createdAt: Date;
    updatedAt: Date;

}