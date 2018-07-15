/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Link } from 'react-router-dom';

/** component import(s)                                                 */
import { Button } from 'react-materialize';

/** style import(s)                                                     */
import '../styles/Home.css';

const styles = {
  textAlign: 'center',
  margin: '20em auto'
}

/*/
 *  Component: Home
 *  @props {}
 *  @EventHandler(s):
 *  @Description:
/*/
class Home extends Component {
  render(){
    return(
      <div style = {styles}>
         <Link className = "link-primary-t" to = "/login"><Button className="btn-primary-c" waves='light'>Lets Login</Button></Link>
      </div>
    )
  }
}

export default Home
