const Navbar = () => {
	return (
		<nav className="nav">
			<a href="/" className="site-title">
				Site name
			</a>
			<ul>
				<li className="active">
					<a href="/listings"> listings</a>
				</li>
				<li>
					<a href="/buyers">buyers</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
