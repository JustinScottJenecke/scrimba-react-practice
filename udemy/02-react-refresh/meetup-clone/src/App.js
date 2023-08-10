import { Route, Switch } from "react-router-dom";

import MeetupsPage from "./pages/Meetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import Nav from "./components/layout/Nav";

const App = () => {
  return (
    <div className="App">

      <Nav />

      <Switch>
        <Route path='/' exact>
          <MeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>    
      </Switch>  
    </div>
  );
}

export default App;
