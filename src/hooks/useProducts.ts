/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { InitialValues, Product } from "../interfaces/interfaces";

interface Props {
    product: Product;
    onChange?: (product: Product, count: number) => void;
    value?: number;
    initialValues?: InitialValues,
}

const useProducts = ({onChange, product, value = 0, initialValues}: Props) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false)

    const isConstrolled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isConstrolled.current) {
            onChange!(product, value)
        }

        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);
        onChange && onChange(product, newValue);
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (isMounted.current) {
            setCounter(value)
        }
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset,
    }
};

export default useProducts;