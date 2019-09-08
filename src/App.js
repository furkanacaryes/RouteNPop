import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.scss';
import StateContext from './stateContext';
import Layout from './Components/Layout';
import MainPage from './Pages/main';
import Products from './Pages/products';

const App = () => (
	<StateContext.Provider value={useState({ menuActive: false })}>
		<Router>
			<Layout path="/">
				<MainPage path="/" default></MainPage>
				<Products path="/products"></Products>
			</Layout>
		</Router>
	</StateContext.Provider>
);

export default App;
