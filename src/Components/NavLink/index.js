import * as React from 'react';
import { Link } from '@reach/router';
import './style.scss';

const setIsActive = ({ isCurrent }) => ({
	className: isCurrent ? 'active' : '',
});

const NavLink = ({ name, to, subLinks }) => (
	<div className="nav-link">
		<Link to={to} getProps={setIsActive}>
			{name}
		</Link>

		{subLinks && (
			<div className="nav-link__sub">
				{subLinks.map((sub, i) => (
					<NavLink {...sub} key={sub.name + i}></NavLink>
				))}
			</div>
		)}
	</div>
);

export default NavLink;
