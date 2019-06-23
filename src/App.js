import React from 'react';
import { connect } from 'react-redux';
import { FETCH_USERS } from './redux/actions/types';
import { Route, Switch, Link, NavLink }  from 'react-router-dom';
import UsersList from './components/UsersList';

import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchUsers();  
    this.element.focus();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><NavLink to="/page1">Page 1</NavLink></li>
              <li><NavLink to="/users/2">Users</NavLink></li>
              <li><NavLink to="/page3">Page 3</NavLink></li>
            </ul>
          </nav>
          
          <Switch>
            <Route 
              path='/page1'
              exact
              render={() => (<div>Page 1</div>)}
            />
            <Route 
              path='/users/:id'
              render={() => <UsersList users={this.props.users} />}
            />
            <Route 
              path='/page3'
              render={() => (<div>Page 3</div>)}
            />
          </Switch>



          <h1>Video Preview</h1>
          <input type='text' />
          <input type='text' ref= {(el) => { this.element = el}} />
          <input type='text' />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch({type: FETCH_USERS})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
