import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AddContact from './components/AddContact'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import EditContact from './components/EditContact'
import NotFound from './components/NotFound'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contact/add" component={AddContact} />
          <Route exact path="/contact/edit/:id" component={EditContact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
