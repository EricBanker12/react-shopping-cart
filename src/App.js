import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const removeItem = index => {
		// withhold item from the cart
		setCart(cart.filter((e,i) => i !== index))
	}

	return (
		<div className="App">
			<CartContext.Provider value={{cart, removeItem}}>
				<Navigation />

				{/* Routes */}
				<ProductContext.Provider value={{products, addItem}} >
					<Route
						exact
						path="/"
						component={Products}
					/>
				</ProductContext.Provider>

				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</CartContext.Provider>
		</div>
	);
}

export default App;
