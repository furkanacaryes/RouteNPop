import * as React from 'react';
import NavLink from '../NavLink';
import './style.scss';

const navLinks = [
	{ name: 'Main Page', to: '/' },
	{
		name: 'Products',
		to: '/products',
		subLinks: [
			{ name: 'On Boarding', to: 'onboarding' },
			{ name: 'Customisations', to: 'customisations' },
			{ name: 'Templates', to: 'templates' },
			{ name: 'Integrations', to: 'intergations' },
		],
	},
	{ name: 'Solutions', to: '/solutions' },
	{ name: 'Services', to: '/services' },
	{ name: 'Pricing', to: '/pricing' },
];

const Nav = () => (
	<nav className="flex-center">
		{navLinks.map(({ ...props }, i) => (
			<NavLink {...props} key={i}></NavLink>
		))}
	</nav>
);

export default Nav;
