import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import WorkoutShowcase from './components/WorkoutShowcase/WorkoutShowcase';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';


 const App = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/WorkoutShowcase/:id' component={WorkoutDetails} />
            <Route exact path='/WorkoutShowcase' component={WorkoutShowcase} />
            <Route exact path='/SignInAndSignUp' component={SignInAndSignUp} />

            
          </Switch>
          
        
      </div>
    </React.Fragment>
  );
}

export default App;
