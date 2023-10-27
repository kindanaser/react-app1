import React from 'react'
import Product from './product/Product.jsx'

export default function Products() {
    const products = [
    {id:1,title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',desc:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', price:'109.95$'},
    {id:2,title:'Mens Casual Premium Slim Fit T-Shirts',desc:'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.' , 
    price:'22.3$'},{id:3,title:'Mens Cotton Jacket',desc:'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.' , 
    price:'55.99$'},{id:4,title:'Mens Casual Slim Fit',desc:'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.' , 
    price:'15.99$'}];

  return (
 <div className='container'>
 <div className='products row my-5'>
 {products.map((product)=> {
    return <Product {...product} key={product.id}/>
   })}
 </div> 
 </div>
 );
}
