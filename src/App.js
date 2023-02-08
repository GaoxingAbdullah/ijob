import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { getUserAuth } from './actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Login />
           </Route>
           <Route path="/home">
              <Header />
              <Home />
           </Route>
        </Switch>
      </Router>

      </header>
    </div>
  );
}

const mapStateToProps = (state ) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


