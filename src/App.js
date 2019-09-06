import React from 'react';
import { Router } from '@reach/router';
import './App.scss';
import Layout from './Components/Layout';
import MainPage from './Pages/main';
import Products from './Pages/products';

const App = () => (
	<Router>
		<Layout path="/">
			<MainPage path="/" default></MainPage>
			<Products path="/products"></Products>
		</Layout>
	</Router>
);

export default App;
