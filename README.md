# defaphotos-product-card

Este es un paquete de prueba de despliegue en NPM

### Daniel farias

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'defaphotos-product-card'
```

```
<ProductCard 
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
    product={product}
>
    {() => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />    
        </>
    )}
</ProductCard>
```

