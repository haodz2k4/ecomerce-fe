import moment from "moment";

export const formatPriceToVnd = (price: number = 0): string => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export const formatDate = (date: Date): string => {
    return moment(date).format('MMMM Do YYYY');
}