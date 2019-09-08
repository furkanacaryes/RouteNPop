import React, { useState } from 'react';
import { Link } from '@reach/router';
import './style.scss';

const setIsActive = ({ isCurrent }) => ({
	className: isCurrent ? 'active' : '',
});

const getStatefulClass = (isExpanded, hasSub) => {
	return [
		'nav-link',
		// hasSub ? 'has-sub' : '',
		isExpanded ? 'expanded' : '',
	].join(' ');
};

const NavLink = ({ name, to, subLinks }) => {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<div className={getStatefulClass(isExpanded, !!subLinks)}>
			<Link to={to} getProps={setIsActive}>
				{name}
			</Link>

			{subLinks && (
				<>
					<div
						className="nav-link__expander"
						onClick={() => setExpanded(!isExpanded)}
					></div>

					<div className="nav-link__sub">
						<div className="nav-link__sub__inner">
							{subLinks.map((sub, i) => (
								<NavLink {...sub} key={sub.name + i}></NavLink>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default NavLink;
