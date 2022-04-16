/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import noImage from '../assets/no-image.jpg'
import { ProductImageProps } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css';
import { ContextProduct } from "./ProductCard";

export const ProductImage = ({img, className, style}: ProductImageProps) => {

    const { product } = useContext(ContextProduct);
    let showToImg: string;
    if (img) {
        showToImg = img;
    } else if (product.img) {
        showToImg = product.img;
    } else {
        showToImg = noImage;
    }
    
    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={showToImg} /> 
    )
}