import ReactBootstrap from 'react-bootstrap';

import UserActions from '../actions/userActions';

class NavigationBar extends React.Component {

  constructor(props) {
		super(props);

    this.logOut = this.logOut.bind(this);
	}

  logOut() {
    UserActions.logOut();
  }

	render() {
		let navBarHeader = (
			<a href="/">
				Jogging Time Tracking
			</a>	
		);
		let Navbar = ReactBootstrap.Navbar;
    let NavItem = ReactBootstrap.NavItem;

    let navigationItems = [];
    if(this.props.isAuthenticated) {
      navigationItems.push(<NavItem onClick={this.logOut} href='#'>Log out</NavItem>);
    }

		return (			
			<Navbar fixedTop={true} brand={navBarHeader}>
				<ReactBootstrap.Nav navbar right>
          {navigationItems}					
				</ReactBootstrap.Nav>
			</Navbar>
		);
  }
}

export default NavigationBar;