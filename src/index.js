/** main import(s)                                                      */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import awsconfig from './assets/awsconfig';

/** helper import(s)                                                    */
import registerServiceWorker from './registerServiceWorker';

/** component import(s)                                                 */
import App from './App';

/** style import(s)                                                     */
import './styles/Index.css';

//aws-amplify client
Amplify.configure({
  'Auth':{
    mandatorySignIn: true,
    region: awsconfig.cognito.REGION,
    userPoolId: awsconfig.cognito.USER_POOL_ID,
    identityPoolId: awsconfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: awsconfig.cognito.APP_ID
  }
})

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
