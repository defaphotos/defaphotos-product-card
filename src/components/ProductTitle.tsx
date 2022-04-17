import React, { useContext } from "react"
import { ContextProduct } from "./ProductCard"
import styles from '../styles/styles.module.css';
import { ProductTitleProps } from '../interfaces/interfaces';

export const ProductTitle = ({className, title, style}: ProductTitleProps) => {

    const {product} = useContext(ContextProduct);
    let showTitle;

    if (title) {
        showTitle = title;
    } else if (product.title) {
        showTitle = product.title;
    }

    return (
        <span style={style} className={`${styles.productDescription} ${className}`}>{showTitle}</span>
    )
}