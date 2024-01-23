import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
	const path = window.location.pathname;
	return (
		<nav className="nav">
			<Link to="/" className="site-title">
				Site name
			</Link>
			<ul>
				<CustomLink to="/listings">Listings</CustomLink>
				<CustomLink to="/buyers">Buyers</CustomLink>
			</ul>
		</nav>
	);
};

const CustomLink = ({ to, children, ...props }) => {
	//please review the concept of absolute vs relative paths and what this has to do with resolved path

	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
};

export default Navbar;
