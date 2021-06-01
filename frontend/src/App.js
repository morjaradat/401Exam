import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header'
import Main from './component/Main'
import Fav from './component/Fav'
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/Fav" >
          <Fav />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
