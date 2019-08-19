import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import './index.css';
import App from './App';
import Modal from './components/Modal'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


const routing = (
  
   
    <Router basename="/desafio-pinterest">
    <div> 
      <Navbar/>
      <Switch>
        <Route exact path="/" 
          render={(props) => <App {...props} data={props} />} />
        <Route path="/pin"
        render={(props) => <Modal {...props} data={props} />}/>
        {/* <Route component={Notfound} /> */}
      </Switch>
    </div>
  </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
