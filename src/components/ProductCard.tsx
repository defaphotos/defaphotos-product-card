import React, { createContext } from 'react';
import styles from '../styles/styles.module.css';
import useProducts from '../hooks/useProducts';
import { ContextProductProps, ProductCardProps } from '../interfaces/interfaces';

export const ContextProduct = createContext({} as ContextProductProps);
const { Provider } = ContextProduct;

export const ProductCard = ({product, children, className, style, onChange, value, initialValues}:ProductCardProps) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProducts({onChange, product, value, initialValues});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children({count: counter, increaseBy, isMaxCountReached, product, reset, maxCount })} 
            </div>
        </Provider>
    );
};