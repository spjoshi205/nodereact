import React from "react";
import Person from "./Product/Product";

const products = (props) => props.products.map((currentValue,index) => {
        return <Person 
        click={() => props.click(index) }
        title={currentValue.title} 
        description={currentValue.description}
        key={currentValue.id}
        price={currentValue.price}
        imageUrl={currentValue.imageUrl}
        />
      });

export default products;