import React, { useState , useEffect } from 'react';
import Cart from '../Cart/Cart'

import './Shop.css';

import fakedata from '../../fakedata/fakedata'
import Product from '../Product/Product';



const Shop = () => {
    const [course, setCourse]= useState(fakedata);
    const [cart, setCart]= useState([]);

    const handleAddCourse=(courses)=>{
        console.log("clicked", courses);
        let newCart=[...cart, courses];
        setCart(newCart);

    }
 return (
     <div className="shop">
         <div className="course">
             {
                 course.map(course =><Product course={course} handleAddCourse={handleAddCourse}>{course.name}</Product>)
             }
         </div>
         <div className="cart">
             <Cart cart={cart}></Cart>
         </div>
         
         
         

     </div>
    );
};

export default Shop;