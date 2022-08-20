import React, { Component } from 'react';

class ProductsList extends Component {
	state = {
		cartItems: [
			{
				id: "1",
				name: "MAC",
				price: 999,
			},
			{
				id: "2",
				name: "IPAD",
				price: 1000,
			},
		],
	};
	render() {
		const total = this.props.cartItems.reduce((acc, item) => acc + item.price, 0);
		return (
			 <div className="products">
				<ul className="products__list">
					{this.state.cartItems.map(({ id, name, price }))};
          <li key={id} className="products__list-item">
            <span className="products__item-name">{name}</span>
            <span className="products__item-price">{price}</span>
          </li>
        </ul>
				<div className="products__total">{ `Total: $${total}`}</div>
      </div>
		);
	}
}

export default ProductsList;
