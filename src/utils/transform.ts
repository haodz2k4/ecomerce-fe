import { Gender, StatusActiveEnum } from "../constants/app.constant";



export const transfromStatus = (status: StatusActiveEnum) => {
    return status === StatusActiveEnum.ACTIVE ? 'Hoạt động' : 'Không hoạt động'
}

export const transfromGender = (gender: Gender) => {
    return gender === Gender.MALE ? 'Nam' : 'Nữ'
}

export const getColorByStatus = (status: StatusActiveEnum) => {
    return status === StatusActiveEnum.ACTIVE ? 'green' : 'red'
}

export const transformReverseStatus = (status: StatusActiveEnum) => {
    return status === StatusActiveEnum.ACTIVE ? StatusActiveEnum.INACTIVE : StatusActiveEnum.ACTIVE
}