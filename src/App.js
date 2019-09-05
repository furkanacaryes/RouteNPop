import React from 'react';
import { Router } from '@reach/router';
import './App.scss';
import Layout from './Components/Layout';
import MainPage from './Pages/main';

const App = () => (
	<Router>
		<Layout path="/">
			<MainPage path="/" default></MainPage>
		</Layout>
	</Router>
);

export default App;
