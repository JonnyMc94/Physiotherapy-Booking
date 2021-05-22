import './App.css';
import Navigation from './components/Navbar'
import HomePage from './components/homepage'
import CreateClient from './components/clientCRUD/ClientCreate'
import CreatePhysio from './components/physiotherapistCRUD/PhysioCreate'
import CreateSession from './components/sessionCRUD/sessionCreate'
import UpdateClient from './components/clientCRUD/ClientUpdate'
import UpdatePhysio from './components/physiotherapistCRUD/PhysioUpdate'
import UpdateSession from './components/sessionCRUD/sessionUpdate'
import ClientCard from './components/clientCRUD/ClientCard'
import PhysioCard from './components/physiotherapistCRUD/physioCard'
import SessionCard from './components/sessionCRUD/sessionCard'
import ClientRender from './components/clientCRUD/ClientRender'
import PhysioRender from './components/physiotherapistCRUD/physioRender'
import SessionRender from './components/sessionCRUD/SessionRender'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "flatpickr/dist/themes/material_green.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path="/CreateClient" render={(props) => <CreateClient/>} />
          <Route path="/UpdateClient" render={(props) => <UpdateClient />} />
          <Route path="/CreatePhysio" render={(props) => <CreatePhysio />} />
          <Route path="/UpdatePhysio" render={(props) => <UpdatePhysio />} />
          <Route path="/ClientCard" render={(props) => <ClientCard />} />
          <Route path="/ClientRender" render={(props) => <ClientRender />} />
          <Route path="/PhysioCard" render={(props) => <PhysioCard />} />
          <Route path="/SessionCard" render={ (props) => <SessionCard />} />
          <Route path="/CreateSession" render={(props) => <CreateSession />} />
          <Route path="/UpdateSession" render={(props) => <UpdateSession />} />
          <Route path="/PhysioRender" render={(props) => <PhysioRender />}/>
          <Route path="/SessionRender" render={(props) => <SessionRender />}/>
          <Route path="/Homepage" render={ (props) => <HomePage/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
