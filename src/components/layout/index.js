import * as React from 'react';
import Nav from '../Nav';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Layout = props => (
	<>
		<header>
			<div className="brand">
				<Logo />
			</div>
			<Nav></Nav>
		</header>

		<main>{props.children}</main>
	</>
);

export default Layout;
