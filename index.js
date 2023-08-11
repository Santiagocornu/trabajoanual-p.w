import { registerRootComponent } from 'expo';

import App from './components/App';

import login from './components/login';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
registerRootComponent(login);
import ReactModalLogin from "react-modal-login";
import "react-modal-login/dist/react-modal-login.css";

//npm install --save react-modal-login

const facebook = {
    appId: "YOUR FB APP ID GOES HERE",
    cookie: true,
    xfbml: true,
    version: "v12.0",
    scope: "email",
    return_scopes: false
  };
  
export const facebookConfig = facebook;
const google = {
    client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com",
    scope: "profile email"
  };

  export const googleConfig = google;


