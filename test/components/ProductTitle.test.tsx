import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import {product1} from '../data/products';

describe('ProductTitle', () => {
    test('Debe mostrar el componente con  el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })


    test('Debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})