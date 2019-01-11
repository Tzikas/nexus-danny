import React, {Component} from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import AddressBook from './AddressBook';
import ContactDetails from './ContactDetails';
import Empty from './Empty';
import Router from './Router';
import Theme from './Theme';
import Contacts from '../services/contacts';

//const SomeComponent = withRouter(props => <MyComponent {...props}/>);

class App extends Component {
  state = { contacts: [] };
  
  async componentDidMount() {
    this.setState({ contacts: await Contacts.read() });
    //console.log(this)
  }
  render() {
    return(
    <Router>
      <Theme>
        <AddressBook contacts={this.state.contacts}>
          {/*<Route path="/:id" contacts={this.state.contacts} component={ContactDetails} />*/}
          <Route path="/:id" component={(props => <ContactDetails {...props} contacts={this.state.contacts} />)} />
          <Route component={Empty} />
        </AddressBook>
      </Theme>
    </Router>
    )
  }
};


/*
 *       <AddressBook>
        <Route path="/:id" component={ContactDetails} />
        <Route component={Empty} />
      </AddressBook>*/

export default hot(App);
