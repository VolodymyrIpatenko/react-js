import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    productsList: [
      { id: 1, name: 'Ipad Pro', price: 799 },
      { id: 2, name: 'Iphone 13', price: 999 },
    ],
  };

  render() {
    const sum = this.state.productsList.reduce((acc, { price }) => acc + price, 0);
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={this.state.productsList.length} />
        <div className="products">
          <ul className="products__list">
            {this.state.productsList.map(({ id, name, price }) => (
              <ProductsList key={id} name={name} price={price} />
            ))}
            <div className="products__total">Total: ${sum}</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;