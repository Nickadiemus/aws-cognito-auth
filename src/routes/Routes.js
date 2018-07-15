/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Switch, Route } from 'react-router-dom';

/** page import(s)                                                 */
import Home from '../pages/Home';



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
        </Switch>
      </main>
    )
  }
}

export default Routes
