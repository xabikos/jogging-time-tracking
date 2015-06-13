var ReactBootstrap = require('react-bootstrap');

class NavigationBar extends React.Component {
	render() {
		var navBarHeader = (
			<a href="/">
				Home
			</a>	
		);
		var Navbar = ReactBootstrap.Navbar;
		var NavItem = ReactBootstrap.NavItem;

		return (			
			<Navbar fixedTop={true} brand={navBarHeader}>
				<ReactBootstrap.Nav navbar right>
					<NavItem href='http://skg.azurebootcamp.net/' target='_blank'>First</NavItem>
					<NavItem href='https://github.com/xabikos/globalazurebootcampreport' target='_blank'>Second</NavItem>
				</ReactBootstrap.Nav>
			</Navbar>
		);
  }
}

module.exports = NavigationBar;