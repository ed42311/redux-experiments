import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom'

// Import views
import MarkdownPreviewer from './MarkdownPreviewer';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/markdown'>Markdown Previewer</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/markdown" component={MarkdownPreviewer}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Main));