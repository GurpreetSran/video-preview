import React from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    this.props.initialiseApp();  
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
  initialiseApp: () => dispatch({type: 'INIT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
