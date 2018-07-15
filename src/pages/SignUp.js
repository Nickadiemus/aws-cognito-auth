/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */
import { Row, Input, Button } from 'react-materialize';
/** style import(s)                                                     */

import '../styles/SignUp.css'
/*/
 *  Component: SignUp
 *  @props {NA}
 *  @EventHandler(s): onChange(), onSubmit()
 *  @Description: SignUp Page for AWS Cognito
/*/
class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      confirmpassword: '',
      first: '',
      last: '',
      signUp: false
    }
  }

  onChange(e){
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //handles submit to aws cognito
  handleSubmit(e){
    e.preventDefault()
    console.log("handleSubmit()");
  }
  render(){
    return(
      <div className="signup-wrapper">
        <form type = "signup" onSubmit={this.handleSubmit.bind(this)}>
          <Row>
            <Input name = "first" placeholder="Placeholder" s={6} label="First Name" onChange={this.onChange.bind(this)}/>
            <Input name = "last" s={6} label="Last Name" onChange={this.onChange.bind(this)}/>
            <Input name = "password" type="password" label="Password" s={12} onChange={this.onChange.bind(this)}/>
            <Input name = "confirmpassword" type="password" label="Confrim Password" s={12} onChange={this.onChange.bind(this)}/>
            <Input name = "email" type="email" label="Email" s={12} onChange={this.onChange.bind(this)}/>
            <Button className = "btn-primary-c btn-fw" waves='light'>Create Account</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default SignUp
