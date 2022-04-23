import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Profile from './Profile'
import Manufacturer from './Manufacturer'
import Transporter from './Transporter'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'

function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Profile} /> */}
          <Route exact path="/" component={Manufacturer} />
          <Route exact path="/manufacturer" component={Manufacturer} />
          <Route exact path="/transporter" component={Transporter} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/verify-email' component={VerifyEmail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
