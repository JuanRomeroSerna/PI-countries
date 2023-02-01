import { Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navBar';
import { LandingPage, Home, Details, Activities } from "./views"

function App() {

  const navShow = useLocation();

  return (
    <div className="App">

      {navShow.pathname !== "/" && navShow.pathname !== "/activities" && <NavBar />}

      <Route exact path={"/"} render={() => < LandingPage />} />

      <Route exact path={"/countries"} render={() => < Home />} />

      <Route exact path={"/countries/:id"} render={() => < Details />} />

      <Route exact path={"/activities"} render={() => < Activities />} />

    </div>
  );
};

export default App;
