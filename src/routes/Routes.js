/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Switch, Route } from 'react-router-dom';

/** page import(s)                                                 */
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';



/** style import(s)                                                     */


/*/
 *  Component: Routes
 *  @props {}
 *  @EventHandler(s):
 *  @Description: Handls
/*/
class Routes extends Component {
  render(){
    return(
      <main>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/login" component={Login}/>
          <Route exact path = "/signup" component={SignUp}/>
        </Switch>
      </main>
    )
  }
}

export default Routes
