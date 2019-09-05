import * as React from 'react';
import NavLink from '../NavLink';

const navLinks = [
	{ name: 'Main Page', to: '/' },
	{ name: 'Products', to: '/products' },
	{ name: 'Solutions', to: '/solutions' },
	{ name: 'Services', to: '/services' },
	{ name: 'Pricing', to: '/pricing' }
];

const Nav = () => (
	<nav>
		{navLinks.map(({ ...props }, i) => (
			<NavLink {...props} key={i}></NavLink>
		))}
	</nav>
);

export default Nav;
