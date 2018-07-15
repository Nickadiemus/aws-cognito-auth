/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Link } from 'react-router-dom';

/** component import(s)                                                 */

/** style import(s)                                                     */


/*/
 *  Component: Navigation
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: Navigation bar
/*/
class Navigation extends Component {
  render(){
    return(
      <div style = {{
        height: '150px',
        'background-color': 'grey',
        'text-align': 'center'
      }}>
        <Link to = "/"></Link>
      </div>
    )
  }
}

export default Navigation
