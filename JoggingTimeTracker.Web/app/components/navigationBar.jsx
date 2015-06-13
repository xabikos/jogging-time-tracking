var ReactBootstrap = require('react-bootstrap');

class NavigationBar extends React.Component {
	render() {
		var navBarHeader = (
			<a href="/">
				Jogging Time Tracking
			</a>	
		);
		var Navbar = ReactBootstrap.Navbar;
		var NavItem = ReactBootstrap.NavItem;

		return (			
			<Navbar fixedTop={true} brand={navBarHeader}>
				<ReactBootstrap.Nav navbar right>
					<NavItem href='' target='_blank'>First</NavItem>
					<NavItem href='' target='_blank'>Second</NavItem>
				</ReactBootstrap.Nav>
			</Navbar>
		);
  }
}

module.exports = NavigationBar;