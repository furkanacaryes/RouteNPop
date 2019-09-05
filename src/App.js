import React from 'react';
import { Router } from '@reach/router';
import './App.scss';
import Layout from './Components/Layout';

const App = () => (
	<Router>
		<Layout path="/">{/* pages here */}</Layout>
	</Router>
);

export default App;
