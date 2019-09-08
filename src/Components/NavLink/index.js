import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import './style.scss';
import StateContext from '../../stateContext';

const setIsActive = ({ isCurrent }) => ({
	className: isCurrent ? 'active' : '',
});

const NavLink = ({ name, to, subLinks }) => {
	const [isExpanded, setExpanded] = useState(false);
	const [, setState] = useContext(StateContext);

	return (
		<div className={`nav-link ${isExpanded ? 'expanded' : ''}`}>
			<Link
				to={to}
				getProps={setIsActive}
				onClick={() => setState({ menuActive: false })}
			>
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
