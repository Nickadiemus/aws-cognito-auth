/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

/** component import(s)                                                 */
import { Row, Col, Input, Button } from 'react-materialize';

/** style import(s)                                                     */
import '../styles/Login.css';

/*/
 *  Component: Login
 *  @props {NA}
 *  @EventHandler(s): onChange(), onSubmit()
 *  @Description: Login page linking to AWS Cognito
/*/
class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
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
    Auth.signIn(this.state.email, this.state.password)
    .then((res) => {
      console.log(res);
      const data = res.storage.blogs
      console.log(JSON.parse(data));
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    })
    console.log("handleSubmit()");
  }

  render(){
    return(
        <div className = "login-wrapper">
          <form type = "signup" onSubmit={this.handleSubmit.bind(this)}>
            <Row>
              <Input name = "email" label="Email" s={12} onChange={this.onChange.bind(this)}/>
              <Input name = "password" type="password" label="password" s={12} onChange={this.onChange.bind(this)}/>
              <Col s = {12}><Button className = "btn-primary-c btn-fw" waves='light'>Login</Button></Col>
              <Col s = {12}><Link to = "/signup"><Button className = "btn-primary-c btn-fw" waves='light'>Sign Up</Button></Link></Col>
            </Row>
          </form>
        </div>
    )
  }
}

export default Login
