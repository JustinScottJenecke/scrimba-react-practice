import { Route, Switch } from "react-router-dom";

import MeetupsPage from "./pages/Meetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  return (
    <MainLayout>

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

    </MainLayout>
  );
}

export default App;
