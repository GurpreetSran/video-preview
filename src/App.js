import React from 'react';
import { connect } from 'react-redux';
import { FETCH_USERS } from './redux/actions/types';

import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchUsers();  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Video Preview</h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch({type: FETCH_USERS})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
