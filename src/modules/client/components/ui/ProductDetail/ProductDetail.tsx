import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { AppDispatch, RootState } from "../../../../../common/types/store.type";
import { useEffect } from "react";
import { fetchProductBySlug } from "../../../../../features/products/products.thunk";
import styles from "./ProductDetail.module.scss";
import { Image } from "antd";

const ProductDetail = () => {

    const param = useParams();
    const slug = param.slug;
    const {item} = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchProductBySlug(slug as string))
    },[dispatch, slug])
    return (
        <div className="container">
            <div className={styles.product__detail}>
                <div className={styles.product__image}>
                    <Image />
                </div>
                <div className={styles.product__content}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail