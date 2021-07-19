import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id:1, name: 'Addidas', description: 'Rinning Shoes', price: '$5', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg'},
    {id:2, name: 'Rebook', description: 'Rinning Shoes', price: '$10', image: 'http://airmaxcheap4sale.com/8447-large_default/Reebok-Shoes-Real-Or-Fake-Reebok-Answer-X-Pump-Real-carbon-perfect-air-pump-Reebok-Insta-pump-Fury.jpg'},
];

const Products = () => {
const classes = useStyles();
return(
<main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
            </Grid>
        )
        )}
    </Grid>
</main>
)
}

export default Products;