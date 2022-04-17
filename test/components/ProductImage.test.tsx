import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import {product2} from '../data/products';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
    test('Debe mostrar el componente con la producto sin imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })


    test('Debe mostrar el componente con la producto con imagen', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})