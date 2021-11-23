import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SuccessContainer from './containers/SuccessContainer';

import {Provider} from 'react-redux'
import store from './redux/store';
import MainContainer from './containers/MainContainer';
import ConsultContainer from './containers/ConsultContainer';


function App() {
  return (
  <Provider store={store}>
  <Router >
    <Switch>
   <Route exact path="/start" component={WelcomeComponent} />
   <Route path="/login" component={LoginComponent} />
   <Route path="/register" component={RegisterComponent} />
   <Route path="/home" component={MainContainer} />
   <Route path="/consult" component={ConsultContainer} />
   <Route path="/success" component={SuccessContainer} /> 
    </Switch>
  </Router></Provider>
    )};

    export default App;