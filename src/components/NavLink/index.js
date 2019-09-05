import * as React from 'react';
import { Link } from '@reach/router';

const setIsActive = ({ isCurrent }) => ({
	className: isCurrent ? 'active' : '',
});

const NavLink = props => (
	<Link {...props} getProps={setIsActive}>
		{props.name}
	</Link>
);

export default NavLink;
