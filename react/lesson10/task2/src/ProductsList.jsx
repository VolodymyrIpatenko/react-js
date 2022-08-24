import React from 'react';

const ProductsList = props => {
  return (
    <li className="products__list-item">
      <span className="products__item-name">${props.name}</span>
      <span className="products__item-price">${props.price}</span>
    </li>
  );
};

export default ProductsList;
