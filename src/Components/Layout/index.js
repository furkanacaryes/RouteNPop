import * as React from 'react';
import './style.scss';
import Header from '../Header';

const Layout = props => (
	<div className="Layout">
		<Header/>
		<main>{props.children}</main>
	</div>
);

export default Layout;
