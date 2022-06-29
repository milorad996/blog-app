import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>

          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/posts/:id'>
            <SinglePost />
          </Route>

        </Switch>
      </Router>
    </div>
  );

}

export default App;
