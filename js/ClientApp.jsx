const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Covers = require('./Covers')
const Contact = require('./Contact')
const Bio = require('./Bio')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/bio' component={Bio} />
      <Route path='/covers' component={Covers} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
 )

ReactDOM.render(<App />, document.getElementById('app'))
