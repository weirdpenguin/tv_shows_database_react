import './App.css';
import RenderShowsList from './components/RenderShowsList';
import RenderShow from './components/RenderShow';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/shows' />
        <Route exact path='/shows'>
          <RenderShowsList />
        </Route>
        <Route path='/shows/:id'>
          <RenderShow />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;