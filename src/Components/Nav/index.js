import * as React from 'react';
import NavLink from '../NavLink';

const navLinks = [
	{ name: 'Main Page', to: '/' },
	{ name: 'Products', to: '/products' },
];

const Nav = () => (
	<nav>
		{navLinks.map(({ ...props }) => (
			<NavLink {...props}></NavLink>
		))}
	</nav>
);

export default Nav;
