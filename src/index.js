import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import PeopleMenu from './components/PeopleMenu';
import ActorInfo from './components/ActorInfo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
  <App>
    <Switch>
      <Route exact path='/' component={PeopleMenu} />
      <Route path="/people/:hello" component={ActorInfo} />
      <Route path="/people" component={PeopleMenu} />
    </Switch>
  </App>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
