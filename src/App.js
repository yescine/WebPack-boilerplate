import React from 'react'
import LandingPage from './container/landingPage'
import {Link, Route} from 'react-router-dom';
import Nebula from './components/nebula';

function App() {
   return (
      <div>
         <div>
            <Link to='/'>User</Link>
            <br/>
            <Link to='/nebula'>nebula</Link>
         </div>
         <div>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/nebula' component={Nebula} />
         </div>
      </div>
   )
}

export default App
