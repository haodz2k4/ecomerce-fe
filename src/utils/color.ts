import { OrderStatus } from "../constants/app.constant";
import { ColorCrudConstant } from "../constants/color-crud.constant"
import { PermissionName } from "../constants/permission.enum"

export const getColorCrud = (permissionName: PermissionName) => {

    switch(permissionName) {
        case PermissionName.CREATE: 
            return ColorCrudConstant.CREATE;
        case PermissionName.UPDATE:
            return ColorCrudConstant.UPDATE;
        case PermissionName.READ:
            return ColorCrudConstant.READ;
        case PermissionName.DELETE:
            return ColorCrudConstant.DELETE;
        default: 
            return "default"
    }

}

export const getColorByOrderStatus = (orderStatus: OrderStatus) => {
    switch(orderStatus) {
        
        case OrderStatus.CANCELED: 
            return "red";
        case OrderStatus.CONFIRMED:
            return "green";
        case OrderStatus.DELIVERED:
            return "orange";
        case OrderStatus.FAILED:
            return "purple";
        case OrderStatus.PENDING:
            return "orange";
        case OrderStatus.PROCESSING:
            return "blue";
        case OrderStatus.SHIPPED:
            return "yellow";
        default:
            return "default"
    }
}