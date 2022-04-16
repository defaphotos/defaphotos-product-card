import { CSSProperties } from 'react';

export interface ProductCardhandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}

export interface ContextProductProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
    maxCount?: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardProps {
    product: Product;
    // children: ReactElement | ReactElement[];
    children: (args: ProductCardhandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (product: Product, count: number) => void;
    value?: number; 
    initialValues?: InitialValues;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}

export interface ProductCart extends Product {
    count: number;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ({className, title}: ProductTitleProps) => JSX.Element,
    Image: ({ img, className}: ProductImageProps) => JSX.Element;
    Buttons: ({className}: ProductButtonsProps) => JSX.Element;
}