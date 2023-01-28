import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
            <Route exact path="/:id" render={ (routeProps) => <Detail {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
