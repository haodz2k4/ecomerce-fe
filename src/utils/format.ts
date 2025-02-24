import moment from "moment"
moment.locale('vn')

export const formatPriceToVnd = (price: number): string => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export const formatDate = (date: Date): string => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}