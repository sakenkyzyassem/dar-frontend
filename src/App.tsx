import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import PostPage from './pages/postpage/PostPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <nav className="AppNavigation">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/posts">POSTS</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
        <div className="AppWrapper">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route path="/posts/:postId">
              <PostPage />
            </Route>
            <Route path="*">
              <h2>Not found</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
