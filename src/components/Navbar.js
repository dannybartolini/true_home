const Navbar = () => {
	const path = window.location.pathname;
	return (
		<nav className="nav">
			<a href="/" className="site-title">
				Site name
			</a>
			<ul>
				<CustomLink href="/listings">Listings</CustomLink>
				<CustomLink href="/buyers">Buyers</CustomLink>
			</ul>
		</nav>
	);
};

const CustomLink = ({ href, children, ...props }) => {
	const path = window.location.pathname;
	return (
		<li className={path === href ? "active" : ""}>
			<a href={href} {...props}>
				{children}
			</a>
		</li>
	);
};

export default Navbar;
