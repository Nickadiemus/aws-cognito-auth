/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Link } from 'react-router-dom';

/** component import(s)                                                 */
import { Navbar, NavItem, Icon } from 'react-materialize';

/** style import(s)                                                     */
import '../styles/Navigation.css';

/*/
 *  Component: Navigation
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: Navigation bar
/*/
class Navigation extends Component {
  render(){
    return(
      <Navbar className = "navbar-color" brand='logo' right>
        <NavItem><Link to = "/Login">Login</Link></NavItem>
        <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>
    )
  }
}

export default Navigation
