import React, { useContext } from 'react';
import './style.scss';
import Nav from '../Nav';
import Logo from '../../Assets/Logo.png';
import { ReactComponent as MenuIcon } from '../../Assets/Icons/menu.svg';
import StateContext from '../../stateContext';

const Header = () => {
	const [{ menuActive }, setState] = useContext(StateContext);

	return (
		<header>
			<div className="topbar">
				<div className="container">
					<div className="brand">
						<img src={Logo} alt="SmartOver Logo"></img>
					</div>

					<div className="lang-options">TR | EN</div>

					<div
						className="menu-toggle icon"
						onClick={() => setState({ menuActive: !menuActive })}
					>
						<MenuIcon fill="#fff" />
					</div>
				</div>
			</div>

			<div className={`navbar ${menuActive ? 'active' : ''}`}>
				<div className="container">
					<Nav></Nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
