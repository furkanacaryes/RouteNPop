import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import Layout from './components/Layout';

const App = () => (
	<Router>
		<Layout path="/">{/* pages here */}</Layout>
	</Router>
);

export default App;
