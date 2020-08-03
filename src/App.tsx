import React, { useState } from 'react';
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import PostPage from './pages/postpage/PostPage';
import { Room } from './pages/room/Room';
import { UserInfo } from './types/interfaces';

export const UserContext = React.createContext<UserContext> ({
  user: null,
  setUser: () => {}
})

interface UserContext {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
}

function App() {

  const[user, setUser] = useState<UserInfo | null>(null);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
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
                <Link to="/room">CHAT</Link>
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
              <Route path="/room">
                <Room />  
              </Route>
              <Route path="*">
                <h2>Not found</h2>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
