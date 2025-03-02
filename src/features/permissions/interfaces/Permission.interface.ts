import { UUID } from "../../../common/types/uuid.type";
import { PermissionName } from "../../../constants/permission.enum";

export interface Permission {
    id: UUID;
    name: PermissionName;
    resource: string;
    createdAt: Date;
    updatedAt: Date;

}