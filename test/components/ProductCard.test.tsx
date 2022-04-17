import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import {product2} from '../data/products';

const {act} = renderer;

describe('ProductCard', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');
        expect(tree).toMatchSnapshot();

    })
})