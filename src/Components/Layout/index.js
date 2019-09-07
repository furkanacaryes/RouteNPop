import * as React from 'react';
import './style.scss';
import Nav from '../Nav';
import Logo from '../../Assets/Logo.png';

const Layout = props => (
	<div className="Layout">
		<header>
			<div className="topbar">
				<div className="container">
					<div className="brand">
						<img src={Logo} alt="SmartOver Logo"></img>
					</div>
					<div className="lang-options">TR | EN</div>
				</div>
			</div>

			<div className="navbar">
				<div className="container">
					<Nav></Nav>
				</div>
			</div>
		</header>

		<main>{props.children}</main>
	</div>
);

export default Layout;
