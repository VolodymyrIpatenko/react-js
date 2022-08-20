import React, { Component } from 'react';
import ProductsList from "./ProductsList.jsx";
import CartTitle from "./CartTitle.jsx";


class ShoppingCart extends Component {
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
		const count = this.state.cartItems.length;
		return (
			<div className="column">
				<CartTitle userName={this.props.userData.firstName} count={count} />
				<ProductsList cartItems={this.state.cartItems} />
			</div>
		);
	}
}

export default ShoppingCart;