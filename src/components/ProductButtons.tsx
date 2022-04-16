import React, { useCallback, useContext } from "react";
import { ContextProduct } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { ProductButtonsProps } from "../interfaces/interfaces";

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { counter, increaseBy, maxCount } = useContext(ContextProduct);

    const isMaxReached = useCallback(
      () => {
        console.log('useCallback', counter)
        return !!maxCount && counter === maxCount
      },
      [counter, maxCount],
    )
    
    return (
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}>+</button>
        </div>
    )
}